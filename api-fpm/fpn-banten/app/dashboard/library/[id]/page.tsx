"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// DATA KONTEN MODUL
const CONTENT_DATA: any = {
  "1": {
    title: "Dasar Diplomasi Internasional",
    author: "FPN Research Wing",
    quote: "Diplomasi adalah seni membiarkan orang lain melakukan apa yang Anda inginkan.",
    leader: "Winston Churchill",
    content: `
      Diplomasi bukan sekadar negosiasi antarnegara, melainkan instrumen vital dalam menjaga stabilitas global. 
      Sebagai kader FPN, memahami protokol internasional dan etika komunikasi antar bangsa adalah kunci. 
      
      Ada tiga pilar utama dalam diplomasi modern:
      1. Hard Power (Kekuatan militer/ekonomi).
      2. Soft Power (Daya tarik budaya dan nilai).
      3. Digital Diplomacy (Pengaruh di ruang siber).
      
      Pemimpin berpengaruh seperti **Soekarno** membuktikan bahwa dengan diplomasi yang kuat, sebuah bangsa baru bisa menggerakkan Konferensi Asia Afrika dan mengubah peta politik dunia.
    `
  },
  "2": {
    title: "Manajemen Konflik Strategis",
    author: "FPN Leadership Dept",
    quote: "Pemimpin yang baik mengambil sedikit lebih banyak bagian dari kesalahan, dan sedikit kurang dari bagian penghargaan.",
    leader: "Arnold H. Glasow",
    content: `
      Konflik tidak bisa dihindari dalam sebuah organisasi, namun bisa dikelola. Strategi 'Win-Win Solution' memerlukan empati tinggi dan kecerdasan emosional.
      
      Langkah strategis resolusi konflik:
      - Identifikasi akar masalah, bukan gejala.
      - Dengarkan secara aktif tanpa interupsi.
      - Pisahkan ego pribadi dari kepentingan kolektif.
      
      **Nelson Mandela** adalah contoh nyata pemimpin paling berpengaruh yang mengubah konflik rasial menjadi rekonsiliasi nasional melalui pengampunan dan strategi rekonsiliasi yang matang.
    `
  },
  "3": {
    title: "Protokoler Kenegaraan RI",
    author: "Setneg Academy x FPN",
    quote: "Kesopanan adalah simbol martabat sebuah bangsa.",
    leader: "Haji Agus Salim",
    content: `
      Memahami aturan protokoler sesuai UU No. 9 Tahun 2010 sangat penting bagi calon pemimpin. Ini mencakup tata tempat, tata upacara, dan tata penghormatan.
      
      Seorang negarawan harus menjaga wibawa institusi dalam setiap gerak-geriknya. Detail kecil seperti posisi duduk hingga cara berjabat tangan mencerminkan kesiapan kita dalam memimpin bangsa.
    `
  },
  "4": {
    title: "Public Speaking & Retorika",
    author: "Communication Lab",
    quote: "Jika kamu berbicara kepada seseorang dengan bahasa yang ia mengerti, itu masuk ke kepalanya. Jika kamu berbicara dengannya dalam bahasanya, itu masuk ke hatinya.",
    leader: "Nelson Mandela",
    content: `
      Retorika adalah senjata tanpa peluru. Kemampuan menyusun narasi yang membakar semangat atau menenangkan massa adalah kemampuan mutlak pemimpin.
      
      Teknik dasar:
      - Intonasi yang berwibawa.
      - Bahasa tubuh yang terbuka.
      - Penggunaan metafora yang relevan.
      
      **Steve Jobs** mengubah dunia teknologi bukan hanya melalui kode, tapi melalui presentasi yang mampu menghipnotis jutaan orang.
    `
  },
  "5": {
    title: "Geopolitik Asia Tenggara",
    author: "Global Strategic Wing",
    quote: "Keamanan nasional tidak hanya diukur dari kekuatan senjata, tapi dari kesejahteraan rakyatnya.",
    leader: "Lee Kuan Yew",
    content: `
      Asia Tenggara adalah poros maritim dunia. Indonesia, sebagai pemimpin alami ASEAN, harus mampu menavigasi persaingan antara kekuatan besar (US-China).
      
      Pemahaman tentang ALKI (Alur Laut Kepulauan Indonesia) dan ketahanan ekonomi regional menjadi kurikulum wajib bagi kader yang ingin berkiprah di kancah internasional.
    `
  }
};

export default function ModuleDetail() {
  const params = useParams();
  const id = params.id as string;
  const data = CONTENT_DATA[id];

  if (!data) return <div className="p-10 text-center font-bold">Modul tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 pb-20 overflow-x-hidden">
      {/* HEADER NAVBAR */}
      <nav className="bg-[#0f172a] py-6 px-6 flex items-center justify-between shadow-xl sticky top-0 z-50">
        <Link href="/dashboard/library" className="text-white flex items-center gap-2 group">
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
          <span className="text-[10px] font-black uppercase tracking-widest">Kembali</span>
        </Link>
        <div className="w-8 h-8 bg-[#b59449] rounded-full flex items-center justify-center font-black text-white text-[10px]">FPN</div>
      </nav>

      {/* HERO SECTION */}
      <header className="bg-slate-50 py-16 px-6 border-b border-slate-100 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="bg-[#b59449]/10 text-[#b59449] text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-[#b59449]/20">
            Modul Pembelajaran #{id}
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-[#0f172a] uppercase italic tracking-tighter mt-6 leading-none">
            {data.title}
          </h1>
          <p className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Penulis: {data.author}</p>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-3xl mx-auto px-6 -mt-10">
        {/* QUOTE CARD */}
        <div className="bg-[#0f172a] p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-7xl font-serif text-[#b59449]">“</div>
          <p className="text-white text-lg md:text-xl font-medium italic leading-relaxed relative z-10">
            "{data.quote}"
          </p>
          <div className="mt-6 flex items-center gap-4 relative z-10">
            <div className="h-[2px] w-8 bg-[#b59449]"></div>
            <p className="text-[#b59449] font-black text-xs uppercase tracking-widest">{data.leader}</p>
          </div>
        </div>

        {/* TEXT BODY */}
        <article className="prose prose-slate max-w-none">
          <div className="space-y-6 text-slate-600 leading-loose text-sm md:text-base text-justify whitespace-pre-line">
            {data.content}
          </div>
          
          <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100 italic text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Refleksi Kepemimpinan</p>
            <p className="text-slate-600">
              Menjadi **pemimpin paling berpengaruh** bukan tentang berapa banyak orang yang melayani Anda, 
              melainkan berapa banyak perubahan positif yang Anda ciptakan untuk orang lain.
            </p>
          </div>
        </article>
      </main>

      <footer className="mt-20 py-10 border-t border-slate-100 text-center opacity-30">
        <p className="text-[9px] font-black uppercase tracking-[0.5em]">© 2026 FORUM PELAJAR NEGARAWAN</p>
      </footer>
    </div>
  );
}