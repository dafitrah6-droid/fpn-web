"use client";

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useQRCode } from 'next-qrcode'; 

export default function SertifikatPage() {
  const { Canvas } = useQRCode(); 
  const [userData, setUserData] = useState({
    nama: "MEMUAT...",
    idAnggota: "FPN-BTN-2026-000",
    divisi: "Anggota"
  });

  useEffect(() => {
    const ambilDataDariXampp = async () => {
      try {
        const response = await fetch("http://localhost/api-fpm/get_user.php?email=dafitrah6@gmail.com", {
          cache: 'no-store'
        });
        const data = await response.json();
        
        if (!data.error) {
          setUserData({
            nama: data.nama,
            idAnggota: data.id_anggota_hash || data.id_anggota,
            divisi: data.divisi
          });
        }
      } catch (err) {
        console.error("Gagal konek ke XAMPP, mencoba localStorage...", err);
        
        const savedData = localStorage.getItem("user_member");
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setUserData({
            nama: parsedData.nama || "MUHAMMAD DAFITRAH",
            idAnggota: parsedData.id_anggota_hash || parsedData.id_anggota || "FPN-AUTH-HASH-2026",
            divisi: parsedData.divisi || "Media dan Kreatif"
          });
        }
      }
    };

    ambilDataDariXampp();
  }, []);

  // PERBAIKAN: QR Code diubah menjadi Link URL agar bisa diklik saat di-scan
  // Ini akan mengarah ke halaman verifikasi di website kamu
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const qrValidationData = `${currentOrigin}/verify?hash=${userData.idAnggota}`;

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <nav className="bg-[#0f172a] py-4 px-6 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-white hover:text-[#b59449] transition-colors text-sm font-bold">
            ← KEMBALI
          </Link>
          <h1 className="text-white font-bold tracking-tighter text-sm uppercase border-l border-slate-700 pl-3">Sertifikat Digital</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 flex flex-col items-center">
        <div className="bg-white p-10 rounded-[40px] shadow-2xl border border-slate-200 w-full max-w-2xl text-center relative overflow-hidden">
          
          <div className="w-20 h-20 bg-purple-50 text-purple-600 rounded-3xl flex items-center justify-center mb-6 mx-auto text-3xl shadow-inner border border-purple-100">
            🎓
          </div>
          
          <h2 className="text-2xl font-black text-[#0f172a] uppercase mb-2 tracking-tight">Sertifikat Keanggotaan</h2>
          <p className="text-slate-400 text-xs mb-8 font-bold italic tracking-wide">Sertifikat ini diterbitkan secara sah oleh Forum Pemuda Nusantara (FPN) Banten.</p>

          {/* DESAIN SERTIFIKAT */}
          <div className="aspect-[1.414/1] w-full bg-white rounded-2xl border-4 border-double border-[#b59449]/30 p-8 flex flex-col justify-between items-center relative overflow-hidden mb-8 shadow-sm">
             <div className="absolute top-0 left-0 w-32 h-32 bg-[#b59449]/5 rounded-br-full -translate-x-10 -translate-y-10 border border-[#b59449]/10"></div>
             
             <div className="mt-4 relative z-10">
                <p className="text-[9px] font-black text-[#b59449] tracking-[0.5em] uppercase mb-6 opacity-80">Certificate of Membership</p>
                <p className="text-[7px] text-slate-400 uppercase font-black mb-1 tracking-[0.2em]">Diberikan Kepada:</p>
                <h3 className="text-3xl font-serif font-black text-[#0f172a] border-b-2 border-[#b59449]/40 px-8 pb-3 mb-4 italic decoration-clone">
                  {userData.nama}
                </h3>
             </div>

             <p className="text-[10px] text-slate-500 leading-relaxed max-w-md mx-auto font-bold px-4">
                Dinyatakan secara resmi sebagai anggota aktif dalam kepengurusan Forum Pemuda Nusantara Provinsi Banten untuk masa bakti periode tahun 2026.
             </p>

             {/* Bagian Bawah: ID SHA-256 & QR Code */}
             <div className="w-full flex justify-between items-end mt-6 pt-6 border-t border-slate-100">
                <div className="text-left max-w-[70%]">
                    <p className="text-[8px] font-black text-[#0f172a] uppercase tracking-widest mb-1">Authentic ID (SHA-256):</p>
                    <p className="text-[7px] font-mono font-bold text-slate-400 break-all leading-tight italic">
                        {userData.idAnggota}
                    </p>
                    <p className="text-[8px] font-black text-[#b59449] mt-2 uppercase tracking-tighter">Divisi: {userData.divisi}</p>
                </div>

                <div className="flex flex-col items-center group">
                    <div className="p-2 bg-white border-2 border-slate-100 rounded-xl shadow-md group-hover:border-[#b59449] transition-all duration-500">
                        {/* QR CODE SEKARANG BERISI LINK VALID */}
                        <Canvas
                          text={qrValidationData}
                          options={{
                            errorCorrectionLevel: 'M',
                            margin: 2,
                            scale: 6,        
                            width: 100,       
                            color: {
                              dark: '#000000', 
                              light: '#ffffff',
                            },
                          }}
                        />
                    </div>
                    <p className="text-[6px] font-black text-[#0f172a] mt-2 tracking-widest uppercase opacity-60 tracking-tighter">Scan to Verify Online</p>
                </div>
             </div>
          </div>

          <button 
            onClick={() => window.print()}
            className="w-full bg-[#0f172a] hover:bg-black text-[#b59449] font-black py-4 rounded-[20px] transition-all shadow-xl active:scale-[0.98] uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-2 border border-[#b59449]/20"
          >
            Cetak Sertifikat Resmi
          </button>
        </div>
        
        <div className="mt-8 p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center gap-3">
            <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-[10px]">✓</div>
            <p className="text-[10px] text-green-800 font-bold leading-tight">
                <span className="uppercase tracking-tighter">Live Verification:</span> QR Code ini akan mengarahkan pemindai langsung ke basis data anggota resmi FPN Banten.
            </p>
        </div>
      </main>
    </div>
  );
}