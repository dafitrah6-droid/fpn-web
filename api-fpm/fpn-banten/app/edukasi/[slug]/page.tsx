"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function DetailEdukasiPage() {
  const params = useParams();
  const slug = params.slug;

  // Data konten simulasi (Nanti bisa lo ganti pakai database/CMS)
  const contentMap: any = {
    "dasar-keamanan-siber": {
      title: "Dasar Keamanan Siber",
      cat: "TEKNOLOGI",
      body: "Keamanan siber adalah praktik melindungi komputer, server, perangkat seluler, sistem elektronik, jaringan, dan data dari serangan jahat. Bagi pelajar, langkah awal adalah menggunakan autentikasi dua faktor (2FA) dan tidak sembarangan mengklik tautan asing."
    },
    "etika-diplomasi-pelajar": {
      title: "Etika Diplomasi Pelajar",
      cat: "KEPEMIMPINAN",
      body: "Diplomasi bukan hanya milik pejabat. Sebagai pelajar, cara kita berinteraksi di kancah internasional mencerminkan wajah bangsa. Selalu utamakan integritas, kesantunan, dan pemahaman mendalam atas isu yang dibahas."
    },
    "analisis-geopolitik-digital": {
      title: "Analisis Geopolitik Digital",
      cat: "STRATEGI",
      body: "Data adalah emas baru. Dalam geopolitik digital, negara yang menguasai infrastruktur data memiliki keunggulan strategis. FPN Banten mendorong pelajar untuk memahami bagaimana arus informasi mempengaruhi kedaulatan nasional."
    }
  };

  const data = contentMap[slug as string] || { title: "Materi Tidak Ditemukan", body: "Maaf, materi yang lo cari belum tersedia.", cat: "ERROR" };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-bssn-dark py-6 px-10 text-white flex justify-between items-center shadow-xl">
        <h1 className="text-sm font-bold tracking-widest uppercase">DETAIL <span className="text-bssn-gold">MATERI</span></h1>
        <Link href="/edukasi" className="text-[10px] bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition-all">KEMBALI KE EDUKASI</Link>
      </header>

      <main className="max-w-3xl mx-auto py-20 px-6">
        <span className="text-xs font-black text-bssn-gold tracking-widest uppercase">{data.cat}</span>
        <h2 className="text-4xl font-black text-bssn-dark mt-4 mb-8 leading-tight uppercase">{data.title}</h2>
        <div className="h-1 w-20 bg-bssn-gold mb-10"></div>
        <p className="text-lg text-slate-700 leading-relaxed font-light">
          {data.body}
        </p>
      </main>
    </div>
  );
}