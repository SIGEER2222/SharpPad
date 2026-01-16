import React, { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, themeBalham, colorSchemeDark } from 'ag-grid-community';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

interface DataGridProps {
    data: any[];
    title?: string;
}

const DataGrid: React.FC<DataGridProps> = ({ data, title }) => {
    // 1. Determine columns from first row (basic inference)
    // If data is array of primitives, wrap in object
    const { gridData, columnDefs } = useMemo(() => {
        if (!data || data.length === 0) {
            return { gridData: [], columnDefs: [] };
        }

        let processedData = data;
        let cols: any[] = [];

        // Check if data is primitive
        const first = data[0];
        if (typeof first !== 'object' || first === null) {
            processedData = data.map(val => ({ value: val }));
            cols = [{ field: 'value', headerName: 'Value', flex: 1 }];
        } else {
            // Object array
            cols = Object.keys(first).map(key => ({
                field: key,
                headerName: key,
                filter: true,
                sortable: true,
                resizable: true,
                flex: 1
            }));
        }

        return { gridData: processedData, columnDefs: cols };
    }, [data]);

    const theme = themeBalham.withPart(colorSchemeDark);

    return (
        <div style={{ margin: '10px 0', border: '1px solid #333', borderRadius: '4px', overflow: 'hidden' }}>
            {title && (
                <div style={{ 
                    padding: '8px 12px', 
                    background: '#252526', 
                    borderBottom: '1px solid #333',
                    fontWeight: 'bold',
                    color: '#cccccc',
                    fontSize: '0.9em'
                }}>
                    {title} ({data?.length || 0} rows)
                </div>
            )}
            <div style={{ height: 400, width: '100%' }}>
                <AgGridReact
                    theme={theme}
                    rowData={gridData}
                    columnDefs={columnDefs}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        resizable: true
                    }}
                    pagination={data?.length > 1000}
                    paginationPageSize={100}
                />
            </div>
        </div>
    );
};

export default DataGrid;
