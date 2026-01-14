using System.Collections.Generic;
using System.IO;
using System.Reflection;
using SharpPad.SqlCore.Interfaces;

namespace SharpPad.SqlCore.Implementations
{
    public class AssemblyLoader : IAssemblyLoader
    {
        public void LoadAssemblies(IEnumerable<string> assemblyPaths)
        {
            foreach (var path in assemblyPaths)
            {
                if (File.Exists(path))
                {
                    Assembly.LoadFrom(path);
                }
                else
                {
                    throw new FileNotFoundException($"Assembly not found: {path}");
                }
            }
        }
    }
}
