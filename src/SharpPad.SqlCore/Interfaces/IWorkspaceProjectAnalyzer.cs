using System.Threading.Tasks;
using Microsoft.CodeAnalysis;

namespace SharpPad.SqlCore.Interfaces
{
    public interface IWorkspaceProjectAnalyzer
    {
        Task<Project> AnalyzeProjectAsync(string projectPath);
    }
}
