using Microsoft.AspNetCore.Server.Kestrel.Core;
using Serilog;
using SharpPad.GrpcEditor.Services;
using SharpPad.SqlCore.Implementations;
using SharpPad.SqlCore.Interfaces;
using System.Reflection;
using SQLitePCL;

var builder = WebApplication.CreateBuilder(args);

// Pre-load dependencies to ensure they are available in Default Context
try
{
    Assembly.Load("Microsoft.Data.Sqlite");
    Assembly.Load("SqlSugar");
    Assembly.Load("Newtonsoft.Json");
    Assembly.Load("SQLitePCLRaw.core");
    Assembly.Load("SQLitePCLRaw.batteries_v2");
    Assembly.Load("SQLitePCLRaw.provider.e_sqlite3");
    // Load other DB drivers
    try { Assembly.Load("Npgsql"); } catch { Console.WriteLine("Warning: Npgsql not loaded"); }
    try { Assembly.Load("Microsoft.Data.SqlClient"); } catch { Console.WriteLine("Warning: Microsoft.Data.SqlClient not loaded"); }
    try { Assembly.Load("MySql.Data"); } catch { Console.WriteLine("Warning: MySql.Data not loaded"); }

    // Initialize SQLitePCL
    SQLitePCL.Batteries.Init();

    // Load Core System Assemblies explicitly to ensure they are available for Roslyn
    try 
    {
        Assembly.Load("System.Runtime");
        Assembly.Load("System.Collections");
        Assembly.Load("System.Linq");
        Assembly.Load("System.Linq.Expressions");
        Assembly.Load("System.Data.Common");
        Assembly.Load("System.ComponentModel.Primitives");
        Console.WriteLine("[Startup] Core assemblies loaded successfully.");
    }
    catch (Exception ex)
    {
        Console.WriteLine($"[Startup] Failed to load core assemblies: {ex.Message}");
    }
}
catch (Exception ex)
{
    Console.WriteLine($"[Startup] Failed to preload assemblies: {ex.Message}");
}

// Configure Serilog
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

builder.Host.UseSerilog();

// Configure Kestrel to support HTTP/1.1 and HTTP/2
builder.WebHost.ConfigureKestrel(options =>
{
    options.ConfigureEndpointDefaults(defaults =>
    {
        defaults.Protocols = HttpProtocols.Http1AndHttp2;
    });
    // Add a dedicated HTTP/2 endpoint for native gRPC clients (like verify scripts)
    options.ListenLocalhost(5256, o => o.Protocols = HttpProtocols.Http2);
    // Main endpoint for Web/Browser (HTTP/1.1 via proxy or direct)
    options.ListenLocalhost(5255, o => o.Protocols = HttpProtocols.Http1AndHttp2);
});

// Add services to the container.
builder.Services.AddGrpc();
builder.Services.AddCors(o => o.AddPolicy("AllowAll", builder =>
{
    builder.AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader()
           .WithExposedHeaders("Grpc-Status", "Grpc-Message", "Grpc-Encoding", "Grpc-Accept-Encoding");
}));

// Register SharpPad.SqlCore services
builder.Services.AddSingleton<IAssemblyLoader, AssemblyLoader>();
builder.Services.AddSingleton<IWorkspaceProjectAnalyzer, ProjectAnalyzer>();
builder.Services.AddSingleton<ICodeCompiler, CodeCompiler>();
builder.Services.AddSingleton<IDynamicCodeExecutor, DynamicCodeExecutor>();
builder.Services.AddSingleton<IPerformanceMeasurer, PerformanceMeasurer>();
builder.Services.AddSingleton<IConnectionStorageService, ConnectionStorageService>();
builder.Services.AddSingleton<IDbSchemaService, DbSchemaService>();
builder.Services.AddSingleton<IModelGenerationService, ModelGenerationService>();
builder.Services.AddSingleton<IProjectAnalysisSession, ProjectAnalysisSession>();
builder.Services.AddHostedService<SessionInitializationService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseRouting();
app.UseGrpcWeb();
app.UseCors("AllowAll");

app.MapGrpcService<EditorService>()
   .EnableGrpcWeb();

app.MapFallbackToFile("index.html");

app.Run();
