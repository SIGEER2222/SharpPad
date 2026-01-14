using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.Text;
using SharpPad.SqlCore.Interfaces;
using SharpPad.SqlCore.Models;

namespace SharpPad.SqlCore.Implementations
{
    public class CodeCompiler : ICodeCompiler
    {
        public async Task<CompilationResult> CompileAsync(Project project, string documentName, string code)
        {
            var updatedProject = project.AddDocument(documentName, SourceText.From(code, Encoding.UTF8)).Project;
            var compilation = await updatedProject.GetCompilationAsync();

            if (compilation == null)
            {
                return new CompilationResult { Success = false };
            }

            // Get referenced DLLs
            var referencedDlls = compilation.ExternalReferences
                .OfType<PortableExecutableReference>()
                .Select(r => r.FilePath ?? "Unknown reference")
                .ToList();

            using var stream = new MemoryStream();
            var emitResult = compilation.Emit(stream);

            return new CompilationResult
            {
                Success = emitResult.Success,
                AssemblyBytes = emitResult.Success ? stream.ToArray() : null,
                Diagnostics = emitResult.Diagnostics,
                ReferencedDlls = referencedDlls
            };
        }
    }
}
