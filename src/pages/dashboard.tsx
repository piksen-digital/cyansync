import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Button from "../components/Button";
import { mockDetectDerivative } from "../utils/mockDetectDerivative";

export default function Dashboard() {
  const userContentUrl = "https://tiktok.com/@youruser/video/123456789";
  const derivatives = mockDetectDerivative(userContentUrl);

  return (
    <div>
      <Navbar />
      <main className="max-w-4xl mx-auto mt-8 flex flex-col gap-8">
        <Card>
          <h2 className="text-cyanMain font-bold text-2xl mb-2">Derivatives Detected</h2>
          <ul className="mb-4">
            {derivatives.map((url, i) => (
              <li key={i} className="mb-2">
                <a href={url} target="_blank" className="text-accent underline">
                  {url}
                </a>
                <Button
                  onClick={() => window.location.href = `/request?contentUrl=${encodeURIComponent(url)}`}
                  className="ml-3"
                >
                  Request Rights
                </Button>
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h2 className="text-navy font-bold text-xl mb-2">Your Approved Contracts</h2>
          <div className="text-gray-600">Coming soon...</div>
        </Card>
      </main>
    </div>
  );
}
