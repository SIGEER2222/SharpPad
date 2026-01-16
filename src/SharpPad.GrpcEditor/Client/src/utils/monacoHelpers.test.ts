import { describe, it, expect, vi } from 'vitest';
import { mapSeverity, mapCompletionItemKind, mapToMonacoCompletionItem, mapToMonacoCodeAction, defaultSnippets, SHARP_PAD_THEME, updateEditorMarkers } from './monacoHelpers';
import * as monaco from 'monaco-editor';

// Mock monaco-editor enums
vi.mock('monaco-editor', () => {
  return {
    MarkerSeverity: {
      Error: 8,
      Warning: 4,
      Info: 2,
      Hint: 1
    },
    languages: {
      CompletionItemKind: {
        Method: 0,
        Function: 1,
        Constructor: 2,
        Field: 3,
        Variable: 4,
        Class: 5,
        Struct: 6,
        Interface: 7,
        Module: 8,
        Property: 9,
        Event: 10,
        Operator: 11,
        Unit: 12,
        Value: 13,
        Constant: 14,
        Enum: 15,
        EnumMember: 16,
        Keyword: 17,
        Text: 18,
        Color: 19,
        File: 20,
        Reference: 21,
        Customcolor: 22,
        Folder: 23,
        TypeParameter: 24,
        User: 25,
        Issue: 26,
        Snippet: 27
      },
      CompletionItemInsertTextRule: {
        InsertAsSnippet: 4
      }
    },
    editor: {
        // partial mock if needed
    }
  };
});

describe('monacoHelpers', () => {
  describe('mapSeverity', () => {
    it('should map error correctly', () => {
      expect(mapSeverity('Error')).toBe(monaco.MarkerSeverity.Error);
      expect(mapSeverity('error')).toBe(monaco.MarkerSeverity.Error);
    });

    it('should map warning correctly', () => {
      expect(mapSeverity('Warning')).toBe(monaco.MarkerSeverity.Warning);
    });

    it('should map info correctly', () => {
      expect(mapSeverity('Info')).toBe(monaco.MarkerSeverity.Info);
    });

    it('should default to Hint', () => {
      expect(mapSeverity('unknown')).toBe(monaco.MarkerSeverity.Hint);
      expect(mapSeverity('')).toBe(monaco.MarkerSeverity.Hint);
    });
  });

  describe('mapCompletionItemKind', () => {
    it('should map Method', () => {
      expect(mapCompletionItemKind('Method')).toBe(monaco.languages.CompletionItemKind.Method);
    });

    it('should map Class', () => {
      expect(mapCompletionItemKind('Class')).toBe(monaco.languages.CompletionItemKind.Class);
    });

    it('should default to Text', () => {
      expect(mapCompletionItemKind('Unknown')).toBe(monaco.languages.CompletionItemKind.Text);
    });
  });

  describe('mapToMonacoCompletionItem', () => {
    it('should map item correctly with provided range', () => {
        const item = {
            displayText: 'source',
            kind: 'Local',
            sortText: '0001_source',
            insertText: 'source'
        };
        const range = {
            startLineNumber: 1,
            startColumn: 1,
            endLineNumber: 1,
            endColumn: 3
        } as monaco.IRange;

        const result = mapToMonacoCompletionItem(item, range);

        expect(result.label).toBe('source');
        expect(result.kind).toBe(monaco.languages.CompletionItemKind.Variable);
        expect(result.sortText).toBe('0001_source');
        expect(result.insertText).toBe('source');
        expect(result.range).toBe(range);
    });
  });

  describe('mapToMonacoCodeAction', () => {
    it('should map quick fix to code action', () => {
        const fix = {
            title: 'Fix typo',
            newText: 'Console.WriteLine',
            spanStart: 10,
            spanLength: 5
        };
        const modelUri = { path: '/test.cs' } as monaco.Uri;
        const getPositionAt = vi.fn((offset) => {
            // Mock implementation: 10 -> L1, C11. 15 -> L1, C16
            if (offset === 10) return { lineNumber: 1, column: 11 } as monaco.IPosition;
            if (offset === 15) return { lineNumber: 1, column: 16 } as monaco.IPosition;
            return { lineNumber: 1, column: 1 } as monaco.IPosition;
        });

        const result = mapToMonacoCodeAction(fix, modelUri, getPositionAt);

        expect(result.title).toBe('Fix typo');
        expect(result.kind).toBe('quickfix');
        expect(result.isPreferred).toBe(true);
        expect(result.edit?.edits).toHaveLength(1);
        
        const edit = result.edit!.edits[0] as any;
        expect(edit.resource).toBe(modelUri);
        expect(edit.textEdit.text).toBe('Console.WriteLine');
        expect(edit.textEdit.range).toEqual({
            startLineNumber: 1,
            startColumn: 11,
            endLineNumber: 1,
            endColumn: 16
        });
    });
  });

  describe('defaultSnippets', () => {
    it('should contain expected snippets', () => {
      const labels = defaultSnippets.map(s => s.label);
      expect(labels).toContain('cw');
      expect(labels).toContain('for');
      expect(labels).toContain('foreach');
      expect(labels).toContain('prop');
      expect(labels).toContain('if');
      expect(labels).toContain('else');
      expect(labels).toContain('while');
      expect(labels).toContain('try');
      expect(labels).toContain('dump');
    });

    it('should have snippet kind', () => {
      defaultSnippets.forEach(s => {
        expect(s.kind).toBe(monaco.languages.CompletionItemKind.Snippet);
      });
    });

    it('should have high priority sortText', () => {
        defaultSnippets.forEach(s => {
            expect(s.sortText).toBe('00');
        });
    });
  });

  describe('SHARP_PAD_THEME', () => {
    it('should include operator and delimiter tokens', () => {
      const tokens = SHARP_PAD_THEME.rules.map(r => r.token);
      expect(tokens).toContain('operator');
      expect(tokens).toContain('delimiter');
    });

    it('should include C# specific tokens', () => {
        const tokens = SHARP_PAD_THEME.rules.map(r => r.token);
        expect(tokens).toContain('class');
        expect(tokens).toContain('interface');
        expect(tokens).toContain('namespace');
    });
  });

  describe('updateEditorMarkers', () => {
    it('should set model markers', () => {
      const mockSetModelMarkers = vi.fn();
      const mockGetModel = vi.fn().mockReturnValue({});
      monaco.editor.setModelMarkers = mockSetModelMarkers;

      const mockEditor = {
        getModel: mockGetModel
      } as any;

      const diagnostics = [
        { severity: 'Error', message: 'Test error', line: 0, column: 0 }
      ];

      updateEditorMarkers(mockEditor, diagnostics);

      expect(mockGetModel).toHaveBeenCalled();
      expect(mockSetModelMarkers).toHaveBeenCalledWith(
        expect.anything(),
        'sharp-csharp',
        expect.arrayContaining([
            expect.objectContaining({
                message: 'Test error',
                severity: monaco.MarkerSeverity.Error
            })
        ])
      );
    });
  });
});
