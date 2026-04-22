"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function DetailBeritaPage() {
  const params = useParams();
  const slug = params.slug;

  const beritaMap: any = {
    "sejarah-pembentukan-fpn": {
      title: "Sejarah Pembentukan FPN: Menelusuri Jejak Pergerakan Pelajar di Tanah Jawara",
      date: "27 Maret 2026",
      cat: "ORGANISASI",
      content: "Forum Pelajar Negarawan (FPN) Provinsi Banten bukanlah sekadar organisasi musiman, melainkan sebuah manifestasi dari keresahan intelektual para pelajar di Tanah Jawara. Lahir di tengah hiruk-pikuk transformasi digital yang masif, FPN dibentuk sebagai respon strategis atas kebutuhan wadah bagi generasi muda untuk memahami hakikat kedaulatan negara dalam dimensi yang baru. Berawal dari inisiatif diskusi kecil di Tangerang, gerakan ini dengan cepat meluas ke seluruh penjuru Banten, membawa misi untuk mereposisi peran pelajar dari sekadar objek pendidikan menjadi subjek aktif dalam menjaga stabilitas nasional. Sejarah mencatat bahwa deklarasi FPN menjadi titik balik bagi pelajar Banten untuk mulai mengonsolidasikan kekuatan dalam menghadapi ancaman disinformasi dan infiltrasi budaya luar. Kini, dengan dukungan Pusat Data dan Informasi (Pusdatik), FPN telah bertransformasi menjadi pilar penting pergerakan pelajar nasional yang mengawinkan nilai-nilai patriotisme klasik dengan kecakapan teknologi mutakhir demi menjaga marwah NKRI di mata dunia."
    },
    "dasar-hukum-organisasi": {
      title: "Landasan Konstitusional dan Tata Kelola Hukum Forum Pelajar Negarawan",
      date: "15 Juli 2025",
      cat: "DOKUMEN",
      content: "Operasional Forum Pelajar Negarawan (FPN) berdiri tegak di atas fondasi hukum yang rigid dan tidak berada di ruang hampa. Sebagai organisasi yang menjunjung tinggi supremasi hukum, FPN beroperasi dengan bersumber langsung pada nilai-nilai luhur Pancasila serta Undang-Undang Dasar 1945 sebagai pedoman tertinggi. Secara legalitas organisasi, setiap langkah taktis FPN mengacu pada Anggaran Dasar dan Anggaran Rumah Tangga (AD/ART) yang telah disinkronisasikan dengan peraturan menteri terkait mengenai pemberdayaan kepemudaan dan literasi digital nasional. Hal ini memastikan bahwa setiap program kerja, mulai dari penguatan kaderisasi hingga advokasi digital, memiliki legitimasi yang kuat di mata negara. Sinergi dengan kebijakan strategis pemerintah dalam membangun ekosistem digital yang aman dan tangguh menjadi prioritas utama, sehingga FPN tidak hanya bergerak sebagai kontrol sosial, tetapi juga sebagai mitra strategis pemerintah dalam menciptakan ketahanan nasional yang inklusif bagi seluruh lapisan generasi Z di Indonesia."
    },
    "nilai-nilai-negarawan": {
      title: "Internalisasi Tujuh Pilar Karakter: Membentuk Profil Pelajar Negarawan Sejati",
      date: "10 Juni 2025",
      cat: "EDUKASI",
      content: "Menjadi seorang negarawan di level pelajar adalah sebuah panggilan jiwa untuk menempatkan kepentingan kolektif bangsa di atas ambisi pribadi maupun primordialisme golongan. Nilai ini merupakan ruh yang mengalir dalam setiap sel pergerakan kader FPN Banten. Terdapat tiga pilar utama yang menjadi jati diri kami: Pertama adalah Integritas Tanpa Batas, yaitu keselarasan mutlak antara nurani, ucapan, dan tindakan dalam menjaga marwah organisasi di ruang publik. Kedua adalah Kedaulatan Digital, sebuah kesadaran bahwa kemerdekaan bangsa hari ini juga dipertaruhkan di ruang siber melalui perlindungan aset informasi dan perlawanan terhadap hegemoni digital asing. Ketiga adalah Diplomasi Damai yang Berwibawa, menekankan pentingnya komunikasi yang santun namun tajam dalam memperjuangkan hak-hak pelajar di kancah global. Melalui proses kaderisasi berjenjang yang ketat, FPN memastikan bahwa setiap anggotanya bukan hanya cerdas secara akademik, tetapi juga memiliki ketangguhan mental dan visi strategis yang jauh ke depan untuk memimpin Indonesia emas 2045."
    }
  };

  const data = beritaMap[slug as string] || { 
    title: "Artikel Tidak Ditemukan", 
    content: "Maaf, konten yang Anda cari saat ini tidak tersedia dalam basis data kami atau sedang dalam tahap pengarsipan digital oleh tim Pusdatik FPN Banten.", 
    cat: "INFO", 
    date: "-" 
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-bssn-gold selection:text-bssn-dark overflow-x-hidden">
      
      
      <header className="bg-bssn-dark/95 backdrop-blur-md py-8 px-6 md:px-10 text-white flex justify-between items-center shadow-2xl border-b-4 border-bssn-gold sticky top-0 z-50">
        <div className="flex flex-col">
          <h1 className="text-xs md:text-sm font-black tracking-[0.3em] uppercase italic">Pusat Arsip Digital</h1>
          <p className="text-[9px] md:text-[10px] text-bssn-gold font-bold tracking-widest">FPN PROVINSI BANTEN</p>
        </div>
        <Link href="/" className="group flex items-center gap-2 text-[9px] md:text-[10px] font-bold border border-white/20 hover:border-bssn-gold px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 hover:bg-white hover:text-bssn-dark">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> KEMBALI KE BERANDA
        </Link>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-4xl mx-auto py-16 md:py-24 px-6 md:px-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
        <div className="flex items-center gap-5 mb-10">
            <span className="text-[10px] font-black bg-bssn-dark text-bssn-gold px-4 py-1.5 rounded-sm tracking-[0.2em] shadow-md uppercase">
              {data.cat}
            </span>
            <div className="h-[1px] flex-1 md:flex-none md:w-12 bg-slate-200"></div>
            <span className="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-tighter italic">
              Diterbitkan: {data.date}
            </span>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-bssn-dark mb-10 leading-[1.1] uppercase tracking-tighter">
          {data.title}
        </h2>

        <div className="flex gap-2 mb-16">
          <div className="h-2 w-24 md:w-32 bg-bssn-gold shadow-[4px_0_10px_rgba(212,175,55,0.2)]"></div>
          <div className="h-2 w-8 bg-bssn-dark"></div>
          <div className="h-2 w-4 bg-bssn-gold/50"></div>
        </div>
        
        {/* Konten Utama - Menambahkan Interline & Dropcap Styling */}
        <div className="relative group">
          <span className="absolute -left-6 md:-left-12 -top-10 text-8xl md:text-9xl text-slate-100 font-serif -z-10 select-none group-hover:text-bssn-gold/10 transition-colors duration-700">“</span>
          <p className="text-lg md:text-xl text-slate-700 leading-[1.8] md:leading-[2] font-light text-justify 
            first-letter:text-6xl md:first-letter:text-7xl first-letter:font-black first-letter:text-bssn-dark 
            first-letter:mr-3 first-letter:float-left first-letter:mt-1">
            {data.content}
          </p>
        </div>

        {/* FOOTER ARTIKEL */}
        <div className="mt-20 md:mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">
            Penulis: Tim Humas Pusdatik FPN
          </div>
          <div className="flex gap-4">
            <button className="text-[9px] md:text-[10px] font-black bg-slate-100 px-4 py-2 rounded hover:bg-bssn-gold hover:shadow-lg transition-all active:scale-95">SALIN TAUTAN</button>
            <button className="text-[9px] md:text-[10px] font-black bg-slate-100 px-4 py-2 rounded hover:bg-bssn-gold hover:shadow-lg transition-all active:scale-95">CETAK DOKUMEN</button>
          </div>
        </div>
      </main>
      
      {/* ELEMEN DEKORATIF BAWAH */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-bssn-gold/20 to-transparent mb-10"></div>
    </div>
  );
}