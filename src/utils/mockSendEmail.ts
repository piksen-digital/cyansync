typescript name=src/utils/mockSendEmail.ts
export function mockSendEmail({ to, subject, message }: {
  to: string;
  subject: string;
  message: string;
}) {
  // Stub only; log to console
  console.log(`Email sent to ${to}\nSubject: ${subject}\nMessage:\n${message}`);
}
