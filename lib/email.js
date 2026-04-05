import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail({ to, token }) {
  const verifyUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email?token=${token}`;
  const subject = 'Verifikasi Email CashBhak';
  const html = `<p>Silakan klik link berikut untuk verifikasi email Anda:</p><p><a href="${verifyUrl}">${verifyUrl}</a></p>`;

  return resend.emails.send({
    from: 'no-reply@cashbhak.com',
    to,
    subject,
    html,
  });
}
