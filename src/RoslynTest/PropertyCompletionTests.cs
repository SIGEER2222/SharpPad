using MonacoRoslynCompletionProvider;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;

namespace RoslynTest
{
    public class PropertyCompletionTests
    {
        private readonly ITestOutputHelper _output;

        public PropertyCompletionTests(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public async Task Should_Provide_Properties_For_Instance_TopLevel()
        {
            // Arrange
            var code = @"
using System;
using SqlSugar;

public class StudentCourse
{
    [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
    public int Id { get; set; }
    public int StudentId { get; set; }
    public int CourseId { get; set; }
    public int Score { get; set; }
}

var source = new StudentCourse();
source.id";
            // Position at "source.id"
            var position = code.IndexOf("source.id") + "source.id".Length;
            
            using var workspace = await CompletionWorkspace.CreateAsync();
            var completionDocument = await workspace.CreateDocumentAsync(code);
            var provider = new TabCompletionProvider();

            // Act
            var results = await provider.Provide(completionDocument.Document, position);

            // Assert
            _output.WriteLine($"Found {results.Length} suggestions");
            foreach(var r in results) _output.WriteLine(r.Suggestion);

            Assert.Contains(results, r => r.Suggestion == "Id");
            Assert.Contains(results, r => r.Suggestion == "StudentId");
            Assert.Contains(results, r => r.Suggestion == "CourseId");
        }
    }
}
