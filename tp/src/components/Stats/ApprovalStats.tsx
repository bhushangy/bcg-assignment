import React, { useRef } from 'react';
import { AgChartOptions } from 'ag-charts-community';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { AgChartsReact } from 'ag-charts-react';
import styles from './Stats.module.css';

const ApprovalStats = () => {
  const [chartOptions, setChartOptions] = React.useState<AgChartOptions>({
    title: { text: 'No of connection requests in different states' },
    data: [],
    series: [{ type: 'bar', xKey: 'status', yKey: 'connections' }],
    overlays: {
      noData: {
        text: 'Loading...',
      },
    },
  });

  // Using ref to store the data fetched from the API.
  const data: Record<string, any> = React.useRef({});

  // Fetching the data from the API for the approval stats.
  useQuery({
    queryKey: ['approvalStats'],
    queryFn: () =>
      axios
        .get('http://127.0.0.1:8000/api/v1/connections/approvalStats')
        .then((res) => {
          // Storing the data in the ref in the format { Approved: [{connections: 10, status: Approved}]}
          res.data?.data?.stats.forEach(
            (stat: { count: string; status: string }) => {
              data.current[stat.status.trim()] = [
                { connections: parseInt(stat.count), status: stat.status },
              ];
            }
          );

          setChartOptions({
            ...chartOptions,
            data: data.current['Connection Released'], // Default data to show when the page loads.
          });
        }),
  });

  return (
    <>
      <div style={{ width: '50%', marginBottom: '2rem' }}>
        <AgChartsReact options={chartOptions} />
      </div>
      <div className={styles.dropDown}>
        <select
          name="approval-status"
          onChange={(e) => {
            // Change the chart data based on the selected status from the dropdown.
            setChartOptions({
              ...chartOptions,
              data: data.current[e.target.value],
            });
          }}
        >
          <option value="Connection Released">Connection Released</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
          <option value="Approved">Approved</option>
        </select>
      </div>
    </>
  );
};

export default ApprovalStats;
