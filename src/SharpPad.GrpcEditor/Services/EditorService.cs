using Grpc.Core;
using SharpPad.SqlCore.Interfaces;
using SharpPad.SqlCore.Models;
using editor = SharpPad.GrpcEditor.Protos;

namespace SharpPad.GrpcEditor.Services
{
    public class EditorService : editor.EditorService.EditorServiceBase
    {
        private readonly IProjectAnalysisSession _session;
        private readonly ILogger<EditorService> _logger;

        public EditorService(IProjectAnalysisSession session, ILogger<EditorService> logger)
        {
            _session = session;
            _logger = logger;
        }

        private async Task EnsureSessionInitializedAsync()
        {
            var csprojFiles = Directory.GetFiles(Directory.GetCurrentDirectory(), "*.csproj");
            if (csprojFiles.Length > 0)
            {
                var projectPath = csprojFiles[0];
                _logger.LogInformation($"Auto-initializing session with project: {projectPath}");
                await _session.InitializeAsync(projectPath, new List<string>());
            }
            else
            {
                throw new FileNotFoundException("No .csproj file found in the current directory.");
            }
        }

        public override async Task<editor.InitializeReply> Initialize(editor.InitializeRequest request, ServerCallContext context)
        {
            try
            {
                var projectPath = request.ProjectPath;
                if (string.IsNullOrEmpty(projectPath))
                {
                    var csprojFiles = Directory.GetFiles(Directory.GetCurrentDirectory(), "*.csproj");
                    if (csprojFiles.Length > 0)
                    {
                        projectPath = csprojFiles[0];
                        _logger.LogInformation($"Auto-detected project path: {projectPath}");
                    }
                    else
                    {
                        throw new FileNotFoundException("No .csproj file found in the current directory.");
                    }
                }

                await _session.InitializeAsync(projectPath, request.AssemblyPaths);
                return new editor.InitializeReply { Success = true };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Initialize failed");
                return new editor.InitializeReply { Success = false, ErrorMessage = ex.Message };
            }
        }

        public override async Task<editor.CompletionReply> GetCompletions(editor.CompletionRequest request, ServerCallContext context)
        {
            var reply = new editor.CompletionReply();
            try
            {
                if (!_session.IsInitialized) await EnsureSessionInitializedAsync();
                var completions = await _session.GetCompletionsAsync(request.Code, request.Position);
                foreach (var item in completions)
                {
                    reply.Items.Add(new editor.CompletionItem
                    {
                        DisplayText = item.DisplayText,
                        InsertText = item.InsertText,
                        Kind = item.Kind
                    });
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "GetCompletions failed");
            }
            return reply;
        }

        public override async Task<editor.HoverInfoReply> GetHoverInfo(editor.HoverInfoRequest request, ServerCallContext context)
        {
            try
            {
                if (!_session.IsInitialized) await EnsureSessionInitializedAsync();
                var info = await _session.GetHoverInfoAsync(request.Code, request.Position);
                if (info != null)
                {
                    return new editor.HoverInfoReply
                    {
                        HasInfo = true,
                        Information = info.Information,
                        OffsetFrom = info.OffsetFrom,
                        OffsetTo = info.OffsetTo
                    };
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "GetHoverInfo failed");
            }
            return new editor.HoverInfoReply { HasInfo = false };
        }

        public override async Task<editor.SignatureHelpReply> GetSignatureHelp(editor.SignatureHelpRequest request, ServerCallContext context)
        {
            try
            {
                if (!_session.IsInitialized) await EnsureSessionInitializedAsync();
                var help = await _session.GetSignatureHelpAsync(request.Code, request.Position);
                if (help != null)
                {
                    var reply = new editor.SignatureHelpReply
                    {
                        HasHelp = true,
                        ActiveParameter = help.ActiveParameter,
                        ActiveSignature = help.ActiveSignature
                    };

                    foreach (var sig in help.Signatures)
                    {
                        var sigItem = new editor.SignatureItem
                        {
                            Label = sig.Label,
                            Documentation = sig.Documentation
                        };
                        foreach (var param in sig.Parameters)
                        {
                            sigItem.Parameters.Add(new editor.ParameterItem
                            {
                                Label = param.Label,
                                Documentation = param.Documentation
                            });
                        }
                        reply.Signatures.Add(sigItem);
                    }
                    return reply;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "GetSignatureHelp failed");
            }
            return new editor.SignatureHelpReply { HasHelp = false };
        }

        public override async Task<editor.DefinitionReply> GetDefinition(editor.DefinitionRequest request, ServerCallContext context)
        {
            try
            {
                if (!_session.IsInitialized) await EnsureSessionInitializedAsync();
                var def = await _session.GetDefinitionAsync(request.Code, request.Position);
                if (def != null)
                {
                    return new editor.DefinitionReply
                    {
                        HasDefinition = true,
                        FilePath = def.FilePath,
                        Line = def.Line,
                        Column = def.Column
                    };
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "GetDefinition failed");
            }
            return new editor.DefinitionReply { HasDefinition = false };
        }

        public override async Task<editor.SemanticTokensReply> GetSemanticTokens(editor.SemanticTokensRequest request, ServerCallContext context)
        {
            var reply = new editor.SemanticTokensReply();
            try
            {
                var tokens = await _session.GetSemanticTokensAsync(request.Code);
                reply.Data.AddRange(tokens.Data);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "GetSemanticTokens failed");
            }
            return reply;
        }

        public override async Task<editor.FormatCodeReply> FormatCode(editor.FormatCodeRequest request, ServerCallContext context)
        {
            try
            {
                if (!_session.IsInitialized) await EnsureSessionInitializedAsync();
                var formatted = await _session.FormatCodeAsync(request.Code);
                return new editor.FormatCodeReply { FormattedCode = formatted };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "FormatCode failed");
                return new editor.FormatCodeReply { FormattedCode = request.Code };
            }
        }

        public override async Task<editor.QuickFixReply> GetQuickFixes(editor.QuickFixRequest request, ServerCallContext context)
        {
            var reply = new editor.QuickFixReply();
            try
            {
                if (!_session.IsInitialized) await EnsureSessionInitializedAsync();
                var fixes = await _session.GetQuickFixesAsync(request.Code, request.Position);
                foreach (var fix in fixes)
                {
                    reply.Fixes.Add(new editor.QuickFixItem
                    {
                        Title = fix.Title,
                        NewText = fix.NewText,
                        SpanStart = fix.Span.Start,
                        SpanLength = fix.Span.Length
                    });
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "GetQuickFixes failed");
            }
            return reply;
        }

        public override async Task<editor.DiagnosticsReply> GetDiagnostics(editor.DiagnosticsRequest request, ServerCallContext context)
        {
            var reply = new editor.DiagnosticsReply();
            try
            {
                if (!_session.IsInitialized) await EnsureSessionInitializedAsync();
                var diagnostics = await _session.GetDiagnosticsAsync(request.Code);
                foreach (var d in diagnostics)
                {
                    reply.Diagnostics.Add(new editor.DiagnosticItem
                    {
                        Id = d.Id,
                        Message = d.Message,
                        Severity = d.Severity,
                        Line = d.Line,
                        Column = d.Column
                    });
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "GetDiagnostics failed");
            }
            return reply;
        }

        public override async Task<editor.ExecuteCodeReply> ExecuteCode(editor.ExecuteCodeRequest request, ServerCallContext context)
        {
            try
            {
                if (!_session.IsInitialized)
                {
                    await EnsureSessionInitializedAsync();
                }

                var result = await _session.ExecuteCodeAsync(request.Code, "GeneratedDocument.cs", request.TypeName, request.MethodName);
                
                var outputBuilder = new System.Text.StringBuilder();
                if (!string.IsNullOrEmpty(result.ConsoleOutput))
                {
                    outputBuilder.Append(result.ConsoleOutput);
                }
                
                if (result.ExecutionResult != null)
                {
                    if (outputBuilder.Length > 0) outputBuilder.AppendLine();
                    outputBuilder.Append("Return Value: ").Append(result.ExecutionResult);
                }

                var reply = new editor.ExecuteCodeReply
                {
                    Success = result.Success,
                    ErrorMessage = result.ErrorMessage ?? "",
                    Output = result.ExecutionResult?.ToString() ?? "",
                    ConsoleOutput = result.ConsoleOutput ?? ""
                };

                if (result.Diagnostics != null)
                {
                    foreach (var diag in result.Diagnostics)
                    {
                        reply.Diagnostics.Add(new editor.DiagnosticItem
                        {
                            Id = diag.Id,
                            Message = diag.Message,
                            Severity = diag.Severity,
                            Line = diag.Line,
                            Column = diag.Column
                        });
                    }
                }

                if (!result.Success && result.CompilationErrors != null)
                {
                    if (string.IsNullOrEmpty(reply.ErrorMessage))
                    {
                        reply.ErrorMessage = string.Join("\n", result.CompilationErrors);
                    }
                }

                return reply;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "ExecuteCode failed");
                return new editor.ExecuteCodeReply { Success = false, ErrorMessage = ex.Message };
            }
        }
    }
}
