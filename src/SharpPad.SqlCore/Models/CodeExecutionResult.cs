using System;
using System.Collections.Generic;

namespace SharpPad.SqlCore.Models
{
    public class CodeExecutionResult
    {
        public bool Success { get; set; }
        public object? ExecutionResult { get; set; }
        public string? ExecutionResultType { get; set; }
        public IEnumerable<string> CompilationErrors { get; set; } = Array.Empty<string>();
        public IEnumerable<DiagnosticResult> Diagnostics { get; set; } = Array.Empty<DiagnosticResult>();
        public string? ErrorMessage { get; set; }
    }
}
