using System.Collections.Generic;

namespace SharpPad.SqlCore.Interfaces
{
    public interface IAssemblyLoader
    {
        void LoadAssemblies(IEnumerable<string> assemblyPaths);
    }
}
