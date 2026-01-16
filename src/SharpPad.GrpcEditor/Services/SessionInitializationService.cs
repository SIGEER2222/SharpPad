using SharpPad.SqlCore.Interfaces;

namespace SharpPad.GrpcEditor.Services
{
    public class SessionInitializationService : BackgroundService
    {
        private readonly IProjectAnalysisSession _session;
        private readonly ILogger<SessionInitializationService> _logger;

        public SessionInitializationService(
            IProjectAnalysisSession session, 
            ILogger<SessionInitializationService> logger)
        {
            _session = session;
            _logger = logger;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            try 
            {
                // Give the server a moment to start
                await Task.Delay(500, stoppingToken);

                var csprojFiles = Directory.GetFiles(Directory.GetCurrentDirectory(), "*.csproj");
                if (csprojFiles.Length > 0)
                {
                    var projectPath = csprojFiles[0];
                    _logger.LogInformation($"[Pre-Warming] Auto-initializing session with project: {projectPath}");
                    
                    // Empty list for assemblyPaths is fine, ProjectAnalyzer now uses AppDomain
                    await _session.InitializeAsync(projectPath, new List<string>());
                    
                    _logger.LogInformation("[Pre-Warming] Session initialized successfully.");
                }
                else
                {
                    _logger.LogWarning("[Pre-Warming] No .csproj found to initialize.");
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "[Pre-Warming] Failed to initialize session.");
            }
        }
    }
}
