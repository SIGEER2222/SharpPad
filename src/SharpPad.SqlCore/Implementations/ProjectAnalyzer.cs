using System.Threading.Tasks;
using Buildalyzer;
using Buildalyzer.Workspaces;
using Microsoft.CodeAnalysis;
using SharpPad.SqlCore.Interfaces;

namespace SharpPad.SqlCore.Implementations
{
    public class ProjectAnalyzer : IWorkspaceProjectAnalyzer
    {
        public async Task<Project> AnalyzeProjectAsync(string projectPath)
        {
            var manager = new AnalyzerManager();
            var analyzer = manager.GetProject(projectPath);

            var workspace = new AdhocWorkspace();
            var project = analyzer.AddToWorkspace(workspace);

            return await Task.FromResult(project);
        }
    }
}
