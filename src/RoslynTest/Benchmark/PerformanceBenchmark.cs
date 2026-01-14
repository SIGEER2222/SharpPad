using System;
using System.Diagnostics;
using System.IO;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using System.Runtime.Loader;
using System.Text;

public class PerformanceBenchmarkTest : TestBase {
    public PerformanceBenchmarkTest(ITestOutputHelper output) : base(output) {
    }

    [Fact]
    [Trait("Category", "PerformanceBenchmark")]
    // dotnet test --filter "Category=PerformanceBenchmark"
    public async Task TestPerformanceBenchmark() {
        await PerformanceBenchmark.PerformanceBenchmark.RunTest();
    }
}

namespace PerformanceBenchmark {
    // 测试目标类
    public class TestTarget {
        public int CpuIntensiveMethod(int iterations) {
            int result = 0;
            for (int i = 0; i < iterations; i++) {
                result += (int)Math.Sqrt(i * i + 1);
            }
            return result;
        }

        public async Task<string> IoIntensiveMethod(string data) {
            // 用内存流替代文件操作，减少磁盘抖动
            using var ms = new MemoryStream(Encoding.UTF8.GetBytes(data));
            await Task.Delay(10); // 模拟网络/IO延迟
            var buffer = new byte[ms.Length];
            await ms.ReadAsync(buffer, 0, buffer.Length);
            return Encoding.UTF8.GetString(buffer).ToUpper();
        }
    }

    // 委托类型
    public delegate int CpuIntensiveDelegate(TestTarget target, int iterations);
    public delegate Task<string> IoIntensiveDelegate(TestTarget target, string data);

    public class PerformanceBenchmark {
        private static readonly TestTarget _target = new TestTarget();
        private static MethodInfo _cpuMethod;
        private static MethodInfo _ioMethod;
        private static CpuIntensiveDelegate _compiledCpuMethod;
        private static IoIntensiveDelegate _compiledIoMethod;

        public static async Task RunTest() {
            Log.Information("=== .NET 调用方式性能基准测试 ===\n");

            await InitializeAsync();

            // CPU测试（小迭代 & 大迭代）
            await RunCpuIntensiveBenchmark(1_000, 5);
            await RunCpuIntensiveBenchmark(1_000_000, 5);

            Log.Information("\n" + new string('=', 60) + "\n");

            // IO测试
            await RunIoIntensiveBenchmark(20);

            Log.Information("\n测试完成！");
        }

        static async Task InitializeAsync() {
            Log.Information("初始化测试环境...");

            Type targetType = typeof(TestTarget);
            _cpuMethod = targetType.GetMethod("CpuIntensiveMethod");
            _ioMethod = targetType.GetMethod("IoIntensiveMethod");

            await CompileDynamicMethods();

            // 🔥 JIT 预热，避免第一次调用影响结果
            _target.CpuIntensiveMethod(10);
            _cpuMethod.Invoke(_target, new object[] { 10 });
            await _target.IoIntensiveMethod("warmup");
            await (Task<string>)_ioMethod.Invoke(_target, new object[] { "warmup" });
            _compiledCpuMethod(_target, 10);
            await _compiledIoMethod(_target, "warmup");

            Log.Information("初始化完成！\n");
        }

        static async Task CompileDynamicMethods() {
            string cpuCode = @"
using System;
using System.Threading.Tasks;
using PerformanceBenchmark;

public static class CompiledMethods 
{
    public static int CallCpuMethod(TestTarget target, int iterations)
    {
        return target.CpuIntensiveMethod(iterations);
    }

    public static Task<string> CallIoMethod(TestTarget target, string data)
    {
        return target.IoIntensiveMethod(data);
    }
}";
            var assemblyPath = Path.GetDirectoryName(typeof(object).Assembly.Location)!;
            var syntaxTree = CSharpSyntaxTree.ParseText(cpuCode);
            var references = new[]
            {
                MetadataReference.CreateFromFile(typeof(object).Assembly.Location),
                MetadataReference.CreateFromFile(typeof(Task).Assembly.Location),
                MetadataReference.CreateFromFile(typeof(TestTarget).Assembly.Location),
                MetadataReference.CreateFromFile(Assembly.GetExecutingAssembly().Location),
                MetadataReference.CreateFromFile(Path.Combine(assemblyPath, "System.Runtime.dll")),
                MetadataReference.CreateFromFile(Path.Combine(assemblyPath, "netstandard.dll")),
                MetadataReference.CreateFromFile(Path.Combine(assemblyPath, "System.Private.CoreLib.dll"))
            };

            var compilation = CSharpCompilation.Create(
                "DynamicAssembly",
                new[] { syntaxTree },
                references,
                new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));

            using var ms = new MemoryStream();
            var result = compilation.Emit(ms);

            if (!result.Success) {
                throw new Exception("Roslyn 编译失败:\n" + string.Join("\n", result.Diagnostics));
            }

            ms.Seek(0, SeekOrigin.Begin);
            var assembly = AssemblyLoadContext.Default.LoadFromStream(ms);
            var compiledType = assembly.GetType("CompiledMethods");

            // ✅ 改成 CreateDelegate，避免再次走 Invoke
            _compiledCpuMethod = (CpuIntensiveDelegate)Delegate.CreateDelegate(
                typeof(CpuIntensiveDelegate),
                compiledType.GetMethod("CallCpuMethod"));

            _compiledIoMethod = (IoIntensiveDelegate)Delegate.CreateDelegate(
                typeof(IoIntensiveDelegate),
                compiledType.GetMethod("CallIoMethod"));

            Log.Information("动态编译完成！\n");
        }

        static async Task RunCpuIntensiveBenchmark(int iterations, int testRuns) {
            Log.Information($"🔥 CPU密集型任务测试 (迭代: {iterations:N0}, 轮次: {testRuns})");

            var results = new (string Name, long TotalMs, double AvgMs)[3];

            // 原始调用
            results[0] = RunSyncBenchmark("原始调用", testRuns,
                () => _target.CpuIntensiveMethod(iterations));

            // 反射调用
            results[1] = RunSyncBenchmark("反射调用", testRuns,
                () => (int)_cpuMethod.Invoke(_target, new object[] { iterations }));

            // Roslyn 委托调用
            results[2] = RunSyncBenchmark("编译委托", testRuns,
                () => _compiledCpuMethod(_target, iterations));

            PrintBenchmarkSummary("CPU密集型", results);
        }

        static async Task RunIoIntensiveBenchmark(int testRuns) {
            const string testData = "这是一个用于测试IO密集型操作性能的字符串数据。";

            Log.Information($"💾 IO密集型任务测试 (轮次: {testRuns}, 数据长度: {testData.Length} 字符)");

            var results = new (string Name, long TotalMs, double AvgMs)[3];

            // 原始调用
            results[0] = await RunAsyncBenchmark("原始调用", testRuns,
                () => _target.IoIntensiveMethod(testData));

            // 反射调用
            results[1] = await RunAsyncBenchmark("反射调用", testRuns,
                () => (Task<string>)_ioMethod.Invoke(_target, new object[] { testData }));

            // Roslyn 委托调用
            results[2] = await RunAsyncBenchmark("编译委托", testRuns,
                () => _compiledIoMethod(_target, testData));

            PrintBenchmarkSummary("IO密集型", results);
        }

        static (string Name, long TotalMs, double AvgMs) RunSyncBenchmark(string name, int runs, Func<int> action) {
            long totalTime = 0;
            int result = 0;
            for (int i = 0; i < runs; i++) {
                var sw = Stopwatch.StartNew();
                result = action();
                sw.Stop();
                totalTime += sw.ElapsedMilliseconds;
                Log.Information($"{name} 轮次 {i + 1}: {sw.ElapsedMilliseconds}ms (结果: {result})");
            }
            return (name, totalTime, (double)totalTime / runs);
        }

        static async Task<(string Name, long TotalMs, double AvgMs)> RunAsyncBenchmark(string name, int runs, Func<Task<string>> action) {
            long totalTime = 0;
            string result = "";
            for (int i = 0; i < runs; i++) {
                var sw = Stopwatch.StartNew();
                result = await action();
                sw.Stop();
                totalTime += sw.ElapsedMilliseconds;
                Log.Information($"{name} 轮次 {i + 1}: {sw.ElapsedMilliseconds}ms (结果长度: {result.Length})");
            }
            return (name, totalTime, (double)totalTime / runs);
        }

        static void PrintBenchmarkSummary(string title, (string Name, long TotalMs, double AvgMs)[] results) {
            Log.Information("\n" + new string('─', 50));
            Log.Information($"📊 {title} - 性能汇总");
            Log.Information(new string('─', 50));

            double fastestAvg = double.MaxValue;
            foreach (var r in results)
                fastestAvg = Math.Min(fastestAvg, r.AvgMs);

            Log.Information($"{"方法",-12} {"总时间(ms)",-12} {"平均(ms)",-12} {"相对性能",-12}");
            Log.Information(new string('─', 50));
            foreach (var r in results) {
                double ratio = r.AvgMs / fastestAvg;
                string perf = ratio == 1.0 ? "基准 (1.0x)" : $"{ratio:F2}x";
                Log.Information($"{r.Name,-12} {r.TotalMs,-12} {r.AvgMs,-12:F1} {perf,-12}");
            }
            Log.Information("");
        }
    }
}
