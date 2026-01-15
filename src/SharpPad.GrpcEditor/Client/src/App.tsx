import { useEffect, useRef, useState } from 'react';
import * as monaco from 'monaco-editor';
import 'monaco-editor/min/vs/editor/editor.main.css';
import { GrpcClient } from './GrpcClient';
import { editor } from './proto/editor';
import { Monarch, LanguageConfiguration } from './Monarch';
import OutputRenderer from './OutputRenderer';

const BACKEND_URL = 'http://localhost:5255';
const client = new GrpcClient(BACKEND_URL);
const LANGUAGE_ID = 'sharp-csharp';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [output, setOutput] = useState<string>('');
  const [metrics, setMetrics] = useState<string>('');
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Register custom language
    monaco.languages.register({ id: LANGUAGE_ID });

    // Register Monarch Tokens Provider
    monaco.languages.setMonarchTokensProvider(LANGUAGE_ID, Monarch);
    
    // Register Language Configuration
    monaco.languages.setLanguageConfiguration(LANGUAGE_ID, LanguageConfiguration);

    // Define Custom Theme for Semantic Highlighting
    monaco.editor.defineTheme('sharp-pad-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'keyword', foreground: 'ab1f9e', fontStyle: 'bold' },
        { token: 'string', foreground: '2f810f' },
        { token: 'number', foreground: '2f810f' },
        { token: 'comment', foreground: '5e5e5e', fontStyle: 'italic' },
        { token: 'number.float', foreground: 'ab1f9e' },
        
        // Fallbacks for standard types
        { token: 'class', foreground: '569cd6' },
        { token: 'method', foreground: 'c586c0' },
        { token: 'property', foreground: '9cdcfe' },
        { token: 'identifier', foreground: 'dcdcaa' },
      ],
      colors: {
        'editor.background': '#1e1e1e',
        'editor.foreground': '#d4d4d4',
        'editor.lineHighlightBackground': '#2d2d2d',
        'editorLineNumber.foreground': '#d4d4d4',
        'editor.selectionBackground': '#3e3e3e',
        'editor.wordHighlightBackground': '#303030',
        'editorCursor.foreground': '#d4d4d4',
      },
      encodedTokensColors: ['#ab1f9e', '#2f810f', '#b5cea8', '#5e5e5e', '#ab1f9e']
    } as monaco.editor.IStandaloneThemeData);

    monaco.editor.setTheme('sharp-pad-dark');

    // Initialize Monaco
    const editorInstance = monaco.editor.create(containerRef.current, {
      value: `using System;
using System.Linq;

public class Program
{
    public static void Main()
    {
        Console.WriteLine("Hello from SharpPad gRPC Editor!");
        var numbers = new[] { 1, 2, 3, 4, 5 };
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        
        // Try the new Dump extension!
        evenNumbers.Dump("Even Numbers");
        
        foreach (var num in evenNumbers)
        {
             // Type 'cw' and press Tab
             Console.WriteLine(num);
        }
    }
}
`,
      language: LANGUAGE_ID,
      automaticLayout: true,
      theme: 'sharp-pad-dark',
      minimap: { enabled: false },
      'semanticHighlighting.enabled': true
    });

    editorRef.current = editorInstance;

    // Initialize Backend Session
    const initStartTime = performance.now();
    client.call(
        'editor.EditorService', 
        'Initialize', 
        editor.InitializeRequest.create({}), 
        editor.InitializeRequest, 
        editor.InitializeReply
    ).then(() => {
        const initDuration = (performance.now() - initStartTime).toFixed(2);
        console.log(`Backend initialized in ${initDuration}ms`);
        setMetrics(prev => `Backend Init: ${initDuration}ms\n` + prev);
        updateDiagnostics(editorInstance);
    })
     .catch(err => console.error('Backend initialization failed', err));

    // Register Completion Provider
    monaco.languages.registerCompletionItemProvider(LANGUAGE_ID, {
      triggerCharacters: ['.'],
      provideCompletionItems: async (model, position) => {
          const start = performance.now();
          const offset = model.getOffsetAt(position);
          const req = editor.CompletionRequest.create({
          code: model.getValue(),
          position: offset
        });

        try {
          const res = await client.call(
            'editor.EditorService',
            'GetCompletions',
            req,
            editor.CompletionRequest,
            editor.CompletionReply
          );

          const suggestions = (res.items || []).map((item: any) => ({
            label: item.displayText || item.completionText || '',
            kind: mapCompletionItemKind(item.kind || ''),
            insertText: item.completionText || item.displayText || '',
            detail: item.description || '',
            range: undefined // Monaco handles range if undefined
          }));

          // Add 'cw' snippet
          suggestions.push({
            label: 'cw',
            kind: monaco.languages.CompletionItemKind.Snippet,
            insertText: 'Console.WriteLine(${1});',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Console.WriteLine snippet',
            detail: 'Console.WriteLine()'
          });

          const duration = (performance.now() - start).toFixed(2);
          setMetrics((prev: string) => {
              const lines = prev.split('\n').filter((l: string) => !l.startsWith('Completion:'));
              return `Completion: ${duration}ms\n` + lines.join('\n');
          });

          return { suggestions: suggestions as any };
        } catch (err) {
          console.error('Completion error:', err);
          return { suggestions: [] };
        }
      }
    });

    // Register Hover Provider
    monaco.languages.registerHoverProvider(LANGUAGE_ID, {
      provideHover: async (model, position) => {
        const offset = model.getOffsetAt(position);
        const req = editor.HoverInfoRequest.create({
          code: model.getValue(),
          position: offset
        });

        try {
          const res = await client.call(
            'editor.EditorService',
            'GetHoverInfo',
            req,
            editor.HoverInfoRequest,
            editor.HoverInfoReply
          );

          if (res.hasInfo && res.information) {
            return {
              contents: [
                { value: '```csharp\n' + res.information + '\n```' }
              ]
            };
          }
        } catch (err) {
          console.error('Hover error:', err);
        }
        return null;
      }
    });
    
    // Register Signature Help Provider
    monaco.languages.registerSignatureHelpProvider(LANGUAGE_ID, {
        signatureHelpTriggerCharacters: ['('],
        provideSignatureHelp: async (model, position, _token, _context) => {
            const offset = model.getOffsetAt(position);
            const req = editor.SignatureHelpRequest.create({
                code: model.getValue(),
                position: offset
            });
            
            try {
                const res = await client.call(
                    'editor.EditorService',
                    'GetSignatureHelp',
                    req,
                    editor.SignatureHelpRequest,
                    editor.SignatureHelpReply
                );
                
                if (res.signatures && res.signatures.length > 0) {
                    return {
                        value: {
                            signatures: res.signatures.map((s: any) => ({
                                label: s.label || '',
                                documentation: s.documentation || '',
                                parameters: (s.parameters || []).map((p: any) => ({
                                    label: p.label || '',
                                    documentation: p.documentation || ''
                                }))
                            })),
                            activeSignature: res.activeSignature || 0,
                            activeParameter: res.activeParameter || 0
                        },
                        dispose: () => {}
                    };
                }
            } catch (err) {
                console.error('Signature help error:', err);
            }
            return null;
        }
    });

    // Register Semantic Tokens Provider
    monaco.languages.registerDocumentSemanticTokensProvider(LANGUAGE_ID, {
        getLegend: function () {
            return {
                tokenTypes: [
                    'namespace', 'type', 'class', 'enum', 'interface', 'struct', 'typeParameter', 'parameter', 'variable', 'property',
                    'enumMember', 'event', 'function', 'method', 'macro', 'keyword', 'modifier', 'comment', 'string', 'number', 'regexp', 'operator'
                ],
                tokenModifiers: [
                    'declaration', 'definition', 'readonly', 'static', 'deprecated', 'abstract', 'async', 'modification', 'documentation', 'defaultLibrary'
                ]
            };
        },
        provideDocumentSemanticTokens: async (model, _lastResultId, _token) => {
            const req = editor.SemanticTokensRequest.create({
                code: model.getValue()
            });

            try {
                const res = await client.call(
                    'editor.EditorService',
                    'GetSemanticTokens',
                    req,
                    editor.SemanticTokensRequest,
                    editor.SemanticTokensReply
                );

                return {
                    data: new Uint32Array(res.data || [])
                };
            } catch (err) {
                console.error('Semantic tokens error:', err);
                return null;
            }
        },
        releaseDocumentSemanticTokens: () => {}
    });

    // Diagnostics Polling
    let debounceTimer: any;
    const changeDisposable = editorInstance.onDidChangeModelContent(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => updateDiagnostics(editorInstance), 1000);
    });

    return () => {
        editorInstance.dispose();
        changeDisposable.dispose();
    };
  }, []);

  const updateDiagnostics = async (editorInstance: monaco.editor.IStandaloneCodeEditor) => {
      const model = editorInstance.getModel();
      if (!model) return;

      const req = editor.DiagnosticsRequest.create({
          code: model.getValue()
      });

      try {
          const res = await client.call(
              'editor.EditorService',
              'GetDiagnostics',
              req,
              editor.DiagnosticsRequest,
              editor.DiagnosticsReply
          );

          const markers: monaco.editor.IMarkerData[] = (res.diagnostics || []).map((d: any) => ({
              severity: mapSeverity(d.severity),
              message: d.message || '',
              startLineNumber: (d.line || 0) + 1,
              startColumn: (d.column || 0) + 1,
              endLineNumber: (d.line || 0) + 1,
              endColumn: (d.column || 0) + 10 // Approximate length if not provided
          }));

          monaco.editor.setModelMarkers(model, LANGUAGE_ID, markers);
      } catch (err) {
          console.error('Diagnostics error:', err);
      }
  };

  const handleRun = async () => {
      if (!editorRef.current) return;
      const start = performance.now();
      setOutput('Running...');
      
      const req = editor.ExecuteCodeRequest.create({
          code: editorRef.current.getValue(),
          typeName: 'Program',
          methodName: 'Main'
      });

      try {
          const res = await client.call(
              'editor.EditorService',
              'ExecuteCode',
              req,
              editor.ExecuteCodeRequest,
              editor.ExecuteCodeReply
          );

          if (res.success) {
              const outputParts = [];
              if (res.consoleOutput) {
                  outputParts.push(res.consoleOutput);
              }
              if (res.output) {
                  if (outputParts.length > 0) outputParts.push('\n----------------------------------------\n');
                  outputParts.push(`Return: ${res.output}`);
              }
              setOutput(outputParts.join('') || 'No output');
          } else {
              setOutput(`Error:\n${res.errorMessage || ''}\n${(res.diagnostics || []).map((d: any) => d.message).join('\n')}`);
          }
          
          const duration = (performance.now() - start).toFixed(2);
          setMetrics(prev => {
              const lines = prev.split('\n').filter(l => !l.startsWith('Execution:'));
              return `Execution: ${duration}ms\n` + lines.join('\n');
          });
      } catch (err) {
          setOutput(`Execution failed: ${err}`);
      }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '10px', backgroundColor: '#1e1e1e', borderBottom: '1px solid #333', display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                    onClick={handleRun}
                    style={{ 
                        padding: '8px 16px', 
                        backgroundColor: '#0e639c', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Run ▶
                </button>
                <div style={{ color: '#ccc', alignSelf: 'center', fontSize: '14px' }}>SharpPad gRPC Editor</div>
            </div>
            <div style={{ color: '#888', fontSize: '12px', fontFamily: 'Consolas', textAlign: 'right', whiteSpace: 'pre' }}>
                {metrics}
            </div>
        </div>
        <div style={{ flex: 1, position: 'relative' }} ref={containerRef}></div>
        <div style={{ height: '150px', backgroundColor: '#1e1e1e', borderTop: '1px solid #333', padding: '10px', color: '#d4d4d4', overflow: 'auto', fontFamily: 'Consolas, monospace' }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Output:</div>
            <div style={{ margin: 0 }}>
                <OutputRenderer content={output} />
            </div>
        </div>
    </div>
  );
}

function mapSeverity(severity: string): monaco.MarkerSeverity {
    switch (severity?.toLowerCase()) {
        case 'error': return monaco.MarkerSeverity.Error;
        case 'warning': return monaco.MarkerSeverity.Warning;
        case 'info': return monaco.MarkerSeverity.Info;
        default: return monaco.MarkerSeverity.Hint;
    }
}

function mapCompletionItemKind(kind: string): monaco.languages.CompletionItemKind {
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
}

export default App;
