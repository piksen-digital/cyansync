tsx name=src/pages/settings.tsx
import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Settings() {
  return (
    <div>
      <Navbar />
      <main className="max-w-xl mx-auto mt-10">
        <Card>
          <h2 className="text-cyanMain font-bold text-2xl mb-3">Settings</h2>
          <div className="text-navy">
            Customize contract templates, notification preferences, and payout details (coming soon).
          </div>
        </Card>
      </main>
    </div>
  );
