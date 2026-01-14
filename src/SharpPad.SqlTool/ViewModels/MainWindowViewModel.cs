using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;
using Microsoft.CodeAnalysis.CSharp.Scripting;
using Microsoft.CodeAnalysis.Scripting;
using SqlSugar;

namespace SharpPad.SqlTool.ViewModels;

public partial class MainWindowViewModel : ViewModelBase
{
    [ObservableProperty]
    private string _connectionString = "Host=localhost;Port=5432;Database=postgres;Username=postgres;Password=password";

    [ObservableProperty]
    private string _query = "return db.Ado.GetDataTable(\"SELECT version()\");";

    [ObservableProperty]
    private IEnumerable? _results;

    [ObservableProperty]
    private string _status = "Ready";

    [ObservableProperty]
    private bool _isLoading;

    [RelayCommand]
    private async Task Execute()
    {
        if (string.IsNullOrWhiteSpace(ConnectionString))
        {
            Status = "Connection string is empty.";
            return;
        }

        if (string.IsNullOrWhiteSpace(Query))
        {
            Status = "Query is empty.";
            return;
        }

        IsLoading = true;
        Status = "Executing...";

        try
        {
            var result = await Task.Run(async () =>
            {
                var db = new SqlSugarClient(new ConnectionConfig()
                {
                    ConnectionString = ConnectionString,
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

                return await CSharpScript.EvaluateAsync(Query, options, globals);
            });
            
            Results = ProcessResult(result);
            
            Status = "Success.";
        }
        catch (CompilationErrorException ce)
        {
             Status = $"Compilation Error: {string.Join("\n", ce.Diagnostics)}";
             Results = null;
        }
        catch (Exception ex)
        {
            Status = $"Error: {ex.Message}";
            Results = null;
        }
        finally
        {
            IsLoading = false;
        }
    }

    private IEnumerable? ProcessResult(object? result)
    {
        if (result == null) return null;

        if (result is DataTable dt)
        {
            var list = new List<ExpandoObject>();
            foreach (DataRow row in dt.Rows)
            {
                dynamic expando = new ExpandoObject();
                var dict = expando as IDictionary<string, object>;
                foreach (DataColumn col in dt.Columns)
                {
                    dict[col.ColumnName] = row[col];
                }
                list.Add(expando);
            }
            return list;
        }
        
        if (result is IEnumerable enumerable && !(result is string))
        {
            return enumerable;
        }

        return new List<object> { result };
    }
}
