using System;
using System.Collections.Generic;
using Microsoft.CodeAnalysis;

namespace SharpPad.SqlCore.Models
{
    public class CompilationResult
    {
        public bool Success { get; set; }
        public byte[]? AssemblyBytes { get; set; }
        public IEnumerable<Diagnostic> Diagnostics { get; set; } = Array.Empty<Diagnostic>();
        public IEnumerable<string> ReferencedDlls { get; set; } = Array.Empty<string>();
    }
}
