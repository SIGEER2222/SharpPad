using System.Collections.Generic;

namespace SharpPad.SqlCore.Models
{
    public class DiagnosticResult
    {
        public string Id { get; set; } = string.Empty;
        public string Message { get; set; } = string.Empty;
        public int Line { get; set; }
        public int Column { get; set; }
        public string Severity { get; set; } = string.Empty;
    }

    public class CodeFixResult
    {
        public string Title { get; set; } = string.Empty;
        public string NewText { get; set; } = string.Empty;
        public Microsoft.CodeAnalysis.Text.TextSpan Span { get; set; }
    }
}
