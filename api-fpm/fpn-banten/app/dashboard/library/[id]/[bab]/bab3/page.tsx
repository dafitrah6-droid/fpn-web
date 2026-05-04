"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Bab3() {
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
        <p className="text-[#b59449] font-black text-[10px] uppercase tracking-[0.5em] mb-2">Modul 01 • Bagian 03</p>
        <h1 className="text-4xl font-black text-[#0f172a] uppercase italic border-l-8 border-[#b59449] pl-6 mb-10 leading-tight">
          Teknik Negosiasi <br/>Tingkat Tinggi
        </h1>

        <div className="prose prose-slate max-w-none text-slate-700 leading-loose text-justify space-y-8">
          <div className="bg-slate-50 p-8 rounded-[40px] border-l-[10px] border-[#b59449] italic shadow-inner">
             "Anda tidak mendapatkan apa yang pantas Anda dapatkan, Anda mendapatkan apa yang Anda negosiasikan."
             <p className="mt-4 text-[#0f172a] font-black text-[10px] not-italic uppercase tracking-widest">— Chester L. Karrass</p>
          </div>

          <p>
            Dalam forum internasional atau organisasi besar, negosiasi bukanlah tentang menang atau kalah, melainkan tentang mencapai **konsensus**. Seorang kader FPN harus memiliki kemampuan *Lobbying* yang kuat sebelum masuk ke meja formal.
          </p>

          <h3 className="text-xl font-black text-[#0f172a] uppercase tracking-tight">Metode Harvard (Win-Win Solution):</h3>
          <p>
            Negosiasi yang efektif berfokus pada **kepentingan**, bukan posisi. Jangan terpaku pada "apa yang diminta" lawan bicara, tapi carilah "mengapa mereka memintanya". Dengan mengetahui alasan di balik tuntutan lawan, kita dapat mencari jalan tengah yang menguntungkan kedua belah pihak tanpa mengorbankan prinsip utama kita.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
             <div className="bg-[#0f172a]/5 p-6 rounded-2xl border border-[#0f172a]/10">
                <p className="font-black text-[#0f172a] text-[10px] uppercase mb-2">BATNA</p>
                <p className="text-xs italic">Best Alternative to a Negotiated Agreement. Selalu miliki rencana cadangan jika negosiasi gagal.</p>
             </div>
             <div className="bg-[#b59449]/5 p-6 rounded-2xl border border-[#b59449]/10">
                <p className="font-black text-[#b59449] text-[10px] uppercase mb-2">ZOPA</p>
                <p className="text-xs italic">Zone of Possible Agreement. Area di mana kedua belah pihak merasa puas dengan kesepakatan.</p>
             </div>
          </div>
        </div>

        <div className="flex gap-4 mt-12">
          <Link href={`/dashboard/library/${id}/bab2`} className="flex-1 bg-slate-100 text-slate-400 p-6 rounded-2xl text-center font-black uppercase text-xs">
            ← Bab 2
          </Link>
          <Link href={`/dashboard/library/${id}/bab4`} className="flex-1 bg-[#0f172a] text-white p-6 rounded-2xl text-center font-black uppercase text-xs hover:bg-[#b59449] shadow-xl">
            Lanjut Bab 4 →
          </Link>
        </div>
      </main>
    </div>
  );
}