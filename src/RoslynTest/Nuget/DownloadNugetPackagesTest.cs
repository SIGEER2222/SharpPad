using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using Xunit;
using Xunit.Abstractions;

public class DownloadNugetPackagesTests : TestBase {
    private readonly string testDirectory = Path.Combine(Directory.GetCurrentDirectory(), "NugetPackages", "packages");
    private readonly HttpClient httpClient;

    public DownloadNugetPackagesTests(ITestOutputHelper output) : base(output) {
        httpClient = new HttpClient();
    }

    [Fact]
    [Trait("Category", "DownloadPackageAsync_ShouldDownloadAndExtractPackage")]
    // dotnet test --filter "DownloadPackageAsync_ShouldDownloadAndExtractPackage"
    public async Task DownloadPackageAsync_ShouldDownloadAndExtractPackage() {
        // Arrange
        var packageName = "Newtonsoft.Json"; // A common NuGet package
        var version = "13.0.3"; // A stable version

        // The path to the downloaded .nuget file and extraction path
        var packageInstallationDirectory = Path.Combine(testDirectory, packageName);
        var packageFile = Path.Combine(packageInstallationDirectory, $"{packageName}.nuget");

        // Ensure the directory is clean before starting the test
        if (Directory.Exists(packageInstallationDirectory)) {
            Directory.Delete(packageInstallationDirectory, true);
        }

        // Act: Download the package
        await DownloadNugetPackages.DownloadPackageAsync(packageName, version);

        // Assert: Check if the .nuget file was downloaded
        Assert.True(File.Exists(packageFile), "The .nuget file should exist after download.");

        // Assert: Check if the contents are extracted (e.g., DLL files exist)
        var extractedFiles = Directory.GetFiles(packageInstallationDirectory, "*.dll", SearchOption.AllDirectories);
        for (var i = 0; i < extractedFiles.Length; i++) {
            Log.Information($"Extracted DLL: {extractedFiles[i]}");
        }
    }

    [Fact]
    [Trait("Category", "LoadPackages_ShouldReturnAssemblies")]
    // dotnet test --filter "LoadPackages_ShouldReturnAssemblies"
    public void LoadPackages_ShouldReturnAssemblies() {
        // Arrange
        var packageName = "Newtonsoft.Json";
        var version = "13.*";
        var testPackagePath = Path.Combine(testDirectory, packageName);

        // Clean up before testing
        if (Directory.Exists(testPackagePath)) {
            Directory.Delete(testPackagePath, true);
        }

        // Download the package
        DownloadNugetPackages.DownloadPackage(packageName, version);

        // Act: Load the assemblies from the downloaded package
        var assemblies = DownloadNugetPackages.LoadPackages(packageName);

        // Log the loaded assemblies
        foreach (var assembly in assemblies) {
            Log.Information($"Loaded Assembly: {assembly.FullName}");
        }
    }
}