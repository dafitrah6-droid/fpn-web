"use client";
import Link from "next/link";

export default function LayananPage() {
  const services = [
    { title: "Verifikasi Sertifikat", desc: "Validasi keaslian sertifikat kegiatan FPN secara digital.", icon: "✅" },
    { title: "Pusat Pengaduan Siber", desc: "Layanan pelaporan insiden keamanan digital bagi pelajar.", icon: "🛡️" },
    { title: "E-Library Negarawan", desc: "Akses jurnal dan materi diplomasi internasional gratis.", icon: "📚" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-bssn-dark py-20 px-6 text-center text-white">
        <h1 className="text-4xl font-black mb-4 tracking-widest uppercase">Layanan Publik</h1>
        <p className="text-slate-400 max-w-2xl mx-auto">Akses fasilitas digital resmi Forum Pelajar Negarawan untuk seluruh anggota dan instansi terkait.</p>
      </div>

      <main className="max-w-6xl mx-auto -mt-10 px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-2xl border border-slate-100 hover:border-bssn-gold transition-all group">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-bssn-dark mb-3 group-hover:text-bssn-gold transition-colors">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/" className="text-bssn-dark font-bold border-b-2 border-bssn-gold pb-1 hover:text-bssn-gold transition-all">← KEMBALI KE BERANDA</Link>
        </div>
      </main>
    </div>
  );
}