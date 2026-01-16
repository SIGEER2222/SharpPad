import React, { useState, useMemo } from 'react';
import type { SourceFile } from '../hooks/useFileSystem';

interface FileExplorerProps {
    files: SourceFile[];
    activeFileId: string;
    onSelect: (id: string) => void;
    onAdd: (name: string, type: 'script' | 'helper', path: string) => void;
    onRemove: (id: string) => void;
}

interface TreeNode {
    name: string;
    path: string; // Full path to this node (folder path)
    type: 'folder' | 'file';
    fileId?: string;
    fileType?: 'script' | 'helper';
    children: Record<string, TreeNode>;
}

const buildTree = (files: SourceFile[]): TreeNode => {
    const root: TreeNode = { name: '', path: '', type: 'folder', children: {} };

    files.forEach(file => {
        const parts = file.path ? file.path.split('/') : [];
        let current = root;

        // Traverse/Create folders
        let currentPath = '';
        parts.forEach(part => {
            if (!part) return;
            currentPath = currentPath ? `${currentPath}/${part}` : part;
            if (!current.children[part]) {
                current.children[part] = {
                    name: part,
                    path: currentPath,
                    type: 'folder',
                    children: {}
                };
            }
            current = current.children[part];
        });

        // Add file
        current.children[file.name] = {
            name: file.name,
            path: file.path,
            type: 'file',
            fileId: file.id,
            fileType: file.type,
            children: {}
        };
    });

    return root;
};

const FileTreeItem: React.FC<{
    node: TreeNode;
    depth: number;
    activeFileId: string;
    onSelect: (id: string) => void;
    onRemove: (id: string) => void;
    filesCount: number;
}> = ({ node, depth, activeFileId, onSelect, onRemove, filesCount }) => {
    const [expanded, setExpanded] = useState(true);

    const paddingLeft = `${depth * 15 + 10}px`;

    if (node.type === 'folder') {
        const sortedChildren = Object.values(node.children).sort((a, b) => {
            if (a.type !== b.type) return a.type === 'folder' ? -1 : 1;
            return a.name.localeCompare(b.name);
        });

        if (node.name === '') { // Root
            return (
                <>
                    {sortedChildren.map(child => (
                        <FileTreeItem 
                            key={child.name + child.path} 
                            node={child} 
                            depth={depth} 
                            activeFileId={activeFileId} 
                            onSelect={onSelect} 
                            onRemove={onRemove}
                            filesCount={filesCount}
                        />
                    ))}
                </>
            );
        }

        return (
            <div>
                <div 
                    className="file-item"
                    style={{ paddingLeft, cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#ccc' }}
                    onClick={() => setExpanded(!expanded)}
                >
                    <span style={{ marginRight: '5px', fontSize: '10px' }}>{expanded ? '▼' : '▶'}</span>
                    <span>📂 {node.name}</span>
                </div>
                {expanded && sortedChildren.map(child => (
                    <FileTreeItem 
                        key={child.name + child.path} 
                        node={child} 
                        depth={depth + 1} 
                        activeFileId={activeFileId} 
                        onSelect={onSelect} 
                        onRemove={onRemove}
                        filesCount={filesCount}
                    />
                ))}
            </div>
        );
    }

    return (
        <div 
            className="file-item"
            onClick={() => onSelect(node.fileId!)}
            style={{ 
                paddingLeft,
                cursor: 'pointer', 
                backgroundColor: node.fileId === activeFileId ? '#37373d' : 'transparent',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderLeft: node.fileId === activeFileId ? '2px solid #0e639c' : '2px solid transparent'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                <span title={node.fileType}>{node.fileType === 'script' ? '🚀' : '📦'}</span>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{node.name}</span>
            </div>
            {filesCount > 1 && (
                <span 
                    onClick={(e) => { e.stopPropagation(); if(confirm('Delete ' + node.name + '?')) onRemove(node.fileId!); }}
                    style={{ color: '#888', fontSize: '10px', cursor: 'pointer', marginLeft: '5px' }}
                    className="delete-btn"
                    title="Delete"
                >
                    ❌
                </span>
            )}
        </div>
    );
};

const FileExplorer: React.FC<FileExplorerProps> = ({ files, activeFileId, onSelect, onAdd, onRemove }) => {
    const [isAdding, setIsAdding] = useState(false);
    const [newName, setNewName] = useState(''); // Can include path: "Folder/File.cs"
    const [newType, setNewType] = useState<'script' | 'helper'>('script');

    const tree = useMemo(() => buildTree(files), [files]);

    const handleAdd = () => {
        if (newName) {
            const parts = newName.split('/');
            const fileName = parts.pop()!;
            const path = parts.join('/'); // "Models/DTOs"
            
            if (fileName) {
                onAdd(fileName, newType, path);
                setIsAdding(false);
                setNewName('');
            }
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: '#252526', color: '#ccc', fontSize: '13px' }}>
            <div style={{ padding: '10px', fontWeight: 'bold', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>EXPLORER</span>
                <button 
                    onClick={() => setIsAdding(!isAdding)} 
                    style={{ background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '16px' }}
                    title="Add File"
                >
                    +
                </button>
            </div>
            
            {isAdding && (
                <div style={{ padding: '10px', backgroundColor: '#333' }}>
                    <div style={{ fontSize: '11px', color: '#aaa', marginBottom: '4px' }}>Path/Filename.cs</div>
                    <input 
                        id="new-file-name"
                        name="new-file-name"
                        value={newName} 
                        onChange={e => setNewName(e.target.value)} 
                        placeholder="Models/User.cs" 
                        style={{ width: '100%', marginBottom: '5px', backgroundColor: '#3c3c3c', border: '1px solid #555', color: '#fff', padding: '2px' }}
                        autoFocus
                        onKeyDown={e => e.key === 'Enter' && handleAdd()}
                    />
                    <select 
                        id="new-file-type"
                        name="new-file-type"
                        value={newType} 
                        onChange={e => setNewType(e.target.value as any)}
                        style={{ width: '100%', marginBottom: '5px', backgroundColor: '#3c3c3c', border: '1px solid #555', color: '#fff', padding: '2px' }}
                    >
                        <option value="script">Script (Entry)</option>
                        <option value="helper">Helper (Class)</option>
                    </select>
                    <button 
                        onClick={handleAdd} 
                        style={{ width: '100%', backgroundColor: '#0e639c', color: 'white', border: 'none', padding: '4px', cursor: 'pointer' }}
                    >
                        Create
                    </button>
                </div>
            )}

            <div style={{ flex: 1, overflowY: 'auto' }}>
                <FileTreeItem 
                    node={tree} 
                    depth={0} 
                    activeFileId={activeFileId} 
                    onSelect={onSelect} 
                    onRemove={onRemove}
                    filesCount={files.length}
                />
            </div>
            <style>{`
                .file-item:hover { background-color: #2a2d2e !important; }
                .delete-btn { opacity: 0; }
                .file-item:hover .delete-btn { opacity: 1; }
            `}</style>
        </div>
    );
};

export default FileExplorer;
