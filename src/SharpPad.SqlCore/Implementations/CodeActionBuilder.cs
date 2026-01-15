using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.Text;
using SharpPad.SqlCore.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading;
using System.Threading.Tasks;

namespace SharpPad.SqlCore.Implementations
{
    internal static class CodeActionBuilder
    {
        private static readonly Dictionary<string, string[]> CommonNamespaces = new Dictionary<string, string[]>
        {
            // System基础类型
            ["Console"] = new[] { "System" },
            ["ArrayBufferWriter"] = new[] { "System.Buffers" },
            ["ArrayPool"] = new[] { "System.Buffers" },
            ["Dump"] = new[] { "System" },
            ["Debugger"] = new[] { "System.Diagnostics" },
            ["ToJson"] = new[] { "System" },
            ["DateTime"] = new[] { "System" },
            ["TimeSpan"] = new[] { "System" },
            ["Guid"] = new[] { "System" },
            ["Uri"] = new[] { "System" },
            ["Random"] = new[] { "System" },
            ["Environment"] = new[] { "System" },
            ["Convert"] = new[] { "System" },
            ["Math"] = new[] { "System" },
            ["Array"] = new[] { "System" },
            ["Tuple"] = new[] { "System" },
            ["BitConverter"] = new[] { "System" },
            ["Version"] = new[] { "System" },
            ["Exception"] = new[] { "System" },
            ["EventArgs"] = new[] { "System" },
            ["EventHandler"] = new[] { "System" },
            ["Action"] = new[] { "System" },
            ["Func"] = new[] { "System" },
            ["Predicate"] = new[] { "System" },
            ["Lazy"] = new[] { "System" },
            ["WeakReference"] = new[] { "System" },
            ["IDisposable"] = new[] { "System" },
            ["IAsyncDisposable"] = new[] { "System" },
            ["IComparable"] = new[] { "System" },
            ["IEquatable"] = new[] { "System" },
            ["IFormatProvider"] = new[] { "System" },
            ["IFormattable"] = new[] { "System" },
            ["ICloneable"] = new[] { "System" },
            ["IObservable"] = new[] { "System" },
            ["IObserver"] = new[] { "System" },
            ["IProgress"] = new[] { "System" },
            ["IServiceProvider"] = new[] { "System" },
            ["GC"] = new[] { "System" },
            ["Buffer"] = new[] { "System" },
            ["AppDomain"] = new[] { "System" },
            ["OperatingSystem"] = new[] { "System" },
            ["Index"] = new[] { "System" },
            ["Range"] = new[] { "System" },
            ["HashCode"] = new[] { "System" },
            ["Half"] = new[] { "System" },
            ["DateOnly"] = new[] { "System" },
            ["TimeOnly"] = new[] { "System" },
            ["DateTimeOffset"] = new[] { "System" },
            ["TimeZoneInfo"] = new[] { "System" },
            ["Enum"] = new[] { "System" },
            ["Delegate"] = new[] { "System" },
            ["MulticastDelegate"] = new[] { "System" },
            ["Nullable"] = new[] { "System" },
            ["ValueTuple"] = new[] { "System" },
            ["Memory"] = new[] { "System" },
            ["Span"] = new[] { "System" },
            ["ReadOnlySpan"] = new[] { "System" },
            ["ReadOnlyMemory"] = new[] { "System" },
            ["ArraySegment"] = new[] { "System" },

            // 集合类型
            ["List"] = new[] { "System.Collections.Generic" },
            ["Dictionary"] = new[] { "System.Collections.Generic" },
            ["HashSet"] = new[] { "System.Collections.Generic" },
            ["Queue"] = new[] { "System.Collections.Generic" },
            ["Stack"] = new[] { "System.Collections.Generic" },
            ["LinkedList"] = new[] { "System.Collections.Generic" },
            ["SortedSet"] = new[] { "System.Collections.Generic" },
            ["SortedDictionary"] = new[] { "System.Collections.Generic" },
            ["SortedList"] = new[] { "System.Collections.Generic" },
            ["KeyValuePair"] = new[] { "System.Collections.Generic" },
            ["IEnumerable"] = new[] { "System.Collections.Generic" },
            ["ICollection"] = new[] { "System.Collections.Generic" },
            ["IList"] = new[] { "System.Collections.Generic" },
            ["IDictionary"] = new[] { "System.Collections.Generic" },
            ["ISet"] = new[] { "System.Collections.Generic" },
            ["ConcurrentBag"] = new[] { "System.Collections.Concurrent" },
            ["ConcurrentQueue"] = new[] { "System.Collections.Concurrent" },
            ["ConcurrentStack"] = new[] { "System.Collections.Concurrent" },
            ["ConcurrentDictionary"] = new[] { "System.Collections.Concurrent" },
            ["BlockingCollection"] = new[] { "System.Collections.Concurrent" },

            // 文本处理
            ["StringBuilder"] = new[] { "System.Text" },
            ["Encoding"] = new[] { "System.Text" },
            ["Regex"] = new[] { "System.Text.RegularExpressions" },
            ["Match"] = new[] { "System.Text.RegularExpressions" },
            ["JsonSerializer"] = new[] { "System.Text.Json" },
            ["JsonDocument"] = new[] { "System.Text.Json" },
            ["JsonElement"] = new[] { "System.Text.Json" },

            // I/O操作
            ["File"] = new[] { "System.IO" },
            ["Path"] = new[] { "System.IO" },
            ["Directory"] = new[] { "System.IO" },
            ["Stream"] = new[] { "System.IO" },
            ["FileStream"] = new[] { "System.IO" },
            ["MemoryStream"] = new[] { "System.IO" },
            ["StreamReader"] = new[] { "System.IO" },
            ["StreamWriter"] = new[] { "System.IO" },

            // SqlSugar
            ["SqlSugarClient"] = new[] { "SqlSugar" },
            ["SqlSugarScope"] = new[] { "SqlSugar" },
            ["ISqlSugarClient"] = new[] { "SqlSugar" },
            ["SugarColumn"] = new[] { "SqlSugar" },
            ["SugarTable"] = new[] { "SqlSugar" },
            ["SimpleClient"] = new[] { "SqlSugar" },
            ["ConnectionConfig"] = new[] { "SqlSugar" },
            ["DbType"] = new[] { "SqlSugar" },
            ["InitKeyType"] = new[] { "SqlSugar" },
            ["Navigate"] = new[] { "SqlSugar" },
            ["NavigateType"] = new[] { "SqlSugar" }
        };

        public static async Task<List<CodeFixResult>> GetCodeActionsForDiagnosticAsync(Document document, Diagnostic diagnostic, CancellationToken cancellationToken)
        {
            var results = new List<CodeFixResult>();

            try
            {
                switch (diagnostic.Id)
                {
                    case "CS0103": // The name '...' does not exist in the current context
                    case "CS0246": // The type or namespace name '...' could not be found
                    case "CS1061": // '...' does not contain a definition for '...'
                        results.AddRange(await CreateAddUsingActionsAsync(document, diagnostic, cancellationToken));
                        break;
                }
            }
            catch
            {
                // Ignore errors
            }

            return results;
        }

        private static async Task<List<CodeFixResult>> CreateAddUsingActionsAsync(Document document, Diagnostic diagnostic, CancellationToken cancellationToken)
        {
            var results = new List<CodeFixResult>();
            var syntaxRoot = await document.GetSyntaxRootAsync(cancellationToken);
            var sourceText = await document.GetTextAsync(cancellationToken);

            if (syntaxRoot == null) return results;

            var diagnosticSpan = diagnostic.Location.SourceSpan;
            string identifier = "";

            if (diagnostic.Id == "CS1061")
            {
                var message = diagnostic.GetMessage();
                var match = Regex.Match(message, @"'([^']+)'");
                if (match.Success)
                {
                    // The message is usually: 'Type' does not contain a definition for 'Member'
                    // We want 'Member' if possible, or we might want to check extension methods.
                    // Actually, for CS1061 (missing extension method), we often need to guess the extension class.
                    // But here we rely on the identifier being in CommonNamespaces.
                    // Let's try to extract the member name from syntax if possible.
                    var node = syntaxRoot.FindNode(diagnosticSpan);
                    if (node is MemberAccessExpressionSyntax memberAccess)
                    {
                        identifier = memberAccess.Name.Identifier.ValueText;
                    }
                }
            }
            else
            {
                var token = syntaxRoot.FindToken(diagnosticSpan.Start);
                identifier = token.ValueText;
            }

            if (string.IsNullOrEmpty(identifier)) return results;

            if (CommonNamespaces.TryGetValue(identifier, out var namespaces))
            {
                foreach (var ns in namespaces)
                {
                    // Check if already imported (basic check)
                    if (sourceText.ToString().Contains($"using {ns};")) continue;

                    results.Add(new CodeFixResult
                    {
                        Title = $"using {ns};",
                        NewText = $"using {ns};\n",
                        Span = new TextSpan(0, 0)
                    });
                }
            }
            
            return results;
        }
    }
}
