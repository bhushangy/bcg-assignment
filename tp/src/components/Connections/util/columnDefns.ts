import convertDateFormat from '@/util/dateUtil';
import { ValueFormatterParams, IDateFilterParams } from 'ag-grid-community';

// Date filter params for ag-grid.
const filterParams: IDateFilterParams = {
  buttons: ['apply', 'reset'], // Buttons for the date filter.
  // Since date is not in native javascript date format, we need to convert it to a native date object.
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    if (!cellValue) {
      return 0;
    }

    // Cell value is in the form dd-mm-yy. Convert it to native date object.
    const parts = cellValue.split('-');

    // Extract day, month, and year.
    const day = parts[0];
    const month = parts[1];
    const year = '20' + parts[2];

    // Format the date.
    const formattedDate = `${day.padStart(2, '0')}/${month.padStart(
      2,
      '0'
    )}/${year}`;

    const dateAsString = formattedDate;

    // Dates in table are stored as dd/mm/yyyy. Ag grid date filters only work with native date types.
    // Hence we create a Date object for comparison against the filter date.
    const dateParts = dateAsString.split('/');
    const requiredYear = Number(dateParts[2]);
    const requiredMonth = Number(dateParts[1]) - 1;
    const requiredDay = Number(dateParts[0]);
    const cellDate = new Date(requiredYear, requiredMonth, requiredDay);

    // Now that both parameters are Date objects, hence we can compare.
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    } else if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
};

// Column definitions for the connections grid.
export const connectionColumnDefs = [
  {
    headerName: 'ID',
    field: 'id',
    filter: 'agNumberColumnFilter',
    colId: 'id',
  },
  {
    headerName: 'Applicant Name',
    field: 'applicant_name',
    colId: 'applicant_name',
  },
  { headerName: 'Gender', field: 'gender', colId: 'gender' },
  { headerName: 'District', field: 'district', colId: 'district' },
  { headerName: 'State', field: 'state', colId: 'state' },
  { headerName: 'Pincode', field: 'pincode', colId: 'pincode' },
  { headerName: 'Ownership', field: 'ownership', colId: 'ownership' },
  {
    headerName: 'Govt ID Type',
    field: 'govtid_type',
    editable: false,
    colId: 'govtid_type',
  },
  {
    headerName: 'ID Number',
    field: 'id_number',
    editable: false,
    colId: 'id_number',
  },
  { headerName: 'Category', field: 'category', colId: 'category' },
  { headerName: 'Load Applied', field: 'load_applied', colId: 'load_applied' },
  {
    headerName: 'Date of Application',
    field: 'date_of_application',
    filter: 'agDateColumnFilter',
    filterParams: filterParams,
    editable: false,
    coldId: 'date_of_application',
    valueFormatter: (params: ValueFormatterParams) => {
      if (params.value) return convertDateFormat(params.value);
    },
  },
  {
    headerName: 'Date of Approval',
    field: 'date_of_approval',
    valueFormatter: (params: ValueFormatterParams) => {
      if (params.value) return convertDateFormat(params.value);
    },
    colId: 'date_of_approval',
  },
  {
    headerName: 'Modified Date',
    field: 'modified_date',
    valueFormatter: (params: ValueFormatterParams) => {
      if (params.value) return convertDateFormat(params.value);
    },
    colId: 'modified_date',
  },
  { headerName: 'Status', field: 'status', colId: 'status' },
  { headerName: 'Reviewer ID', field: 'reviewer_id', colId: 'reviewer_id' },
  {
    headerName: 'Reviewer Name',
    field: 'reviewer_name',
    colId: 'reviewer_name',
  },
  {
    headerName: 'Reviewer Comments',
    field: 'reviewer_comments',
    minWidth: 300,
    colId: 'reviewer_comments',
  },
];

export const defaultColDef = {
  sortable: false,
  resizable: true,
  editable: true,
};
