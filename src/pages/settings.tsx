import Navbar from "../components/Navbar";
import Card from "../components/Card";

export default function Settings() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cyan-50 via-white to-white">
      <Navbar />

      <main className="flex-1 max-w-xl mx-auto mt-10 px-4 w-full">
        <Card>
          <h2 className="text-cyanMain font-bold text-2xl mb-3">Settings</h2>
          <div className="text-navy">
            Customize contract templates, notification preferences, and payout details (coming soon).
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 text-center py-4 mt-auto">
        <div>
          Contact us:{" "}
          <a
            href="mailto:georgec.ignite@gmail.com"
            className="text-cyanMain underline"
          >
            georgec.ignite@gmail.com
          </a>
        </div>
      </footer>
    </div>
  );
}
