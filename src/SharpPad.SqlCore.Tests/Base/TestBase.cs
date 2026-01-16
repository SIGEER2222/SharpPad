using Microsoft.VisualStudio.TestPlatform.Utilities;
using Serilog;
using SharpPad.SqlCore.Implementations;
using SharpPad.SqlCore.Interfaces;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using Xunit.Abstractions;

namespace SharpPad.SqlCore.Tests.Base
{
    public abstract class TestBase
    {
        protected readonly IPerformanceMeasurer PerformanceMeasurer;
        protected readonly ITestOutputHelper Output;
        protected readonly Stopwatch _stopwatch;
        protected readonly ILogger log;
        protected readonly ILogger Log;

        private long _memoryBefore;

        protected TestBase(ITestOutputHelper output)
        {
            this.Output = output;


            _stopwatch = Stopwatch.StartNew();
            _memoryBefore = GC.GetTotalMemory(true);

            log = Serilog.Log.Logger = new LoggerConfiguration()
            .MinimumLevel.Debug()
            .WriteTo.Async(a => a.Console())
            .WriteTo.Async(a => a.Debug())
            .WriteTo.Async(a => a.Sink(new TestOutputHelperSink(Output)))
            .WriteTo.Async(a => a.File(@"logs/RoslynTest.log", rollingInterval: RollingInterval.Day))
            .WriteTo.Async(a => a.Xunit(Output))
            .CreateLogger();
            Log = log;
            Initialize();

            PerformanceMeasurer = new PerformanceMeasurer(msg => Log.Information(msg));

        }

        protected void LogPerformanceMetrics(Dictionary<string, TimeSpan> metrics)
        {
            if (!metrics.Any())
            {
                Log.Information("No metrics available");
                return;
            }

            var totalTime = metrics.Values.Sum(t => t.TotalMilliseconds);
            Log.Information($"Performance Breakdown (Total: {totalTime:F2}ms):");

            foreach (var metric in metrics.OrderBy(kvp => kvp.Key))
            {
                var percentage = totalTime > 0 ? (metric.Value.TotalMilliseconds / totalTime * 100) : 0;
                Log.Information($"  - {metric.Key}: {metric.Value.TotalMilliseconds:F2}ms ({percentage:F1}%)");
            }
        }

        protected string GetProjectPath()
        {
            var currentDir = Directory.GetCurrentDirectory();
            var rootDir = Path.GetFullPath(Path.Combine(currentDir, "../../../.."));
            var projectPath = Path.Combine(rootDir, "SharpPad.SqlCore", "SharpPad.SqlCore.csproj");
            if (!File.Exists(projectPath))
            {
                projectPath = Path.GetFullPath(Path.Combine(currentDir, "../../../SharpPad.SqlCore/SharpPad.SqlCore.csproj"));
            }
            return projectPath;
        }

        protected ProjectAnalysisSession CreateSession()
        {
            return new ProjectAnalysisSession(
                new AssemblyLoader(),
                new ProjectAnalyzer(),
                new CodeCompiler(),
                new DynamicCodeExecutor(),
                PerformanceMeasurer,
                Microsoft.Extensions.Logging.Abstractions.NullLogger<ProjectAnalysisSession>.Instance
            );
        }

      public void Dispose()
        {
            _stopwatch.Stop();
            long memoryAfter = GC.GetTotalMemory(true);
            long memoryUsed = memoryAfter - _memoryBefore;
            double memoryUsedMB = memoryUsed / (1024.0 * 1024.0);

            Log.Information($"��?: {_stopwatch.ElapsedMilliseconds / 1000.0:F3} s");
            Log.Information($"�?�: {memoryUsedMB:F2} MB");
        }

        protected virtual void Initialize()
        {
            _stopwatch.Restart();
            Console.OutputEncoding = Encoding.UTF8;
            Console.InputEncoding = Encoding.UTF8;
        }
    }

}