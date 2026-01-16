import React, { useState, useEffect } from 'react';
import { GrpcClient } from '../GrpcClient';
import { editor } from '../proto/editor';

interface ConnectionManagerProps {
    client: GrpcClient;
    activeConnectionId: string | null;
    onConnectionSelect: (id: string | null) => void;
    onClose: () => void;
    onConnected?: (conn: editor.IConnectionInfo, files: editor.ISourceFile[]) => void;
}

const ConnectionManager: React.FC<ConnectionManagerProps> = ({ client, activeConnectionId, onConnectionSelect, onClose, onConnected }) => {
    const [connections, setConnections] = useState<editor.IConnectionInfo[]>([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentConn, setCurrentConn] = useState<editor.IConnectionInfo>({
        name: '',
        provider: 'SqlServer',
        connectionString: ''
    });
    const [testResult, setTestResult] = useState<{ success: boolean, message: string } | null>(null);
    const [isConnecting, setIsConnecting] = useState(false);

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

    const handleConnect = async (conn: editor.IConnectionInfo) => {
        setIsConnecting(true);
        setTestResult(null);
        try {
            const reply = await client.call(
                'editor.EditorService',
                'ConnectToDatabase',
                { connectionId: conn.id },
                editor.ConnectRequest,
                editor.ConnectReply
            );
            if (reply.success) {
                onConnectionSelect(conn.id || null);
                if (onConnected) onConnected(conn, reply.generatedFiles || []);
                onClose();
            } else {
                setTestResult({ success: false, message: reply.errorMessage || 'Connection failed' });
            }
        } catch (e: any) {
            setTestResult({ success: false, message: e.message });
        } finally {
            setIsConnecting(false);
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

    const renderEditor = () => (
        <div className="flex-col" style={{ gap: '15px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: 'var(--fg-primary)' }}>{currentConn.id ? 'Edit Connection' : 'New Connection'}</h3>
            
            <div className="flex-col">
                <label style={{ marginBottom: '5px', color: 'var(--fg-secondary)', fontSize: '12px' }}>Name</label>
                <input 
                    className="input"
                    value={currentConn.name || ''} 
                    onChange={e => setCurrentConn({...currentConn, name: e.target.value})} 
                    placeholder="My Database"
                />
            </div>

            <div className="flex-col">
                <label style={{ marginBottom: '5px', color: 'var(--fg-secondary)', fontSize: '12px' }}>Provider</label>
                <select 
                    className="input"
                    value={currentConn.provider || 'SqlServer'} 
                    onChange={e => setCurrentConn({...currentConn, provider: e.target.value})}
                >
                    <option value="SqlServer">SQL Server</option>
                    <option value="PostgreSQL">PostgreSQL</option>
                    <option value="MySql">MySQL</option>
                    <option value="Sqlite">SQLite</option>
                </select>
            </div>

            <div className="flex-col">
                <label style={{ marginBottom: '5px', color: 'var(--fg-secondary)', fontSize: '12px' }}>Connection String</label>
                <textarea 
                    className="input"
                    style={{ height: '80px', fontFamily: 'monospace', resize: 'vertical' }}
                    value={currentConn.connectionString || ''} 
                    onChange={e => setCurrentConn({...currentConn, connectionString: e.target.value})} 
                    placeholder="Server=localhost;Database=mydb;..."
                />
            </div>
            
            {testResult && (
                <div style={{ 
                    color: testResult.success ? 'var(--success-color)' : 'var(--error-color)', 
                    fontSize: '13px',
                    padding: '8px',
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '4px'
                }}>
                    {testResult.success ? '✅ ' : '❌ '}
                    {testResult.message}
                </div>
            )}

            <div className="flex-row items-center" style={{ gap: '10px', marginTop: '10px' }}>
                <button className="btn btn-secondary" onClick={handleTest}>Test Connection</button>
                <div className="flex-1" />
                <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                <button className="btn" onClick={handleSave}>Save</button>
            </div>
        </div>
    );

    const renderList = () => (
        <div className="flex-col" style={{ height: '100%' }}>
            <div className="flex-row justify-between items-center" style={{ marginBottom: '15px' }}>
                <h3 style={{ margin: 0, color: 'var(--fg-primary)' }}>Connections</h3>
                <button className="btn" onClick={handleNew}>+ New Connection</button>
            </div>
            
            <div className="flex-1" style={{ overflowY: 'auto', marginBottom: '15px' }}>
                {connections.length === 0 ? (
                    <div style={{ padding: '20px', textAlign: 'center', color: 'var(--fg-tertiary)' }}>
                        No connections defined
                    </div>
                ) : (
                    connections.map(c => (
                        <div key={c.id} 
                            className="flex-row items-center justify-between"
                            style={{
                                padding: '10px',
                                marginBottom: '5px',
                                borderRadius: '4px',
                                background: activeConnectionId === c.id ? 'rgba(0, 122, 204, 0.2)' : 'var(--bg-tertiary)',
                                border: activeConnectionId === c.id ? '1px solid var(--focus-border)' : '1px solid transparent',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleConnect(c)}
                        >
                            <div className="flex-col">
                                <span style={{ fontWeight: 600, color: 'var(--fg-primary)' }}>{c.name}</span>
                                <span style={{ fontSize: '11px', color: 'var(--fg-tertiary)' }}>{c.provider}</span>
                            </div>
                            <div className="flex-row" style={{ gap: '5px' }}>
                                <button className="btn-icon" title="Connect" onClick={(e) => { e.stopPropagation(); handleConnect(c); }}>🔌</button>
                                <button className="btn-icon" title="Edit" onClick={(e) => { e.stopPropagation(); handleEdit(c); }}>✎</button>
                                <button className="btn-icon" title="Delete" onClick={(e) => { e.stopPropagation(); handleDelete(c.id!); }}>🗑</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            
            <div className="flex-row justify-end">
                <button className="btn btn-secondary" onClick={onClose} disabled={isConnecting}>Close</button>
            </div>
        </div>
    );

    return (
        <div className="modal-overlay" onClick={(e) => { if (!isConnecting && e.target === e.currentTarget) onClose(); }}>
            <div className="modal-content" style={{ padding: '20px', position: 'relative' }}>
                {isEditing ? renderEditor() : renderList()}
            </div>
        </div>
    );
};

export default ConnectionManager;
