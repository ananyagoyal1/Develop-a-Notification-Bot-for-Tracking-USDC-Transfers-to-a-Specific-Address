// frontend/src/lib/utils.ts
export const formatUSDC = (value: string): string => {
  return (parseInt(value) / 1e6).toFixed(2);
};

export const shortenAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatDate = (timestamp: string): string => {
  return new Date(parseInt(timestamp) * 1000).toLocaleString();
};