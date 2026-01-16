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
        public async Task<(object? Result, string ConsoleOutput)> ExecuteMethodAsync(byte[] assemblyBytes, string typeName, string methodName, object?[]? parameters = null, Action<Assembly>? onAssemblyLoaded = null)
        {
            using var stream = new MemoryStream(assemblyBytes);
            var context = new AssemblyLoadContext("DynamicContext", isCollectible: true);
            var originalOut = Console.Out;

            // Resolve dependencies from the Default context (Host)
            context.Resolving += (ctx, assemblyName) =>
            {
                originalOut.WriteLine($"[DynamicContext] Resolving: {assemblyName.Name}");
                
                try
                {
                    // 1. Check if already loaded in Default Context (Best for shared types)
                    var loadedAssembly = AssemblyLoadContext.Default.Assemblies
                        .FirstOrDefault(a => a.GetName().Name == assemblyName.Name);
                    
                    if (loadedAssembly != null)
                    {
                        originalOut.WriteLine($"[DynamicContext] Found existing in Default Context: {loadedAssembly.Location}");
                        return loadedAssembly;
                    }

                    // 2. Try explicit load from Default
                    var assembly = AssemblyLoadContext.Default.LoadFromAssemblyName(assemblyName);
                    if (assembly != null) 
                    {
                         originalOut.WriteLine($"[DynamicContext] Loaded from Default Context: {assembly.Location}");
                         return assembly;
                    }
                }
                catch (Exception ex)
                {
                    originalOut.WriteLine($"[DynamicContext] Default Context Load Failed: {ex.Message}");
                }

                // 3. Fallback to local file check in multiple locations
                var searchPaths = new[] 
                {
                    AppContext.BaseDirectory,
                    Directory.GetCurrentDirectory(),
                    Path.GetDirectoryName(typeof(DynamicCodeExecutor).Assembly.Location)
                };

                foreach (var basePath in searchPaths)
                {
                    if (string.IsNullOrEmpty(basePath)) continue;

                    var path = Path.Combine(basePath, assemblyName.Name + ".dll");
                    // originalOut.WriteLine($"[DynamicContext] Checking file: {path}");
                    
                    if (File.Exists(path))
                    {
                        originalOut.WriteLine($"[DynamicContext] Loading from file: {path}");
                        return ctx.LoadFromAssemblyPath(path);
                    }
                }
                
                originalOut.WriteLine($"[DynamicContext] Not found. Searched in: {string.Join(", ", searchPaths)}");
                return null;
            };
            using var stringWriter = new StringWriter();

            try
            {
                Console.SetOut(stringWriter);

                var assembly = context.LoadFromStream(stream);
                
                // Invoke callback to allow setup (e.g. injecting static properties)
                onAssemblyLoaded?.Invoke(assembly);

                MethodInfo? method = null;
                object? instance = null;

                // 1. Try Entry Point (Universal for Top-level statements and Main methods)
                if (assembly.EntryPoint != null)
                {
                    method = assembly.EntryPoint;
                    // Entry point is static, instance is null
                }
                // 2. Fallback to explicit type/method lookup
                else if (!string.IsNullOrEmpty(typeName) && !string.IsNullOrEmpty(methodName))
                {
                    var type = assembly.GetType(typeName);
                    if (type != null)
                    {
                        instance = Activator.CreateInstance(type);
                        method = type.GetMethod(methodName);
                    }
                }

                if (method == null)
                {
                    throw new InvalidOperationException($"No entry point found. Ensure you have a static Main method or top-level statements.");
                }

                object?[]? parametersToPass = parameters;
                var methodParams = method.GetParameters();
                
                // Handle Main(string[] args) when no args provided
                if (methodParams.Length == 1 && methodParams[0].ParameterType == typeof(string[]) && (parameters == null || parameters.Length == 0))
                {
                    parametersToPass = new object[] { new string[0] };
                }
                else if (methodParams.Length > 0)
                {
                     parametersToPass = parameters;
                }
                else
                {
                    parametersToPass = null;
                }

                var result = method.Invoke(instance, parametersToPass);

                if (result is Task task)
                {
                    await task;

                    // Get Task<TResult> result if available
                    var resultProperty = task.GetType().GetProperty("Result");
                    return (resultProperty?.GetValue(task), stringWriter.ToString());
                }

                return (result, stringWriter.ToString());
            }
            finally
            {
                Console.SetOut(originalOut);
                context.Unload();
            }
        }
    }
}
