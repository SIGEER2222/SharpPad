using System;
using System.IO;
using System.Threading.Tasks;
using SharpPad.SqlCore.Tests.Base;
using Xunit;
using Xunit.Abstractions;

namespace SharpPad.SqlCore.Tests.Integration
{
    public class DumpTests : TestBase
    {
        public DumpTests(ITestOutputHelper output) : base(output) { }

        [Fact]
        public async Task Dump_SimpleString_ShouldNotUseJsonFormat()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = Array.Empty<string>();

            await session.InitializeAsync(projectPath, assemblyPaths);

            var testCode = """
                using System;
                public class Runner {
                    public void Run() {
                        "Hello World".Dump("Title");
                    }
                }
                """;

            // Act
            var result = await session.ExecuteCodeAsync(
                testCode,
                "Runner.cs",
                "Runner",
                "Run");

            // Assert
            Assert.True(result.Success, $"Execution failed: {result.ErrorMessage}");
            
            var output = result.ConsoleOutput;
            
            // Should contain the string
            Assert.Contains("[Title] Hello World", output);
            
            // Should NOT contain the JSON marker
            Assert.DoesNotContain("$$DUMP$$", output);
        }

        [Fact]
        public async Task Dump_ComplexObject_ShouldUseJsonFormat()
        {
             // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = Array.Empty<string>();

            await session.InitializeAsync(projectPath, assemblyPaths);

            var testCode = """
                using System;
                public class Person { public string Name { get; set; } }
                public class Runner {
                    public void Run() {
                        new Person { Name = "Saber" }.Dump("Person");
                    }
                }
                """;

            // Act
            var result = await session.ExecuteCodeAsync(
                testCode,
                "Runner.cs",
                "Runner",
                "Run");

            // Assert
            Assert.True(result.Success, $"Execution failed: {result.ErrorMessage}");
            
            var output = result.ConsoleOutput;
            
            // Should contain the JSON marker
            Assert.Contains("$$DUMP$$", output);
            Assert.Contains("Saber", output);
        }
    }
}
