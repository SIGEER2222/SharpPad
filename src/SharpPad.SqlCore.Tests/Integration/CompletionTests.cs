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
    public class CompletionTests : TestBase
    {
        public CompletionTests(ITestOutputHelper output) : base(output) { }

        [Fact]
        [Trait("Category", "GetCompletions_ShouldReturnItems")]
        // dotnet test --filter "Category=GetCompletions_ShouldReturnItems"
        public async Task GetCompletions_ShouldReturnItems()
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
                using SqlSugar;
                
                public class Test
                {
                    public void Method()
                    {
                        var db = new SqlSugarClient(new ConnectionConfig());
                        db.
                    }
                }
                """;
            
            var position = code.LastIndexOf("db.") + 3;

            // Act
            var completions = await session.GetCompletionsAsync(code, position);

            // Assert
            Assert.NotNull(completions);
            Assert.NotEmpty(completions);
            Assert.Contains(completions, c => c.DisplayText == "Queryable");
        }

        [Fact]
        public async Task GetCompletions_InsideMethod_ShouldReturnLocals()
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
                using SqlSugar;
                
                public class Test
                {
                    public void Method()
                    {
                        var myLocalVar = 10;
                        myLo
                    }
                }
                """;
            
            var position = code.LastIndexOf("myLo") + 4;

            // Act
            var completions = await session.GetCompletionsAsync(code, position);

            // Assert
            Assert.NotNull(completions);
            Assert.NotEmpty(completions);
            Assert.Contains(completions, c => c.DisplayText == "myLocalVar");
        }
    }
}
