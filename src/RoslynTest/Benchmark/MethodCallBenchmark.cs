using System;
using System.Reflection;
using BenchmarkDotNet.Attributes;
using BenchmarkDotNet.Running;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using System.Linq;
using System.Runtime.Loader;
using System.IO;

[MemoryDiagnoser]
public class MethodCallBenchmark
{
    private TestClass testInstance = new TestClass();
    private MethodInfo? methodInfo;
    private Func<int, int, int>? roslynFunc;

    [GlobalSetup]
    public void Setup()
    {
        // 反射提前缓存 MethodInfo
        methodInfo = typeof(TestClass).GetMethod("Add");

        // Roslyn 预编译并缓存委托
        roslynFunc = CompileAndCreateDelegate();
    }

    [Benchmark(Baseline = true)]
    public int DirectCall()
    {
        return testInstance.Add(1, 2);
    }

    [Benchmark]
    public int ReflectionCall()
    {
        return (int)methodInfo!.Invoke(testInstance, new object[] { 1, 2 })!;
    }

    [Benchmark]
    public int RoslynCompiledCall()
    {
        return roslynFunc!(1, 2);
    }

    private Func<int, int, int> CompileAndCreateDelegate()
    {
        var code = @"
using System;
public static class RoslynRunner
{
    public static int Run(int a, int b)
    {
        return a + b;
    }
}";
        var syntaxTree = CSharpSyntaxTree.ParseText(code);
        var references = AppDomain.CurrentDomain.GetAssemblies()
            .Where(a => !a.IsDynamic && !string.IsNullOrWhiteSpace(a.Location))
            .Select(a => MetadataReference.CreateFromFile(a.Location))
            .Cast<MetadataReference>();

        var compilation = CSharpCompilation.Create(
            "RoslynAssembly",
            new[] { syntaxTree },
            references,
            new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary));

        using var ms = new MemoryStream();
        var result = compilation.Emit(ms);

        if (!result.Success)
        {
            throw new Exception("Roslyn 编译失败:\n" + string.Join("\n", result.Diagnostics));
        }

        ms.Seek(0, SeekOrigin.Begin);
        var assembly = AssemblyLoadContext.Default.LoadFromStream(ms);
        var type = assembly.GetType("RoslynRunner")!;
        var method = type.GetMethod("Run", BindingFlags.Static | BindingFlags.Public)!;

        return (Func<int, int, int>)Delegate.CreateDelegate(typeof(Func<int, int, int>), method);
    }
}

public class BenchmarkEntryTests {

  [Fact]
  public void RunBenchmark() {
    // 你也可以只跑某个 benchmark 类
    BenchmarkRunner.Run<MethodCallBenchmark>();
  }
}

public class TestClass
{
    public int Add(int a, int b) => a + b;
}
