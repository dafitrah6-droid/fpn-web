"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Bab2() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="min-h-screen bg-white pb-20">
      <nav className="bg-[#0f172a] p-4 text-white flex items-center gap-4 sticky top-0 z-50 shadow-md">
        <Link href={`/dashboard/library/${id}`} className="text-[#b59449] font-black text-[10px] uppercase tracking-widest hover:opacity-70">
          ← Kembali
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12">
        <p className="text-[#b59449] font-black text-[10px] uppercase tracking-[0.5em] mb-2">Modul 01 • Bagian 02</p>
        <h1 className="text-4xl font-black text-[#0f172a] uppercase italic border-l-8 border-[#b59449] pl-6 mb-10 leading-tight">
          Etika & Protokol <br/>Kenegaraan RI
        </h1>

        <div className="prose prose-slate max-w-none text-slate-700 leading-loose text-justify space-y-8">
          <div className="bg-[#b59449] p-8 rounded-[32px] text-white italic shadow-xl">
             "Bangsa yang besar adalah bangsa yang menghargai jasa pahlawannya."
             <p className="mt-4 text-[#0f172a] font-black text-[10px] not-italic uppercase tracking-widest">— Ir. Soekarno</p>
          </div>

          <p>
             protokol bukan sekadar aturan kaku tentang baris-berbaris. Protokol adalah bahasa simbolis kedaulatan negara. Bung Karno sangat memahami ini; beliau selalu tampil necis dengan peci hitam untuk menegaskan identitas Indonesia di tengah dominasi Barat.
          </p>

          <h3 className="text-xl font-black text-[#0f172a] uppercase tracking-tight">Pilar Utama Protokoler:</h3>
          <ul className="list-none p-0 space-y-4">
            <li className="flex gap-4 items-start">
               <span className="bg-[#0f172a] text-white px-3 py-1 rounded-lg text-[10px] font-black">01</span>
               <p className="text-sm">**Tata Tempat (Precedence):** Aturan siapa yang paling utama berhak mendapatkan tempat duduk atau posisi terdepan berdasarkan jabatan resmi.</p>
            </li>
            <li className="flex gap-4 items-start">
               <span className="bg-[#0f172a] text-white px-3 py-1 rounded-lg text-[10px] font-black">02</span>
               <p className="text-sm">**Tata Penghormatan:** Cara kita memberikan penghargaan kepada simbol negara dan pejabat tinggi sesuai dengan UU No. 9 Tahun 2010.</p>
            </li>
          </ul>

          <p>
             Ketidaktahuan seorang utusan negara terhadap protokol dapat berakibat pada krisis diplomatik. Sebagai kader nasional, penguasaan etika menunjukkan kematangan karakter dan martabat organisasi FPN di mata publik.
          </p>
        </div>

        <div className="flex gap-4 mt-12">
          <Link href={`/dashboard/library/${id}/bab1`} className="flex-1 bg-slate-100 text-slate-400 p-6 rounded-2xl text-center font-black uppercase text-xs hover:bg-slate-200">
            ← Kembali
          </Link>
          <Link href={`/dashboard/library/${id}/bab3`} className="flex-1 bg-[#0f172a] text-white p-6 rounded-2xl text-center font-black uppercase text-xs hover:bg-[#b59449] shadow-xl">
            Lanjut Bab 3 →
          </Link>
        </div>
      </main>
    </div>
  );
}