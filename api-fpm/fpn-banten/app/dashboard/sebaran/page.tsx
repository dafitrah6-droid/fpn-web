"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";

// URL GeoJSON Indonesia yang lebih stabil dan umum digunakan
const geoUrl = "https://raw.githubusercontent.com/superp0ps/indonesia-geojson/master/indonesia-provinces.json";

const dataStats = [
  ['Aceh', 120, 85, 45], ['Sumatera Utara', 210, 150, 75], ['Sumatera Barat', 130, 90, 48],
  ['Riau', 160, 110, 55], ['Jambi', 100, 70, 35], ['Sumatera Selatan', 180, 125, 62],
  ['Bengkulu', 90, 60, 30], ['Lampung', 170, 120, 60], ['Kepulauan Bangka Belitung', 70, 45, 23],
  ['Kepulauan Riau', 110, 75, 38], ['DKI Jakarta', 350, 250, 125], ['Jawa Barat', 320, 230, 115],
  ['Jawa Tengah', 290, 205, 102], ['DI Yogyakarta', 150, 105, 52], ['Jawa Timur', 310, 220, 110],
  ['Banten', 240, 170, 85], ['Bali', 140, 95, 47], ['Nusa Tenggara Barat', 110, 75, 38],
  ['Nusa Tenggara Timur', 100, 70, 35], ['Kalimantan Barat', 150, 105, 52], ['Kalimantan Tengah', 130, 90, 45],
  ['Kalimantan Selatan', 140, 95, 47], ['Kalimantan Timur', 180, 125, 62], ['Kalimantan Utara', 80, 55, 27],
  ['Sulawesi Utara', 130, 90, 45], ['Sulawesi Tengah', 120, 85, 42], ['Sulawesi Selatan', 190, 135, 67],
  ['Sulawesi Tenggara', 110, 75, 37], ['Gorontalo', 90, 60, 30], ['Sulawesi Barat', 100, 70, 35],
  ['Maluku', 100, 70, 35], ['Maluku Utara', 90, 60, 30], ['Papua Barat', 120, 85, 42], ['Papua', 140, 95, 47],
];

export default function PetaSebaranNasionalPage() {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [tooltipContent, setTooltipContent] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getProvinceStats = (name: string) => {
    if (!name) return null;
    return dataStats.find(item => item[0].toLowerCase() === name.toLowerCase());
  };

  const selectedStats = selectedProvince ? getProvinceStats(selectedProvince) : null;

  const colorScale = scaleQuantile<string>()
    .domain(dataStats.map(d => d[1] as number))
    .range(["#f1f5f9", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#0f172a"]);

  if (!mounted) return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-[#b59449] border-t-transparent rounded-full animate-spin"></div>
      <p className="font-bold text-slate-400 uppercase tracking-widest text-xs">Menginisialisasi Sistem Peta...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <nav className="bg-[#0f172a] py-4 px-6 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-white hover:text-[#b59449] transition-colors text-xs font-bold uppercase tracking-widest">
            ← Dashboard
          </Link>
          <h1 className="text-white font-bold tracking-tighter text-sm uppercase border-l border-slate-700 pl-3">Sebaran Nasional</h1>
        </div>
        <div className="hidden md:block">
           <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">FPN Integrated Dashboard</span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center">
        <div className="bg-white p-6 md:p-10 rounded-[40px] shadow-2xl border border-slate-100 w-full relative overflow-hidden mb-12">
          <div className="absolute top-0 left-0 w-full h-3 bg-[#b59449]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-black text-[#0f172a] uppercase italic tracking-tight">Peta Jaringan FPN Indonesia</h2>
              <p className="text-[10px] font-black text-[#b59449] tracking-widest uppercase mt-1">Gunakan Scroll untuk Zoom In/Out</p>
            </div>
            <div className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Status: <span className="text-green-500 italic">Live Data</span></p>
            </div>
          </div>

          <div className="aspect-[2/1] w-full bg-slate-100 rounded-3xl border border-slate-200 flex justify-center items-center relative overflow-hidden shadow-inner cursor-grab active:cursor-grabbing">
             <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000, center: [118, -2.5] }} style={{ width: "100%", height: "100%" }}>
               <ZoomableGroup zoom={1} maxZoom={5}>
                 <Geographies geography={geoUrl}>
                   {({ geographies }) =>
                     geographies.map((geo) => {
                       // PERBAIKAN: Penanganan nama properti agar lebih akurat sesuai file GeoJSON
                       const provinceName = geo.properties.name || geo.properties.NAME_1 || geo.properties.Propinsi || geo.properties.NAME_0;
                       const stats = getProvinceStats(provinceName);
                       const isSelected = selectedProvince === provinceName;
                       const baseColor = stats ? colorScale(stats[1] as number) : "#f1f5f9";
                       const fillColor = isSelected ? "#b59449" : baseColor;
                       
                       return (
                         <Geography
                           key={geo.rsmKey}
                           geography={geo}
                           onMouseEnter={() => setTooltipContent(provinceName)}
                           onMouseLeave={() => setTooltipContent("")}
                           onClick={() => setSelectedProvince(provinceName)}
                           style={{
                             default: { fill: fillColor, stroke: "#FFF", strokeWidth: 0.5, outline: "none", transition: "all 0.3s" },
                             hover: { fill: "#d1b06b", stroke: "#0f172a", strokeWidth: 1, outline: "none" },
                             pressed: { fill: "#b59449", outline: "none" }
                           }}
                         />
                       );
                     })
                   }
                 </Geographies>
               </ZoomableGroup>
             </ComposableMap>

             {/* Legend */}
             <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-2xl border border-slate-200 hidden sm:block">
                <p className="text-[8px] font-bold text-slate-500 uppercase mb-2 text-center">Kepadatan Jaringan</p>
                <div className="flex gap-1">
                  {["#f1f5f9", "#94a3b8", "#1e293b"].map(c => (
                    <div key={c} className="w-4 h-2 rounded-full" style={{ backgroundColor: c }}></div>
                  ))}
                </div>
             </div>

             {tooltipContent && (
               <div className="absolute top-5 left-5 bg-[#0f172a] text-white text-[10px] font-black py-2 px-4 rounded-full shadow-xl uppercase tracking-widest border border-[#b59449] pointer-events-none animate-bounce">
                 📍 {tooltipContent}
               </div>
             )}
          </div>
        </div>

        {/* Panel Statistik */}
        <div className={`w-full max-w-6xl transition-all duration-700 ease-out ${selectedProvince ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 h-0 overflow-hidden'}`}>
          {selectedProvince && (
            <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-100 w-full flex flex-col md:flex-row gap-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-3 bg-[#b59449] h-full"></div>
                <div className="flex-none md:w-1/3 text-left">
                    <h4 className="text-[10px] font-black text-[#b59449] tracking-widest uppercase mb-1">PROFIL REGIONAL</h4>
                    <h3 className="text-4xl font-black text-[#0f172a] uppercase italic tracking-tighter border-b-4 border-slate-50 pb-2">{selectedProvince}</h3>
                    <p className="text-[10px] mt-4 text-slate-400 font-bold leading-relaxed uppercase italic">Integrity & Leadership Network Data</p>
                </div>
                <div className="flex-grow grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <StatBox label="Anggota Aktif" value={selectedStats ? selectedStats[1] : 0} color="text-[#0f172a]" />
                    <StatBox label="Total Proyek" value={selectedStats ? selectedStats[2] : 0} color="text-[#0f172a]" />
                    <StatBox label="Modul Literasi" value={selectedStats ? selectedStats[3] : 0} color="text-[#0f172a]" />
                </div>
            </div>
          )}
        </div>
      </main>
      
      <footer className="text-center p-10 opacity-50 flex flex-col items-center gap-2">
        <div className="w-10 h-1 bg-slate-200 rounded-full mb-4"></div>
        <p className="text-[10px] font-black uppercase tracking-[0.4em]">© 2026 MUHAMMAD DAFITRAH</p>
        <p className="text-[8px] font-bold text-slate-400 uppercase italic">Security & Data Integrity Protected</p>
      </footer>
    </div>
  );
}

function StatBox({ label, value, color }: { label: string, value: any, color: string }) {
  return (
    <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all duration-300 group">
      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-[#b59449] transition-colors">{label}</p>
      <p className={`text-5xl font-black ${color}`}>{value}</p>
    </div>
  );
}