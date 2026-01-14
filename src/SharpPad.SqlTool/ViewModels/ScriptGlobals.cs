using SqlSugar;

namespace SharpPad.SqlTool.ViewModels;

public class ScriptGlobals
{
    public required SqlSugarClient db { get; set; }
}
