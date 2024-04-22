import React from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { AgChartOptions } from 'ag-charts-community';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Since month is stored as a number in the database, we need to convert it to the actual month name.
// Formats the data by converting the month number to the actual month name.
const formatConnectionStatsData = (
  data: { count: string; month: string }[]
) => {
  // Convert month number to actual month name
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formattedData = data.map((item) => ({
    month: months[parseInt(item.month) - 1],
    count_connection_requests: parseInt(item.count), // Convert count to integer.
  }));

  return formattedData;
};

const ConnectionStats = () => {
  const [chartOptions, setChartOptions] = React.useState<AgChartOptions>({
    title: { text: 'Connection requests in each month' },
    data: [],
    series: [{ type: 'bar', xKey: 'month', yKey: 'count_connection_requests' }],
    overlays: {
      noData: {
        text: 'Loading...',
      },
    },
  });

  // Fetching the data from the API for the connection stats.
  useQuery({
    queryKey: ['connectionStats'],
    queryFn: () =>
      axios
        .get('http://127.0.0.1:8000/api/v1/connections/connectionStats')
        .then((res) => {
          setChartOptions((prevChartOptions) => ({
            ...prevChartOptions,
            data: formatConnectionStatsData(res.data?.data?.stats),
          }));
        }),
  });

  return <AgChartsReact options={chartOptions} />;
};

export default ConnectionStats;
