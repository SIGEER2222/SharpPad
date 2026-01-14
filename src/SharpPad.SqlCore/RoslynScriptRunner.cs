using System;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using Microsoft.CodeAnalysis.Scripting;
using SqlSugar;

namespace SharpPad.SqlCore;

public class RoslynScriptRunner : IScriptRunner
{
    public async Task<object?> ExecuteAsync(string code, string connectionString)
    {
        var db = new SqlSugarClient(new ConnectionConfig()
        {
            ConnectionString = connectionString,
            DbType = SqlSugar.DbType.PostgreSQL,
            IsAutoCloseConnection = true,
            InitKeyType = InitKeyType.Attribute
        });

        var globals = new ScriptGlobals { db = db };
        
        var options = ScriptOptions.Default
            .AddReferences(typeof(SqlSugarClient).Assembly)
            .AddReferences(typeof(DataSet).Assembly)
            .AddReferences(typeof(Enumerable).Assembly)
            .AddImports("System", "System.Data", "System.Linq", "SqlSugar", "System.Collections.Generic");

        return await CSharpScript.EvaluateAsync(code, options, globals);
    }
}
