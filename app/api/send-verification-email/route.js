import { sendVerificationEmail } from '../../../lib/email';
import { randomBytes } from 'crypto';

export async function POST(req) {
  const { email } = await req.json();
  if (!email) {
    return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
  }

  // Generate a random token
  const token = randomBytes(32).toString('hex');

  // TODO: Simpan token ke database beserta email dan expired time

  try {
    await sendVerificationEmail({ to: email, token });
    return new Response(JSON.stringify({ message: 'Verification email sent' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
