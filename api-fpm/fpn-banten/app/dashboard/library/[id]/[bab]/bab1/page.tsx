"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function Bab1() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="min-h-screen bg-white pb-20">
      <nav className="bg-[#0f172a] p-4 text-white flex items-center gap-4 sticky top-0 z-50 shadow-md">
        <Link href={`/dashboard/library/${id}`} className="text-[#b59449] font-black text-[10px] uppercase tracking-widest hover:opacity-70">
          ← Kembali ke Daftar Bab
        </Link>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-12">
        <p className="text-[#b59449] font-black text-[10px] uppercase tracking-[0.5em] mb-2">Modul 01 • Bagian 01</p>
        <h1 className="text-4xl font-black text-[#0f172a] uppercase italic border-l-8 border-[#b59449] pl-6 mb-10 leading-tight">
          Sejarah & Evolusi <br/>Diplomasi Dunia
        </h1>

        <div className="prose prose-slate max-w-none text-slate-700 leading-loose text-justify space-y-8">
          <div className="bg-[#0f172a] p-8 rounded-[32px] text-white italic relative overflow-hidden shadow-xl">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-black italic">"</div>
             "Diplomasi adalah seni membiarkan orang lain melakukan apa yang Anda inginkan."
             <p className="mt-4 text-[#b59449] font-black text-[10px] not-italic uppercase tracking-widest">— Winston Churchill</p>
          </div>

          <h3 className="text-xl font-black text-[#0f172a] uppercase tracking-tight">1. Akar Westphalia (1648)</h3>
          <p>
            Diplomasi modern tidak lahir begitu saja. Ia berakar pada **Perjanjian Westphalia**, yang mengakhiri Perang Tiga Puluh Tahun di Eropa. Di sinilah konsep **Kedaulatan Negara** pertama kali diakui secara hukum. Sebelum era ini, hubungan internasional hanya didasarkan pada kekuatan militer mentah. Westphalia memperkenalkan sistem di mana negara-negara memiliki hak yang sama di mata hukum internasional, terlepas dari besar kecilnya kekuatan mereka.
          </p>

          <h3 className="text-xl font-black text-[#0f172a] uppercase tracking-tight">2. Diplomasi Rahaya ke Diplomasi Terbuka</h3>
          <p>
            Pasca Perang Dunia I, dunia beralih dari diplomasi rahasia (*Secret Diplomacy*) ke arah yang lebih terbuka. Woodrow Wilson melalui "Fourteen Points" menekankan bahwa perjanjian internasional harus dilakukan secara terbuka di depan publik. Hal ini bertujuan untuk mencegah aliansi rahasia yang memicu konflik global skala besar.
          </p>

          <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
             <h4 className="font-black text-[#0f172a] text-xs uppercase mb-4 tracking-widest">Analisis Strategis Winston Churchill:</h4>
             <p className="text-sm">Churchill membuktikan bahwa diplomasi adalah perpanjangan dari ketahanan nasional. Selama PD II, kemampuan retorika dan negosiasinya dengan Sekutu menunjukkan bahwa seorang diplomat harus mampu menjadi "penyambung lidah" yang teguh tanpa harus terlihat agresif.</p>
          </div>
        </div>

        <Link href={`/dashboard/library/${id}/bab2`} className="mt-12 block bg-[#0f172a] text-white p-6 rounded-2xl text-center group hover:bg-[#b59449] transition-all shadow-lg shadow-[#0f172a]/20">
          <p className="text-[8px] font-bold opacity-50 uppercase tracking-[0.3em] mb-1">Lanjut Materi Selanjutnya</p>
          <span className="font-black uppercase tracking-tighter">Bab 2: Etika & Protokol Kenegaraan →</span>
        </Link>
      </main>
    </div>
  );
}