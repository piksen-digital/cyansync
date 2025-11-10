tsx name=src/pages/request.tsx
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Card from "../components/Card";
import { useState } from "react";
import { generateContract } from "../utils/generateContract";
import { mockSendEmail } from "../utils/mockSendEmail";

export default function Request() {
  const [licensee, setLicensee] = useState("");
  const [split, setSplit] = useState(50);
  const [contract, setContract] = useState("");

  function handleGenerate() {
    const newContract = generateContract({
      creator: "Your Name",
      licensee,
      contentUrl: "Your Content Link",
      split,
    });
    setContract(newContract);
  }

  function handleSend() {
    mockSendEmail({
      to: licensee,
      subject: "Rights Request – CyanSync",
      message: contract,
    });
    alert("Request sent!");
  }

  return (
    <div>
      <Navbar />
      <main className="max-w-xl mx-auto mt-10">
        <Card>
          <h2 className="text-cyanMain font-bold text-2xl mb-2">
            Request Rights (Stitch/Duet)
          </h2>
          <input
            type="email"
            placeholder="Licensee Email"
            className="border border-cyanMain rounded-lg px-4 py-2 mb-3 w-full"
            value={licensee}
            onChange={e => setLicensee(e.target.value)}
          />
          <label className="block mb-2 text-gray-700">Revenue Split (% to You):</label>
          <input
            type="number"
            min={0} max={100}
            className="border border-cyanMain rounded-lg px-3 py-2 mb-4 w-full"
            value={split}
            onChange={e => setSplit(Number(e.target.value))}
          />
          <Button onClick={handleGenerate}>Generate Contract</Button>
          {contract && (
            <>
              <pre className="bg-gray-100 rounded-lg mt-4 p-4">{contract}</pre>
              <Button type="submit" onClick={handleSend} className="mt-3">
                Send Request
              </Button>
            </>
          )}
        </Card>
      </main>
    </div>
  );
}
