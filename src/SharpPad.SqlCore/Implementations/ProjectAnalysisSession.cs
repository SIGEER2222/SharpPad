using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Completion;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.FindSymbols;
using Microsoft.CodeAnalysis.Formatting;
using Microsoft.CodeAnalysis.Text;
using Microsoft.Extensions.Logging;
using SharpPad.SqlCore.Interfaces;
using SharpPad.SqlCore.Models;
using System.Xml.Linq;

namespace SharpPad.SqlCore.Implementations
{
    public class ProjectAnalysisSession : IProjectAnalysisSession
    {
        private readonly IAssemblyLoader _assemblyLoader;
        private readonly IWorkspaceProjectAnalyzer _projectAnalyzer;
        private readonly ICodeCompiler _codeCompiler;
        private readonly IDynamicCodeExecutor _codeExecutor;
        private readonly IPerformanceMeasurer _performanceMeasurer;
        private readonly ILogger<ProjectAnalysisSession> _logger;

        private Project? _baseProject;
        private bool _initialized;
        private bool _disposed;
        private readonly SemaphoreSlim _initLock = new SemaphoreSlim(1, 1);

        public bool IsInitialized => _initialized;

        public ProjectAnalysisSession(
            IAssemblyLoader assemblyLoader,
            IWorkspaceProjectAnalyzer projectAnalyzer,
            ICodeCompiler codeCompiler,
            IDynamicCodeExecutor codeExecutor,
            IPerformanceMeasurer performanceMeasurer,
            ILogger<ProjectAnalysisSession> logger)
        {
            _assemblyLoader = assemblyLoader;
            _projectAnalyzer = projectAnalyzer;
            _codeCompiler = codeCompiler;
            _codeExecutor = codeExecutor;
            _performanceMeasurer = performanceMeasurer;
            _logger = logger;
        }

        public async Task InitializeAsync(string projectPath, IEnumerable<string> assemblyPaths)
        {
            _logger.LogInformation("InitializeAsync called for {ProjectPath}", projectPath);
            if (_initialized)
            {
                _logger.LogWarning("Session already initialized. Returning.");
                return;
            }

            await _initLock.WaitAsync();
            try
            {
                if (_initialized)
                {
                    _logger.LogWarning("Session already initialized (Double Check). Returning.");
                    return;
                }

                _logger.LogInformation("Starting initialization...");

                // 1. Load Assemblies (One-time)
                _performanceMeasurer.Measure("Initialize - Load Assemblies", () => {
                    _assemblyLoader.LoadAssemblies(assemblyPaths);
                });

                // 2. Analyze Project (One-time)
                _baseProject = await _performanceMeasurer.MeasureAsync("Initialize - Analyze Project", async () => {
                    return await _projectAnalyzer.AnalyzeProjectAsync(projectPath);
                });

                // Remove Program.cs to avoid conflict with user script
                if (_baseProject != null)
                {
                    var programDoc = _baseProject.Documents.FirstOrDefault(d => d.Name == "Program.cs");
                    if (programDoc != null)
                    {
                        _baseProject = _baseProject.RemoveDocument(programDoc.Id);
                    }

                    // Inject DumpExtensions
                    var dumpSource = @"
using System;
using System.Text.Json;
using System.Text.Json.Serialization;

public static class DumpExtensions
{
    public static T Dump<T>(this T obj, string title = null)
    {
        var options = new JsonSerializerOptions 
        { 
            WriteIndented = true, 
            ReferenceHandler = ReferenceHandler.IgnoreCycles 
        };
        var payload = new { title = title, data = obj };
        var json = JsonSerializer.Serialize(payload, options);
        Console.WriteLine($""$$DUMP$${json}"");
        return obj;
    }
}";
                    _baseProject = _baseProject.AddDocument("DumpExtensions.cs", dumpSource).Project;
                }

                _initialized = true;
                _logger.LogInformation("Session initialization completed successfully.");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Session initialization failed.");
                _initialized = false;
                throw;
            }
            finally
            {
                _initLock.Release();
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
                var (resultValue, consoleOutput) = await _performanceMeasurer.MeasureAsync("Execute - Run Method", async () => {
                    return await _codeExecutor.ExecuteMethodAsync(
                        compilationResult.AssemblyBytes!,
                        typeName,
                        methodName,
                        parameters);
                });

                return new CodeExecutionResult
                {
                    Success = true,
                    ExecutionResult = resultValue,
                    ExecutionResultType = resultValue?.GetType().FullName,
                    ConsoleOutput = consoleOutput
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
                return await CodeActionBuilder.GetCodeActionsForDiagnosticAsync(document, errorAtPosition, default);
            }

            return Enumerable.Empty<CodeFixResult>();
        }

        public async Task<HoverInfoResult?> GetHoverInfoAsync(string code, int position, string documentName = "GeneratedDocument.cs")
        {
            if (!_initialized || _baseProject == null)
                throw new InvalidOperationException("Session not initialized");

            var document = _baseProject.AddDocument(documentName, SourceText.From(code, Encoding.UTF8));
            var semanticModel = await document.GetSemanticModelAsync();
            if (semanticModel == null) return null;

            var syntaxRoot = await document.GetSyntaxRootAsync();
            if (syntaxRoot == null) return null;

            var expressionNode = syntaxRoot.FindToken(position).Parent;
            if (expressionNode == null) return null;

            // Handle specific node types for better hover info
            if (expressionNode is VariableDeclaratorSyntax varDecl)
            {
                var childNode = varDecl.ChildNodes().FirstOrDefault()?.ChildNodes().FirstOrDefault();
                if (childNode != null)
                {
                    var typeInfo = semanticModel.GetTypeInfo(childNode);
                    if (typeInfo.Type != null)
                    {
                        var loc = expressionNode.GetLocation();
                        return new HoverInfoResult
                        {
                            Information = typeInfo.Type.ToDisplayString(),
                            OffsetFrom = loc.SourceSpan.Start,
                            OffsetTo = loc.SourceSpan.End
                        };
                    }
                }
            }

            var symbolInfo = semanticModel.GetSymbolInfo(expressionNode);
            if (symbolInfo.Symbol == null) return null;

            var location = expressionNode.GetLocation();
            return new HoverInfoResult
            {
                Information = HoverInfoBuilder.Build(symbolInfo),
                OffsetFrom = location.SourceSpan.Start,
                OffsetTo = location.SourceSpan.End
            };
        }

        public async Task<SignatureHelpResult?> GetSignatureHelpAsync(string code, int position, string documentName = "GeneratedDocument.cs")
        {
            if (!_initialized || _baseProject == null)
                throw new InvalidOperationException("Session not initialized");

            var document = _baseProject.AddDocument(documentName, SourceText.From(code, Encoding.UTF8));
            
            var invocation = await InvocationContext.GetInvocation(document, position);
            if (invocation == null) return null;

            int activeParameter = 0;
            foreach (var comma in invocation.Separators)
            {
                if (comma.Span.Start > invocation.Position)
                    break;
                activeParameter += 1;
            }

            var signaturesSet = new List<Signatures>();
            var bestScore = int.MinValue;
            Signatures? bestScoredItem = null;

            var types = invocation.ArgumentTypes;
            var semanticModel = invocation.SemanticModel;
            
            var methodGroup = semanticModel.GetMemberGroup(invocation.Receiver).OfType<IMethodSymbol>();

            // Filter static/instance
            if (invocation.Receiver is MemberAccessExpressionSyntax memberAccess)
            {
                var throughExpression = memberAccess.Expression;
                var throughSymbol = semanticModel.GetSpeculativeSymbolInfo(invocation.Position, throughExpression, SpeculativeBindingOption.BindAsExpression).Symbol;
                var throughType = semanticModel.GetSpeculativeTypeInfo(invocation.Position, throughExpression, SpeculativeBindingOption.BindAsTypeOrNamespace).Type;
                
                var includeInstance = (throughSymbol != null && !(throughSymbol is ITypeSymbol)) ||
                                      throughExpression is LiteralExpressionSyntax ||
                                      throughExpression is TypeOfExpressionSyntax;
                
                var includeStatic = (throughSymbol is INamedTypeSymbol) || throughType != null;
                
                if (throughType == null)
                {
                    var typeInfo = semanticModel.GetTypeInfo(throughExpression);
                    throughType = typeInfo.Type;
                    includeInstance = true;
                }
                
                methodGroup = methodGroup.Where(m => (m.IsStatic && includeStatic) || (!m.IsStatic && includeInstance));
            }
            else if (invocation.Receiver is SimpleNameSyntax && invocation.IsInStaticContext)
            {
                methodGroup = methodGroup.Where(m => m.IsStatic || m.MethodKind == MethodKind.LocalFunction);
            }

            foreach (var methodOverload in methodGroup)
            {
                var signature = SignatureHelpBuilder.BuildSignature(methodOverload);
                signaturesSet.Add(signature);

                var score = SignatureHelpBuilder.InvocationScore(methodOverload, types);
                if (score > bestScore)
                {
                    bestScore = score;
                    bestScoredItem = signature;
                }
            }

            if (signaturesSet.Count == 0) return null;

            return new SignatureHelpResult
            {
                Signatures = signaturesSet.ToArray(),
                ActiveParameter = activeParameter,
                ActiveSignature = bestScoredItem != null ? signaturesSet.IndexOf(bestScoredItem) : 0
            };
        }

        public async Task<DefinitionResult?> GetDefinitionAsync(string code, int position, string documentName = "GeneratedDocument.cs")
        {
            if (!_initialized || _baseProject == null)
                throw new InvalidOperationException("Session not initialized");

            var document = _baseProject.AddDocument(documentName, SourceText.From(code, Encoding.UTF8));
            var symbol = await SymbolFinder.FindSymbolAtPositionAsync(document, position);

            if (symbol == null) return null;

            var definition = await SymbolFinder.FindSourceDefinitionAsync(symbol, _baseProject.Solution);
            var targetSymbol = definition ?? symbol;

            var location = targetSymbol.Locations.FirstOrDefault(l => l.IsInSource);
            if (location != null && location.SourceTree != null)
            {
                var lineSpan = location.GetLineSpan();
                return new DefinitionResult
                {
                    FilePath = location.SourceTree.FilePath,
                    Line = lineSpan.StartLinePosition.Line + 1,
                    Column = lineSpan.StartLinePosition.Character + 1
                };
            }

            return null;
        }

        public async Task<SemanticTokensResult> GetSemanticTokensAsync(string code, string documentName = "GeneratedDocument.cs")
        {
            if (!_initialized || _baseProject == null)
                throw new InvalidOperationException("Session not initialized");

            var document = _baseProject.AddDocument(documentName, SourceText.From(code, Encoding.UTF8));
            var semanticModel = await document.GetSemanticModelAsync();
            var root = await document.GetSyntaxRootAsync();

            if (semanticModel == null || root == null)
                return new SemanticTokensResult();

            var data = SemanticTokensBuilder.Build(root, semanticModel, default);
            return new SemanticTokensResult { Data = data };
        }

        public async Task<IEnumerable<DiagnosticResult>> GetDiagnosticsAsync(string code, string documentName = "GeneratedDocument.cs")
        {
            if (!_initialized || _baseProject == null)
                throw new InvalidOperationException("Session not initialized");

            var compilationResult = await _codeCompiler.CompileAsync(_baseProject, documentName, code);
            
            return compilationResult.Diagnostics.Select(d => {
                var lineSpan = d.Location.GetLineSpan();
                return new DiagnosticResult
                {
                    Id = d.Id,
                    Message = d.GetMessage(),
                    Severity = d.Severity.ToString(),
                    Line = lineSpan.StartLinePosition.Line,
                    Column = lineSpan.StartLinePosition.Character
                };
            });
        }

        public async Task<string> FormatCodeAsync(string code, string documentName = "GeneratedDocument.cs")
        {
            if (!_initialized || _baseProject == null)
                throw new InvalidOperationException("Session not initialized");

            var document = _baseProject.AddDocument(documentName, SourceText.From(code, Encoding.UTF8));
            var formattedDocument = await Formatter.FormatAsync(document);
            var formattedText = await formattedDocument.GetTextAsync();
            return formattedText.ToString();
        }

        public Dictionary<string, TimeSpan> GetPerformanceMetrics() => _performanceMeasurer.GetResults();

        public void ResetPerformanceMetrics() => _performanceMeasurer.Reset();

        public void Dispose()
        {
            if (!_disposed)
            {
                _baseProject = null;
                _initLock.Dispose();
                _disposed = true;
            }
        }
    }
}
