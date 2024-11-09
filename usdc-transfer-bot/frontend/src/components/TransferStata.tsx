// frontend/src/components/TransferStats.tsx
import React from 'react';
import { formatUSDC, formatDate } from '../lib/utils';

interface TransferStatsProps {
  stats: {
    totalTransfers: string;
    totalValue: string;
    lastUpdateTime: string;
  };
}

export const TransferStats: React.FC<TransferStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="text-center">
        <p className="text-sm text-gray-500">Total Transfers</p>
        <p className="text-2xl font-bold">{stats.totalTransfers}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Total USDC</p>
        <p className="text-2xl font-bold">${formatUSDC(stats.totalValue)}</p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Last Update</p>
        <p className="text-sm">{formatDate(stats.lastUpdateTime)}</p>
      </div>
    </div>
  );
};