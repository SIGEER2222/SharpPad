using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SharpPad.SqlCore.Models;

namespace SharpPad.SqlCore.Interfaces
{
    public interface IProjectAnalysisSession : IDisposable
    {
        bool IsInitialized { get; }
        Task InitializeAsync(string projectPath, IEnumerable<string> assemblyPaths);
        Task<CodeExecutionResult> ExecuteCodeAsync(string code, string documentName, string typeName, string methodName, IEnumerable<(string FileName, string Content)>? extraFiles = null, object?[]? parameters = null);
        Task<IEnumerable<CompletionResult>> GetCompletionsAsync(string code, int position, string documentName = "GeneratedDocument.cs", IEnumerable<(string FileName, string Content)>? extraFiles = null);
        Task<IEnumerable<CodeFixResult>> GetQuickFixesAsync(string code, int position, string documentName = "GeneratedDocument.cs", IEnumerable<(string FileName, string Content)>? extraFiles = null);
        Task<HoverInfoResult?> GetHoverInfoAsync(string code, int position, string documentName = "GeneratedDocument.cs", IEnumerable<(string FileName, string Content)>? extraFiles = null);
        Task<SignatureHelpResult?> GetSignatureHelpAsync(string code, int position, string documentName = "GeneratedDocument.cs", IEnumerable<(string FileName, string Content)>? extraFiles = null);
        Task<DefinitionResult?> GetDefinitionAsync(string code, int position, string documentName = "GeneratedDocument.cs", IEnumerable<(string FileName, string Content)>? extraFiles = null);
        Task<SemanticTokensResult> GetSemanticTokensAsync(string code, string documentName = "GeneratedDocument.cs", IEnumerable<(string FileName, string Content)>? extraFiles = null);
        Task<IEnumerable<DiagnosticResult>> GetDiagnosticsAsync(string code, string documentName = "GeneratedDocument.cs", IEnumerable<(string FileName, string Content)>? extraFiles = null);
        Task<string> FormatCodeAsync(string code, string documentName = "GeneratedDocument.cs");
        Dictionary<string, TimeSpan> GetPerformanceMetrics();
        void ResetPerformanceMetrics();
    }
}
