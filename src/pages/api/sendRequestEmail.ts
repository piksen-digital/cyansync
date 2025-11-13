import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { to, subject, message } = req.body;

  try {
    await resend.emails.send({
      from: "CyanSync <georgec.ignite@gmail.com>",
      to,
      subject,
      html: `<pre style="font-family:inherit;white-space:pre-wrap;">${message}</pre>`,
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
