using System.Diagnostics;
using SharpPad.SqlCore.Implementations;
using SharpPad.SqlCore.Interfaces;
using Xunit.Abstractions;

namespace SharpPad.SqlCore.Tests.Performance
{
    public class ProjectInitializationTests
    {
        private readonly ITestOutputHelper _output;

        public ProjectInitializationTests(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public async Task AnalyzeProject_ShouldBeFast()
        {
            // Arrange
            var analyzer = new ProjectAnalyzer();
            // Assuming we are running in bin/Debug/net10.0, we can find SharpPad.GrpcEditor.csproj relative to it
            // or just use SharpPad.SqlCore.csproj itself as a test target
            var currentDir = Directory.GetCurrentDirectory();
            var projectPath = FindCsproj(currentDir);
            
            _output.WriteLine($"Analyzing project: {projectPath}");

            // Act
            var stopwatch = Stopwatch.StartNew();
            var project = await analyzer.AnalyzeProjectAsync(projectPath);
            stopwatch.Stop();

            _output.WriteLine($"Initialization took: {stopwatch.ElapsedMilliseconds}ms");
            
            // Assert
            Assert.NotNull(project);
            Assert.True(stopwatch.ElapsedMilliseconds < 5000, "Project initialization took longer than 5 seconds");
        }

        private string FindCsproj(string startDir)
        {
            // Try to find SharpPad.SqlCore.csproj
            var dir = new DirectoryInfo(startDir);
            while (dir != null)
            {
                var files = dir.GetFiles("SharpPad.SqlCore.csproj", SearchOption.AllDirectories);
                if (files.Length > 0) return files[0].FullName;
                dir = dir.Parent;
            }
            throw new FileNotFoundException("Could not find SharpPad.SqlCore.csproj");
        }
    }
}
