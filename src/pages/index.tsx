import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>CyanSync | TikTok Rights & Monetization Automation</title>
        <meta
          name="description"
          content="CyanSync helps creators automate TikTok duet/stitch rights, contracts, and payouts. Protect your content and monetize ethically."
        />
        <meta
          name="keywords"
          content="TikTok rights, duet, stitch, monetization, creator tools, contracts, payouts, creator economy, content licensing"
        />
      </Head>

      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto mt-14 px-4 text-center">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-5xl font-extrabold text-cyanMain mb-4 tracking-tight">
            Automate Your TikTok Rights
          </h1>
          <p className="text-navy mb-8 text-lg leading-relaxed">
            CyanSync makes it effortless to protect your TikTok content, handle duet/stitch permissions, and manage payouts — all in one seamless dashboard.
          </p>
          <Button onClick={() => (window.location.href = "/login")} className="text-lg px-8 py-3">
            Start Now
          </Button>
        </div>

        {/* SEO / Educational Section */}
        <section className="mt-16 text-left space-y-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-cyanMain mb-4 text-center">What is CyanSync?</h2>
            <p className="text-gray-700 leading-relaxed">
              CyanSync is the first platform designed for creators who collaborate, remix, or respond to videos across TikTok. We simplify rights management so you can focus on creativity — not paperwork.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-navy mb-3">Key Benefits</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>✅ Detects when your videos are stitched or dueted.</li>
              <li>✅ Automatically generates professional contracts for collaborations.</li>
              <li>✅ Lets you request usage rights with a single click.</li>
              <li>✅ Tracks payouts and permissions in one dashboard.</li>
            </ul>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-navy mb-3">Who Is It For?</h3>
            <p className="text-gray-700 leading-relaxed">
              CyanSync is perfect for content creators, managers, and brands who want to ensure proper credit and fair monetization. Whether you’re a solo TikTok creator or part of a media team, CyanSync makes your rights management automatic.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-navy mb-3">Frequently Asked Questions</h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>? Is CyanSync free?</strong><br />
                Yes — basic features are free during our MVP launch period. Paid plans will be added for advanced tracking and legal integrations.
              </p>
              <p>
                <strong>? How do I log in?</strong><br />
                Simply enter your email, and we’ll send you a secure login link. No passwords needed.
              </p>
              <p>
                <strong>? Is my content data safe?</strong><br />
                Absolutely. All user data is encrypted and managed via Supabase with secure access control.
              </p>
            </div>
          </div>
        </section>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <Button onClick={() => (window.location.href = "/login")} className="text-lg px-8 py-3">
            Get Started — It’s Free
          </Button>
          <p className="text-gray-500 mt-3 text-sm">
            Join early adopters who are protecting their TikTok content the smart way.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16 border-t border-gray-200 py-6 text-center text-gray-600 text-sm">
        <p>
          © {new Date().getFullYear()} CyanSync. All rights reserved.
        </p>
        <p className="mt-1">
          Need help?{" "}
          <a
            href="mailto:georgec.ignite@gmail.com"
            className="text-cyanMain font-medium hover:underline"
          >
            Contact us
          </a>
        </p>
      </footer>
    </div>
  );
}
