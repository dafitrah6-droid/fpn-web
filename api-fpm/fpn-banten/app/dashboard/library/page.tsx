"use client";

import React, { useState } from 'react';
import Link from "next/link";

export default function Library() {
  const [filter, setFilter] = useState("SEMUA");

  const modules = [
    { id: 1, title: "Dasar Diplomasi Internasional", cat: "DIPLOMASI", dur: "15 Menit", icon: "🌐" },
    { id: 2, title: "Manajemen Konflik Strategis", cat: "KEPEMIMPINAN", dur: "25 Menit", icon: "⚖️" },
    { id: 3, title: "Protokoler Kenegaraan RI", cat: "NEGARA", dur: "20 Menit", icon: "🇮🇩" },
    { id: 4, title: "Public Speaking & Retorika", cat: "KEPEMIMPINAN", dur: "30 Menit", icon: "🎙️" },
    { id: 5, title: "Geopolitik Asia Tenggara", cat: "DIPLOMASI", dur: "40 Menit", icon: "🗺️" },
  ];

  const filteredModules = filter === "SEMUA" 
    ? modules 
    : modules.filter(m => m.cat === filter);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-12">
      {/* NAVBAR */}
      <nav className="bg-[#0f172a] py-4 px-6 flex items-center gap-4 shadow-lg sticky top-0 z-50">
        <Link href="/dashboard" className="text-white hover:text-[#b59449] transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </Link>
        <h1 className="text-white font-bold tracking-tighter text-sm uppercase">E-Library FPN</h1>
      </nav>

      <main className="max-w-4xl mx-auto px-4 pt-8">
        {/* HEADER SECTION */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl font-black text-[#0f172a] uppercase italic tracking-tighter">Modul <span className="text-[#b59449]">Eksklusif</span></h2>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Pusat Pembelajaran Kader Negarawan</p>
        </div>

        {/* FILTER TABS */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {["SEMUA", "DIPLOMASI", "KEPEMIMPINAN", "NEGARA"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-[9px] font-black transition-all whitespace-nowrap border ${
                filter === cat 
                ? "bg-[#b59449] text-white border-[#b59449] shadow-md" 
                : "bg-white text-slate-400 border-slate-200 hover:border-[#b59449]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MODULE LIST */}
        <div className="grid grid-cols-1 gap-4">
          {filteredModules.map((mod) => (
            /* PERBAIKAN: Link dibungkus di luar card untuk memastikan rute mengarah ke [id] */
            <Link href={`/dashboard/library/${mod.id}`} key={mod.id} className="block group">
              <div 
                className="bg-white p-5 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#b59449]/50 transition-all flex items-center justify-between cursor-pointer active:scale-[0.98]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                    {mod.icon}
                  </div>
                  <div>
                    <p className="text-[8px] font-black text-[#b59449] uppercase tracking-widest">{mod.cat}</p>
                    <h3 className="text-xs md:text-sm font-black text-[#0f172a] uppercase mt-0.5">{mod.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span className="text-[9px] text-slate-400 font-bold uppercase">{mod.dur}</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-[#b59449] group-hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredModules.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Belum ada modul di kategori ini.</p>
          </div>
        )}
      </main>

      <footer className="mt-12 text-center opacity-20">
        <p className="text-[8px] font-black uppercase tracking-[0.4em]">FPN E-LIBRARY SYSTEM v1.0</p>
      </footer>
    </div>
  );
}