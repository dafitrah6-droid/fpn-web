"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

// DATABASE KONTEN TETAP SAMA (TIDAK MENGUBAH STRUKTUR DATA KAMU)
const MODULE_DATA: any = {
  "1": {
    title: "Dasar Diplomasi Internasional",
    babs: {
      "bab1": { 
        name: "Sejarah Diplomasi Modern", 
        leader: "Winston Churchill",
        quote: "Diplomasi adalah seni mengatakan 'anjing baik' sampai Anda menemukan batu.",
        text: "Diplomasi modern berakar dari perjanjian Westphalia. Winston Churchill, sebagai pemimpin paling berpengaruh di masanya, menggunakan retorika untuk menyatukan sekutu. Seorang negarawan harus mampu membaca situasi geopolitik sebelum mengambil keputusan besar."
      },
      "bab2": { 
        name: "Etika & Protokol Internasional", 
        leader: "Soekarno",
        quote: "Bangsa yang besar adalah bangsa yang menghargai jasa pahlawannya.",
        text: "Bung Karno adalah sosok pemimpin paling berpengaruh yang membawa identitas Indonesia ke panggung dunia. Dalam bab ini, kita mempelajari bagaimana protokol bukan sekadar formalitas, tapi martabat negara."
      }
    }
  },
  "2": {
    title: "Manajemen Konflik Strategis",
    babs: {
      "bab1": { 
        name: "Psikologi Massa & Konflik", 
        leader: "Nelson Mandela",
        quote: "Pendidikan adalah senjata paling mematikan di dunia.",
        text: "Nelson Mandela membuktikan diri sebagai pemimpin paling berpengaruh dengan merubah kebencian menjadi rekonsiliasi. Mengelola konflik membutuhkan ketenangan dan perspektif jangka panjang agar organisasi tetap stabil."
      }
    }
  }
};

export default function BabPage() {
  const params = useParams();
  const id = params.id as string;
  
  // Deteksi Bab berdasarkan folder tempat file ini berada
  // Jika file ini di /bab1/page.tsx, maka kita ambil data bab1
  const pathParts = window.location.pathname.split('/');
  const babId = pathParts[pathParts.length - 1] || "bab1"; 
  
  const currentModule = MODULE_DATA[id];
  const selectedBab = currentModule?.babs[babId];

  if (!selectedBab) return <div className="p-10 text-center uppercase font-black">Materi Bab Belum Tersedia</div>;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* NAVBAR */}
      <nav className="bg-[#0f172a] py-4 px-6 flex items-center gap-4 shadow-lg sticky top-0 z-50">
        <Link href={`/dashboard/library/${id}`} className="text-white hover:text-[#b59449] transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-white font-bold tracking-tighter text-xs uppercase">{currentModule.title}</h1>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Link href={`/dashboard/library/${id}`} className="text-[10px] font-black text-[#b59449] uppercase tracking-widest mb-6 flex items-center gap-2">
              ← Kembali ke Daftar Bab
          </Link>

          <div className="bg-[#0f172a] p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden mb-10">
            <p className="text-white text-lg italic leading-relaxed relative z-10">"{selectedBab.quote}"</p>
            <p className="mt-4 text-[#b59449] font-black text-xs uppercase tracking-widest relative z-10">— {selectedBab.leader}</p>
          </div>

          <article className="bg-white p-8 md:p-12 rounded-[32px] border border-slate-100 shadow-sm">
            <h2 className="text-2xl font-black text-[#0f172a] uppercase italic mb-6 border-l-4 border-[#b59449] pl-4">{selectedBab.name}</h2>
            <div className="text-slate-600 leading-loose text-justify text-sm md:text-base space-y-4">
              <p>{selectedBab.text}</p>
              <p>
                Sebagai kader FPN, memahami jejak langkah **pemimpin paling berpengaruh** adalah kunci untuk membangun bangsa. 
                Materi dalam {selectedBab.name} ini dirancang agar kamu memiliki landasan berpikir yang kuat dan strategis.
              </p>
              
              {/* Tempat untuk menambah teks yang lebih panjang */}
              <p className="pt-4 border-t border-slate-50 italic text-xs">
                Materi ini bersifat eksklusif untuk Kader Paskibraka & Parlemen Pelajar. 
                Dilarang menyebarluaskan tanpa izin tertulis dari FPN.
              </p>
            </div>
          </article>
          
          {/* Navigasi Antar Bab */}
          <div className="mt-10 flex justify-between items-center px-4">
             <p className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">FPN E-Library System</p>
             <Link href={`/dashboard/library/${id}`} className="bg-[#b59449] text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-[#b59449]/20 hover:scale-105 transition-all">
                Selesai Membaca
             </Link>
          </div>
        </div>
      </main>
    </div>
  );
