tsx name=src/pages/approval.tsx
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import { mockRevenueLink } from "../utils/mockRevenueLink";

export default function Approval() {
  // Demo: One contract ID stubbed
  const contractId = "demo123";
  const payoutLink = mockRevenueLink({ contractId });

  return (
    <div>
      <Navbar />
      <main className="max-w-xl mx-auto mt-10">
        <Card>
          <h2 className="text-cyanMain font-bold text-2xl mb-3">Approve Contract</h2>
          <div className="text-gray-700 mb-3">
            Review rights agreement, then approve to generate payout link.
          </div>
          <Button onClick={() => alert("Contract approved!")}>Approve</Button>
          <div className="mt-5 font-semibold text-navy">Payout Link:</div>
          <a
            href={payoutLink}
            className="text-accent underline break-all"
            target="_blank"
          >
            {payoutLink}
          </a>
        </Card>
      </main>
    </div>
  );
}
