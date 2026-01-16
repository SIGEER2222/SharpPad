using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using SharpPad.SqlCore.Tests.Base;
using Xunit;
using Xunit.Abstractions;

namespace SharpPad.SqlCore.Tests.Integration
{
    public class DefinitionTests : TestBase
    {
        public DefinitionTests(ITestOutputHelper output) : base(output) { }

        [Fact]
        public async Task GetDefinition_WithExtraFiles_ShouldResolveSymbol()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = Array.Empty<string>();

            await session.InitializeAsync(projectPath, assemblyPaths);

            // File A: Defines a class
            var fileAContent = """
                namespace MyNamespace {
                    public class MyClass {
                        public void MyMethod() { }
                    }
                }
                """;
            var fileAName = "FileA.cs";

            // File B: Uses the class
            var code = """
                using MyNamespace;
                public class Runner {
                    public void Run() {
                        var c = new MyClass();
                    }
                }
                """;
            
            // We want to find definition of "MyClass" in File B
            // "MyClass" is at index ... let's find it.
            // var c = new MyClass();
            //             ^
            var position = code.IndexOf("MyClass", code.IndexOf("new"));

            var extraFiles = new List<(string, string)>
            {
                (fileAName, fileAContent)
            };

            // Act
            var result = await session.GetDefinitionAsync(code, position, "FileB.cs", extraFiles);

            // Assert
            Assert.NotNull(result);
            Assert.EndsWith(fileAName, result.FilePath); // Should point to FileA.cs
            // Line numbers in FileA.cs: 
            // namespace MyNamespace {
            //     public class MyClass { ...
            // line 0: namespace...
            // line 1: public class MyClass
            Assert.Equal(2, result.Line); 
        }
    }
}
