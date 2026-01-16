using Grpc.Core;
using SharpPad.SqlCore.Interfaces;
using SharpPad.SqlCore.Models;
using editor = SharpPad.GrpcEditor.Protos;
using ConnectionInfo = SharpPad.GrpcEditor.Protos.ConnectionInfo;

namespace SharpPad.GrpcEditor.Services
{
    public class EditorService : editor.EditorService.EditorServiceBase
    {
        private readonly IProjectAnalysisSession _session;
        private readonly IConnectionStorageService _connectionService;
        private readonly ILogger<EditorService> _logger;

        public EditorService(IProjectAnalysisSession session, IConnectionStorageService connectionService, ILogger<EditorService> logger)
        {
            _session = session;
            _connectionService = connectionService;
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
                var extraFiles = request.ExtraFiles.Select(f => (f.FileName, f.Content));
                var completions = await _session.GetCompletionsAsync(request.Code, request.Position, "GeneratedDocument.cs", extraFiles);
                foreach (var item in completions)
                {
                    reply.Items.Add(new editor.CompletionItem
                    {
                        DisplayText = item.DisplayText,
                        InsertText = item.InsertText,
                        Kind = item.Kind,
                        SortText = item.SortText
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
                var extraFiles = request.ExtraFiles.Select(f => (f.FileName, f.Content));
                var info = await _session.GetHoverInfoAsync(request.Code, request.Position, "GeneratedDocument.cs", extraFiles);
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
                var extraFiles = request.ExtraFiles.Select(f => (f.FileName, f.Content));
                var help = await _session.GetSignatureHelpAsync(request.Code, request.Position, "GeneratedDocument.cs", extraFiles);
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
                var extraFiles = request.ExtraFiles.Select(f => (f.FileName, f.Content));
                var def = await _session.GetDefinitionAsync(request.Code, request.Position, "GeneratedDocument.cs", extraFiles);
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
                if (!_session.IsInitialized)
                    await EnsureSessionInitializedAsync();

                var extraFiles = request.ExtraFiles.Select(f => (f.FileName, f.Content));
                var tokens = await _session.GetSemanticTokensAsync(request.Code, "GeneratedDocument.cs", extraFiles);
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
                var extraFiles = request.ExtraFiles.Select(f => (f.FileName, f.Content));
                var fixes = await _session.GetQuickFixesAsync(request.Code, request.Position, "GeneratedDocument.cs", extraFiles);
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
                var extraFiles = request.ExtraFiles.Select(f => (f.FileName, f.Content));
                var diagnostics = await _session.GetDiagnosticsAsync(request.Code, "GeneratedDocument.cs", extraFiles);
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

                var extraFiles = request.ExtraFiles.Select(f => (f.FileName, f.Content));

                string? connectionString = null;
                string? providerName = null;

                if (!string.IsNullOrEmpty(request.ConnectionId))
                {
                    try 
                    {
                        var connections = await _connectionService.GetAllAsync();
                        var conn = connections.FirstOrDefault(c => c.Id == request.ConnectionId);
                        if (conn != null)
                        {
                            connectionString = conn.ConnectionString;
                            providerName = conn.Provider;
                        }
                    }
                    catch (Exception ex)
                    {
                         _logger.LogError(ex, "Failed to resolve connection string for ID: {ConnectionId}", request.ConnectionId);
                    }
                }

                var result = await _session.ExecuteCodeAsync(request.Code, "GeneratedDocument.cs", request.TypeName, request.MethodName, extraFiles, null, connectionString, providerName);
                
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
                    var errors = string.Join("\n", result.CompilationErrors);
                    _logger.LogWarning("Compilation Errors:\n{Errors}", errors);

                    if (string.IsNullOrEmpty(reply.ErrorMessage))
                    {
                        reply.ErrorMessage = errors;
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

        // Connection Management RPCs
        public override async Task<editor.GetConnectionsReply> GetConnections(editor.GetConnectionsRequest request, ServerCallContext context)
        {
            var reply = new editor.GetConnectionsReply();
            try 
            {
                var connections = await _connectionService.GetAllAsync();
                foreach (var c in connections)
                {
                    reply.Connections.Add(new editor.ConnectionInfo 
                    {
                        Id = c.Id,
                        Name = c.Name,
                        Provider = c.Provider,
                        ConnectionString = c.ConnectionString
                    });
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "GetConnections failed");
            }
            return reply;
        }

        public override async Task<editor.SaveConnectionReply> SaveConnection(editor.SaveConnectionRequest request, ServerCallContext context)
        {
            try
            {
                var info = new ConnectionInfo
                {
                    Id = request.Connection.Id,
                    Name = request.Connection.Name,
                    Provider = request.Connection.Provider,
                    ConnectionString = request.Connection.ConnectionString
                };

                var newId = await _connectionService.SaveAsync(info);
                return new editor.SaveConnectionReply { Success = true, Id = newId };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "SaveConnection failed");
                return new editor.SaveConnectionReply { Success = false, ErrorMessage = ex.Message };
            }
        }

        public override async Task<editor.DeleteConnectionReply> DeleteConnection(editor.DeleteConnectionRequest request, ServerCallContext context)
        {
            try
            {
                await _connectionService.DeleteAsync(request.Id);
                return new editor.DeleteConnectionReply { Success = true };
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "DeleteConnection failed");
                return new editor.DeleteConnectionReply { Success = false, ErrorMessage = ex.Message };
            }
        }

        public override async Task<editor.TestConnectionReply> TestConnection(editor.TestConnectionRequest request, ServerCallContext context)
        {
            try
            {
                var (success, msg) = await _connectionService.TestConnectionAsync(request.Provider, request.ConnectionString);
                return new editor.TestConnectionReply { Success = success, Message = msg };
            }
            catch (Exception ex)
            {
                return new editor.TestConnectionReply { Success = false, Message = ex.Message };
            }
        }

    }
}
