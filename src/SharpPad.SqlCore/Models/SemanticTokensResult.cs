using System.Collections.Generic;

namespace SharpPad.SqlCore.Models
{
    public class SemanticTokensResult
    {
        public List<int> Data { get; set; } = new List<int>();
    }

    public class SemanticToken
    {
        public int Line { get; set; }
        public int Character { get; set; }
        public int Length { get; set; }
        public int TokenType { get; set; }
        public int TokenModifiers { get; set; }
    }

    public enum SemanticTokenType
    {
        Namespace = 0,
        Type = 1,
        Class = 2,
        Enum = 3,
        Interface = 4,
        Struct = 5,
        TypeParameter = 6,
        Parameter = 7,
        Variable = 8,
        Property = 9,
        EnumMember = 10,
        Event = 11,
        Function = 12,
        Method = 13,
        Macro = 14,
        Keyword = 15,
        Modifier = 16,
        Comment = 17,
        String = 18,
        Number = 19,
        Regexp = 20,
        Operator = 21
    }

    public enum SemanticTokenModifier
    {
        Declaration = 1,
        Definition = 2,
        Readonly = 4,
        Static = 8,
        Deprecated = 16,
        Abstract = 32,
        Async = 64,
        Modification = 128,
        Documentation = 256,
        DefaultLibrary = 512
    }
}
