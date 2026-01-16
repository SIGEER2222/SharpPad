using System;
using System.Reflection;
using System.Threading.Tasks;

namespace SharpPad.SqlCore.Interfaces
{
    public interface IDynamicCodeExecutor    {
        Task<(object? Result, string ConsoleOutput)> ExecuteMethodAsync(byte[] assemblyBytes, string typeName, string methodName, object?[]? parameters = null, Action<Assembly>? onAssemblyLoaded = null);
    }
}
