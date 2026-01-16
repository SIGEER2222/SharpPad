import React, { useEffect, useState } from 'react';
import { editor } from '../proto/editor';
import { GrpcClient } from '../GrpcClient';

interface SchemaBrowserProps {
    client: GrpcClient;
    activeConnectionId: string | null;
}

interface TreeNodeProps {
    label: string;
    children?: React.ReactNode;
    icon?: string;
    onExpand?: () => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ label, children, icon, onExpand }) => {
    const [expanded, setExpanded] = useState(false);
    
    const handleClick = () => {
        if (!expanded && onExpand) {
            onExpand();
        }
        setExpanded(!expanded);
    };
    
    return (
        <div>
            <div className="tree-node" onClick={handleClick}>
                <span style={{ fontSize: '10px', width: '16px', display: 'flex', justifyContent: 'center', opacity: children ? 1 : 0 }}>
                    {expanded ? '▼' : '▶'}
                </span>
                <span style={{ marginRight: '6px' }}>{icon}</span>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{label}</span>
            </div>
            {expanded && children && (
                <div className="tree-indent">
                    {children}
                </div>
            )}
        </div>
    );
};

const SchemaBrowser: React.FC<SchemaBrowserProps> = ({ client, activeConnectionId }) => {
    const [schema, setSchema] = useState<editor.IDatabaseSchema | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadSchema = async () => {
        if (!activeConnectionId) return;
        
        setLoading(true);
        setError(null);
        try {
            const req = editor.GetDatabaseSchemaRequest.create({
                connectionId: activeConnectionId,
                tablesOnly: true
            });
            
            const res = await client.call(
                'editor.EditorService',
                'GetDatabaseSchema',
                req,
                editor.GetDatabaseSchemaRequest,
                editor.GetDatabaseSchemaReply
            );

            if (res.success && res.schema) {
                setSchema(res.schema);
            } else {
                setError(res.errorMessage || 'Failed to load schema');
            }
        } catch (err: any) {
            setError(err.message || 'Error loading schema');
        } finally {
            setLoading(false);
        }
    };

    const loadTableColumns = async (tableName: string) => {
        if (!activeConnectionId) return;

        try {
            const req = editor.GetDatabaseSchemaRequest.create({
                connectionId: activeConnectionId,
                tableName: tableName
            });
            
            const res = await client.call(
                'editor.EditorService',
                'GetDatabaseSchema',
                req,
                editor.GetDatabaseSchemaRequest,
                editor.GetDatabaseSchemaReply
            );

            if (res.success && res.schema && res.schema.tables && res.schema.tables.length > 0) {
                const loadedTable = res.schema.tables[0];
                setSchema(prev => {
                    if (!prev || !prev.tables) return prev;
                    const newTables = prev.tables.map(t => {
                        if (t.name === tableName) {
                            return loadedTable;
                        }
                        return t;
                    });
                    return { ...prev, tables: newTables };
                });
            }
        } catch (err) {
            console.error('Failed to load columns for table ' + tableName, err);
        }
    };

    useEffect(() => {
        if (activeConnectionId) {
            loadSchema();
        } else {
            setSchema(null);
        }
    }, [activeConnectionId]);

    if (!activeConnectionId) {
        return (
            <div style={{ padding: '20px', color: 'var(--fg-tertiary)', textAlign: 'center', fontSize: '13px' }}>
                No connection selected
            </div>
        );
    }

    return (
        <div className="flex-col" style={{ height: '100%', fontFamily: 'Consolas, monospace', fontSize: '13px' }}>
            <div className="flex-row justify-between items-center" style={{ 
                padding: '8px 12px', 
                backgroundColor: 'var(--bg-secondary)', 
                borderBottom: '1px solid var(--border-color)' 
            }}>
                <span style={{ fontWeight: 600, color: 'var(--fg-secondary)' }}>DATABASE</span>
                <button 
                    className="btn-icon"
                    onClick={loadSchema} 
                    disabled={loading}
                    title="Refresh Schema"
                >
                    🔄
                </button>
            </div>
            
            <div className="flex-1" style={{ overflow: 'auto', padding: '8px 0' }}>
                {loading && <div style={{ padding: '10px', color: 'var(--fg-tertiary)', textAlign: 'center' }}>Loading schema...</div>}
                {error && <div style={{ padding: '10px', color: 'var(--error-color)' }}>{error}</div>}
                
                {schema && (
                    <TreeNode label={schema.name || 'Database'} icon="🛢️">
                        {schema.tables?.map((table, i) => (
                            <TreeNode 
                                key={i} 
                                label={table.name || 'Unknown Table'} 
                                icon="📅"
                                onExpand={() => {
                                    if (!table.columns || table.columns.length === 0) {
                                        loadTableColumns(table.name || '');
                                    }
                                }}
                            >
                                {(!table.columns || table.columns.length === 0) ? (
                                    <div style={{ padding: '4px 0 4px 24px', color: 'var(--fg-tertiary)', fontStyle: 'italic' }}>Loading columns...</div>
                                ) : (
                                    table.columns.map((col, j) => (
                                        <div key={j} className="tree-node" style={{ paddingLeft: '24px' }}>
                                            <span style={{ marginRight: '6px' }} title={col.isPrimaryKey ? "Primary Key" : "Column"}>
                                                {col.isPrimaryKey ? '🔑' : '🔹'}
                                            </span>
                                            <span title={col.dataType || ''} style={{ display: 'flex', alignItems: 'baseline' }}>
                                                <span style={{ color: 'var(--fg-primary)' }}>{col.name}</span>
                                                <span style={{ color: 'var(--fg-tertiary)', fontSize: '11px', marginLeft: '8px' }}>
                                                    {col.dataType}
                                                    {col.isNullable && '?'}
                                                </span>
                                            </span>
                                        </div>
                                    ))
                                )}
                            </TreeNode>
                        ))}
                    </TreeNode>
                )}
            </div>
        </div>
    );
};

export default SchemaBrowser;
