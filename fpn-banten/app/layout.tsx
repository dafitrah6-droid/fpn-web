import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FPN - Forum Pelajar Negarawan",
  description: "Wadah perjuangan pelajar Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Gue hapus 'flex flex-col min-h-screen' supaya tidak bentrok 
          dengan layout yang lo buat di page.tsx 
      */}
      <body className="antialiased bg-white">
        
        {/* Cukup render children saja. 
            Semua urutan (Navbar -> Content -> Footer) 
            sudah diatur di dalam file page.tsx lo.
        */}
        {children}

      </body>
    </html>
  );
}