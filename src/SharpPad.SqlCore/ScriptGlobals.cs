using SqlSugar;

namespace SharpPad.SqlCore;

public class ScriptGlobals
{
    public required SqlSugarClient db { get; set; }
}
