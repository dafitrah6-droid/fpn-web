"use client";
import Link from "next/link";

export default function HubungiPage() {
  return (
    <div className="min-h-screen bg-bssn-dark text-white selection:bg-bssn-gold selection:text-bssn-dark relative overflow-hidden">
      
      {/* ELEMEN TAMBAHAN: Atmosfer Cyber Background (Tanpa mengubah struktur) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-bssn-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-bssn-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      </div>

      {/* HEADER AKSEN */}
      <div className="h-2 w-full bg-gradient-to-r from-bssn-gold via-white to-bssn-gold opacity-50 relative z-10"></div>

      <main className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
          <h2 className="text-6xl font-black mb-8 border-l-[12px] border-bssn-gold pl-8 leading-[0.9] uppercase tracking-tighter">
            Kontak<br/><span className="text-bssn-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">Resmi</span>
          </h2>
          
          <div className="space-y-6 mb-12">
            <p className="text-slate-300 text-xl font-light leading-relaxed">
              Selamat datang di pusat koordinasi Forum Pelajar Negarawan (FPN) Provinsi Banten.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed text-justify border-l border-white/5 pl-4">
              Silakan hubungi kami untuk koordinasi strategis lintas instansi, pelaporan insiden keamanan digital di lingkungan pendidikan, atau informasi mendalam mengenai standarisasi kurikulum literasi negarawan bagi anggota baru. Kami berkomitmen untuk merespons setiap korespondensi resmi dalam waktu maksimal 2x24 jam kerja demi menjaga efektivitas diplomasi pelajar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/10 pt-10">
            <div className="hover:translate-x-2 transition-transform duration-300">
              <h4 className="text-bssn-gold font-black text-[10px] uppercase tracking-[0.3em] mb-3 opacity-80">Sekretariat Wilayah</h4>
              <p className="text-sm leading-relaxed text-slate-200 font-medium">
                Kawasan Pusat Pemerintahan Provinsi Banten (KP3B),<br />
                Kota Serang, Tangerang, Banten,<br />
                Indonesia
              </p>
            </div>
            <div className="hover:translate-x-2 transition-transform duration-300">
              <h4 className="text-bssn-gold font-black text-[10px] uppercase tracking-[0.3em] mb-3 opacity-80">Saluran Elektronik</h4>
              <p className="text-sm text-slate-200 font-medium mb-1">humas@fpn.or.id</p>
              <p className="text-xs text-slate-500 italic">Respon Cepat: koordinasi@fpn.or.id</p>
            </div>
            <div className="hover:translate-x-2 transition-transform duration-300">
              <h4 className="text-bssn-gold font-black text-[10px] uppercase tracking-[0.3em] mb-3 opacity-80">Layanan Darurat</h4>
              <p className="text-sm text-slate-200 font-medium">+62 898-1607-967</p>
              <p className="text-[10px] text-red-500/60 font-bold uppercase mt-1 tracking-widest animate-pulse">Hanya untuk Insiden Siber</p>
            </div>
            <div className="hover:translate-x-2 transition-transform duration-300">
              <h4 className="text-bssn-gold font-black text-[10px] uppercase tracking-[0.3em] mb-3 opacity-80">Jam Operasional</h4>
              <p className="text-sm text-slate-200 font-medium">Senin - Jumat</p>
              <p className="text-xs text-slate-500 uppercase">08.00 - 17.00 WIB</p>
            </div>
          </div>
        </div>

        {/* FORM SECTION */}
        <div className="relative group animate-in fade-in slide-in-from-right-8 duration-1000">
          <div className="absolute -inset-1 bg-gradient-to-r from-bssn-gold/30 to-transparent rounded-3xl blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
          <div className="relative bg-white/5 p-12 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl group-hover:border-white/20 transition-all duration-500">
            <div className="mb-8">
              <h3 className="text-xs font-black tracking-[0.4em] uppercase text-white/40 mb-2">Formulir Korespondensi</h3>
              <p className="text-[10px] text-bssn-gold font-bold italic tracking-widest uppercase">Pusdatik FPN Banten v2.0</p>
            </div>

            <form className="space-y-8">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Identitas Lengkap</label>
                <input type="text" placeholder="CONTOH: MUHAMMAD DAFITRAH" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-bssn-gold focus:ring-1 focus:ring-bssn-gold/20 transition-all text-sm tracking-wider font-medium placeholder:text-white/10" />
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Alamat Surel Aktif</label>
                <input type="email" placeholder="ALAMAT@EMAIL.COM" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-bssn-gold focus:ring-1 focus:ring-bssn-gold/20 transition-all text-sm tracking-wider font-medium placeholder:text-white/10" />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-white/30 uppercase tracking-widest ml-1">Detail Informasi / Laporan</label>
                <textarea placeholder="TULISKAN PESAN ATAU LAPORAN INSIDEN ANDA DI SINI..." rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-4 outline-none focus:border-bssn-gold focus:ring-1 focus:ring-bssn-gold/20 transition-all text-sm tracking-wider font-medium resize-none placeholder:text-white/10"></textarea>
              </div>

              <div className="pt-4">
                <button className="group/btn relative w-full bg-bssn-gold text-bssn-dark font-black py-6 rounded-xl overflow-hidden shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.4)] transition-all active:scale-[0.98]">
                  <span className="relative z-10 tracking-[0.2em] text-xs">KIRIM PESAN SEKARANG</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                </button>
                <p className="text-[9px] text-center mt-6 text-white/20 uppercase tracking-[0.2em] font-bold">Data Anda Dilindungi Enkripsi FPN-SSL 256-BIT</p>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <div className="text-center pb-16 relative z-10">
        <Link href="/" className="group inline-flex items-center gap-3 text-[10px] text-slate-500 hover:text-bssn-gold transition-all uppercase tracking-[0.4em] font-bold">
          <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span> Kembali ke Beranda Utama
        </Link>
      </div>
    </div>
  );
}