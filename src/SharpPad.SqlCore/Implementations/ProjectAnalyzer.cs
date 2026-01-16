using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Buildalyzer;
using Buildalyzer.Workspaces;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using SharpPad.SqlCore.Interfaces;

namespace SharpPad.SqlCore.Implementations
{
    public class ProjectAnalyzer : IWorkspaceProjectAnalyzer
    {
        public async Task<Project> AnalyzeProjectAsync(string projectPath)
        {
            // Fast Path: Manually construct project from disk and loaded assemblies
            // This avoids the heavy MSBuild invocation via Buildalyzer (10-20s -> <1s)
            
            var workspace = new AdhocWorkspace();
            var projectName = Path.GetFileNameWithoutExtension(projectPath);
            var projectId = ProjectId.CreateNewId();
            var versionStamp = VersionStamp.Create();
            
            var projectInfo = ProjectInfo.Create(
                projectId, 
                versionStamp, 
                projectName, 
                projectName, 
                LanguageNames.CSharp,
                compilationOptions: new CSharpCompilationOptions(OutputKind.DynamicallyLinkedLibrary)
                    .WithUsings("System", "System.Collections.Generic", "System.IO", "System.Linq", "System.Threading", "System.Threading.Tasks"));
                
            var project = workspace.AddProject(projectInfo);
            
            // 1. Add References (Fast, from loaded assemblies)
            var references = AppDomain.CurrentDomain.GetAssemblies()
                .Where(a => !a.IsDynamic && !string.IsNullOrEmpty(a.Location))
                .Select(a => MetadataReference.CreateFromFile(a.Location))
                .Distinct();
                
            project = project.AddMetadataReferences(references);

            // 2. Add Source Files (Fast, from disk)
            var projectDir = Path.GetDirectoryName(projectPath);
            if (!string.IsNullOrEmpty(projectDir))
            {
                var csFiles = Directory.GetFiles(projectDir, "*.cs", SearchOption.AllDirectories)
                    .Where(f => !f.Contains(Path.DirectorySeparatorChar + "bin" + Path.DirectorySeparatorChar) 
                             && !f.Contains(Path.DirectorySeparatorChar + "obj" + Path.DirectorySeparatorChar)
                             && !f.Contains(Path.DirectorySeparatorChar + "Services" + Path.DirectorySeparatorChar)
                             && !f.Contains(Path.DirectorySeparatorChar + "Controllers" + Path.DirectorySeparatorChar)
                             && !f.EndsWith("Program.cs"));

                foreach (var file in csFiles)
                {
                    var code = await File.ReadAllTextAsync(file);
                    project = project.AddDocument(Path.GetFileName(file), code).Project;
                }
            }
            
            return project;
        }
    }
}
