"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Bab5() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="min-h-screen bg-white pb-20">
      <nav className="bg-[#0f172a] p-4 text-white flex items-center gap-4 sticky top-0 z-50 shadow-md">
        <Link href={`/dashboard/library/${id}`} className="text-[#b59449] font-black text-[10px] uppercase tracking-widest hover:opacity-70">
          ← Kembali
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12 text-center md:text-left">
        <p className="text-[#b59449] font-black text-[10px] uppercase tracking-[0.5em] mb-2">Modul 01 • Bagian Akhir</p>
        <h1 className="text-4xl font-black text-[#0f172a] uppercase italic border-l-8 border-[#b59449] pl-6 mb-10 leading-tight">
          Diplomasi Digital <br/>di Era 5.0
        </h1>

        <div className="prose prose-slate max-w-none text-slate-700 leading-loose text-justify space-y-8">
          <p>
            Selamat. Kamu telah sampai pada puncak pembelajaran diplomasi. Di bab terakhir ini, kita membahas bagaimana teknologi informasi telah merubah wajah diplomasi selamanya. Kini, sebuah cuitan di media sosial bisa memiliki dampak sekuat nota diplomatik resmi.
          </p>

          <div className="bg-[#0f172a] text-white p-10 rounded-[40px] shadow-2xl my-10 relative overflow-hidden">
             <div className="relative z-10">
               <h4 className="text-[#b59449] font-black text-xs uppercase mb-4 tracking-widest">Tugas Akhir Kader:</h4>
               <p className="text-lg font-bold italic mb-6">"Bagaimana Anda menggunakan jejak digital Anda untuk memperkuat citra Indonesia di mata dunia?"</p>
               <p className="text-sm opacity-70">Diplomasi publik kini berada di tangan setiap warga negara. Kemampuan kita mengelola narasi digital adalah bentuk bela negara di masa modern.</p>
             </div>
             <div className="absolute bottom-[-20%] right-[-10%] text-[150px] font-black italic opacity-5 select-none">FPN</div>
          </div>

          <p>
            Materi ini adalah landasan bagi kamu untuk menjadi pemimpin paling berpengaruh di masa depan. Gunakan pengetahuan ini untuk membangun jaringan, meredam konflik, dan membawa nama baik daerahmu ke tingkat nasional dan internasional.
          </p>
        </div>

        <div className="mt-20 border-t border-slate-100 pt-10 text-center">
          <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] mb-8 italic">Pembelajaran Selesai • Forum Pelajar Negarawan</p>
          <Link href="/dashboard/library" className="bg-[#b59449] text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-all inline-block">
             Kembali ke Beranda E-Library
          </Link>
        </div>
      </main>
    </div>
  );
}