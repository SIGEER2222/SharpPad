// 性能测量接口
public interface IPerformanceMeasurer {
    Task<TResult> MeasureAsync<TResult>(string operationName, Func<Task<TResult>> operation);
    Task MeasureAsync(string operationName, Func<Task> operation);
    TResult Measure<TResult>(string operationName, Func<TResult> operation);
    void Measure(string operationName, Action operation);
    Dictionary<string, TimeSpan> GetResults();
    void Reset();
}

// 性能测量实现
public class PerformanceMeasurer : IPerformanceMeasurer {
    private readonly Dictionary<string, TimeSpan> _measurements = new();
    private readonly ITestOutputHelper _output;

    public PerformanceMeasurer(ITestOutputHelper output) {
        _output = output;
    }

    public async Task<TResult> MeasureAsync<TResult>(string operationName, Func<Task<TResult>> operation) {
        var stopwatch = Stopwatch.StartNew();
        try {
            var result = await operation();
            stopwatch.Stop();
            RecordMeasurement(operationName, stopwatch.Elapsed);
            return result;
        }
        catch {
            stopwatch.Stop();
            RecordMeasurement($"{operationName} (Failed)", stopwatch.Elapsed);
            throw;
        }
    }

    public async Task MeasureAsync(string operationName, Func<Task> operation) {
        var stopwatch = Stopwatch.StartNew();
        try {
            await operation();
            stopwatch.Stop();
            RecordMeasurement(operationName, stopwatch.Elapsed);
        }
        catch {
            stopwatch.Stop();
            RecordMeasurement($"{operationName} (Failed)", stopwatch.Elapsed);
            throw;
        }
    }

    public TResult Measure<TResult>(string operationName, Func<TResult> operation) {
        var stopwatch = Stopwatch.StartNew();
        try {
            var result = operation();
            stopwatch.Stop();
            RecordMeasurement(operationName, stopwatch.Elapsed);
            return result;
        }
        catch {
            stopwatch.Stop();
            RecordMeasurement($"{operationName} (Failed)", stopwatch.Elapsed);
            throw;
        }
    }

    public void Measure(string operationName, Action operation) {
        var stopwatch = Stopwatch.StartNew();
        try {
            operation();
            stopwatch.Stop();
            RecordMeasurement(operationName, stopwatch.Elapsed);
        }
        catch {
            stopwatch.Stop();
            RecordMeasurement($"{operationName} (Failed)", stopwatch.Elapsed);
            throw;
        }
    }

    private void RecordMeasurement(string operationName, TimeSpan elapsed) {
        _measurements[operationName] = elapsed;
        _output.WriteLine($"[Performance] {operationName}: {elapsed.TotalMilliseconds:F2}ms");
    }

    public Dictionary<string, TimeSpan> GetResults() => new(_measurements);

    public void Reset() => _measurements.Clear();
}

// 程序集加载器接口
public interface IAssemblyLoader {
    void LoadAssemblies(IEnumerable<string> assemblyPaths);
}

// 程序集加载器实现
public class AssemblyLoader : IAssemblyLoader {
    public void LoadAssemblies(IEnumerable<string> assemblyPaths) {
        foreach (var path in assemblyPaths) {
            if (File.Exists(path)) {
                Assembly.LoadFrom(path);
            }
            else {
                throw new FileNotFoundException($"Assembly not found: {path}");
            }
        }
    }
}

// 项目分析器接口
public interface IProjectAnalyzer {
    Task<Project> AnalyzeProjectAsync(string projectPath);
}

// 项目分析器实现
public class ProjectAnalyzer : IProjectAnalyzer {
    public async Task<Project> AnalyzeProjectAsync(string projectPath) {
        var manager = new AnalyzerManager();
        var analyzer = manager.GetProject(projectPath);

        var workspace = new AdhocWorkspace();
        var project = analyzer.AddToWorkspace(workspace);

        return await Task.FromResult(project);
    }
}

// 代码编译器接口
public interface ICodeCompiler {
    Task<CompilationResult> CompileAsync(Project project, string documentName, string code);
}

// 编译结果
public class CompilationResult {
    public bool Success { get; set; }
    public byte[]? AssemblyBytes { get; set; }
    public IEnumerable<Diagnostic> Diagnostics { get; set; } = Array.Empty<Diagnostic>();
    public IEnumerable<string> ReferencedDlls { get; set; } = Array.Empty<string>();
}

// 代码编译器实现
public class CodeCompiler : ICodeCompiler {
    public async Task<CompilationResult> CompileAsync(Project project, string documentName, string code) {
        var updatedProject = project.AddDocument(documentName, SourceText.From(code, Encoding.UTF8)).Project;
        var compilation = await updatedProject.GetCompilationAsync();

        if (compilation == null) {
            return new CompilationResult { Success = false };
        }

        // 获取引用的 DLL
        var referencedDlls = compilation.ExternalReferences
            .OfType<PortableExecutableReference>()
            .Select(r => r.FilePath ?? "Unknown reference")
            .ToList();

        using var stream = new MemoryStream();
        var emitResult = compilation.Emit(stream);

        return new CompilationResult {
            Success = emitResult.Success,
            AssemblyBytes = emitResult.Success ? stream.ToArray() : null,
            Diagnostics = emitResult.Diagnostics,
            ReferencedDlls = referencedDlls
        };
    }
}

// 动态代码执行器接口
public interface IDynamicCodeExecutor {
    Task<object?> ExecuteMethodAsync(byte[] assemblyBytes, string typeName, string methodName, object?[]? parameters = null);
}

// 动态代码执行器实现
public class DynamicCodeExecutor : IDynamicCodeExecutor {
    public async Task<object?> ExecuteMethodAsync(byte[] assemblyBytes, string typeName, string methodName, object?[]? parameters = null) {
        using var stream = new MemoryStream(assemblyBytes);
        var context = new AssemblyLoadContext("DynamicContext", isCollectible: true);

        try {
            var assembly = context.LoadFromStream(stream);
            var type = assembly.GetType(typeName);
            if (type == null) {
                throw new InvalidOperationException($"Type '{typeName}' not found in assembly");
            }

            var instance = Activator.CreateInstance(type);
            var method = type.GetMethod(methodName);
            if (method == null) {
                throw new InvalidOperationException($"Method '{methodName}' not found in type '{typeName}'");
            }

            var result = method.Invoke(instance, parameters);

            if (result is Task task) {
                await task;

                // 获取 Task<TResult> 的结果
                var resultProperty = task.GetType().GetProperty("Result");
                return resultProperty?.GetValue(task);
            }

            return result;
        }
        finally {
            context.Unload();
        }
    }
}

// 项目分析会话接口 - 管理项目的生命周期
public interface IProjectAnalysisSession : IDisposable {
    Task InitializeAsync(string projectPath, IEnumerable<string> assemblyPaths);
    Task<CodeExecutionResult> ExecuteCodeAsync(string code, string documentName, string typeName, string methodName, object?[]? parameters = null);
    Dictionary<string, TimeSpan> GetPerformanceMetrics();
    void ResetPerformanceMetrics();
}

// 代码执行结果
public class CodeExecutionResult {
    public bool Success { get; set; }
    public object? ExecutionResult { get; set; }
    public string? ExecutionResultType { get; set; }
    public IEnumerable<string> CompilationErrors { get; set; } = Array.Empty<string>();
    public string? ErrorMessage { get; set; }
}

// 项目分析请求
public class ProjectAnalysisRequest {
    public string ProjectPath { get; set; } = string.Empty;
    public IEnumerable<string> AssemblyPaths { get; set; } = Array.Empty<string>();
    public string Code { get; set; } = string.Empty;
    public string DocumentName { get; set; } = "GeneratedDocument.cs";
    public string TypeName { get; set; } = string.Empty;
    public string MethodName { get; set; } = string.Empty;
    public object?[]? MethodParameters { get; set; }
}

// 项目分析结果
public class ProjectAnalysisResult {
    public bool Success { get; set; }
    public object? ExecutionResult { get; set; }
    public string? ExecutionResultType { get; set; }
    public IEnumerable<string> ReferencedDlls { get; set; } = Array.Empty<string>();
    public IEnumerable<string> CompilationErrors { get; set; } = Array.Empty<string>();
    public Dictionary<string, TimeSpan> PerformanceMetrics { get; set; } = new();
    public string? ErrorMessage { get; set; }
}

// 项目分析会话实现
public class ProjectAnalysisSession : IProjectAnalysisSession {
    private readonly IAssemblyLoader _assemblyLoader;
    private readonly IProjectAnalyzer _projectAnalyzer;
    private readonly ICodeCompiler _codeCompiler;
    private readonly IDynamicCodeExecutor _codeExecutor;
    private readonly IPerformanceMeasurer _performanceMeasurer;

    private Project? _baseProject;
    private bool _initialized;
    private bool _disposed;

    public ProjectAnalysisSession(
        IAssemblyLoader assemblyLoader,
        IProjectAnalyzer projectAnalyzer,
        ICodeCompiler codeCompiler,
        IDynamicCodeExecutor codeExecutor,
        IPerformanceMeasurer performanceMeasurer) {
        _assemblyLoader = assemblyLoader;
        _projectAnalyzer = projectAnalyzer;
        _codeCompiler = codeCompiler;
        _codeExecutor = codeExecutor;
        _performanceMeasurer = performanceMeasurer;
    }

    public async Task InitializeAsync(string projectPath, IEnumerable<string> assemblyPaths) {
        if (_initialized)
            throw new InvalidOperationException("Session already initialized");

        try {
            // 1. 加载程序集 (一次性)
            _performanceMeasurer.Measure("Initialize - Load Assemblies", () => {
                _assemblyLoader.LoadAssemblies(assemblyPaths);
            });

            // 2. 分析项目 (一次性)
            _baseProject = await _performanceMeasurer.MeasureAsync("Initialize - Analyze Project", async () => {
                return await _projectAnalyzer.AnalyzeProjectAsync(projectPath);
            });

            _initialized = true;
        }
        catch {
            _initialized = false;
            throw;
        }
    }

    public async Task<CodeExecutionResult> ExecuteCodeAsync(string code, string documentName, string typeName, string methodName, object?[]? parameters = null) {
        if (!_initialized || _baseProject == null)
            throw new InvalidOperationException("Session not initialized");

        if (_disposed)
            throw new ObjectDisposedException(nameof(ProjectAnalysisSession));

        try {
            // 3. 编译代码 (每次执行)
            var compilationResult = await _performanceMeasurer.MeasureAsync("Execute - Compile Code", async () => {
                return await _codeCompiler.CompileAsync(_baseProject, documentName, code);
            });

            if (!compilationResult.Success) {
                var errors = compilationResult.Diagnostics
                    .Where(d => d.Severity == DiagnosticSeverity.Error)
                    .Select(d => d.ToString())
                    .ToList();

                return new CodeExecutionResult {
                    Success = false,
                    CompilationErrors = errors
                };
            }

            // 4. 执行方法 (每次执行)
            var executionResult = await _performanceMeasurer.MeasureAsync("Execute - Run Method", async () => {
                return await _codeExecutor.ExecuteMethodAsync(
                    compilationResult.AssemblyBytes!,
                    typeName,
                    methodName,
                    parameters);
            });

            return new CodeExecutionResult {
                Success = true,
                ExecutionResult = executionResult,
                ExecutionResultType = executionResult?.GetType().FullName
            };
        }
        catch (Exception ex) {
            return new CodeExecutionResult {
                Success = false,
                ErrorMessage = ex.Message
            };
        }
    }

    public Dictionary<string, TimeSpan> GetPerformanceMetrics() => _performanceMeasurer.GetResults();

    public void ResetPerformanceMetrics() => _performanceMeasurer.Reset();

    public void Dispose() {
        if (!_disposed) {
            _baseProject = null;
            _disposed = true;
        }
    }
}