using System.Collections.Generic;

namespace SharpPad.SqlCore.Models
{
    public class SignatureHelpResult
    {
        public Signatures[] Signatures { get; set; }
        public int ActiveParameter { get; set; }
        public int ActiveSignature { get; set; }
    }

    public class Signatures
    {
        public string Label { get; set; }
        public string Documentation { get; set; }
        public Parameter[] Parameters { get; set; }
    }

    public class Parameter
    {
        public string Label { get; set; }
        public string Documentation { get; set; }
    }
}
