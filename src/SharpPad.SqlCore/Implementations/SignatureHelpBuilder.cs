using Microsoft.CodeAnalysis;
using SharpPad.SqlCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml.Linq;

namespace SharpPad.SqlCore.Implementations
{
    internal static class SignatureHelpBuilder
    {
        public static Signatures BuildSignature(IMethodSymbol symbol)
        {
            var parameters = new List<Parameter>();
            var xmlDoc = symbol.GetDocumentationCommentXml();
            var parameterDocs = ParseParameterDocumentation(xmlDoc);
            
            foreach (var parameter in symbol.Parameters)
            {
                var paramLabel = parameter.ToDisplayString(SymbolDisplayFormat.MinimallyQualifiedFormat);
                var paramDoc = parameterDocs.TryGetValue(parameter.Name, out var doc) ? doc : "";
                parameters.Add(new Parameter() { 
                    Label = paramLabel,
                    Documentation = paramDoc
                });
            };
            
            var signature = new Signatures
            {
                Documentation = ParseMethodDocumentation(xmlDoc),
                Label = symbol.ToDisplayString(SymbolDisplayFormat.MinimallyQualifiedFormat),
                Parameters = parameters.ToArray()
            };

            return signature;
        }
        
        private static string ParseMethodDocumentation(string xmlDoc)
        {
            if (string.IsNullOrEmpty(xmlDoc))
                return "";
                
            try
            {
                var doc = XDocument.Parse(xmlDoc);
                var summary = doc.Descendants("summary").FirstOrDefault()?.Value?.Trim();
                var returns = doc.Descendants("returns").FirstOrDefault()?.Value?.Trim();
                
                var sb = new StringBuilder();
                if (!string.IsNullOrEmpty(summary))
                {
                    sb.AppendLine(summary);
                }
                if (!string.IsNullOrEmpty(returns))
                {
                    sb.AppendLine($"Returns: {returns}");
                }
                
                return sb.ToString().Trim();
            }
            catch
            {
                return xmlDoc;
            }
        }
        
        private static Dictionary<string, string> ParseParameterDocumentation(string xmlDoc)
        {
            var paramDocs = new Dictionary<string, string>();
            
            if (string.IsNullOrEmpty(xmlDoc))
                return paramDocs;
                
            try
            {
                var doc = XDocument.Parse(xmlDoc);
                var paramElements = doc.Descendants("param");
                
                foreach (var param in paramElements)
                {
                    var name = param.Attribute("name")?.Value;
                    var description = param.Value?.Trim();
                    
                    if (!string.IsNullOrEmpty(name) && !string.IsNullOrEmpty(description))
                    {
                        paramDocs[name] = description;
                    }
                }
            }
            catch
            {
                // Ignore errors
            }
            
            return paramDocs;
        }

        public static int InvocationScore(IMethodSymbol symbol, IEnumerable<TypeInfo> types)
        {
            var parameters = symbol.Parameters;
            if (parameters.Length < types.Count())
                return int.MinValue;

            var score = 0;
            var invocationEnum = types.GetEnumerator();
            var definitionEnum = parameters.GetEnumerator();
            while (invocationEnum.MoveNext() && definitionEnum.MoveNext())
            {
                if (invocationEnum.Current.ConvertedType == null)
                    score += 1;

                else if (SymbolEqualityComparer.Default.Equals(invocationEnum.Current.ConvertedType, definitionEnum.Current.Type))
                    score += 2;
            }
            return score;
        }
    }
}
