import connection from "@/lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get('token');
  if (!token) {
    return new Response('Token tidak ditemukan', { status: 400 });
  }

  // Cari user dengan token ini
  const [users] = await connection.execute(
    "SELECT * FROM users WHERE verification_token = ?",
    [token]
  );

  if (!users.length) {
    return new Response('Token tidak valid atau sudah digunakan.', { status: 400 });
  }

  // Update status verifikasi dan hapus token
  await connection.execute(
    "UPDATE users SET is_verified = 1, verification_token = NULL WHERE verification_token = ?",
    [token]
  );

  return new Response('Email berhasil diverifikasi!', { status: 200 });
}
