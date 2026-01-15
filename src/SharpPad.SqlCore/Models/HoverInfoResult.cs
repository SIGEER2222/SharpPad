namespace SharpPad.SqlCore.Models
{
    public class HoverInfoResult
    {
        public string Information { get; set; } = string.Empty;
        public int OffsetFrom { get; set; }
        public int OffsetTo { get; set; }
    }
}
