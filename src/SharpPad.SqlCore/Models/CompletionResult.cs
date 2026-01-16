using System.Collections.Generic;

namespace SharpPad.SqlCore.Models
{
    public class CompletionResult
    {
        public string DisplayText { get; set; } = string.Empty;
        public string InsertText { get; set; } = string.Empty;
        public string Kind { get; set; } = string.Empty;
        public string SortText { get; set; } = string.Empty;
    }
}
