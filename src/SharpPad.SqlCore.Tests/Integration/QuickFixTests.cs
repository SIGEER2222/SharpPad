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
    public class QuickFixTests : TestBase
    {
        public QuickFixTests(ITestOutputHelper output) : base(output) { }

        [Fact]
        public async Task GetQuickFixes_ShouldReturnFix_ForMissingSqlSugar()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = new[]
            {
                typeof(SqlSugarClient).Assembly.Location
            };

            await session.InitializeAsync(projectPath, assemblyPaths);

            var code = """
                using System;
                
                public class Test
                {
                    public void Method()
                    {
                        var db = new SqlSugarClient(new ConnectionConfig());
                    }
                }
                """;
            
            // "SqlSugarClient" should error because namespace is missing
            var position = code.IndexOf("SqlSugarClient");

            // Act
            var fixes = await session.GetQuickFixesAsync(code, position);

            // Assert
            Assert.NotNull(fixes);
            Assert.Contains(fixes, f => f.Title == "Add using SqlSugar;");
        }
        
        [Fact]
        public async Task ExecuteCode_ShouldReturnDiagnostics()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            var assemblyPaths = new[]
            {
                typeof(SqlSugarClient).Assembly.Location
            };

            await session.InitializeAsync(projectPath, assemblyPaths);

            var code = """
                using System;
                
                public class Test
                {
                    public void Method()
                    {
                        var x = 
                    }
                }
                """; // Syntax error

            // Act
            var result = await session.ExecuteCodeAsync(code, "Test.cs", "Test", "Method");

            // Assert
            Assert.False(result.Success);
            Assert.NotEmpty(result.Diagnostics);
            var diag = result.Diagnostics.First();
            // Output is protected in TestBase
            base.Output.WriteLine($"Diag: {diag.Message} at {diag.Line}:{diag.Column}");
            Assert.True(diag.Line > 0);
            Assert.True(diag.Column > 0);
        }
    }
}
