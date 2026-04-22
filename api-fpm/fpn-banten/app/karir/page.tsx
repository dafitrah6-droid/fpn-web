"use client";
import React from 'react';
import Link from "next/link";

export default function KarirPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* NAVBAR - Menambahkan navigasi sesuai desain gambar */}
      <nav className="bg-[#1e293b] py-4 px-10 flex justify-between items-center text-white sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-black text-[#1e293b] text-[10px] border-2 border-[#b59449]">FPN ID</div>
          <div>
            <h1 className="font-bold text-sm tracking-tighter uppercase leading-none">Forum Pelajar</h1>
            <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-none mt-1">Negarawan Provinsi Banten</p>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest">
          <Link href="/" className="hover:text-[#b59449] transition-colors">Beranda</Link>
          <Link href="/profil" className="hover:text-[#b59449] transition-colors">Profil</Link>
          <Link href="/berita" className="hover:text-[#b59449] transition-colors">Berita</Link>
          <Link href="/edukasi" className="hover:text-[#b59449] transition-colors text-[#b59449]">Edukasi</Link>
          <Link href="/karir" className="text-[#b59449] border-b-2 border-[#b59449]">Karir</Link>
          <Link href="/hubungi-kami" className="hover:text-[#b59449] transition-colors">Hubungi Kami</Link>
        </div>
      </nav>

      {/* MAIN CONTENT - Tetap menggunakan code asli lo dengan sedikit penyesuaian visual agar match */}
      <main className="flex-grow flex items-center justify-center py-20 px-6 bg-white">
        <div className="max-w-4xl w-full bg-white p-12 rounded-[40px] shadow-2xl border border-slate-100 text-center relative overflow-hidden">
          {/* Aksen Emas di atas sesuai gambar */}
          <div className="absolute top-0 left-0 w-full h-3 bg-[#b59449]"></div>
          
          <h2 className="text-5xl font-black text-[#1e293b] mb-4 uppercase tracking-tighter italic">
            Bergabung <span className="text-[#b59449]">Bersama Kami</span>
          </h2>
          <p className="text-slate-400 font-medium mb-12 max-w-lg mx-auto">
            FPN Banten membuka kesempatan bagi pelajar berdedikasi untuk mengisi posisi strategis di tanah jawara.
          </p>
          
          <div className="grid gap-4 w-full max-w-2xl mx-auto text-left">
            {["Divisi Cyber Security", "Divisi Hubungan Internasional", "Pusdatik (Data & Informasi)"].map((job, idx) => (
              <div key={idx} className="flex justify-between items-center p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#b59449] hover:shadow-xl transition-all group cursor-pointer">
                <span className="font-black text-sm text-[#1e293b] uppercase group-hover:text-[#b59449] transition-colors">{job}</span>
                <span className="text-[10px] bg-blue-50 text-blue-600 px-4 py-1 rounded-full font-black uppercase tracking-widest">OPEN</span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/dashboard" className="bg-[#1e293b] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl inline-block">
              DAFTAR SEKARANG
            </Link>
          </div>
        </div>
      </main>

      {/* FOOTER LENGKAP - Berdasarkan image_d6e2a0.png */}
      <footer className="bg-[#1e293b] text-white pt-20 pb-10 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20 border-b border-slate-800 pb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-black text-[#1e293b] text-[8px] border-2 border-[#b59449]">FPN BTN</div>
               <h2 className="font-black text-xl text-[#b59449]">FPN <span className="text-white">BANTEN</span></h2>
            </div>
            <p className="text-xs text-slate-400 italic leading-loose">
              "Menciptakan ruang digital yang aman, tangguh, dan berdaulat bagi generasi muda Banten melalui kepemimpinan yang berkarakter."
            </p>
          </div>
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest mb-8 text-[#b59449]">Informasi Publik</h3>
            <ul className="space-y-4 text-[11px] font-bold text-slate-400 uppercase">
              <li className="hover:text-white cursor-pointer tracking-widest transition-colors">▪ Struktur Organisasi</li>
              <li className="hover:text-white cursor-pointer tracking-widest transition-colors">▪ Strategi Keamanan</li>
              <li className="hover:text-white cursor-pointer tracking-widest transition-colors">▪ Dokumen Publik</li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-xs uppercase tracking-widest mb-8 text-[#b59449]">Hubungi Kami</h3>
            <p className="text-[11px] mb-4 text-slate-400 font-bold uppercase"><span className="text-white">Alamat:</span> Tangerang, Banten, Indonesia</p>
            <p className="text-[11px] text-slate-400 font-bold uppercase"><span className="text-white">Email:</span> humas@fpn.or.id</p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest gap-4 text-center">
           <p>© 2026 Forum Pelajar Negarawan Banten | Developed by Muhammad Dafitrah</p>
           <div className="flex gap-6">
             <span className="hover:text-white cursor-pointer">Privacy Policy</span>
             <span className="hover:text-white cursor-pointer">Terms of Service</span>
           </div>
        </div>
      </footer>
    </div>
  );
}