namespace SharpPad.SqlCore.Models
{
    public class DefinitionResult
    {
        public string FilePath { get; set; } = string.Empty;
        public int Line { get; set; }
        public int Column { get; set; }
    }
}
