using Microsoft.CodeAnalysis.CSharp.Scripting;
using Microsoft.CodeAnalysis.Scripting;
using SharpPad.SqlCore.Examples;
using SqlSugar;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;

namespace SharpPad.SqlCore.Tests.Integration
{
    public class ExampleTests
    {
        private readonly ITestOutputHelper _output;

        public ExampleTests(ITestOutputHelper output)
        {
            _output = output;
        }

        [Theory]
        [MemberData(nameof(GetExamples))]
        public async Task VerifyExample_RunsWithoutError(string category, string title, string code)
        {
            _output.WriteLine($"Testing: [{category}] {title}");

            // Prepare the script
            // We combine the entity definitions and the example code
            // We also inject a db instance setup so the example code can use 'db'
            
            var scriptCode = $@"
{ExampleContext.Definitions}

// Setup DB for the script context
var db = new SqlSugarScope(new ConnectionConfig() {{
    ConnectionString = ""DataSource=:memory:"",
    DbType = DbType.Sqlite,
    IsAutoCloseConnection = false,
    InitKeyType = InitKeyType.Attribute
}});

// Initialize tables
db.CodeFirst.InitTables(typeof(Student), typeof(School), typeof(Order), typeof(OrderItem), typeof(TreeItem));

// Seed some data to prevent null reference or empty data issues in queries
var s1 = new School {{ Name = ""High School"" }};
var stu1 = new Student {{ Name = ""Jack"", School = s1 }};
db.Insertable(stu1).AddSubList(it => it.School).ExecuteCommand();

var order = new Order {{ Name = ""Order1"", Price = 100, CreateTime = DateTime.Now }};
db.Insertable(order).ExecuteCommand();

// --- Example Code Start ---
{code}
// --- Example Code End ---
";

            try
            {
                var options = ScriptOptions.Default
                    .AddReferences(typeof(SqlSugarClient).Assembly)
                    .AddReferences(typeof(System.Data.DataSet).Assembly)
                    .AddReferences(typeof(Enumerable).Assembly)
                    .AddImports("System", "System.Collections.Generic", "System.Linq", "SqlSugar");

                await CSharpScript.EvaluateAsync(scriptCode, options);
            }
            catch (CompilationErrorException ex)
            {
                _output.WriteLine("Compilation Error:");
                foreach (var diagnostic in ex.Diagnostics)
                {
                    _output.WriteLine(diagnostic.ToString());
                }
                throw;
            }
            catch (Exception ex)
            {
                _output.WriteLine($"Runtime Error: {ex.Message}");
                throw;
            }
        }

        public static IEnumerable<object[]> GetExamples()
        {
            return SqlSugarExamples.All.Select(x => new object[] { x.Category, x.Title, x.Code });
        }
    }
}
