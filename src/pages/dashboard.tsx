import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import { mockDetectDerivative } from "../utils/mockDetectDerivative";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [derivatives, setDerivatives] = useState<string[]>([]);
  const userContentUrl = "https://tiktok.com/@youruser/video/123456789";

  useEffect(() => {
    setDerivatives(mockDetectDerivative(userContentUrl));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-white flex flex-col">
      <Navbar />

      <main className="max-w-5xl mx-auto mt-10 px-4 flex flex-col gap-8 flex-1">
        <section className="text-center mb-6">
          <h1 className="text-4xl font-bold text-cyanMain mb-2">
            Welcome to CyanSync
          </h1>
          <p className="text-gray-600 text-lg">
            Automate your stitch/duet rights, contracts, and payouts — making TikTok monetization simple and professional.
          </p>
        </section>

        <Card>
          <h2 className="text-cyanMain font-bold text-2xl mb-4 flex items-center">
            Detected Derivatives
          </h2>
          {derivatives.length > 0 ? (
            <ul className="space-y-3">
              {derivatives.map((url, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                >
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline text-sm md:text-base truncate"
                  >
                    {url}
                  </a>
                  <Button
                    onClick={() =>
                      (window.location.href = `/request?contentUrl=${encodeURIComponent(url)}`)
                    }
                    className="ml-3"
                  >
                    Request Rights
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-gray-500 text-sm italic">
              No detected derivatives yet.
            </div>
          )}
        </Card>

        <Card>
          <h2 className="text-navy font-bold text-xl mb-2">
            Approved Contracts
          </h2>
          <div className="text-gray-600">Coming soon...</div>
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
