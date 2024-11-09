// frontend/src/components/TransferList.tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatUSDC, shortenAddress, formatDate } from '../lib/utils';
import { SEPOLIA_EXPLORER } from '../lib/constants';

interface Transfer {
  id: string;
  from: string;
  to: string;
  value: string;
  timestamp: string;
  transactionHash: string;
}

interface TransferListProps {
  transfers: Transfer[];
}

export const TransferList: React.FC<TransferListProps> = ({ transfers }) => {
  return (
    <div className="space-y-4">
      {transfers.map((transfer) => (
        <div key={transfer.id} className="border p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">
              From: {shortenAddress(transfer.from)}
            </span>
            <Badge>{formatUSDC(transfer.value)} USDC</Badge>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">{formatDate(transfer.timestamp)}</span>
            
              href={`${SEPOLIA_EXPLORER}/tx/${transfer.transactionHash}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600"
            >
              View on Etherscan
              <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};