typescript name=src/utils/mockRevenueLink.ts
export function mockRevenueLink({ contractId }: { contractId: string }) {
  return `https://cyansync.com/pay/${contractId}`;
}
