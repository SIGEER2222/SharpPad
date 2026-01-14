// 单元测试
public class PerformanceProjectAnalysisTests : TestBase {
  private readonly IPerformanceMeasurer _performanceMeasurer;

  public PerformanceProjectAnalysisTests(ITestOutputHelper output) : base(output) {
    _performanceMeasurer = new PerformanceMeasurer(output);
  }

  [Fact]
  [Trait("Category", "PerformanceAnalysis")]
  public async Task AnalyzeProjectPerformanceWithSession() {
    // Arrange
    using var session = new ProjectAnalysisSession(
        new AssemblyLoader(),
        new ProjectAnalyzer(),
        new CodeCompiler(),
        new DynamicCodeExecutor(),
        _performanceMeasurer
    );

    var projectPath = Path.GetFullPath(@"E:\Code\mom.report.client\src\Common\DbModels\DbModels.csproj");
    var assemblyPaths = new[]
    {
      @"C:\Users\Sigeer\.nuget\packages\npgsql\8.0.6\lib\net8.0\Npgsql.dll",
      @"C:\Users\Sigeer\.nuget\packages\sqlsugarcore\5.1.4.199\lib\netstandard2.1\SqlSugar.dll"
    };

    // Act & Assert
    // 初始化阶段 (一次性开销)
    await session.InitializeAsync(projectPath, assemblyPaths);

    Log.Information("=== Initialization Performance ===");
    LogPerformanceMetrics(session.GetPerformanceMetrics());

    // 执行阶段 (多次执行)
    var testCodes = new[]
    {
            new { Name = "Simple Calculation", Code = """
                public class Calculator {
                    public int Calculate(int a, int b) {
                        return a + b * 2;
                    }
                }
                """, TypeName = "Calculator", MethodName = "Calculate" },
            new { Name = "Database Query", Code = """
                using Mom_DbModels;
                using SqlSugar;
                public class TestQuery {
                    public async Task<List<Mom_DbModels.mom_edcplan>> QueryDatabaseAsync() {
                        var _db = new SqlSugarClient(new ConnectionConfig {
                            ConnectionString = "Host=localhost;Port=54321;Database=mom;Username=postgres;Password=postgres;SearchPath=public",
                            DbType = DbType.PostgreSQL,
                            InitKeyType = InitKeyType.Attribute,
                            IsAutoCloseConnection = true,
                        });
                        var result = await _db.Queryable<Mom_DbModels.mom_edcplan>().ToListAsync();
                        return result;
                    }
                }
                """, TypeName = "TestQuery", MethodName = "QueryDatabaseAsync" },

        };

    for (int i = 0; i < testCodes.Length; i++) {
      var test = testCodes[i];
      session.ResetPerformanceMetrics(); // 重置，只测量执行阶段

      var parameters = test.MethodName == "Calculate" ? new object[] { 10, 20 } : null;
      var result = await session.ExecuteCodeAsync(
          test.Code,
          $"Test{i}.cs",
          test.TypeName,
          test.MethodName,
          parameters);

      Log.Information($"\n=== {test.Name} Execution Performance ===");
      if (result.Success) {
        Log.Information($"✅ Execution successful");
        Log.Information($"📊 Result Type: {result.ExecutionResultType}");

        if (result.ExecutionResult != null) {
          var serialized = System.Text.Json.JsonSerializer.Serialize(result.ExecutionResult);
          var preview = serialized.Length > 100 ? serialized[..100] + "..." : serialized;
          Log.Information($"📋 Result Preview: {preview}");
        }
      }
      else {
        Log.Information($"❌ Execution failed: {result.ErrorMessage}");
        foreach (var error in result.CompilationErrors) {
          Log.Information($"  - {error}");
        }
      }

      LogPerformanceMetrics(session.GetPerformanceMetrics());
    }
  }

  [Fact]
  [Trait("Category", "PerformanceBenchmark")]
  public async Task BenchmarkMultipleExecutions() {
    using var session = new ProjectAnalysisSession(
        new AssemblyLoader(),
        new ProjectAnalyzer(),
        new CodeCompiler(),
        new DynamicCodeExecutor(),
        _performanceMeasurer
    );

    var projectPath = Path.GetFullPath(@"E:\Code\mom.report.client\src\Common\DbModels\DbModels.csproj");
    var assemblyPaths = new[]
    {
            @"C:\Users\Sigeer\.nuget\packages\npgsql\8.0.6\lib\net8.0\Npgsql.dll",
            @"C:\Users\Sigeer\.nuget\packages\sqlsugarcore\5.1.4.199\lib\netstandard2.1\SqlSugar.dll"
        };

    // 一次性初始化
    await session.InitializeAsync(projectPath, assemblyPaths);
    var initMetrics = session.GetPerformanceMetrics();

    // 多次执行相同代码
    var executionMetrics = new List<Dictionary<string, TimeSpan>>();
    var numberOfRuns = 5;

    var testCode = """
            public class SimpleTest { 
                public string GetMessage() => $"Hello World at {DateTime.Now}"; 
            }
            """;

    for (int i = 0; i < numberOfRuns; i++) {
      session.ResetPerformanceMetrics();

      var result = await session.ExecuteCodeAsync(
          testCode,
          $"SimpleTest{i}.cs",
          "SimpleTest",
          "GetMessage");

      executionMetrics.Add(new Dictionary<string, TimeSpan>(session.GetPerformanceMetrics()));
      Log.Information($"Run {i + 1}/{numberOfRuns} completed - Success: {result.Success}");
    }

    // 统计报告
    Log.Information("\n📊 Benchmark Summary:");
    Log.Information("=== Initialization (One-time) ===");
    LogPerformanceMetrics(initMetrics);

    Log.Information("\n=== Execution Statistics (Per Run) ===");
    var operationNames = executionMetrics
        .SelectMany(m => m.Keys)
        .Distinct()
        .Where(k => k.StartsWith("Execute"))
        .ToList();

    foreach (var operation in operationNames) {
      var times = executionMetrics
          .Where(m => m.ContainsKey(operation))
          .Select(m => m[operation].TotalMilliseconds)
          .ToList();

      if (times.Any()) {
        Log.Information($"  {operation}:");
        Log.Information($"    Average: {times.Average():F2}ms");
        Log.Information($"    Min: {times.Min():F2}ms");
        Log.Information($"    Max: {times.Max():F2}ms");
        Log.Information($"    Std Dev: {CalculateStandardDeviation(times):F2}ms");
      }
    }

    // 总体性能对比
    var avgCompileTime = executionMetrics.Where(m => m.ContainsKey("Execute - Compile Code"))
        .Select(m => m["Execute - Compile Code"].TotalMilliseconds).Average();
    var avgExecuteTime = executionMetrics.Where(m => m.ContainsKey("Execute - Run Method"))
        .Select(m => m["Execute - Run Method"].TotalMilliseconds).Average();
    var initTime = initMetrics.Values.Sum(t => t.TotalMilliseconds);

    Log.Information($"\n🎯 Performance Summary:");
    Log.Information($"  Initialization (one-time): {initTime:F2}ms");
    Log.Information($"  Average Compile per run: {avgCompileTime:F2}ms");
    Log.Information($"  Average Execute per run: {avgExecuteTime:F2}ms");
    Log.Information($"  Total for {numberOfRuns} runs: {initTime + (avgCompileTime + avgExecuteTime) * numberOfRuns:F2}ms");
  }

  private void LogPerformanceMetrics(Dictionary<string, TimeSpan> metrics) {
    if (!metrics.Any()) {
      Log.Information("  No metrics available");
      return;
    }

    var totalTime = metrics.Values.Sum(t => t.TotalMilliseconds);
    Log.Information($"⏱️  Performance Breakdown (Total: {totalTime:F2}ms):");

    foreach (var metric in metrics.OrderBy(kvp => kvp.Key)) {
      var percentage = totalTime > 0 ? (metric.Value.TotalMilliseconds / totalTime * 100) : 0;
      Log.Information($"  - {metric.Key}: {metric.Value.TotalMilliseconds:F2}ms ({percentage:F1}%)");
    }
  }

  private static double CalculateStandardDeviation(IEnumerable<double> values) {
    var enumerable = values.ToList();
    var avg = enumerable.Average();
    var sumOfSquaresOfDifferences = enumerable.Select(val => (val - avg) * (val - avg)).Sum();
    return Math.Sqrt(sumOfSquaresOfDifferences / enumerable.Count);
  }
}