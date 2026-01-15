using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using SharpPad.SqlCore.Tests.Base;
using SqlSugar;
using Xunit;
using Xunit.Abstractions;

namespace SharpPad.SqlCore.Tests.Integration
{
    public class EditorFeaturesTests : TestBase
    {
        public EditorFeaturesTests(ITestOutputHelper output) : base(output) { }

        [Fact]
        public async Task GetHoverInfo_ShouldReturnInfo_ForVariable()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = new[] { typeof(SqlSugarClient).Assembly.Location };
            await session.InitializeAsync(projectPath, assemblyPaths);

            var code = """
                using System;
                public class Test {
                    public void Method() {
                        int myVar = 10;
                        Console.WriteLine(myVar);
                    }
                }
                """;
            var position = code.IndexOf("myVar)");

            // Act
            var hover = await session.GetHoverInfoAsync(code, position);

            // Assert
            Assert.NotNull(hover);
            Assert.Contains("int", hover.Information);
            Assert.Contains("myVar", hover.Information);
        }

        [Fact]
        public async Task GetSignatureHelp_ShouldReturnInfo_ForMethodCall()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = new[] { typeof(SqlSugarClient).Assembly.Location };
            await session.InitializeAsync(projectPath, assemblyPaths);

            var code = """
                using System;
                public class Test {
                    public void Method() {
                        Console.WriteLine(
                    }
                }
                """;
            var position = code.IndexOf("WriteLine(") + 10; // Inside parenthesis

            // Act
            var help = await session.GetSignatureHelpAsync(code, position);

            // Assert
            Assert.NotNull(help);
            Assert.NotEmpty(help.Signatures);
            Assert.Contains(help.Signatures, s => s.Label.Contains("WriteLine"));
        }

        [Fact]
        public async Task GetDefinition_ShouldReturnLocation_ForLocalVariable()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = new[] { typeof(SqlSugarClient).Assembly.Location };
            await session.InitializeAsync(projectPath, assemblyPaths);

            var code = """
                using System;
                public class Test {
                    public void Method() {
                        int myVar = 10;
                        Console.WriteLine(myVar);
                    }
                }
                """;
            var usagePosition = code.IndexOf("myVar)");
            var definitionPosition = code.IndexOf("int myVar") + 4;

            // Act
            var definition = await session.GetDefinitionAsync(code, usagePosition);

            // Assert
            Assert.NotNull(definition);
            // Roslyn line numbers are 0-based in code, but 1-based in result usually. 
            // We verify it points to the definition line (line 4)
            Assert.Equal(4, definition.Line); 
        }

        [Fact]
        public async Task GetSemanticTokens_ShouldReturnTokens()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = new[] { typeof(SqlSugarClient).Assembly.Location };
            await session.InitializeAsync(projectPath, assemblyPaths);

            var code = """
                using System;
                public class Test {
                    public void Method() {
                        int myVar = 10;
                    }
                }
                """;

            // Act
            var result = await session.GetSemanticTokensAsync(code);

            // Assert
            Assert.NotNull(result);
            Assert.NotEmpty(result.Data);
            // Encoded data should be a multiple of 5 (deltaLine, deltaStart, length, tokenType, tokenModifiers)
            Assert.Equal(0, result.Data.Count % 5);
        }

        [Fact]
        public async Task FormatCode_ShouldFormatCode()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = new[] { typeof(SqlSugarClient).Assembly.Location };
            await session.InitializeAsync(projectPath, assemblyPaths);

            var code = "public class Test{public void Method(){int x=1;}}";

            // Act
            var formatted = await session.FormatCodeAsync(code);

            // Assert
            Assert.NotNull(formatted);
            Assert.NotEqual(code, formatted);
            // It should at least add spaces
            Assert.Contains("public class Test", formatted); 
            Assert.Contains("int x = 1;", formatted);
        }

        [Fact]
        public async Task GetQuickFixes_ShouldReturnEnhancedFixes_ForMissingNamespace()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = new[] { typeof(SqlSugarClient).Assembly.Location };
            await session.InitializeAsync(projectPath, assemblyPaths);

            // SqlSugarClient needs SqlSugar namespace
            var code = """
                using System;
                public class Test {
                    public void Method() {
                        var db = new SqlSugarClient(new ConnectionConfig());
                    }
                }
                """;
            var position = code.IndexOf("SqlSugarClient");

            // Act
            var fixes = await session.GetQuickFixesAsync(code, position);

            // Assert
            Assert.NotNull(fixes);
            // Verify we get the fix. The title should be "using SqlSugar;"
            Assert.Contains(fixes, f => f.Title == "using SqlSugar;");
        }
    }
}
