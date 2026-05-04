"use client";
import React, { useState } from 'react'; // Tambahan untuk interaksi peta
import Link from "next/link";

export default function ProfilPage() {
  // State untuk interaksi peta
  const [hoveredRegion, setHoveredRegion] = useState("Pilih wilayah di peta");

  // Komponen Peta Banten Interaktif (SVG)
  const BantenMap = () => (
    <svg viewBox="0 0 1000 700" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#ffffff" strokeWidth="2" strokeLinejoin="round">
        {/* Kabupaten Tangerang */}
        <path d="M750,200 L850,250 L830,350 L730,380 L700,300 Z" fill="#1a233a" className="hover:fill-bssn-gold cursor-pointer transition-colors"
          onMouseEnter={() => setHoveredRegion("Kabupaten Tangerang")} onMouseLeave={() => setHoveredRegion("Pilih wilayah di peta")} />
        {/* Kota Tangerang & Tangsel */}
        <path d="M850,250 L950,280 L930,380 L830,350 Z" fill="#2c3e50" className="hover:fill-bssn-gold cursor-pointer transition-colors"
          onMouseEnter={() => setHoveredRegion("Kota Tangerang & Tangsel")} onMouseLeave={() => setHoveredRegion("Pilih wilayah di peta")} />
        {/* Kabupaten Serang */}
        <path d="M550,150 L700,200 L730,300 L680,350 L500,320 L480,220 Z" fill="#1a233a" className="hover:fill-bssn-gold cursor-pointer transition-colors"
          onMouseEnter={() => setHoveredRegion("Kabupaten Serang")} onMouseLeave={() => setHoveredRegion("Pilih wilayah di peta")} />
        {/* Kota Serang & Cilegon */}
        <path d="M700,100 L750,150 L730,230 L650,200 Z" fill="#2c3e50" className="hover:fill-bssn-gold cursor-pointer transition-colors"
          onMouseEnter={() => setHoveredRegion("Kota Serang & Cilegon")} onMouseLeave={() => setHoveredRegion("Pilih wilayah di peta")} />
        {/* Kabupaten Pandeglang */}
        <path d="M100,350 L350,380 L380,550 L150,600 L50,550 Z" fill="#1a233a" className="hover:fill-bssn-gold cursor-pointer transition-colors"
          onMouseEnter={() => setHoveredRegion("Kabupaten Pandeglang")} onMouseLeave={() => setHoveredRegion("Pilih wilayah di peta")} />
        {/* Kabupaten Lebak */}
        <path d="M350,380 L500,420 L550,650 L300,680 L280,580 Z" fill="#1a233a" className="hover:fill-bssn-gold cursor-pointer transition-colors"
          onMouseEnter={() => setHoveredRegion("Kabupaten Lebak")} onMouseLeave={() => setHoveredRegion("Pilih wilayah di peta")} />
      </g>
    </svg>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Kecil */}
      <header className="bg-bssn-dark py-6 px-10 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tighter">PROFIL <span className="text-bssn-gold">FPN BANTEN</span></h1>
        <Link href="/" className="text-xs bg-white/10 hover:bg-white/20 px-4 py-2 rounded transition-all">KEMBALI KE BERANDA</Link>
      </header>

      <main className="max-w-4xl mx-auto py-16 px-6">
        {/* Section Visi & Misi (Tetap Sama) */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-slate-200 mb-10">
          <h2 className="text-3xl font-black text-bssn-dark mb-6 border-l-8 border-bssn-gold pl-5 uppercase">Visi & Misi</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8 italic">
            "Menjadi lokomotif pergerakan pelajar Indonesia dalam menjaga kedaulatan digital dan mencetak kader negarawan yang kompeten di kancah global."
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-slate-50 p-6 rounded-xl border-t-4 border-bssn-dark">
              <h3 className="font-bold text-bssn-dark mb-3 uppercase">Fokus Utama</h3>
              <ul className="text-sm space-y-2 text-slate-500">
                <li>• Keamanan Siber & Literasi Digital</li>
                <li>• Diplomasi Pelajar Internasional</li>
                <li>• Penguatan Ideologi Pancasila</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border-t-4 border-bssn-gold">
              <h3 className="font-bold text-bssn-dark mb-3 uppercase">Wilayah Kerja</h3>
              <p className="text-sm text-slate-500">Berbasis di Banten, bergerak untuk Indonesia dengan jaringan di 38 Provinsi.</p>
            </div>
          </div>
        </div>

        {/* SECTION PETA (Tambahan Baru Tanpa Mengubah Atas) */}
        <div className="bg-bssn-dark p-10 rounded-2xl shadow-2xl border border-slate-800">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Sebaran Wilayah Banten</h2>
            <div className="bg-bssn-gold text-bssn-dark text-[10px] font-black px-4 py-2 rounded-full uppercase">
              {hoveredRegion}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-xl">
            <BantenMap />
          </div>
          
          <p className="text-[10px] text-slate-400 mt-6 text-center tracking-widest uppercase">
            © 2026 FORUM PELAJAR NEGARAWAN BANTEN | DEVELOPED BY MUHAMMAD DAFITRAH
          </p>
        </div>
      </main>
    </div>
  );
}