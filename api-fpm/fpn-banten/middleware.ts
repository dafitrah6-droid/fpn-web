import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/dashboard/library/')) {
    const segments = pathname.split('/');
    const urlIdentifier = segments[3]; // Ambil bagian setelah /library/
    const cookieHash = request.cookies.get('user_hash')?.value;

    // 1. CEK APAKAH INI ID MODUL (Satu digit angka: 1, 2, dst)
    const isModuleId = /^\d+$/.test(urlIdentifier);

    // 2. LOGIKA VALIDASI
    if (!isModuleId) {
      // Jika yang diakses adalah Hash (ID Anggota panjang)
      if (!cookieHash || urlIdentifier !== cookieHash) {
        return NextResponse.redirect(new URL('/dashboard?error=unauthorized', request.url));
      }
    }

    // 3. PROTEKSI UMUM
    if (!cookieHash) {
      return NextResponse.redirect(new URL('/dashboard?error=unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/dashboard/library/:path*',
};