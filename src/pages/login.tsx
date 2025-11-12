import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'https://cyansync.vercel.app/auth/callback',
      },
    });
    if (error) setStatus(error.message);
    else setStatus("Check your email for login link");
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-cyan-50 via-white to-white">
      <Navbar />

      <main className="flex-1 max-w-md mx-auto mt-14 px-4 w-full">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold text-cyanMain mb-4">Login</h2>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-cyanMain rounded-lg px-4 py-2 mb-4 w-full"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button onClick={handleLogin}>Login / Register</Button>
          {status && <div className="text-gray-600 mt-2">{status}</div>}
        </div>
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
