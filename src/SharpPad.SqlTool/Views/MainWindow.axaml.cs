using Avalonia.Controls;
using AvaloniaEdit.Highlighting;
using AvaloniaEdit.Highlighting.Xshd;
using SharpPad.SqlTool.ViewModels;
using System.IO;
using System.Text;
using System.Xml;

namespace SharpPad.SqlTool.Views;

public partial class MainWindow : Window
{
    public MainWindow()
    {
        InitializeComponent();
        
        LoadCSharpSyntax();

        this.DataContextChanged += (s, e) =>
        {
            if (DataContext is MainWindowViewModel vm)
            {
                Editor.Text = vm.Query;
                Editor.TextChanged += (sender, args) =>
                {
                    vm.Query = Editor.Text;
                };
            }
        };
    }

    private void LoadCSharpSyntax()
    {
        var syntax = @"<?xml version=""1.0""?>
<SyntaxDefinition name=""C#"" extensions="".cs"" xmlns=""http://icsharpcode.net/sharpdevelop/syntaxdefinition/2008"">
	<Color name=""Comment"" foreground=""Green"" />
	<Color name=""String"" foreground=""Red"" />
	<Color name=""Keyword"" foreground=""Blue"" fontWeight=""bold""/>

	<RuleSet>
		<Span color=""Comment"" begin=""//"" />
		<Span color=""Comment"" multiline=""true"" begin=""/\*"" end=""\*/"" />
		
		<Span color=""String"">
			<Begin>""</Begin>
			<End>""</End>
		</Span>

		<Keywords color=""Keyword"">
			<Word>using</Word>
			<Word>namespace</Word>
			<Word>class</Word>
			<Word>public</Word>
			<Word>private</Word>
			<Word>protected</Word>
			<Word>internal</Word>
			<Word>static</Word>
			<Word>void</Word>
			<Word>int</Word>
			<Word>string</Word>
			<Word>bool</Word>
			<Word>var</Word>
			<Word>new</Word>
			<Word>return</Word>
			<Word>if</Word>
			<Word>else</Word>
			<Word>foreach</Word>
			<Word>in</Word>
            <Word>async</Word>
            <Word>await</Word>
            <Word>try</Word>
            <Word>catch</Word>
            <Word>finally</Word>
		</Keywords>
	</RuleSet>
</SyntaxDefinition>";

        using (var stream = new MemoryStream(Encoding.UTF8.GetBytes(syntax)))
        using (var reader = new XmlTextReader(stream))
        {
            Editor.SyntaxHighlighting = HighlightingLoader.Load(reader, HighlightingManager.Instance);
        }
    }
}
