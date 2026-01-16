using System.Text.Json;
using SharpPad.GrpcEditor.Protos;
using ConnectionInfo = SharpPad.GrpcEditor.Protos.ConnectionInfo;
using SqlSugar;

namespace SharpPad.GrpcEditor.Services
{
    public interface IConnectionStorageService
    {
        Task<IEnumerable<ConnectionInfo>> GetAllAsync();
        Task<string> SaveAsync(ConnectionInfo connection);
        Task DeleteAsync(string id);
        Task<(bool Success, string Message)> TestConnectionAsync(string provider, string connectionString);
    }

    public class ConnectionStorageService : IConnectionStorageService
    {
        private readonly string _filePath;
        private List<ConnectionInfo> _cache;
        private readonly SemaphoreSlim _lock = new SemaphoreSlim(1, 1);

        public ConnectionStorageService()
        {
            var appData = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
            var folder = Path.Combine(appData, "SharpPad");
            if (!Directory.Exists(folder)) Directory.CreateDirectory(folder);
            _filePath = Path.Combine(folder, "connections.json");
            _cache = new List<ConnectionInfo>();
        }

        private async Task LoadCacheAsync()
        {
            if (File.Exists(_filePath))
            {
                var json = await File.ReadAllTextAsync(_filePath);
                try
                {
                    var loaded = JsonSerializer.Deserialize<List<ConnectionInfo>>(json);
                    if (loaded != null) _cache = loaded;
                }
                catch 
                {
                    _cache = new List<ConnectionInfo>();
                }
            }
        }

        private async Task SaveCacheAsync()
        {
            var json = JsonSerializer.Serialize(_cache, new JsonSerializerOptions { WriteIndented = true });
            await File.WriteAllTextAsync(_filePath, json);
        }

        public async Task<IEnumerable<ConnectionInfo>> GetAllAsync()
        {
            await _lock.WaitAsync();
            try
            {
                if (_cache.Count == 0) await LoadCacheAsync();
                return _cache.ToList();
            }
            finally
            {
                _lock.Release();
            }
        }

        public async Task<string> SaveAsync(ConnectionInfo connection)
        {
            await _lock.WaitAsync();
            try
            {
                if (_cache.Count == 0) await LoadCacheAsync();

                if (string.IsNullOrEmpty(connection.Id))
                {
                    connection.Id = Guid.NewGuid().ToString();
                    _cache.Add(connection);
                }
                else
                {
                    var existing = _cache.FirstOrDefault(c => c.Id == connection.Id);
                    if (existing != null)
                    {
                        _cache.Remove(existing);
                        _cache.Add(connection);
                    }
                    else
                    {
                        connection.Id = Guid.NewGuid().ToString();
                        _cache.Add(connection);
                    }
                }

                await SaveCacheAsync();
                return connection.Id;
            }
            finally
            {
                _lock.Release();
            }
        }

        public async Task DeleteAsync(string id)
        {
            await _lock.WaitAsync();
            try
            {
                if (_cache.Count == 0) await LoadCacheAsync();
                var existing = _cache.FirstOrDefault(c => c.Id == id);
                if (existing != null)
                {
                    _cache.Remove(existing);
                    await SaveCacheAsync();
                }
            }
            finally
            {
                _lock.Release();
            }
        }

        public async Task<(bool Success, string Message)> TestConnectionAsync(string provider, string connectionString)
        {
            if (string.IsNullOrWhiteSpace(connectionString))
            {
                return (false, "Connection string is empty");
            }

            try 
            {
                DbType dbType = DbType.SqlServer;
                if (Enum.TryParse<DbType>(provider, true, out var parsedType))
                {
                    dbType = parsedType;
                }

                using var db = new SqlSugarClient(new ConnectionConfig
                {
                    ConnectionString = connectionString,
                    DbType = dbType,
                    IsAutoCloseConnection = true
                });

                db.Open();
                return await Task.FromResult((true, "Connection successful"));
            }
            catch (Exception ex)
            {
                return (false, $"Connection failed: {ex.Message}");
            }
        }
    }
}
