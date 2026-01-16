import React, { useState, useEffect } from 'react';
import { GrpcClient } from '../GrpcClient';
import { editor } from '../proto/editor';

interface NewProjectModalProps {
    client: GrpcClient;
    onCreate: (name: string, connectionId?: string) => void;
    onCancel: () => void;
}

const NewProjectModal: React.FC<NewProjectModalProps> = ({ client, onCreate, onCancel }) => {
    const [name, setName] = useState('New Project');
    const [connections, setConnections] = useState<editor.IConnectionInfo[]>([]);
    const [selectedConnId, setSelectedConnId] = useState<string>('');

    useEffect(() => {
        const fetchConnections = async () => {
            try {
                const reply = await client.call(
                    'editor.EditorService',
                    'GetConnections',
                    {},
                    editor.GetConnectionsRequest,
                    editor.GetConnectionsReply
                );
                if (reply.connections) {
                    setConnections(reply.connections);
                }
            } catch (e) {
                console.error('Failed to fetch connections', e);
            }
        };
        fetchConnections();
    }, [client]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onCreate(name, selectedConnId || undefined);
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 10000
        }}>
            <div style={{
                backgroundColor: '#252526', padding: '20px', borderRadius: '5px',
                border: '1px solid #454545', width: '400px', color: '#ccc'
            }}>
                <h3 style={{ marginTop: 0 }}>Create New Project</h3>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Project Name</label>
                        <input
                            autoFocus
                            value={name}
                            onChange={e => setName(e.target.value)}
                            style={{ width: '100%', padding: '5px', backgroundColor: '#3c3c3c', border: '1px solid #555', color: '#fff' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>Link to Connection (Optional)</label>
                        <select
                            value={selectedConnId}
                            onChange={e => setSelectedConnId(e.target.value)}
                            style={{ width: '100%', padding: '5px', backgroundColor: '#3c3c3c', border: '1px solid #555', color: '#fff' }}
                        >
                            <option value="">-- None --</option>
                            {connections.map(c => (
                                <option key={c.id} value={c.id || ''}>
                                    {c.name} {c.lastGeneratedDate ? `(Generated: ${new Date(c.lastGeneratedDate).toLocaleDateString()})` : ''}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <button type="button" onClick={onCancel} style={{ padding: '5px 10px', cursor: 'pointer' }}>Cancel</button>
                        <button type="submit" style={{ padding: '5px 10px', cursor: 'pointer', backgroundColor: '#0e639c', color: 'white', border: 'none' }}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewProjectModal;
