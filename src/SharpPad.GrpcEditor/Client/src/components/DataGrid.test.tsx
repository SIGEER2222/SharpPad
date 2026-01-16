import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import DataGrid from './DataGrid';

// Mock AgGridReact
vi.mock('ag-grid-react', () => ({
    AgGridReact: (props: any) => (
        <div data-testid="ag-grid">
            <div data-testid="rows">{JSON.stringify(props.rowData)}</div>
            <div data-testid="cols">{JSON.stringify(props.columnDefs)}</div>
        </div>
    )
}));

describe('DataGrid Logic', () => {
    // Cleanup after each test to avoid DOM leakage
    afterEach(() => {
        cleanup();
    });

    it('should infer columns from object array', () => {
        const data = [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ];
        
        render(<DataGrid data={data} />);
        
        const colsEl = screen.getByTestId('cols');
        const cols = JSON.parse(colsEl.textContent || '[]');
        
        expect(cols).toHaveLength(2);
        expect(cols[0].field).toBe('id');
        expect(cols[1].field).toBe('name');
    });

    it('should handle primitive array by wrapping in object', () => {
        const data = [1, 2, 3];
        
        render(<DataGrid data={data} />);
        
        const rowsEl = screen.getByTestId('rows');
        const colsEl = screen.getByTestId('cols');
        
        const rows = JSON.parse(rowsEl.textContent || '[]');
        const cols = JSON.parse(colsEl.textContent || '[]');
        
        expect(rows).toEqual([{ value: 1 }, { value: 2 }, { value: 3 }]);
        expect(cols).toHaveLength(1);
        expect(cols[0].field).toBe('value');
    });

    it('should render title if provided', () => {
        render(<DataGrid data={[]} title="My Title" />);
        expect(screen.getByText('My Title (0 rows)')).toBeInTheDocument();
    });
});
