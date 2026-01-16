import React, { useState, useEffect } from 'react';
import { GrpcClient } from '../GrpcClient';
import { editor } from '../proto/editor';

interface ConnectionManagerProps {
    client: GrpcClient;
    activeConnectionId: string | null;
    onConnectionSelect: (id: string | null) => void;
    onClose: () => void;
}

const ConnectionManager: React.FC<ConnectionManagerProps> = ({ client, activeConnectionId, onConnectionSelect, onClose }) => {
    const [connections, setConnections] = useState<editor.IConnectionInfo[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentConn, setCurrentConn] = useState<editor.IConnectionInfo>({
        name: '',
        provider: 'SqlServer',
        connectionString: ''
    });
    const [testResult, setTestResult] = useState<{ success: boolean, message: string } | null>(null);

    const loadConnections = async () => {
        try {
            const reply = await client.call(
                'editor.EditorService',
                'GetConnections',
                {},
                editor.GetConnectionsRequest,
                editor.GetConnectionsReply
            );
            setConnections(reply.connections || []);
        } catch (e) {
            console.error('Failed to load connections:', e);
        }
    };

    useEffect(() => {
        loadConnections();
    }, []);

    const handleSave = async () => {
        try {
            const reply = await client.call(
                'editor.EditorService',
                'SaveConnection',
                { connection: currentConn },
                editor.SaveConnectionRequest,
                editor.SaveConnectionReply
            );
            if (reply.success) {
                await loadConnections();
                setIsEditing(false);
                setTestResult(null);
            } else {
                setTestResult({ success: false, message: reply.errorMessage || 'Unknown error' });
            }
        } catch (e: any) {
            setTestResult({ success: false, message: e.message });
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this connection?')) return;
        try {
            await client.call(
                'editor.EditorService',
                'DeleteConnection',
                { id },
                editor.DeleteConnectionRequest,
                editor.DeleteConnectionReply
            );
            await loadConnections();
            if (activeConnectionId === id) onConnectionSelect(null);
        } catch (e) {
            console.error(e);
        }
    };

    const handleTest = async () => {
        setTestResult({ success: false, message: 'Testing...' });
        try {
            const reply = await client.call(
                'editor.EditorService',
                'TestConnection',
                { provider: currentConn.provider, connectionString: currentConn.connectionString },
                editor.TestConnectionRequest,
                editor.TestConnectionReply
            );
            setTestResult({ success: reply.success, message: reply.message || (reply.success ? 'Success' : 'Failed') });
        } catch (e: any) {
            setTestResult({ success: false, message: e.message });
        }
    };

    const handleNew = () => {
        setCurrentConn({ name: 'New Connection', provider: 'SqlServer', connectionString: '' });
        setIsEditing(true);
        setTestResult(null);
    };

    const handleEdit = (conn: editor.IConnectionInfo) => {
        setCurrentConn({ ...conn });
        setIsEditing(true);
        setTestResult(null);
    };

    if (isEditing) {
        return (
            <div style={styles.container}>
                <h3>{currentConn.id ? 'Edit Connection' : 'New Connection'}</h3>
                <div style={styles.formGroup}>
                    <label>Name:</label>
                    <input 
                        style={styles.input}
                        value={currentConn.name || ''} 
                        onChange={e => setCurrentConn({...currentConn, name: e.target.value})} 
                    />
                </div>
                <div style={styles.formGroup}>
                    <label>Provider:</label>
                    <select 
                        style={styles.select}
                        value={currentConn.provider || 'SqlServer'} 
                        onChange={e => setCurrentConn({...currentConn, provider: e.target.value})}
                    >
                        <option value="SqlServer">SQL Server</option>
                        <option value="PostgreSQL">PostgreSQL</option>
                        <option value="MySql">MySQL</option>
                        <option value="Sqlite">SQLite</option>
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label>Connection String:</label>
                    <textarea 
                        style={{...styles.input, height: 80}}
                        value={currentConn.connectionString || ''} 
                        onChange={e => setCurrentConn({...currentConn, connectionString: e.target.value})} 
                    />
                </div>
                
                {testResult && (
                    <div style={{ 
                        color: testResult.success ? '#4ec9b0' : '#f14c4c', 
                        marginBottom: 10,
                        fontSize: '0.9em'
                    }}>
                        {testResult.message}
                    </div>
                )}

                <div style={styles.actions}>
                    <button style={styles.button} onClick={handleTest}>Test</button>
                    <div style={{flex: 1}} />
                    <button style={styles.secondaryButton} onClick={() => setIsEditing(false)}>Cancel</button>
                    <button style={styles.primaryButton} onClick={handleSave}>Save</button>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h3>Connections</h3>
                <button style={styles.button} onClick={handleNew}>+ New</button>
            </div>
            <div style={styles.list}>
                {connections.map(c => (
                    <div key={c.id} style={{
                        ...styles.listItem,
                        borderLeft: activeConnectionId === c.id ? '3px solid #4ec9b0' : '3px solid transparent',
                        background: activeConnectionId === c.id ? '#2d2d2d' : 'transparent'
                    }}>
                        <div style={{flex: 1, cursor: 'pointer'}} onClick={() => onConnectionSelect(c.id || null)}>
                            <div style={{fontWeight: 'bold'}}>{c.name}</div>
                            <div style={{fontSize: '0.8em', color: '#888'}}>{c.provider}</div>
                        </div>
                        <div style={styles.itemActions}>
                            <button style={styles.iconButton} onClick={() => handleEdit(c)}>✎</button>
                            <button style={styles.iconButton} onClick={() => handleDelete(c.id!)}>🗑</button>
                        </div>
                    </div>
                ))}
                {connections.length === 0 && <div style={{padding: 20, color: '#666', textAlign: 'center'}}>No connections defined</div>}
            </div>
            <div style={styles.footer}>
                <button style={styles.secondaryButton} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    container: {
        padding: 20,
        background: '#1e1e1e',
        color: '#d4d4d4',
        width: 400,
        maxHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #333',
        borderRadius: 4,
        boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    list: {
        flex: 1,
        overflowY: 'auto',
        border: '1px solid #333',
        marginBottom: 15,
        minHeight: 200
    },
    listItem: {
        display: 'flex',
        padding: '8px 12px',
        borderBottom: '1px solid #2d2d2d',
        alignItems: 'center'
    },
    itemActions: {
        display: 'flex',
        gap: 5
    },
    formGroup: {
        marginBottom: 15
    },
    input: {
        width: '100%',
        padding: 8,
        background: '#252526',
        border: '1px solid #3c3c3c',
        color: '#d4d4d4',
        marginTop: 5,
        borderRadius: 2
    },
    select: {
        width: '100%',
        padding: 8,
        background: '#252526',
        border: '1px solid #3c3c3c',
        color: '#d4d4d4',
        marginTop: 5
    },
    actions: {
        display: 'flex',
        gap: 10,
        marginTop: 10
    },
    footer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    button: {
        padding: '4px 12px',
        background: '#3c3c3c',
        border: 'none',
        color: '#d4d4d4',
        cursor: 'pointer',
        borderRadius: 2
    },
    primaryButton: {
        padding: '6px 16px',
        background: '#0e639c',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        borderRadius: 2
    },
    secondaryButton: {
        padding: '6px 16px',
        background: 'transparent',
        border: '1px solid #3c3c3c',
        color: '#d4d4d4',
        cursor: 'pointer',
        borderRadius: 2
    },
    iconButton: {
        background: 'transparent',
        border: 'none',
        color: '#888',
        cursor: 'pointer',
        padding: 4
    }
};

export default ConnectionManager;
