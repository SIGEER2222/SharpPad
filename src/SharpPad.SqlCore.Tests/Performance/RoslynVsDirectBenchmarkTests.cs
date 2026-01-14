using System.Diagnostics;
using System.Threading.Tasks;
using SharpPad.SqlCore.Tests.Base;
using SqlSugar;
using Xunit;
using Xunit.Abstractions;

namespace SharpPad.SqlCore.Tests.Performance
{
    public class RoslynVsDirectBenchmarkTests : TestBase
    {
        public RoslynVsDirectBenchmarkTests(ITestOutputHelper output) : base(output) { }

        [Fact]
        public async Task ComparePerformance_RoslynVsDirect()
        {
            // 1. Setup Direct SqlSugar (Warmup)
            using (var dbWarmup = new SqlSugarClient(new ConnectionConfig {
                ConnectionString = "DataSource=:memory:",
                DbType = DbType.Sqlite,
                IsAutoCloseConnection = true,
                InitKeyType = InitKeyType.Attribute
            }))
            {
                await dbWarmup.Ado.GetStringAsync("select date('now')");
            }
            
            // 2. Setup Roslyn Session
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = new[]
            {
                typeof(SqlSugarClient).Assembly.Location,
                typeof(Microsoft.Data.Sqlite.SqliteConnection).Assembly.Location
            };
            await session.InitializeAsync(projectPath, assemblyPaths);

            var code = """
                using System;
                using SqlSugar;
                using System.Threading.Tasks;

                public class Benchmark
                {
                    public async Task<string> Run()
                    {
                         using var db = new SqlSugarClient(new ConnectionConfig {
                            ConnectionString = "DataSource=:memory:",
                            DbType = DbType.Sqlite,
                            IsAutoCloseConnection = true,
                            InitKeyType = InitKeyType.Attribute
                        });
                        return await db.Ado.GetStringAsync("select date('now')");
                    }
                }
                """;

            // Warmup Roslyn
            await session.ExecuteCodeAsync(code, "Benchmark.cs", "Benchmark", "Run");
            session.ResetPerformanceMetrics();

            // 3. Measure Direct
            int iterations = 10;
            var swDirect = Stopwatch.StartNew();
            for (int i = 0; i < iterations; i++)
            {
                 using var db = new SqlSugarClient(new ConnectionConfig {
                    ConnectionString = "DataSource=:memory:",
                    DbType = DbType.Sqlite,
                    IsAutoCloseConnection = true,
                    InitKeyType = InitKeyType.Attribute
                });
                await db.Ado.GetStringAsync("select date('now')");
            }
            swDirect.Stop();
            var directAvg = swDirect.Elapsed.TotalMilliseconds / iterations;

            // 4. Measure Roslyn
            var swRoslyn = Stopwatch.StartNew();
            for (int i = 0; i < iterations; i++)
            {
                await session.ExecuteCodeAsync(code, "Benchmark.cs", "Benchmark", "Run");
            }
            swRoslyn.Stop();
            var roslynAvg = swRoslyn.Elapsed.TotalMilliseconds / iterations;

            // Output
            Log.Information($"Iterations: {iterations}");
            Log.Information($"Direct Execution Avg: {directAvg:F4} ms");
            Log.Information($"Roslyn Execution Avg: {roslynAvg:F4} ms");
            Log.Information($"Ratio (Roslyn/Direct): {roslynAvg / directAvg:F2}x Slower");
            
            LogPerformanceMetrics(session.GetPerformanceMetrics());
        }   
    }
}
