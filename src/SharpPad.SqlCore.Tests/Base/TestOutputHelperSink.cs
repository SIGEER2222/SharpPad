

using Serilog.Core;
using Serilog.Events;
using Xunit.Abstractions;

public class TestOutputHelperSink : ILogEventSink {
  private readonly ITestOutputHelper _outputHelper;
  private readonly IFormatProvider _formatProvider;

  public TestOutputHelperSink(ITestOutputHelper outputHelper, IFormatProvider formatProvider = null) {
    _outputHelper = outputHelper;
    _formatProvider = formatProvider;
  }

  public void Emit(LogEvent logEvent) {
    var message = logEvent.RenderMessage(_formatProvider);
    _outputHelper.WriteLine(message);
  }
}
