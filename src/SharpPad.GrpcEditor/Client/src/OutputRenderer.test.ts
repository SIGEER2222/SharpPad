import { describe, it, expect } from 'vitest';
import { extractJson } from './OutputRenderer';

describe('OutputRenderer Logic', () => {
    it('should parse user provided multiline dump', () => {
        const input = 'Output:\n' +
            'Hello from SharpPad gRPC Editor!\n' +
            '$$DUMP$${\n' +
            '  "title": "Even Numbers",\n' +
            '  "data": [\n' +
            '    2,\n' +
            '    4\n' +
            '  ]\n' +
            '}\n' +
            '2\n' +
            '4';
        
        const dumpIdx = input.indexOf('$$DUMP$$');
        expect(dumpIdx).toBeGreaterThan(-1);
        
        const jsonStart = dumpIdx + 8;
        const result = extractJson(input, jsonStart);
        
        expect(result).not.toBeNull();
        expect(result!.json).toContain('"title": "Even Numbers"');
        expect(result!.json).toContain('}');
        
        // Verify it parses as JSON
        const parsed = JSON.parse(result!.json);
        expect(parsed.title).toBe('Even Numbers');
        expect(parsed.data).toEqual([2, 4]);
    });

    it('should handle multiple dumps', () => {
        // Use string concatenation to avoid template literal issues
        const json1 = JSON.stringify({a:1});
        const json2 = JSON.stringify({b:2});
        const input = '$$DUMP$$' + json1 + ' text $$DUMP$$' + json2;
        
        // First dump
        const firstIdx = input.indexOf('$$DUMP$$');
        const firstRes = extractJson(input, firstIdx + 8);
        expect(JSON.parse(firstRes!.json)).toEqual({a:1});
        
        // Second dump
        const remaining = input.substring(firstIdx + 8 + firstRes!.length);
        const secondIdx = remaining.indexOf('$$DUMP$$');
        const secondRes = extractJson(remaining, secondIdx + 8);
        expect(JSON.parse(secondRes!.json)).toEqual({b:2});
    });
});
