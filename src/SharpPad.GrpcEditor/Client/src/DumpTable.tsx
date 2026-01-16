import React, { useState, useMemo } from 'react';

interface DumpTableProps {
    data: any;
    title?: string;
}

const DumpTable: React.FC<DumpTableProps> = ({ data, title }) => {
    const [filter, setFilter] = useState('');
    const [sortCol, setSortCol] = useState<string | null>(null);
    const [sortAsc, setSortAsc] = useState(true);
    const [page, setPage] = useState(1);
    const pageSize = 50; // Fixed page size for simplicity, can be made adjustable

    const rawList = Array.isArray(data) ? data : [data];
    
    // Normalize data: ensure objects
    const list = rawList.map(item => {
        if (typeof item === 'object' && item !== null) return item;
        return { Value: item };
    });

    // Get columns
    const columns = useMemo(() => {
        if (list.length === 0) return [];
        const keys = new Set<string>();
        list.forEach(item => Object.keys(item).forEach(k => keys.add(k)));
        return Array.from(keys);
    }, [list]);

    // Filter & Sort
    const processedData = useMemo(() => {
        let res = [...list];
        
        if (filter) {
            const lowerFilter = filter.toLowerCase();
            res = res.filter(item => 
                Object.values(item).some(v => 
                    String(v).toLowerCase().includes(lowerFilter)
                )
            );
        }

        if (sortCol) {
            res.sort((a, b) => {
                const va = a[sortCol];
                const vb = b[sortCol];
                if (va < vb) return sortAsc ? -1 : 1;
                if (va > vb) return sortAsc ? 1 : -1;
                return 0;
            });
        }

        return res;
    }, [list, filter, sortCol, sortAsc]);

    const totalPages = Math.ceil(processedData.length / pageSize);

    const paginatedData = useMemo(() => {
        const start = (page - 1) * pageSize;
        return processedData.slice(start, start + pageSize);
    }, [processedData, page, pageSize]);

    // Reset page when filter changes
    React.useEffect(() => {
        setPage(1);
    }, [filter, list]);

    const handleHeaderClick = (col: string) => {
        if (sortCol === col) {
            setSortAsc(!sortAsc);
        } else {
            setSortCol(col);
            setSortAsc(true);
        }
    };

    return (
        <div style={{ 
            backgroundColor: '#252526', 
            border: '1px solid #454545', 
            borderRadius: '4px', 
            margin: '10px 0', 
            fontFamily: 'Consolas, monospace',
            fontSize: '13px',
            overflow: 'hidden'
        }}>
            <div style={{ 
                padding: '8px', 
                backgroundColor: '#333333', 
                borderBottom: '1px solid #454545',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span style={{ fontWeight: 'bold', color: '#fff' }}>{title || 'Dump Result'}</span>
                <input 
                    id={`filter-${title || 'dump'}`}
                    name="filter"
                    type="text" 
                    placeholder="Filter..." 
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                    style={{ 
                        backgroundColor: '#3c3c3c', 
                        border: '1px solid #555', 
                        color: '#ddd', 
                        padding: '4px 8px',
                        borderRadius: '2px',
                        outline: 'none'
                    }}
                />
            </div>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', color: '#d4d4d4' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#2d2d2d' }}>
                            {columns.map(col => (
                                <th 
                                    key={col} 
                                    onClick={() => handleHeaderClick(col)}
                                    style={{ 
                                        textAlign: 'left', 
                                        padding: '8px', 
                                        borderBottom: '1px solid #454545',
                                        cursor: 'pointer',
                                        userSelect: 'none'
                                    }}
                                >
                                    {col} {sortCol === col ? (sortAsc ? '▲' : '▼') : ''}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, i) => (
                            <tr key={i} style={{ borderBottom: '1px solid #3a3a3a', backgroundColor: i % 2 === 0 ? 'transparent' : '#2a2a2a' }}>
                                {columns.map(col => (
                                    <td key={col} style={{ padding: '6px 8px', verticalAlign: 'top' }}>
                                        {renderValue(row[col])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {processedData.length === 0 && (
                            <tr>
                                <td colSpan={columns.length} style={{ padding: '10px', textAlign: 'center', color: '#888' }}>
                                    No data
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div style={{ 
                padding: '4px 8px', 
                color: '#888', 
                fontSize: '11px', 
                borderTop: '1px solid #454545',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    <button 
                        onClick={() => setPage(p => Math.max(1, p - 1))} 
                        disabled={page === 1}
                        style={{ background: 'none', border: 'none', color: page === 1 ? '#555' : '#0e639c', cursor: page === 1 ? 'default' : 'pointer' }}
                    >
                        ◀ Prev
                    </button>
                    <span style={{ margin: '0 8px' }}>
                        Page {page} of {Math.max(1, totalPages)}
                    </span>
                    <button 
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))} 
                        disabled={page >= totalPages}
                        style={{ background: 'none', border: 'none', color: page >= totalPages ? '#555' : '#0e639c', cursor: page >= totalPages ? 'default' : 'pointer' }}
                    >
                        Next ▶
                    </button>
                </div>
                <div>
                    Total: {processedData.length} items
                </div>
            </div>
        </div>
    );
};

const renderValue = (val: any): React.ReactNode => {
    if (val === null) return <span style={{ color: '#569cd6' }}>null</span>;
    if (val === undefined) return <span style={{ color: '#569cd6' }}>undefined</span>;
    if (typeof val === 'boolean') return <span style={{ color: '#569cd6' }}>{String(val)}</span>;
    if (typeof val === 'number') return <span style={{ color: '#b5cea8' }}>{val}</span>;
    if (typeof val === 'string') return <span style={{ color: '#ce9178' }}>"{val}"</span>;
    if (typeof val === 'object') return <span style={{ color: '#9cdcfe' }}>{'{...}'}</span>;
    return String(val);
};

export default DumpTable;
