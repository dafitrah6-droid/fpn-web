"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    nama: "MEMUAT...",
    email: "...",
    divisi: "...",
    status: "...",
    idAnggota: "..."
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchFromXampp = async () => {
      try {
        const savedData = localStorage.getItem("user_member");
        if (!savedData) {
          router.push('/login');
          return;
        }

        const parsedUser = JSON.parse(savedData);

        const response = await fetch(`http://localhost/api-fpm/get_user.php?email=${parsedUser.email}`, {
          cache: 'no-store'
        });
        
        const data = await response.json();
        
        if (data && !data.error) {
          setUserData({
            nama: data.nama || "MUHAMMAD DAFITRAH",
            email: data.email,
            divisi: data.divisi,
            status: data.status || "AKTIF",
            idAnggota: data.id_anggota_hash || data.id_anggota 
          });
          localStorage.setItem("user_member", JSON.stringify(data));
        }
      } catch (err) {
        console.error("Gagal konek ke XAMPP, menggunakan data lokal...", err);
        const savedData = localStorage.getItem("user_member");
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setUserData({
            nama: parsedData.nama || "MUHAMMAD DAFITRAH",
            email: parsedData.email || "dafitrah6@gmail.com",
            divisi: parsedData.divisi || "Media dan Kreatif",
            status: parsedData.status || "AKTIF",
            idAnggota: parsedData.id_anggota_hash || parsedData.id_anggota || "FPN-AUTH-HASH-2026"
          });
        }
      }
    };

    fetchFromXampp();
  }, [router]);

  const getInitials = (name: string) => {
    if (!name || name === "MEMUAT...") return "M";
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const copyToClipboard = () => {
    if (userData.idAnggota === "...") return;
    navigator.clipboard.writeText(userData.idAnggota);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden">
      {/* NAVBAR RESPONSIVE */}
      <nav className="bg-[#0f172a] py-4 px-4 md:px-6 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-[#b59449]">
            <span className="text-[#0f172a] font-black text-[8px] text-center uppercase leading-none">FPN<br/>ID</span>
          </div>
          <h1 className="text-white font-bold tracking-tighter text-xs md:text-sm uppercase">Dashboard Anggota</h1>
        </div>
        <Link 
          href="/" 
          onClick={() => localStorage.removeItem("user_member")}
          className="text-[10px] md:text-xs font-black text-slate-300 hover:text-[#b59449] transition-colors tracking-widest"
        >
          KELUAR
        </Link>
      </nav>

      <main className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-10">
        {/* GRID UTAMA: flex-col di HP, grid di Desktop */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card Profil - Di HP tidak sticky agar tidak menutupi konten */}
          <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-slate-100 flex flex-col items-center text-center h-fit md:sticky md:top-24">
            <div className={`w-20 h-20 md:w-24 md:h-24 bg-[#0f172a] rounded-full mb-4 flex items-center justify-center border-4 border-[#b59449]/20 shadow-inner transition-all duration-500 ${userData.nama === "MEMUAT..." ? "animate-pulse opacity-50" : ""}`}>
              <span className="text-[#b59449] text-xl md:text-2xl font-black">{getInitials(userData.nama)}</span>
            </div>
            <h2 className="text-lg md:text-xl font-black text-[#0f172a] uppercase tracking-tight">{userData.nama}</h2>
            <p className="text-[10px] text-slate-400 font-bold mb-6 tracking-wide break-all px-2">{userData.email}</p>
            <div className="bg-[#b59449]/10 text-[#b59449] text-[9px] md:text-[10px] font-black px-6 py-1.5 rounded-full uppercase border border-[#b59449]/20">
              {userData.status}
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            {/* ID Card Style - Fixed for Mobile Wrap */}
            <div className="bg-[#0f172a] p-6 md:p-8 rounded-[32px] text-white relative overflow-hidden shadow-2xl border border-slate-800 group">
              <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-[#b59449]/10 rounded-full blur-3xl"></div>
              <div className="flex justify-between items-start relative z-10">
                <h3 className="text-[#b59449] font-black text-[9px] md:text-[10px] tracking-[0.2em] mb-2 uppercase opacity-80 italic">Authentic Credential</h3>
                <span className="text-[7px] md:text-[8px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded border border-green-500/30 font-black">SHA-256</span>
              </div>
              
              <div className="grid grid-cols-1 gap-4 md:gap-6 mt-6 md:mt-8 relative z-10">
                <div 
                  className="border-l-2 border-[#b59449]/30 pl-4 bg-white/5 p-4 rounded-r-xl cursor-pointer hover:bg-white/10 transition-colors active:scale-[0.98]" 
                  onClick={copyToClipboard}
                >
                  <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-2 flex justify-between">
                    ID Anggota Hash
                    <span className="text-[#b59449] animate-pulse">{copied ? "COPIED!" : "TAP TO COPY"}</span>
                  </p>
                  <p className="text-[10px] md:text-xs font-mono font-bold text-white/90 break-all leading-relaxed">
                    {userData.idAnggota}
                  </p>
                </div>
                
                <div className="border-l-2 border-[#b59449]/30 pl-4">
                  <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Divisi Utama</p>
                  <p className="text-xs md:text-sm font-bold uppercase text-white/90">{userData.divisi}</p>
                </div>
              </div>
            </div>

            {/* Verifikasi Status - Responsive Padding */}
            <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[#0f172a] font-black text-xs md:text-sm uppercase tracking-tight italic">Status Verifikasi</h3>
                <div className="h-px flex-grow mx-4 bg-slate-100"></div>
              </div>
              <div className="space-y-3 md:space-y-4">
                {[
                  { step: "Pendaftaran Online", status: "Selesai", date: "27 Mar 2026" },
                  { step: "Wawancara Internal", status: "Proses", date: "-" },
                  { step: "Pengumuman Akhir", status: "Menunggu", date: "-" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 md:p-5 rounded-2xl bg-slate-50/50 border border-slate-100 group hover:border-[#b59449]/30 hover:bg-white transition-all duration-300">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className={`w-2 h-2 rounded-full ${item.status === "Selesai" ? "bg-green-500 animate-pulse" : "bg-slate-300"}`}></div>
                        <div>
                          <p className="text-[11px] md:text-xs font-bold text-[#0f172a]">{item.step}</p>
                          <p className="text-[8px] md:text-[9px] text-slate-400 font-bold uppercase tracking-tighter">{item.date}</p>
                        </div>
                    </div>
                    <span className={`text-[7px] md:text-[8px] font-black px-3 md:px-4 py-1.5 rounded-lg uppercase tracking-widest ${
                      item.status === "Selesai" ? "bg-green-100 text-green-700" : "bg-white text-slate-400 border border-slate-100"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Menu Grid - sm:grid-cols-2 untuk Tablet ke atas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/dashboard/library" className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#b59449] transition-all group flex flex-col active:scale-95">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 text-lg">📚</div>
                <h4 className="text-[11px] md:text-xs font-black text-[#0f172a] uppercase">1. E-Library</h4>
                <p className="text-[9px] md:text-[10px] text-slate-400 mt-2 leading-relaxed">Akses modul eksklusif kepemimpinan & diplomasi FPN.</p>
              </Link>

              <a 
                href={`https://wa.me/628981607967?text=Halo,%20saya%20${userData.nama}%20dari%20divisi%20${userData.divisi}.%20ID%20Hash:%20${userData.idAnggota.substring(0,8)}...%20Mohon%20info%20terkait%20forum%20diskusi.`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#b59449] transition-all group flex flex-col active:scale-95"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4 text-lg">💬</div>
                <h4 className="text-[11px] md:text-xs font-black text-[#0f172a] uppercase">2. Forum Diskusi</h4>
                <p className="text-[9px] md:text-[10px] text-slate-400 mt-2 leading-relaxed">Terhubung ke WhatsApp Group khusus divisi {userData.divisi}.</p>
              </a>

              <Link href="/dashboard/sertifikat" className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#b59449] transition-all group flex flex-col active:scale-95">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-4 text-lg">🎓</div>
                <h4 className="text-[11px] md:text-xs font-black text-[#0f172a] uppercase">3. Sertifikat</h4>
                <p className="text-[9px] md:text-[10px] text-slate-400 mt-2 leading-relaxed">Unduh sertifikat keanggotaan digital resmi Anda.</p>
              </Link>

              <Link href="/dashboard/events" className="bg-white p-5 md:p-6 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#b59449] transition-all group flex flex-col active:scale-95">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-4 text-lg">📅</div>
                <h4 className="text-[11px] md:text-xs font-black text-[#0f172a] uppercase">4. Agenda</h4>
                <p className="text-[9px] md:text-[10px] text-slate-400 mt-2 leading-relaxed">Jadwal kegiatan strategis nasional & internasional.</p>
              </Link>
            </div>

          </div>
        </div>
      </main>

      <footer className="py-8 md:py-12 text-center opacity-30">
        <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em]">© 2026 MUHAMMAD DAFITRAH</p>
      </footer>
    </div>
  );
}