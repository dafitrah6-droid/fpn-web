"use client";
import Link from "next/link";

export default function EdukasiPage() {
  const materials = [
    { title: "Dasar Keamanan Siber", cat: "TEKNOLOGI", desc: "Panduan praktis menjaga data pribadi di ruang digital." },
    { title: "Etika Diplomasi Pelajar", cat: "KEPEMIMPINAN", desc: "Cara berkomunikasi di forum internasional dengan membawa identitas bangsa." },
    { title: "Analisis Geopolitik Digital", cat: "STRATEGI", desc: "Memahami posisi Indonesia di tengah persaingan teknologi global." },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Kecil */}
      <header className="bg-bssn-dark py-8 px-10 text-white flex justify-between items-center shadow-2xl">
        <div>
          <h1 className="text-xl font-bold tracking-tighter uppercase">Pusat <span className="text-bssn-gold">Edukasi</span></h1>
          <p className="text-[10px] text-slate-400 tracking-widest mt-1">LITERASI DIGITAL & KENEGARAAN</p>
        </div>
        <Link href="/" className="text-xs border border-white/20 hover:bg-white/10 px-4 py-2 rounded transition-all">BERANDA</Link>
      </header>

      <main className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {materials.map((m, i) => {
            // Membuat slug dari title (kecilkan huruf, ganti spasi jadi strip)
            const slug = m.title.toLowerCase().replace(/ /g, "-");

            return (
              <div key={i} className="group border-b-4 border-slate-100 hover:border-bssn-gold p-8 transition-all bg-slate-50 rounded-t-xl">
                <span className="text-[10px] font-black text-bssn-gold tracking-[0.2em]">{m.cat}</span>
                <h3 className="text-xl font-bold text-bssn-dark mt-2 mb-4 group-hover:text-bssn-blue transition-colors">{m.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{m.desc}</p>
                
                {/* Membungkus button dengan Link tanpa merusak style yang ada */}
                <Link href={`/edukasi/${slug}`}>
                  <button className="mt-8 text-xs font-bold border-b-2 border-bssn-dark pb-1 hover:text-bssn-gold hover:border-bssn-gold transition-all">
                    BACA MATERI →
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer minimalis identitas pengembang */}
      <footer className="py-10 text-center border-t border-slate-100">
        <p className="text-[10px] text-slate-400 tracking-[0.3em] uppercase">
          © 2026 FPN Banten | Developed by <span className="text-bssn-dark font-bold">Muhammad Dafitrah</span>
        </p>
      </footer>
    </div>
  );
}