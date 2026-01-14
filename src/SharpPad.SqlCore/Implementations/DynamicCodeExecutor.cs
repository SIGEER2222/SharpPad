using System;
using System.IO;
using System.Reflection;
using System.Runtime.Loader;
using System.Threading.Tasks;
using SharpPad.SqlCore.Interfaces;

namespace SharpPad.SqlCore.Implementations
{
    public class DynamicCodeExecutor : IDynamicCodeExecutor
    {
        public async Task<object?> ExecuteMethodAsync(byte[] assemblyBytes, string typeName, string methodName, object?[]? parameters = null)
        {
            using var stream = new MemoryStream(assemblyBytes);
            var context = new AssemblyLoadContext("DynamicContext", isCollectible: true);

            try
            {
                var assembly = context.LoadFromStream(stream);
                var type = assembly.GetType(typeName);
                if (type == null)
                {
                    throw new InvalidOperationException($"Type '{typeName}' not found in assembly");
                }

                var instance = Activator.CreateInstance(type);
                var method = type.GetMethod(methodName);
                if (method == null)
                {
                    throw new InvalidOperationException($"Method '{methodName}' not found in type '{typeName}'");
                }

                var result = method.Invoke(instance, parameters);

                if (result is Task task)
                {
                    await task;

                    // Get Task<TResult> result if available
                    var resultProperty = task.GetType().GetProperty("Result");
                    return resultProperty?.GetValue(task);
                }

                return result;
            }
            finally
            {
                context.Unload();
            }
        }
    }
}
