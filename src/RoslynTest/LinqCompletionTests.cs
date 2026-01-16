using MonacoRoslynCompletionProvider;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;

namespace RoslynTest
{
    public class LinqCompletionTests
    {
        private readonly ITestOutputHelper _output;

        public LinqCompletionTests(ITestOutputHelper output)
        {
            _output = output;
        }

        [Fact]
        public async Task Should_Provide_Linq_Extension_Methods()
        {
            // Arrange
            var code = @"
using System;
using System.Collections.Generic;
using System.Linq;

public class TestClass {
    public void Method() {
        var list = new List<int>();
        list.Sel
    }
}";
            // Position should be at the end of "list.Sel"
            var position = code.IndexOf("list.Sel") + "list.Sel".Length;
            
            using var workspace = await CompletionWorkspace.CreateAsync();
            var completionDocument = await workspace.CreateDocumentAsync(code);
            var provider = new TabCompletionProvider();

            // Act
            var results = await provider.Provide(completionDocument.Document, position);

            // Assert
            _output.WriteLine($"Found {results.Length} suggestions");
            foreach(var r in results.Take(5)) _output.WriteLine(r.Suggestion);

            Assert.Contains(results, r => r.Suggestion == "Select");
            Assert.Contains(results, r => r.Suggestion == "SelectMany");
        }

        [Fact]
        public async Task Should_Provide_Lambda_Parameter_Properties()
        {
             // Arrange
            var code = @"
using System;
using System.Collections.Generic;
using System.Linq;

public class Person { public string Name { get; set; } }

public class TestClass {
    public void Method() {
        var list = new List<Person>();
        list.Select(x => x.Na
    }
}";
            var position = code.IndexOf("x.Na") + "x.Na".Length;
            
            using var workspace = await CompletionWorkspace.CreateAsync();
            var completionDocument = await workspace.CreateDocumentAsync(code);
            var provider = new TabCompletionProvider();

            // Act
            var results = await provider.Provide(completionDocument.Document, position);

            // Assert
            Assert.Contains(results, r => r.Suggestion == "Name");
        }

        [Fact]
        public async Task Should_Provide_Where_Clause()
        {
            // Arrange
            var code = @"
using System;
using System.Collections.Generic;
using System.Linq;

public class TestClass {
    public void Method() {
        var list = new List<int>();
        list.Wh
    }
}";
            var position = code.IndexOf("list.Wh") + "list.Wh".Length;
            
            using var workspace = await CompletionWorkspace.CreateAsync();
            var completionDocument = await workspace.CreateDocumentAsync(code);
            var provider = new TabCompletionProvider();

            // Act
            var results = await provider.Provide(completionDocument.Document, position);

            // Assert
            Assert.Contains(results, r => r.Suggestion == "Where");
        }
    }
}
