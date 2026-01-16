using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using SharpPad.SqlCore.Models;

namespace SharpPad.SqlCore.Interfaces
{
    public interface ICodeCompiler
    {
        Task<CompilationResult> CompileAsync(Project project, string documentName, string code, OutputKind outputKind = OutputKind.DynamicallyLinkedLibrary);
    }
}
