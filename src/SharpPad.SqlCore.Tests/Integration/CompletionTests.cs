using System.Linq;
using System.Threading.Tasks;
using SharpPad.SqlCore.Implementations;
using SharpPad.SqlCore.Interfaces;
using SharpPad.SqlCore.Tests.Base;
using Xunit;
using Xunit.Abstractions;

namespace SharpPad.SqlCore.Tests.Integration
{
    public class CompletionTests : TestBase
    {
        public CompletionTests(ITestOutputHelper output) : base(output)
        {
        }

        [Fact]
        [Trait("Category", "Should_Provide_Instance_Properties_Across_Files")]
        // dotnet test --filter Category=Should_Provide_Instance_Properties_Across_Files
        public async Task Should_Provide_Instance_Properties_Across_Files()
        {
            // Arrange
            var session = CreateSession();
            
            var modelsCode = @"
using System;
using SqlSugar;

public class StudentCourse
{
    [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
    public int Id { get; set; }
    public int StudentId { get; set; }
    public int CourseId { get; set; }
    public int Score { get; set; }
}";
            
            var runCode = @"
var source = new StudentCourse();
source.id";
            var position = runCode.IndexOf("source.id") + "source.id".Length;

            // Initialize
            var projectPath = GetProjectPath();
            await session.InitializeAsync(projectPath, new string[0]);

            // Act
            // Pass Models.cs as extra file
            var extraFiles = new[] { ("Models.cs", modelsCode) };
            var results = await session.GetCompletionsAsync(runCode, position, "Run.cs", extraFiles);

            // Assert
            Assert.NotEmpty(results);
            Assert.Contains(results, r => r.DisplayText == "Id");
            Assert.Contains(results, r => r.DisplayText == "StudentId");
            Assert.Contains(results, r => r.DisplayText == "CourseId");
            
            // Check InsertText
            var idCompletion = results.First(r => r.DisplayText == "Id");
            Assert.False(string.IsNullOrEmpty(idCompletion.InsertText), "InsertText should not be empty");
        }

        [Fact]
        [Trait("Category", "Should_Provide_Local_Variable_With_Ranking")]
        public async Task Should_Provide_Local_Variable_With_Ranking()
        {
            // Arrange
            var session = CreateSession();
            var modelsCode = @"
public class StudentCourse2
{
    public int Id { get; set; }
    public int StudentId { get; set; }
    public int CourseId { get; set; }
    public int Score { get; set; }
}";
            var runCode = @"
using System;

var source = new StudentCourse2();
so";
            var position = runCode.LastIndexOf("so") + 2;
 
             // Initialize
             var projectPath = GetProjectPath();
             await session.InitializeAsync(projectPath, new string[0]);
 
             // Act
             var extraFiles = new[] { ("Models.cs", modelsCode) };
             var results = await session.GetCompletionsAsync(runCode, position, "Run.cs", extraFiles);
 
             // Assert
             Assert.NotEmpty(results);
             
             var sourceCompletion = results.FirstOrDefault(r => r.DisplayText == "source");
            
            if (sourceCompletion == null)
            {
                Output.WriteLine("Available completions:");
                foreach (var r in results)
                {
                    Output.WriteLine($"- {r.DisplayText} (SortText: {r.SortText}, Kind: {r.Kind})");
                }
            }

            Assert.NotNull(sourceCompletion);
            
            // Verify SortText is present (since we added it)
            Assert.False(string.IsNullOrEmpty(sourceCompletion.SortText), "SortText should not be empty");
            Output.WriteLine($"Source SortText: {sourceCompletion.SortText}");
        }
    }
}
