global using Serilog;
global using System.Diagnostics;
global using Xunit.Abstractions;
global using System.Reflection;
global using System.Runtime.Loader;
global using System.Text;
global using Buildalyzer;
global using Buildalyzer.Workspaces;
global using Microsoft.CodeAnalysis;
global using Microsoft.CodeAnalysis.Text;
public abstract class TestBase : IDisposable {
  protected readonly ITestOutputHelper output;
  protected readonly Stopwatch _stopwatch;
  protected readonly ILogger log;
  protected readonly ILogger Log;

  private long _memoryBefore;

  protected TestBase(ITestOutputHelper output) {
    this.output = output;
    _stopwatch = Stopwatch.StartNew();
    _memoryBefore = GC.GetTotalMemory(true);

    log = Serilog.Log.Logger = new LoggerConfiguration()
    .MinimumLevel.Debug()
    .WriteTo.Async(a => a.Console())
    .WriteTo.Async(a => a.Debug())
    .WriteTo.Async(a => a.Sink(new TestOutputHelperSink(output)))
    .WriteTo.Async(a => a.File(@"logs/RoslynTest.log", rollingInterval: RollingInterval.Day))
    .WriteTo.Async(a => a.Xunit(output))
    .CreateLogger();
    Log = log;
    Initialize();
  }

  public void Dispose() {
    _stopwatch.Stop();
    long memoryAfter = GC.GetTotalMemory(true);
    long memoryUsed = memoryAfter - _memoryBefore;
    double memoryUsedMB = memoryUsed / (1024.0 * 1024.0);

    Log.Information($"耗时: {_stopwatch.ElapsedMilliseconds / 1000.0:F3} s");
    Log.Information($"内存: {memoryUsedMB:F2} MB");
  }

  protected virtual void Initialize() {
    _stopwatch.Restart();
    Console.OutputEncoding = Encoding.UTF8;
    Console.InputEncoding = Encoding.UTF8;
  }

}
