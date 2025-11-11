export function generateContract({ creator, licensee, contentUrl, split }: {
  creator: string;
  licensee: string;
  contentUrl: string;
  split: number;
}) {
  return `
AGREEMENT: Rights & Monetization for Derivative Content

This agreement outlines the terms for ${licensee} to use ${creator}'s original TikTok content (${contentUrl}) in a stitch/duet. Revenue is split ${split}% to creator and ${100 - split}% to licensee.

By signing/approving via CyanSync, both parties agree to the terms above.
  `.trim();
}
