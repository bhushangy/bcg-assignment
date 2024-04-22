import React from 'react';
import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AgGridReact } from 'ag-grid-react';

const useConnections = () => {
  const queryClient = useQueryClient();

  // Row Data: The data to be displayed.
  const [rowData, setRowData] = React.useState(null);
  // Reference to the grid component.
  const gridRef = React.useRef<AgGridReact>(null);

  // Fetching the data from the API.
  useQuery({
    queryKey: ['connections'],
    queryFn: () =>
      axios
        .get('http://127.0.0.1:8000/api/v1/connections')
        .then((res) => setRowData(res.data?.data?.connections)),
  });

  // Mutation to update the data in the database.
  const mutation = useMutation({
    mutationFn: (params: {
      id: number;
      colId: string;
      newValue: string | number;
    }) =>
      axios.patch(`http://127.0.0.1:8000/api/v1/connections/${params.id}`, {
        colId: params.colId,
        newValue: params.newValue,
      }),
    onSuccess: () => {
      // Hide the loading overlay after the mutation is successful.
      gridRef.current?.api.hideOverlay();
    },
    onError: (error) => {
      console.log('Error: ', error);
    },
  });

  return { gridRef, rowData, mutation, setRowData };
};

export default useConnections;
