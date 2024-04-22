import React from 'react';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import styles from './Connections.module.css';
import useConnections from './hooks/useConnections';
import { connectionColumnDefs, defaultColDef } from './util/columnDefns';

const Connections = () => {
  const { gridRef, rowData, mutation } = useConnections();

  return (
    <>
      <div className={styles.gridContainer}>
        <h1>Connections</h1>
        <div
          className="ag-theme-quartz" // Applying the grid theme.
          style={{ height: '100%' }} // The grid will fill the size of the parent container.
        >
          <AgGridReact
            ref={gridRef}
            pagination={true}
            paginationPageSize={20}
            paginationPageSizeSelector={[20, 50, 100]}
            rowData={rowData}
            columnDefs={connectionColumnDefs as any}
            defaultColDef={defaultColDef}
            onCellValueChanged={(params) => {
              // Show the loading overlay after the cell value is changed.
              params.api.showLoadingOverlay();
              // Call the mutation to update the data in the database.
              mutation.mutate({
                id: params.data.id,
                colId: params.column.getColId(),
                newValue: params.newValue,
              });
            }}
          />
        </div>
      </div>
      <p style={{ marginTop: '1rem' }}>
        Note: Double click on cell you want to edit. Hit enter to save.
      </p>
    </>
  );
};
export default Connections;
