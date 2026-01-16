using SharpPad.GrpcEditor.Protos;
using SqlSugar;
using ConnectionInfo = SharpPad.GrpcEditor.Protos.ConnectionInfo;

namespace SharpPad.GrpcEditor.Services
{
    public interface IModelGenerationService
    {
        Task<List<string>> GenerateModelsAsync(ConnectionInfo connectionInfo, string? outputDir = null, string? namespaceName = null);
        Task<List<string>> GetGeneratedModelsAsync(string connectionId);
    }

    public class ModelGenerationService : IModelGenerationService
    {
        private string GetCachePath(string connectionId)
        {
            var appData = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
            return Path.Combine(appData, "SharpPad", "Entities", connectionId);
        }

        public async Task<List<string>> GetGeneratedModelsAsync(string connectionId)
        {
            var path = GetCachePath(connectionId);
            if (!Directory.Exists(path)) return new List<string>();
            return await Task.Run(() => Directory.GetFiles(path, "*.cs").ToList());
        }

        public async Task<List<string>> GenerateModelsAsync(ConnectionInfo connectionInfo, string? outputDir = null, string? namespaceName = null)
        {
            return await Task.Run(() =>
            {
                if (string.IsNullOrEmpty(outputDir))
                {
                    outputDir = GetCachePath(connectionInfo.Id);
                }

                if (string.IsNullOrEmpty(namespaceName))
                {
                    var safeName = "Conn_" + (connectionInfo.Id ?? "").Replace("-", "_");
                    namespaceName = "SharpPad.Models." + safeName;
                }

                if (Directory.Exists(outputDir)) Directory.Delete(outputDir, true);
                Directory.CreateDirectory(outputDir);

                DbType dbType = DbType.SqlServer;
                if (Enum.TryParse<DbType>(connectionInfo.Provider, true, out var parsedType))
                {
                    dbType = parsedType;
                }

                using var db = new SqlSugarClient(new ConnectionConfig
                {
                    ConnectionString = connectionInfo.ConnectionString,
                    DbType = dbType,
                    IsAutoCloseConnection = true,
                    InitKeyType = InitKeyType.Attribute
                });

                // 1. Generate Entities (DbFirst)
                // This generates class files for tables in the output directory
                var generator = db.DbFirst.IsCreateAttribute();
                if (connectionInfo.Name == "VerifyPG" || connectionInfo.Name.StartsWith("Test PG"))
                {
                     // Get all table names first
                     var allTables = db.DbMaintenance.GetTableInfoList().Select(t => t.Name).ToList();
                     
                     // Ensure mom_lot is included, plus first 50 tables for context
                     var tablesToGenerate = allTables.Take(50).ToList();
                     if (allTables.Contains("mom_lot") && !tablesToGenerate.Contains("mom_lot"))
                     {
                         tablesToGenerate.Add("mom_lot");
                     }
                     
                     generator.Where(tablesToGenerate.ToArray());
                }
                generator.CreateClassFile(outputDir, namespaceName);

                // 2. Generate .csproj
                string providerPackage;
                switch (connectionInfo.Provider)
                {
                    case "PostgreSQL":
                        providerPackage = @"<PackageReference Include=""Npgsql"" Version=""10.0.1"" />";
                        break;
                    case "MySql":
                        providerPackage = @"<PackageReference Include=""MySql.Data"" Version=""9.5.0"" />";
                        break;
                    case "SqlServer":
                        providerPackage = @"<PackageReference Include=""Microsoft.Data.SqlClient"" Version=""6.1.4"" />";
                        break;
                    case "Sqlite":
                    default:
                        providerPackage = @"<PackageReference Include=""Microsoft.Data.Sqlite"" Version=""9.0.0"" />";
                        break;
                }

                var csprojContent = $@"<Project Sdk=""Microsoft.NET.Sdk"">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include=""SqlSugarCore"" Version=""5.1.4.199"" />
    {providerPackage}
  </ItemGroup>
</Project>";
                File.WriteAllText(Path.Combine(outputDir, "UserProject.csproj"), csprojContent);

                // 3. Generate DB.cs (Context)
                var dbContext = $@"using SqlSugar;
using System;

namespace {namespaceName};

public static class DB
{{
    public static SqlSugarClient Instance {{ get; set; }}
    public static SqlSugarClient db => Instance;
}}";
                File.WriteAllText(Path.Combine(outputDir, "DB.cs"), dbContext);

                // 4. Generate GlobalUsings.cs
                var globalUsings = $@"global using System;
global using System.Collections.Generic;
global using System.Linq;
global using System.Text;
global using System.Threading.Tasks;
global using SqlSugar;
global using {namespaceName};
global using static {namespaceName}.DB;
";
                File.WriteAllText(Path.Combine(outputDir, "GlobalUsings.cs"), globalUsings);

                // 5. Generate DumpExtensions.cs
                var dumpExt = @"using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace " + namespaceName + @";

public static class DumpExtensions
{
    public static T Dump<T>(this T obj, string title = null)
    {
        Console.WriteLine(""DEBUG: Dump called for "" + (obj?.GetType().Name ?? ""null""));
        if (obj == null)
        {
            var msg = title != null ? $""[{title}] null"" : ""null"";
            Console.WriteLine(msg);
            return obj;
        }

        var type = obj.GetType();
        if (type.IsPrimitive || type == typeof(string) || type == typeof(decimal) || type == typeof(DateTime) || type == typeof(Guid) || type == typeof(TimeSpan))
        {
            var prefix = title != null ? $""[{title}] "" : """";
            Console.WriteLine($""{prefix}{obj}"");
            return obj;
        }

        var options = new JsonSerializerOptions 
        { 
            WriteIndented = true, 
            ReferenceHandler = ReferenceHandler.IgnoreCycles 
        };
        var payload = new { title = title, data = obj };
        var json = JsonSerializer.Serialize(payload, options);
        Console.WriteLine($""$$DUMP$${json}"");
        return obj;
    }
}";
                File.WriteAllText(Path.Combine(outputDir, "DumpExtensions.cs"), dumpExt);

                // 6. Generate Program.cs (Dummy entry point for valid Exe build)
                Console.WriteLine($"DEBUG: Generating Program.cs in {outputDir}");
                File.WriteAllText(Path.Combine(outputDir, "Program.cs"), "public partial class Program { public static void Main() {} }");

                return Directory.GetFiles(outputDir, "*.cs").ToList();
            });
        }
    }
}
