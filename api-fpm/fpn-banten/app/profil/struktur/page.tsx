"use client";
import React from 'react';
import Link from "next/link";

// Komponen Card untuk Pengurus Inti
const IntiCard = ({ jabatan, nama }: { jabatan: string, nama: string }) => (
  <div className="bg-white border-t-4 border-bssn-gold p-5 rounded-xl shadow-sm hover:shadow-md transition-all text-center">
    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{jabatan}</p>
    <h3 className="text-base font-bold text-bssn-dark uppercase">{nama}</h3>
  </div>
);

// Komponen Card untuk Divisi & Anggota
const DivisiSection = ({ namaDivisi, ketua, anggota }: { namaDivisi: string, ketua: string, anggota: string[] }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:border-bssn-gold/30 transition-all">
    <h3 className="text-bssn-gold font-black text-xs uppercase tracking-widest mb-4 border-b pb-2 border-slate-50">{namaDivisi}</h3>
    <div className="mb-4">
      <p className="text-[9px] font-bold text-slate-400 uppercase">Ketua Divisi</p>
      <p className="text-sm font-black text-bssn-dark uppercase">{ketua}</p>
    </div>
    {anggota.length > 0 && (
      <div>
        <p className="text-[9px] font-bold text-slate-400 uppercase mb-2">Anggota</p>
        <ul className="space-y-1">
          {anggota.map((name, idx) => (
            <li key={idx} className="text-xs font-medium text-slate-600 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-bssn-gold rounded-full opacity-50"></span>
              {name.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default function StrukturPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HEADER SECTION */}
      <section className="bg-bssn-dark pt-32 pb-20 px-6 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bssn-gold via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Struktur <span className="text-bssn-gold">Organisasi</span>
          </h1>
          <p className="text-slate-400 text-xs md:text-sm font-medium tracking-wide uppercase">
            Pengurus Provinsi Banten Periode 2026
          </p>
        </div>
      </section>

      {/* STRUKTUR SECTION */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 pb-20 relative z-20">
        
        {/* PENGURUS INTI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <IntiCard jabatan="Ketua" nama="SILFIANA DIAN" />
          <IntiCard jabatan="Wakil Ketua" nama="ISMAIL ILHAM" />
          <IntiCard jabatan="Sekretaris" nama="ANGGA MAULANA" />
          <IntiCard jabatan="Wakil Sekretaris" nama="NOVIATUL HASANAH" />
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] bg-slate-200 flex-1"></div>
          <h2 className="text-bssn-dark font-black uppercase tracking-[0.3em] text-[10px]">Bidang & Divisi</h2>
          <div className="h-[1px] bg-slate-200 flex-1"></div>
        </div>

        {/* DIVISI-DIVISI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DivisiSection 
            namaDivisi="Acara dan Program" 
            ketua="REVI ARUMI" 
            anggota={["Shakila Ratu", "Kahfi Wiratama", "Serelisa Naiborhu"]} 
          />
          <DivisiSection 
            namaDivisi="Media dan Kreatif" 
            ketua="MUHAMMAD DAFITRAH" 
            anggota={["Sahla Izzti"]} 
          />
          <DivisiSection 
            namaDivisi="Humas" 
            ketua="IKHSANA" 
            anggota={["Elza Vionita"]} 
          />
        </div>

        {/* FOOTER NAV */}
        <div className="mt-20 text-center">
          <Link href="/" className="group text-[10px] font-black text-slate-400 hover:text-bssn-gold transition-all uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> KEMBALI KE BERANDA
          </Link>
        </div>
      </section>
    </div>
  );
}