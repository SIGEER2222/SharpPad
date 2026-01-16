import { useState, useRef, useEffect } from 'react';
import 'monaco-editor/min/vs/editor/editor.main.css';
import { GrpcClient } from './GrpcClient';
import { editor } from './proto/editor';
import OutputRenderer from './OutputRenderer';
import ConnectionManager from './components/ConnectionManager';
import { useEditorSetup } from './hooks/useEditorSetup';
import { updateEditorMarkers } from './utils/monacoHelpers';
import { useFileSystem } from './hooks/useFileSystem';
import FileExplorer from './components/FileExplorer';

const BACKEND_URL = 'http://localhost:5255';
const client = new GrpcClient(BACKEND_URL);

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [output, setOutput] = useState<string>('');
  const [metrics, setMetrics] = useState<string>('');
  
  // Connection State
  const [showConnectionManager, setShowConnectionManager] = useState(false);
  const [activeConnectionId, setActiveConnectionId] = useState<string | null>(null);

  // Layout State
  const [outputWidth, setOutputWidth] = useState(() => window.innerWidth * 0.4);
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const [isDraggingOutput, setIsDraggingOutput] = useState(false);
  const [isDraggingSidebar, setIsDraggingSidebar] = useState(false);
  
  // File System & Project System
  const { 
      files, 
      activeFile, 
      activeFileId, 
      setActiveFileId, 
      updateFileContent, 
      addFile, 
      removeFile,
      projects,
      activeProjectId,
      setActiveProjectId,
      createProject,
      deleteProject
  } = useFileSystem();

  // Suppress "Canceled" errors from Monaco
  useEffect(() => {
    const handler = (event: PromiseRejectionEvent) => {
        if (event.reason === 'Canceled' || (event.reason && event.reason.message === 'Canceled')) {
            event.preventDefault(); // Suppress
        }
    };
    window.addEventListener('unhandledrejection', handler);
    return () => window.removeEventListener('unhandledrejection', handler);
  }, []);

  // Initialize Editor Hook
  const editorRef = useEditorSetup(containerRef, client, setMetrics, files, activeFileId, setActiveFileId);

  // Sync Editor Content with Active File
  useEffect(() => {
      if (editorRef.current && activeFile) {
          const currentContent = editorRef.current.getValue();
          if (currentContent !== activeFile.content) {
              editorRef.current.setValue(activeFile.content);
          }
      }
  }, [activeFileId]); // Only run when ID changes (switching files)

  // Listen for Editor Changes -> Update State
  useEffect(() => {
      if (!editorRef.current) return;
      
      const disposable = editorRef.current.onDidChangeModelContent(() => {
          if (editorRef.current && activeFileId) {
              updateFileContent(activeFileId, editorRef.current.getValue());
          }
      });
      
      return () => disposable.dispose();
  }, [activeFileId, editorRef.current]); // Re-bind when file changes

  // Dragging logic (Sidebar & Output)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (isDraggingOutput) {
            const newWidth = window.innerWidth - e.clientX;
            if (newWidth > 50 && newWidth < window.innerWidth - sidebarWidth - 100) {
                setOutputWidth(newWidth);
                editorRef.current?.layout();
            }
        }
        if (isDraggingSidebar) {
            const newWidth = e.clientX;
            if (newWidth > 150 && newWidth < window.innerWidth - outputWidth - 100) {
                setSidebarWidth(newWidth);
                editorRef.current?.layout();
            }
        }
    };

    const handleMouseUp = () => {
        setIsDraggingOutput(false);
        setIsDraggingSidebar(false);
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto';
    };

    if (isDraggingOutput || isDraggingSidebar) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'ew-resize';
        document.body.style.userSelect = 'none';
    }

    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingOutput, isDraggingSidebar, outputWidth, sidebarWidth]);

  const handleRun = async () => {
      if (!editorRef.current) return;
      const start = performance.now();
      setOutput('Running...');
      
      // Determine which code to run
      let codeToRun = '';
      if (activeFile?.type === 'script') {
          codeToRun = editorRef.current.getValue();
      } else {
          // If editing a helper, run the first script found
          const scriptFile = files.find(f => f.type === 'script');
          if (scriptFile) {
              codeToRun = scriptFile.content;
          } else {
              setOutput('Error: No script file found to run.');
              return;
          }
      }

      // Collect Helpers
      // Note: If active file is helper, its content in 'files' is updated via useEffect
      const extraFiles = files
          .filter(f => f.type === 'helper')
          .map(f => ({ 
              fileName: f.path ? `${f.path}/${f.name}` : f.name, 
              content: f.content 
          }));

      console.log('Sending Execution Request with:', {
          code: codeToRun,
          extraFiles
      });

      const req = editor.ExecuteCodeRequest.create({
          code: codeToRun,
          typeName: '', // Empty to let backend find Entry Point (supports Top-level statements)
          methodName: '',
          extraFiles: extraFiles,
          connectionId: activeConnectionId || undefined
      });

      try {
          const res = await client.call(
              'editor.EditorService',
              'ExecuteCode',
              req,
              editor.ExecuteCodeRequest,
              editor.ExecuteCodeReply
          );

          if (res.success) {
              const outputParts = [];
              if (res.consoleOutput) {
                  outputParts.push(res.consoleOutput);
              }
              if (res.output) {
                  if (outputParts.length > 0) outputParts.push('\n----------------------------------------\n');
                  outputParts.push(`Return: ${res.output}`);
              }
              setOutput(outputParts.join('') || 'Build Succeeded (No Output)');
              
              if (editorRef.current) {
                  updateEditorMarkers(editorRef.current, res.diagnostics || []);
              }

          } else {
              console.warn('Execution failed:', res);
              const errorMsg = res.errorMessage || 'Unknown Error';
              
              // Filter out duplicates and Hidden severity
              const uniqueDiagnostics = Array.from(new Set((res.diagnostics || [])
                  .filter((d: any) => d.severity !== 'Hidden')
                  .map((d: any) => `[${d.severity}] Line ${d.line}: ${d.message}`)
              ));
              
              const diagMsg = uniqueDiagnostics.join('\n');
              setOutput(`Error:\n${errorMsg}\n\nDiagnostics:\n${diagMsg}`);
              
              if (editorRef.current && res.diagnostics) {
                  updateEditorMarkers(editorRef.current, res.diagnostics);
              }
          }
          
          const duration = (performance.now() - start).toFixed(2);
          setMetrics(prev => {
              const lines = prev.split('\n').filter(l => !l.startsWith('Execution:'));
              return `Execution: ${duration}ms\n` + lines.join('\n');
          });
      } catch (err) {
          setOutput(`Execution failed: ${err}`);
      }
  };

  const handleCreateProject = () => {
      const name = prompt('Enter Project Name:', 'New Project');
      if (name) {
          createProject(name);
      }
  };

  const handleDeleteProject = () => {
      if (projects.length <= 1) {
          alert('Cannot delete the last project.');
          return;
      }
      if (confirm('Are you sure you want to delete this project? This cannot be undone.')) {
          deleteProject(activeProjectId);
      }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', margin: 0, padding: 0, overflow: 'hidden' }}>
        {/* Toolbar */}
        <div style={{ padding: '10px', backgroundColor: '#1e1e1e', borderBottom: '1px solid #333', display: 'flex', gap: '10px', justifyContent: 'space-between', height: '50px', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                {/* Project Switcher */}
                <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <select 
                        value={activeProjectId}
                        onChange={(e) => setActiveProjectId(e.target.value)}
                        style={{ backgroundColor: '#252526', color: '#ccc', border: '1px solid #333', padding: '4px', borderRadius: '4px' }}
                    >
                        {projects.map(p => (
                            <option key={p.id} value={p.id}>{p.name}</option>
                        ))}
                    </select>
                    <button 
                        onClick={handleCreateProject}
                        title="New Project"
                        style={{ background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '16px' }}
                    >
                        +
                    </button>
                    {projects.length > 1 && (
                        <button 
                            onClick={handleDeleteProject}
                            title="Delete Project"
                            style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontSize: '14px' }}
                        >
                            🗑️
                        </button>
                    )}
                </div>

                <div style={{ width: '1px', height: '20px', backgroundColor: '#444' }} />

                <button 
                    onClick={() => setShowConnectionManager(true)}
                    style={{ 
                        background: 'none', 
                        border: '1px solid #444', 
                        color: activeConnectionId ? '#4ec9b0' : '#ccc', 
                        cursor: 'pointer', 
                        fontSize: '14px',
                        padding: '4px 8px',
                        borderRadius: '4px'
                    }}
                    title="Manage Connections"
                >
                    {activeConnectionId ? '🗄️ Connected' : '🗄️ Connections'}
                </button>

                <div style={{ width: '1px', height: '20px', backgroundColor: '#444' }} />

                <button 
                    onClick={handleRun}
                    style={{ 
                        padding: '6px 16px', 
                        backgroundColor: '#0e639c', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '4px', 
                        cursor: 'pointer',
                        fontSize: '14px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    Run ▶
                </button>
                <div style={{ color: '#ccc', fontSize: '14px' }}>
                    {activeFile ? `${activeFile.name} ${activeFile.type === 'helper' ? '(Helper)' : ''}` : 'SharpPad'}
                </div>
            </div>
            <div style={{ color: '#888', fontSize: '12px', fontFamily: 'Consolas', textAlign: 'right', whiteSpace: 'pre', overflow: 'hidden' }}>
                {metrics}
            </div>
        </div>

        {/* Main Content: Sidebar | Editor | Output */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
            
            {/* Sidebar */}
            <div style={{ width: sidebarWidth, height: '100%', overflow: 'hidden' }}>
                <FileExplorer 
                    files={files} 
                    activeFileId={activeFileId} 
                    onSelect={setActiveFileId} 
                    onAdd={addFile} 
                    onRemove={removeFile}
                />
            </div>

            {/* Resizer 1 */}
            <div 
                onMouseDown={() => setIsDraggingSidebar(true)}
                style={{ 
                    width: '4px', 
                    height: '100%',
                    backgroundColor: isDraggingSidebar ? '#0e639c' : '#333', 
                    cursor: 'ew-resize',
                    zIndex: 10
                }} 
            />

            {/* Editor */}
            <div 
                style={{ 
                    flex: 1, 
                    position: 'relative', 
                    height: '100%'
                }} 
                ref={containerRef}
            ></div>
            
            {/* Resizer 2 */}
            <div 
                onMouseDown={() => setIsDraggingOutput(true)}
                style={{ 
                    width: '4px', 
                    height: '100%',
                    backgroundColor: isDraggingOutput ? '#0e639c' : '#333', 
                    cursor: 'ew-resize',
                    zIndex: 10
                }} 
            />

            {/* Output */}
            <div style={{ 
                width: `${outputWidth}px`, 
                height: '100%',
                backgroundColor: '#1e1e1e', 
                borderLeft: '1px solid #333', 
                padding: '10px', 
                color: '#d4d4d4', 
                overflow: 'auto', 
                fontFamily: 'Consolas, monospace',
                boxSizing: 'border-box'
            }}>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Output:</div>
                <div style={{ margin: 0 }}>
                    <OutputRenderer content={output} />
                </div>
            </div>
        </div>

        {/* Drag Overlay */}
        {(isDraggingOutput || isDraggingSidebar) && (
            <div 
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 9999,
                    cursor: 'ew-resize',
                    backgroundColor: 'transparent'
                }}
            />
        )}

        {showConnectionManager && (
            <ConnectionManager 
                client={client}
                activeConnectionId={activeConnectionId}
                onConnectionSelect={(id) => setActiveConnectionId(id)}
                onClose={() => setShowConnectionManager(false)}
            />
        )}
    </div>
  );
}

export default App;
