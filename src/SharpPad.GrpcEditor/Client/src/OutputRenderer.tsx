import React from 'react';
import DataGrid from './components/DataGrid';

interface OutputRendererProps {
    content: string;
}

const OutputRenderer: React.FC<OutputRendererProps> = ({ content }) => {
    if (!content) return null;

    const elements: React.ReactNode[] = [];
    let remaining = content;
    let keyCounter = 0;

    while (remaining) {
        const dumpIdx = remaining.indexOf('$$DUMP$$');
        
        if (dumpIdx === -1) {
            // No more dumps, render rest as text
            elements.push(
                <div key={`text-${keyCounter++}`} style={{ whiteSpace: 'pre-wrap' }}>
                    {remaining}
                </div>
            );
            break;
        }

        // Render text before dump
        if (dumpIdx > 0) {
            elements.push(
                <div key={`text-${keyCounter++}`} style={{ whiteSpace: 'pre-wrap' }}>
                    {remaining.substring(0, dumpIdx)}
                </div>
            );
        }

        // Try to extract JSON
        const jsonStart = dumpIdx + 8; // Length of $$DUMP$$
        const extraction = extractJson(remaining, jsonStart);

        if (extraction) {
            try {
                const payload = JSON.parse(extraction.json);
                elements.push(
                    <DataGrid 
                        key={`dump-${keyCounter++}`} 
                        data={Array.isArray(payload.data) ? payload.data : [payload.data]} 
                        title={payload.title} 
                    />
                );
                remaining = remaining.substring(jsonStart + extraction.length);
            } catch (e) {
                // Parse failed, treat as text
                elements.push(
                    <div key={`err-${keyCounter++}`} style={{ whiteSpace: 'pre-wrap', color: '#ce9178' }}>
                        $$DUMP$$
                    </div>
                );
                remaining = remaining.substring(jsonStart);
            }
        } else {
            // Extraction failed (no valid JSON found), treat marker as text
            elements.push(
                <div key={`text-${keyCounter++}`} style={{ whiteSpace: 'pre-wrap' }}>
                    $$DUMP$$
                </div>
            );
            remaining = remaining.substring(jsonStart);
        }
    }

    return <>{elements}</>;
};

// Helper to extract a balanced JSON object string
export function extractJson(str: string, start: number): { json: string, length: number } | null {
    let depth = 0;
    let inString = false;
    let escape = false;
    let started = false;

    for (let i = start; i < str.length; i++) {
        const char = str[i];

        if (!started) {
            if (char.trim() === '') continue; // Skip whitespace
            if (char === '{') {
                started = true;
                depth = 1;
                continue;
            }
            // If strictly starts with non-brace (and not whitespace), it's not a JSON object
            return null; 
        }

        if (inString) {
            if (escape) {
                escape = false;
            } else if (char === '\\') {
                escape = true;
            } else if (char === '"') {
                inString = false;
            }
        } else {
            if (char === '"') {
                inString = true;
            } else if (char === '{') {
                depth++;
            } else if (char === '}') {
                depth--;
                if (depth === 0) {
                    // Found end
                    const length = i - start + 1;
                    return { json: str.substring(start, i + 1), length };
                }
            }
        }
    }

    return null; // Unbalanced
}

export default OutputRenderer;
