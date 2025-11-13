"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function RequestPage() {
  const searchParams = useSearchParams();
  const contentUrl = searchParams.get("contentUrl") || "";
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const userName = "CyanSync User"; // Later replace with logged-in user data

  const requestMessage = `
Hello,

I’m requesting content rights and revenue participation for the TikTok video available at:
${contentUrl}

This request is made through CyanSync, a rights and revenue platform that facilitates transparent content licensing and revenue-sharing between creators. Once accepted, CyanSync will automatically generate and manage the contract terms, ensuring both parties receive their respective shares securely and transparently.

Please review and respond to this request via the link provided in your email.

Thank you,
${userName}
`;

  const submitRequest = async () => {
    if (!email) {
      alert("Please enter the recipient's email address.");
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch("/api/sendRequestEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: email,
          subject: "CyanSync Rights Request",
          message: requestMessage,
        }),
      });

      if (res.ok) {
        setMessageSent(true);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send request. You can alternatively contact the user manually.");
      window.location.href = `mailto:${email}?subject=CyanSync Rights Request&body=${encodeURIComponent(
        requestMessage
      )}`;
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-md space-y-6">
        <h1 className="text-2xl font-bold text-cyanMain text-center">Request Rights</h1>
        <p className="text-gray-600 text-center">
          Submit a formal rights and revenue participation request for the TikTok video below.
        </p>

        <div className="bg-gray-50 p-5 rounded-lg text-gray-800 border border-gray-200 text-sm whitespace-pre-line leading-relaxed">
          {requestMessage}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Recipient’s Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter creator’s email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyanMain"
          />
        </div>

        {!messageSent ? (
          <Button
            onClick={submitRequest}
            disabled={isSending}
            className="w-full bg-cyanMain text-white font-semibold py-3 rounded-lg hover:bg-cyan-600 transition"
          >
            {isSending ? "Sending..." : "Send Request"}
          </Button>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            ✅ Request sent successfully!
          </div>
        )}
      </div>
    </div>
  );
}
