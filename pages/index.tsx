tsx name=src/pages/index.tsx
import Navbar from "../components/Navbar";
import Button from "../components/Button";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-3xl mx-auto mt-10">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          <h1 className="text-4xl font-bold text-cyanMain mb-3">
            Welcome to CyanSync
          </h1>
          <p className="text-navy mb-6 text-lg">
            Automate your stitch/duet rights, contracts, and payouts.<br />
            Make TikTok monetization simple and professional.
          </p>
          <Button onClick={() => window.location.href = '/login'}>
            Start Now
          </Button>
        </div>
      </main>
    </div>
  );
}
