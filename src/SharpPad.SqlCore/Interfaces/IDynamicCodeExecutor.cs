using System.Threading.Tasks;

namespace SharpPad.SqlCore.Interfaces
{
    public interface IDynamicCodeExecutor
    {
        Task<object?> ExecuteMethodAsync(byte[] assemblyBytes, string typeName, string methodName, object?[]? parameters = null);
    }
}
