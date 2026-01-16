import { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';
import { GrpcClient } from '../GrpcClient';
import { editor } from '../proto/editor';
import { Monarch, LanguageConfiguration } from '../Monarch';
import { mapSeverity, mapToMonacoCompletionItem, mapToMonacoCodeAction, SHARP_PAD_THEME } from '../utils/monacoHelpers';
import type { SourceFile } from './useFileSystem';

const LANGUAGE_ID = 'sharp-csharp';

export function useEditorSetup(
    containerRef: React.RefObject<HTMLDivElement | null>,
    client: GrpcClient,
    setMetrics: React.Dispatch<React.SetStateAction<string>>,
    files: SourceFile[],
    activeFileId: string | null,
    onFileSwitch: (fileId: string) => void
) {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
    
    const filesRef = useRef(files);
    const activeFileIdRef = useRef(activeFileId);
    const onFileSwitchRef = useRef(onFileSwitch);

    useEffect(() => {
        filesRef.current = files;
        activeFileIdRef.current = activeFileId;
        onFileSwitchRef.current = onFileSwitch;
    }, [files, activeFileId, onFileSwitch]);

    useEffect(() => {
        if (!containerRef.current) return;

        const disposables: monaco.IDisposable[] = [];

        // Helper to get extra files
        const getExtraFiles = () => filesRef.current
            .filter(f => f.id !== activeFileIdRef.current)
            .map(f => ({ fileName: f.path ? `${f.path}/${f.name}` : f.name, content: f.content }));

        // Register custom language
        if (!monaco.languages.getLanguages().some(l => l.id === LANGUAGE_ID)) {
            monaco.languages.register({ id: LANGUAGE_ID });
        }
        
        // Global Language Providers (MUST be disposed manually as they persist)
        disposables.push(monaco.languages.setMonarchTokensProvider(LANGUAGE_ID, Monarch));
        disposables.push(monaco.languages.setLanguageConfiguration(LANGUAGE_ID, LanguageConfiguration));

        // Definition Provider
        disposables.push(monaco.languages.registerDefinitionProvider(LANGUAGE_ID, {
            provideDefinition: async (model, position, _token) => {
                const code = model.getValue();
                const offset = model.getOffsetAt(position);
                
                const extraFiles = getExtraFiles();

                try {
                    const reply = await client.call(
                        'editor.EditorService',
                        'GetDefinition',
                        { code, position: offset, extraFiles },
                        editor.DefinitionRequest,
                        editor.DefinitionReply
                    );

                    if (reply.hasDefinition) {
                        // Heuristic: Check if reply.filePath ends with any of our file names.
                        const targetFile = filesRef.current.find(f => reply.filePath.endsWith(f.name));
                        
                        if (targetFile) {
                            // Return a URI that matches the file name. 
                            // We use a fake scheme or just file:///
                            return {
                                uri: monaco.Uri.parse(`file:///${targetFile.name}`), 
                                range: new monaco.Range(reply.line, reply.column, reply.line, reply.column)
                            };
                        }
                    }
                } catch (e) {
                    console.error(e);
                }
                return null;
            }
        }));

        // Theme
        monaco.editor.defineTheme('sharp-pad-dark', SHARP_PAD_THEME);
        monaco.editor.setTheme('sharp-pad-dark');

        // Initial Code (Fallback)
        const defaultCode = `// Loading...`;

        const editorInstance = monaco.editor.create(containerRef.current, {
            value: localStorage.getItem('sharpPad_code') || defaultCode,
            language: LANGUAGE_ID,
            automaticLayout: true,
            theme: 'sharp-pad-dark',
            minimap: { enabled: false },
            'semanticHighlighting.enabled': true,
            fontFamily: 'Cascadia Code, Consolas, "Courier New", monospace',
            fontLigatures: true,
            fontSize: 14
        }, {
            openerService: {
                open: async (resource: string | monaco.Uri, _options?: any) => {
                    const uri = typeof resource === 'string' ? monaco.Uri.parse(resource) : resource;
                    const uriString = uri.toString();
                    console.log('[OpenerService] Request to open:', uriString);
                    
                    if (uri.scheme === 'file') {
                        // Extract filename from URI
                        const fileName = uriString.split('/').pop();
                        
                        if (fileName) {
                            const targetFile = filesRef.current.find(f => f.name === fileName);
                            if (targetFile) {
                                console.log('[OpenerService] Switching to file:', fileName);
                                // Switch file
                                onFileSwitchRef.current(targetFile.id);
                                return true; // Handled
                            } else {
                                console.warn('[OpenerService] Target file not found in project:', fileName);
                            }
                        }
                    }
                    return false; // Not handled (let default opener handle it, e.g. external links)
                },
                registerOpener: () => ({ dispose: () => {} })
            }
        } as any);

        editorRef.current = editorInstance;

        // --- Commands & Actions ---
        
        // Ctrl+S
        editorInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
             // Save action (noop for now as it auto-saves to state)
        });

        // Trigger suggestions
        editorInstance.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Space, () => {
            editorInstance.trigger('keyboard', 'editor.action.triggerSuggest', {});
        });

        // Completion Provider
        disposables.push(monaco.languages.registerCompletionItemProvider(LANGUAGE_ID, {
            triggerCharacters: ['.'], 
            provideCompletionItems: async (model, position) => {
                const code = model.getValue();
                const offset = model.getOffsetAt(position);
                const extraFiles = getExtraFiles();

                try {
                    const word = model.getWordUntilPosition(position);
                    const range = {
                        startLineNumber: position.lineNumber,
                        endLineNumber: position.lineNumber,
                        startColumn: word.startColumn,
                        endColumn: word.endColumn
                    };

                    const reply = await client.call(
                        'editor.EditorService',
                        'GetCompletions',
                        { code, position: offset, extraFiles },
                        editor.CompletionRequest,
                        editor.CompletionReply
                    );

                    const suggestions = reply.items.map((item: any) => mapToMonacoCompletionItem(item, range));

                    return { suggestions };
                } catch (e) {
                    console.error(e);
                    return { suggestions: [] };
                }
            }
        }));

        // Hover Provider
        disposables.push(monaco.languages.registerHoverProvider(LANGUAGE_ID, {
            provideHover: async (model, position) => {
                const code = model.getValue();
                const offset = model.getOffsetAt(position);
                const extraFiles = getExtraFiles();

                try {
                    const reply = await client.call(
                        'editor.EditorService',
                        'GetHoverInfo',
                        { code, position: offset, extraFiles },
                        editor.HoverInfoRequest,
                        editor.HoverInfoReply
                    );

                    if (reply.hasInfo) {
                        return {
                            contents: [
                                { value: '```csharp\n' + reply.information + '\n```' }
                            ]
                        };
                    }
                } catch (e) {
                    console.error(e);
                }
                return null;
            }
        }));

        // Signature Help
        disposables.push(monaco.languages.registerSignatureHelpProvider(LANGUAGE_ID, {
            signatureHelpTriggerCharacters: ['(', ','],
            provideSignatureHelp: async (model, position, _token, _context) => {
                const code = model.getValue();
                const offset = model.getOffsetAt(position);
                const extraFiles = getExtraFiles();
                
                try {
                    const reply = await client.call(
                        'editor.EditorService',
                        'GetSignatureHelp',
                        { code, position: offset, extraFiles },
                        editor.SignatureHelpRequest,
                        editor.SignatureHelpReply
                    );

                    if (reply.hasHelp) {
                        return {
                            value: {
                                activeParameter: reply.activeParameter,
                                activeSignature: reply.activeSignature,
                                signatures: reply.signatures.map((s: any) => ({
                                    label: s.label,
                                    documentation: s.documentation,
                                    parameters: s.parameters.map((p: any) => ({
                                        label: p.label,
                                        documentation: p.documentation
                                    }))
                                }))
                            },
                            dispose: () => {}
                        };
                    }
                } catch (e) {
                    console.error(e);
                }
                return null;
            }
        }));

        // Formatting
        disposables.push(monaco.languages.registerDocumentFormattingEditProvider(LANGUAGE_ID, {
            provideDocumentFormattingEdits: async (model, _options, _token) => {
                const code = model.getValue();
                try {
                    const reply = await client.call(
                        'editor.EditorService',
                        'FormatCode',
                        { code },
                        editor.FormatCodeRequest,
                        editor.FormatCodeReply
                    );
                    
                    return [{
                        range: model.getFullModelRange(),
                        text: reply.formattedCode
                    }];
                } catch (e) {
                    console.error(e);
                    return [];
                }
            }
        }));

        // Code Action Provider (Quick Fixes)
        disposables.push(monaco.languages.registerCodeActionProvider(LANGUAGE_ID, {
            provideCodeActions: async (model, range, _context, _token) => {
                const code = model.getValue();
                // Use the start of the range as the position for Roslyn
                const offset = model.getOffsetAt(range.getStartPosition());
                const extraFiles = getExtraFiles();

                try {
                    const reply = await client.call(
                        'editor.EditorService',
                        'GetQuickFixes',
                        { code, position: offset, extraFiles },
                        editor.QuickFixRequest,
                        editor.QuickFixReply
                    );

                    const actions: monaco.languages.CodeAction[] = reply.fixes.map((fix: any) => 
                        mapToMonacoCodeAction(fix, model.uri, (offset) => model.getPositionAt(offset))
                    );

                    return {
                        actions: actions,
                        dispose: () => {}
                    };
                } catch (e) {
                    console.error('QuickFix Error:', e);
                    return { actions: [], dispose: () => {} };
                }
            }
        }));

        // Semantic Tokens (Fix for "All Blue" issue)
        const tokenTypes = [
            'namespace', 'type', 'class', 'enum', 'interface', 'struct', 
            'typeParameter', 'parameter', 'variable', 'property', 'enumMember', 
            'event', 'function', 'method', 'macro', 'keyword', 'modifier', 
            'comment', 'string', 'number', 'regexp', 'operator'
        ];
        const tokenModifiers = [
            'declaration', 'definition', 'readonly', 'static', 'deprecated', 
            'abstract', 'async', 'modification', 'documentation', 'defaultLibrary'
        ];
        
        const legend = { tokenTypes, tokenModifiers };

        disposables.push(monaco.languages.registerDocumentSemanticTokensProvider(LANGUAGE_ID, {
            getLegend: function () {
                return legend;
            },
            provideDocumentSemanticTokens: async function (model, _lastResultId, _token) {
                const code = model.getValue();
                const extraFiles = getExtraFiles();
                try {
                    const reply = await client.call(
                        'editor.EditorService',
                        'GetSemanticTokens',
                        { code, extraFiles },
                        editor.SemanticTokensRequest,
                        editor.SemanticTokensReply
                    );
                    
                    return {
                        data: new Uint32Array(reply.data || [])
                    };
                } catch (e) {
                    console.error(e);
                    return { data: new Uint32Array() };
                }
            },
            releaseDocumentSemanticTokens: function (_resultId) { }
        }));

        // Diagnostics
        let isDisposed = false;
        const updateMarkers = async () => {
            if (!editorInstance || isDisposed) return;
            const code = editorInstance.getValue();
            const extraFiles = getExtraFiles();
            try {
                const reply = await client.call(
                    'editor.EditorService',
                    'GetDiagnostics',
                    { code, extraFiles },
                    editor.DiagnosticsRequest,
                    editor.DiagnosticsReply
                );
                
                if (isDisposed) return;

                const markers = reply.diagnostics.map((d: any) => ({
                    startLineNumber: d.line + 1,
                    startColumn: d.column + 1,
                    endLineNumber: d.line + 1,
                    endColumn: d.column + 1 + 1, // Approximation
                    message: d.message,
                    severity: mapSeverity(d.severity)
                }));

                if (!editorInstance.getModel()) return;
                monaco.editor.setModelMarkers(editorInstance.getModel()!, LANGUAGE_ID, markers);
                
                // Update metrics too
                setMetrics(`Diagnostics: ${markers.length} found`);
            } catch (e) {
                if (!isDisposed) console.error(e);
            }
        };

        // Debounce diagnostics
        let timeout: ReturnType<typeof setTimeout>;
        const changeDisposable = editorInstance.onDidChangeModelContent(() => {
            clearTimeout(timeout);
            timeout = setTimeout(updateMarkers, 1000);
        });
        disposables.push(changeDisposable);

        // Initial check
        updateMarkers();

        return () => {
            isDisposed = true;
            clearTimeout(timeout);
            disposables.forEach(d => d.dispose());
            try {
                editorInstance.dispose();
            } catch (e: any) {
                // Ignore "Canceled" errors during disposal
                if (e?.message !== 'Canceled' && e !== 'Canceled') {
                    console.warn('Editor disposal error:', e);
                }
            }
            editorRef.current = null;
        };
    }, []); // Run once on mount

    return editorRef;
}