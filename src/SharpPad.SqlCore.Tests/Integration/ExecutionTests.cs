using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using SharpPad.SqlCore.Implementations;
using SharpPad.SqlCore.Interfaces;
using SharpPad.SqlCore.Tests.Base;
using SqlSugar;
using Xunit;
using Xunit.Abstractions;

namespace SharpPad.SqlCore.Tests.Integration
{
    public class ExecutionTests : TestBase
    {
        public ExecutionTests(ITestOutputHelper output) : base(output) { }

        [Fact]
        [Trait("Category", "AnalyzeProjectAndExecuteSqlSugar")]
        // dotnet test --filter "Category=AnalyzeProjectAndExecuteSqlSugar"
        public async Task AnalyzeProjectAndExecuteSqlSugar()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();
            Log.Information($"Target Project: {projectPath}");

            var assemblyPaths = new[]
            {
                typeof(SqlSugarClient).Assembly.Location,
                typeof(Npgsql.NpgsqlConnection).Assembly.Location
            };

            // Act: Initialize
            await session.InitializeAsync(projectPath, assemblyPaths);

            Log.Information("Initialization Complete");
            LogPerformanceMetrics(session.GetPerformanceMetrics());

            // Act: Execute Code
            var testCode = """
                using System;
                using System.Collections.Generic;
                using SqlSugar;
                using System.Threading.Tasks;

                public class TestQuery 
                {
                    public string GetMessage() 
                    {
                        return "Hello from dynamic code!";
                    }

                    public async Task<string> TestSqlSugar()
                    {
                        var db = new SqlSugarClient(new ConnectionConfig {
                            ConnectionString = "Host=localhost;Database=test;Username=postgres;Password=postgres",
                            DbType = DbType.PostgreSQL,
                            IsAutoCloseConnection = true
                        });
                        
                        return await Task.FromResult("SqlSugar Client Created Successfully");
                    }
                }
                """;

            session.ResetPerformanceMetrics();

            var result = await session.ExecuteCodeAsync(
                testCode,
                "TestQuery.cs",
                "TestQuery",
                "TestSqlSugar");

            // Assert
            Log.Information("\nExecution Results:");
            if (!result.Success)
            {
                Log.Information($"Error: {result.ErrorMessage}");
                foreach (var err in result.CompilationErrors)
                {
                    Log.Information($"Compile Error: {err}");
                }
            }
            else
            {
                Log.Information($"Result: {result.ExecutionResult}");
            }

            LogPerformanceMetrics(session.GetPerformanceMetrics());

            Assert.True(result.Success, "Execution should be successful");
            Assert.Equal("SqlSugar Client Created Successfully", result.ExecutionResult);
        }

        [Fact]
        public async Task ExecuteSqlSugar_WithSqlite_ShouldInsertAndQuery()
        {
            // Arrange
            using var session = CreateSession();
            var projectPath = GetProjectPath();

            var assemblyPaths = new[]
            {
                typeof(SqlSugarClient).Assembly.Location,
                typeof(Microsoft.Data.Sqlite.SqliteConnection).Assembly.Location
            };

            await session.InitializeAsync(projectPath, assemblyPaths);

            var code = """
                using System;
                using System.Collections.Generic;
                using SqlSugar;
                using System.Threading.Tasks;

                public class TestItem 
                {
                    [SugarColumn(IsPrimaryKey = true, IsIdentity = true)]
                    public int Id { get; set; }
                    public string Name { get; set; }
                }

                public class TestQuery 
                {
                    public async Task<List<TestItem>> TestSqlite()
                    {
                        var db = new SqlSugarClient(new ConnectionConfig {
                            ConnectionString = "DataSource=TestDb.sqlite",
                            DbType = DbType.Sqlite,
                            IsAutoCloseConnection = true,
                            InitKeyType = InitKeyType.Attribute
                        });
                        
                        // Create Table
                        db.CodeFirst.InitTables(typeof(TestItem));
                        db.DbMaintenance.TruncateTable<TestItem>(); // Clear if exists

                        // Insert
                        await db.Insertable(new TestItem { Name = "Test1" }).ExecuteCommandAsync();
                        await db.Insertable(new TestItem { Name = "Test2" }).ExecuteCommandAsync();

                        // Query
                        return await db.Queryable<TestItem>().ToListAsync();
                    }
                }
                """;

            // Act
            var result = await session.ExecuteCodeAsync(
                code,
                "TestSqlite.cs",
                "TestQuery",
                "TestSqlite");

            // Assert
            if (!result.Success)
            {
                Log.Information($"Error: {result.ErrorMessage}");
                foreach (var err in result.CompilationErrors)
                {
                    Log.Information($"Compile Error: {err}");
                }
            }

            Assert.True(result.Success);
            var items = result.ExecutionResult as System.Collections.IList;
            Assert.NotNull(items);
            Assert.Equal(2, items.Count);

            // Reflection to check properties because type is dynamic
            var firstItem = items[0];
            var nameProp = firstItem.GetType().GetProperty("Name");
            Assert.Equal("Test1", nameProp?.GetValue(firstItem));
        }
    }
}
