"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Bab4() {
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
        <p className="text-[#b59449] font-black text-[10px] uppercase tracking-[0.5em] mb-2">Modul 01 • Bagian 04</p>
        <h1 className="text-4xl font-black text-[#0f172a] uppercase italic border-l-8 border-[#b59449] pl-6 mb-10 leading-tight">
          Geopolitik & <br/>Kekuatan Regional
        </h1>

        <div className="prose prose-slate max-w-none text-slate-700 leading-loose text-justify space-y-8">
          <p>
            Indonesia adalah poros maritim dunia. Secara geopolitik, kita berada di antara dua samudra dan dua benua. Posisi ini menjadikan Indonesia sebagai "Big Brother" di Asia Tenggara melalui ASEAN. Namun, posisi strategis ini juga membawa tantangan besar, terutama terkait Laut Natuna Utara dan persaingan pengaruh AS-Tiongkok.
          </p>

          <h3 className="text-xl font-black text-[#0f172a] uppercase tracking-tight">ASEAN Centrality:</h3>
          <p>
            Prinsip utama diplomasi kita adalah memastikan ASEAN tetap menjadi pusat kemudi keamanan regional. Kader FPN harus memahami bahwa stabilitas ekonomi kita sangat bergantung pada stabilitas politik tetangga kita. Kita tidak bisa sejahtera sendirian jika kawasan di sekitar kita sedang bergejolak.
          </p>

          <div className="p-8 bg-slate-900 rounded-[32px] text-white">
             <h4 className="font-black text-[#b59449] text-xs uppercase mb-4">Isu Strategis Masa Depan:</h4>
             <ul className="text-sm space-y-3 opacity-80 list-disc pl-4">
                <li>Ketahanan energi terbarukan antar negara ASEAN.</li>
                <li>Cyber-diplomacy dalam menghadapi serangan digital lintas negara.</li>
                <li>Mitigasi krisis kemanusiaan di kawasan tanpa melanggar prinsip non-intervensi.</li>
             </ul>
          </div>
        </div>

        <div className="flex gap-4 mt-12">
          <Link href={`/dashboard/library/${id}/bab3`} className="flex-1 bg-slate-100 text-slate-400 p-6 rounded-2xl text-center font-black uppercase text-xs">
            ← Bab 3
          </Link>
          <Link href={`/dashboard/library/${id}/bab5`} className="flex-1 bg-[#0f172a] text-white p-6 rounded-2xl text-center font-black uppercase text-xs hover:bg-[#b59449] shadow-xl">
            Lanjut Bab Terakhir →
          </Link>
        </div>
      </main>
    </div>
  );
}