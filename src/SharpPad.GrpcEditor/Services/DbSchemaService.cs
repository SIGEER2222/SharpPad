using SharpPad.GrpcEditor.Protos;
using SqlSugar;
using ConnectionInfo = SharpPad.GrpcEditor.Protos.ConnectionInfo;

namespace SharpPad.GrpcEditor.Services
{
    public interface IDbSchemaService
    {
        Task<DatabaseSchema> GetSchemaAsync(ConnectionInfo connectionInfo, string? tableName = null, bool tablesOnly = false);
    }

    public class DbSchemaService : IDbSchemaService
    {
        public async Task<DatabaseSchema> GetSchemaAsync(ConnectionInfo connectionInfo, string? tableName = null, bool tablesOnly = false)
        {
            return await Task.Run(() =>
            {
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

                var schema = new DatabaseSchema { Name = db.Ado.Connection.Database ?? "Unknown" };

                if (!string.IsNullOrEmpty(tableName))
                {
                    // Fetch single table with columns
                    var tableSchema = new TableSchema { Name = tableName };
                    var columns = db.DbMaintenance.GetColumnInfosByTableName(tableName, false);
                    foreach (var col in columns)
                    {
                        tableSchema.Columns.Add(new ColumnSchema
                        {
                            Name = col.DbColumnName,
                            DataType = col.DataType,
                            IsNullable = col.IsNullable,
                            IsPrimaryKey = col.IsPrimarykey
                        });
                    }
                    schema.Tables.Add(tableSchema);
                }
                else
                {
                    // Fetch all tables
                    var tables = db.DbMaintenance.GetTableInfoList(false);
                    foreach (var table in tables)
                    {
                        var tableSchema = new TableSchema { Name = table.Name };
                        
                        if (!tablesOnly)
                        {
                            var columns = db.DbMaintenance.GetColumnInfosByTableName(table.Name, false);
                            foreach (var col in columns)
                            {
                                tableSchema.Columns.Add(new ColumnSchema
                                {
                                    Name = col.DbColumnName,
                                    DataType = col.DataType,
                                    IsNullable = col.IsNullable,
                                    IsPrimaryKey = col.IsPrimarykey
                                });
                            }
                        }
                        schema.Tables.Add(tableSchema);
                    }
                }

                return schema;
            });
        }
    }
}
