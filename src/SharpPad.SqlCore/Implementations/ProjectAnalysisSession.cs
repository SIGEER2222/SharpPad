using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Completion;
using Microsoft.CodeAnalysis.Text;
using SharpPad.SqlCore.Interfaces;
using SharpPad.SqlCore.Models;

namespace SharpPad.SqlCore.Implementations
{
    public class ProjectAnalysisSession : IProjectAnalysisSession
    {
        private readonly IAssemblyLoader _assemblyLoader;
        private readonly IWorkspaceProjectAnalyzer _projectAnalyzer;
        private readonly ICodeCompiler _codeCompiler;
        private readonly IDynamicCodeExecutor _codeExecutor;
        private readonly IPerformanceMeasurer _performanceMeasurer;

        private Project? _baseProject;
        private bool _initialized;
        private bool _disposed;

        public ProjectAnalysisSession(
            IAssemblyLoader assemblyLoader,
            IWorkspaceProjectAnalyzer projectAnalyzer,
            ICodeCompiler codeCompiler,
            IDynamicCodeExecutor codeExecutor,
            IPerformanceMeasurer performanceMeasurer)
        {
            _assemblyLoader = assemblyLoader;
            _projectAnalyzer = projectAnalyzer;
            _codeCompiler = codeCompiler;
            _codeExecutor = codeExecutor;
            _performanceMeasurer = performanceMeasurer;
        }

        public async Task InitializeAsync(string projectPath, IEnumerable<string> assemblyPaths)
        {
            if (_initialized)
                throw new InvalidOperationException("Session already initialized");

            try
            {
                // 1. Load Assemblies (One-time)
                _performanceMeasurer.Measure("Initialize - Load Assemblies", () => {
                    _assemblyLoader.LoadAssemblies(assemblyPaths);
                });

                // 2. Analyze Project (One-time)
                _baseProject = await _performanceMeasurer.MeasureAsync("Initialize - Analyze Project", async () => {
                    return await _projectAnalyzer.AnalyzeProjectAsync(projectPath);
                });

                _initialized = true;
            }
            catch
            {
                _initialized = false;
                throw;
            }
        }

        public async Task<CodeExecutionResult> ExecuteCodeAsync(string code, string documentName, string typeName, string methodName, object?[]? parameters = null)
        {
            if (!_initialized || _baseProject == null)
                throw new InvalidOperationException("Session not initialized");

            if (_disposed)
                throw new ObjectDisposedException(nameof(ProjectAnalysisSession));

            try
            {
                // 3. Compile Code (Every time)
                var compilationResult = await _performanceMeasurer.MeasureAsync("Execute - Compile Code", async () => {
                    return await _codeCompiler.CompileAsync(_baseProject, documentName, code);
                });

                if (!compilationResult.Success)
                {
                    var errors = compilationResult.Diagnostics
                        .Where(d => d.Severity == DiagnosticSeverity.Error)
                        .Select(d => d.ToString())
                        .ToList();

                    var diagnostics = compilationResult.Diagnostics
                        .Select(d => {
                            var lineSpan = d.Location.GetLineSpan();
                            return new DiagnosticResult
                            {
                                Id = d.Id,
                                Message = d.GetMessage(),
                                Severity = d.Severity.ToString(),
                                Line = lineSpan.StartLinePosition.Line + 1,
                                Column = lineSpan.StartLinePosition.Character + 1
                            };
                        })
                        .ToList();

                    return new CodeExecutionResult
                    {
                        Success = false,
                        CompilationErrors = errors,
                        Diagnostics = diagnostics
                    };
                }

                // 4. Run Method (Every time)
                var executionResult = await _performanceMeasurer.MeasureAsync("Execute - Run Method", async () => {
                    return await _codeExecutor.ExecuteMethodAsync(
                        compilationResult.AssemblyBytes!,
                        typeName,
                        methodName,
                        parameters);
                });

                return new CodeExecutionResult
                {
                    Success = true,
                    ExecutionResult = executionResult,
                    ExecutionResultType = executionResult?.GetType().FullName
                };
            }
            catch (Exception ex)
            {
                return new CodeExecutionResult
                {
                    Success = false,
                    ErrorMessage = ex.Message
                };
            }
        }

        public async Task<IEnumerable<CompletionResult>> GetCompletionsAsync(string code, int position, string documentName = "GeneratedDocument.cs")
        {
            if (!_initialized || _baseProject == null)
                throw new InvalidOperationException("Session not initialized");

            if (_disposed)
                throw new ObjectDisposedException(nameof(ProjectAnalysisSession));

            // Add document to project (creates new solution snapshot)
            var document = _baseProject.AddDocument(documentName, SourceText.From(code, Encoding.UTF8));

            var completionService = CompletionService.GetService(document);
            if (completionService == null)
            {
                return Enumerable.Empty<CompletionResult>();
            }

            var completions = await completionService.GetCompletionsAsync(document, position);
            if (completions == null)
            {
                return Enumerable.Empty<CompletionResult>();
            }

            return completions.ItemsList.Select(i => new CompletionResult
            {
                DisplayText = i.DisplayText,
                InsertText = i.FilterText,
                Kind = i.Tags.FirstOrDefault() ?? "Property"
            });
        }

        public async Task<IEnumerable<CodeFixResult>> GetQuickFixesAsync(string code, int position, string documentName = "GeneratedDocument.cs")
        {
            if (!_initialized || _baseProject == null)
                throw new InvalidOperationException("Session not initialized");

            var document = _baseProject.AddDocument(documentName, SourceText.From(code, Encoding.UTF8));
            var semanticModel = await document.GetSemanticModelAsync();
            if (semanticModel == null) return Enumerable.Empty<CodeFixResult>();

            var diagnostics = semanticModel.GetDiagnostics();
            var errorAtPosition = diagnostics.FirstOrDefault(d => d.Location.SourceSpan.IntersectsWith(position) && d.Severity == DiagnosticSeverity.Error);

            if (errorAtPosition != null)
            {
                // Basic manual Quick Fix implementation for demo purposes
                // Real implementation would require loading CodeFixProviders from assemblies
                var fixes = new List<CodeFixResult>();

                if (errorAtPosition.Id == "CS0246" || errorAtPosition.Id == "CS0103") // The type or namespace name '...' could not be found
                {
                    var message = errorAtPosition.GetMessage();
                    // Heuristic: Check common missing namespaces
                    if (message.Contains("SqlSugar"))
                    {
                        fixes.Add(new CodeFixResult 
                        { 
                            Title = "Add using SqlSugar;", 
                            NewText = "using SqlSugar;\n" + code,
                            Span = new TextSpan(0, 0)
                        });
                    }
                    if (message.Contains("List"))
                    {
                        fixes.Add(new CodeFixResult 
                        { 
                            Title = "Add using System.Collections.Generic;", 
                            NewText = "using System.Collections.Generic;\n" + code,
                            Span = new TextSpan(0, 0)
                        });
                    }
                }
                
                return fixes;
            }

            return Enumerable.Empty<CodeFixResult>();
        }

        public Dictionary<string, TimeSpan> GetPerformanceMetrics() => _performanceMeasurer.GetResults();

        public void ResetPerformanceMetrics() => _performanceMeasurer.Reset();

        public void Dispose()
        {
            if (!_disposed)
            {
                _baseProject = null;
                _disposed = true;
            }
        }
    }
}
