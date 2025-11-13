import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) setStatus(error.message);
    else setStatus("Check your email for login link");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cyan-50 via-white to-white">
      <Navbar />

      <main className="flex-1 max-w-md mx-auto mt-14 px-6 w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-10 flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-cyanMain text-center">
            Welcome Back!
          </h2>
          <p className="text-gray-600 text-center">
            Enter your email to login or register and manage your TikTok content rights.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="border border-cyanMain rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-cyanMain focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            onClick={handleLogin}
            className="bg-cyanMain text-white font-semibold py-3 rounded-lg hover:bg-cyan-600 transition"
          >
            Start Now
          </Button>

          {status && <div className="text-gray-700 text-center">{status}</div>}
        </div>
      </main>

      <footer className="bg-gray-50 text-center py-6 mt-auto">
        Contact us:{" "}
        <a
          href="mailto:georgec.ignite@gmail.com"
          className="text-cyanMain underline hover:text-cyan-700"
        >
          Email Support
        </a>
      </footer>
    </div>
  );
}
