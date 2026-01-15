import React from 'react';
import DumpTable from './DumpTable';

interface OutputRendererProps {
    content: string;
}

const OutputRenderer: React.FC<OutputRendererProps> = ({ content }) => {
    if (!content) return null;

    const lines = content.split(/\r?\n/);
    const elements: React.ReactNode[] = [];
    
    let currentText = '';
    
    lines.forEach((line, i) => {
        const trimmed = line.trim();
        // Check if line looks like a dump command
        // Note: Backend might output $$DUMP$${...}
        const dumpIndex = line.indexOf('$$DUMP$$');
        
        if (dumpIndex !== -1) {
            // Push text before the dump marker if any
            const prefix = line.substring(0, dumpIndex);
            if (prefix || currentText) {
                elements.push(
                    <div key={`text-pre-${i}`} style={{ whiteSpace: 'pre-wrap' }}>
                        {currentText + prefix}
                    </div>
                );
                currentText = '';
            }

            try {
                const jsonStr = line.substring(dumpIndex + 8);
                const payload = JSON.parse(jsonStr);
                elements.push(
                    <DumpTable 
                        key={`dump-${i}`} 
                        data={payload.data} 
                        title={payload.title} 
                    />
                );
            } catch (e) {
                // Fallback: render as text if parse fails
                elements.push(
                    <div key={`err-${i}`} style={{ whiteSpace: 'pre-wrap', color: '#ce9178' }}>
                        {line}
                    </div>
                );
            }
        } else {
            currentText += line + '\n';
        }
    });
    
    if (currentText) {
        elements.push(<div key="text-end" style={{ whiteSpace: 'pre-wrap' }}>{currentText}</div>);
    }

    return <>{elements}</>;
};

export default OutputRenderer;
