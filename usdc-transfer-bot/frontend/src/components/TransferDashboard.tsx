import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Bell } from 'lucide-react';
import { TransferList } from './TransferList';
import { TransferStats } from './TransferStats';
import { POLL_INTERVAL } from '../lib/constants';

const GET_TRANSFERS = gql`
  query GetTransfers {
    transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
      id
      from
      to
      value
      timestamp
      transactionHash
    }
    transferStats(id: "1") {
      totalTransfers
      totalValue
      lastUpdateTime
    }
  }
`;

export const TransferDashboard: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TRANSFERS, {
    pollInterval: POLL_INTERVAL,
  });

  React.useEffect(() => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  React.useEffect(() => {
    if (data?.transfers && data.transfers.length > 0) {
      const latestTransfer = data.transfers[0];
      const timestamp = new Date(parseInt(latestTransfer.timestamp) * 1000);
      
      if (Date.now() - timestamp.getTime() < POLL_INTERVAL) {
        if (Notification.permission === 'granted') {
          new Notification('New USDC Transfer Received', {
            body: `Received ${formatUSDC(latestTransfer.value)} USDC from ${shortenAddress(latestTransfer.from)}`,
          });
        }
      }
    }
  }, [data]);

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>USDC Transfer Dashboard</span>
            <Bell className="h-5 w-5 text-gray-500" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TransferStats stats={data.transferStats} />
          <TransferList transfers={data.transfers} />
        </CardContent>
      </Card>
    </div>
  );
};