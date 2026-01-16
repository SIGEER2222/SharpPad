import * as monaco from 'monaco-editor';

export const mapSeverity = (severity: string): monaco.MarkerSeverity => {
    switch (severity?.toLowerCase()) {
        case 'error': return monaco.MarkerSeverity.Error;
        case 'warning': return monaco.MarkerSeverity.Warning;
        case 'info': return monaco.MarkerSeverity.Info;
        default: return monaco.MarkerSeverity.Hint;
    }
};

export const mapCompletionItemKind = (kind: string): monaco.languages.CompletionItemKind => {
    switch (kind) {
        case 'Method': return monaco.languages.CompletionItemKind.Method;
        case 'Class': return monaco.languages.CompletionItemKind.Class;
        case 'Keyword': return monaco.languages.CompletionItemKind.Keyword;
        case 'Field': return monaco.languages.CompletionItemKind.Field;
        case 'Property': return monaco.languages.CompletionItemKind.Property;
        case 'Event': return monaco.languages.CompletionItemKind.Event;
        case 'Namespace': return monaco.languages.CompletionItemKind.Module;
        case 'Local': return monaco.languages.CompletionItemKind.Variable;
        case 'Parameter': return monaco.languages.CompletionItemKind.Variable;
        default: return monaco.languages.CompletionItemKind.Text;
    }
};

export const defaultSnippets = [
    {
        label: 'cw',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Console.WriteLine(${1});',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'Console.WriteLine snippet',
        detail: 'Console.WriteLine()',
        sortText: '00'
    },
    {
        label: 'for',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'for (int i = 0; i < ${1:length}; i++)\n{\n\t${2://code...}\n}',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'For Loop',
        detail: 'for loop',
        sortText: '00'
    },
    {
        label: 'foreach',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'foreach (${1:var} ${2:item} in ${3:collection})\n{\n\t${4://code...}\n}',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'Foreach Loop',
        detail: 'foreach loop',
        sortText: '00'
    },
    {
        label: 'prop',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'public ${1:int} ${2:Property} { get; set; }',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'Property',
        detail: 'Auto-implemented property',
        sortText: '00'
    },
    {
        label: 'if',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'if (${1:condition})\n{\n\t${2}\n}',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'If Statement',
        detail: 'if statement',
        sortText: '00'
    },
    {
        label: 'else',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'else\n{\n\t${1}\n}',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'Else Statement',
        detail: 'else statement',
        sortText: '00'
    },
    {
        label: 'while',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'while (${1:condition})\n{\n\t${2}\n}',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'While Loop',
        detail: 'while loop',
        sortText: '00'
    },
    {
        label: 'try',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'try\n{\n\t${1}\n}\ncatch (${2:Exception} ex)\n{\n\t${3}\n}',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'Try-Catch',
        detail: 'try-catch block',
        sortText: '00'
    },
    {
        label: 'dump',
        kind: monaco.languages.CompletionItemKind.Snippet,
        insertText: 'Dump("${1:Title}");',
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        documentation: 'Dump object extension',
        detail: 'Dump()',
        sortText: '00'
    }
];

export const SHARP_PAD_THEME: monaco.editor.IStandaloneThemeData = {
    base: 'vs-dark',
    inherit: true,
    rules: [
        { token: 'keyword', foreground: '569cd6', fontStyle: 'bold' },
        { token: 'string', foreground: 'ce9178' },
        { token: 'number', foreground: 'b5cea8' },
        { token: 'comment', foreground: '6a9955', fontStyle: 'italic' },
        { token: 'number.float', foreground: 'b5cea8' },
        { token: 'delimiter', foreground: 'd4d4d4' },
        { token: 'operator', foreground: 'd4d4d4' },
        { token: 'string.quote', foreground: 'ce9178' },
        { token: 'string.escape', foreground: 'd7ba7d' },
        
        // C# specific
        { token: 'class', foreground: '4ec9b0' },
        { token: 'method', foreground: 'dcdcaa' },
        { token: 'property', foreground: '9cdcfe' },
        { token: 'field', foreground: '9cdcfe' },
        { token: 'interface', foreground: 'b8d7a3' },
        { token: 'enum', foreground: 'b8d7a3' },
        { token: 'struct', foreground: '86c691' },
        { token: 'event', foreground: 'dcdcaa' },
        { token: 'namespace', foreground: '4ec9b0' },
        
        // Fallbacks
        { token: 'identifier', foreground: '9cdcfe' },
        { token: 'type', foreground: '4ec9b0' }
    ],
    colors: {
        'editor.background': '#1e1e1e',
        'editor.foreground': '#d4d4d4',
        'editor.lineHighlightBackground': '#2d2d2d',
        'editorLineNumber.foreground': '#858585',
        'editor.selectionBackground': '#264f78',
        'editor.inactiveSelectionBackground': '#3a3d41',
        'editor.wordHighlightBackground': '#575757b0',
        'editorCursor.foreground': '#d4d4d4',
    },
    encodedTokensColors: []
};

export const updateEditorMarkers = (
    editorInstance: monaco.editor.IStandaloneCodeEditor, 
    diagnostics: any[]
) => {
    const model = editorInstance.getModel();
    if (!model) return;

    const markers: monaco.editor.IMarkerData[] = (diagnostics || []).map((d: any) => ({
        severity: mapSeverity(d.severity),
        message: d.message || '',
        startLineNumber: (d.line || 0) + 1,
        startColumn: (d.column || 0) + 1,
        endLineNumber: (d.line || 0) + 1,
        endColumn: (d.column || 0) + 10
    }));

    monaco.editor.setModelMarkers(model, 'sharp-csharp', markers);
};
