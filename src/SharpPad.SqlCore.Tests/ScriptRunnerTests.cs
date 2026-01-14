using Xunit;
using SharpPad.SqlCore;
using System.Threading.Tasks;

namespace SharpPad.SqlCore.Tests;

public class ScriptRunnerTests
{
    [Fact]
    public async Task CanExecuteBasicMath()
    {
        var runner = new RoslynScriptRunner();
        var result = await runner.ExecuteAsync("return 1 + 1;", "Host=dummy");
        Assert.Equal(2, result);
    }

    [Fact]
    public async Task CanAccessDbContext()
    {
        var runner = new RoslynScriptRunner();
        // Just return the db instance to verify it's injected
        var result = await runner.ExecuteAsync("return db;", "Host=dummy");
        Assert.NotNull(result);
    }
}
