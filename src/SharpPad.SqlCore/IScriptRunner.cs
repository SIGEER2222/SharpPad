using System.Threading.Tasks;

namespace SharpPad.SqlCore;

public interface IScriptRunner
{
    Task<object?> ExecuteAsync(string code, string connectionString);
}
