"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function VerifyContent() {
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash');
  
  const [status, setStatus] = useState<'loading' | 'valid' | 'invalid'>('loading');
  const [memberData, setMemberData] = useState<any>(null);

  useEffect(() => {
    if (!hash) {
      setStatus('invalid');
      return;
    }

    const verifikasiKeDatabase = async () => {
      try {
        // Ganti URL ini sesuai dengan endpoint API XAMPP kamu untuk verifikasi hash
        const response = await fetch(`http://localhost/api-fpm/verify_hash.php?hash=${hash}`);
        const data = await response.json();

        if (data && !data.error) {
          setMemberData(data);
          setStatus('valid');
        } else {
          setStatus('invalid');
        }
      } catch (err) {
        console.error("Gagal verifikasi:", err);
        setStatus('invalid');
      }
    };

    verifikasiKeDatabase();
  }, [hash]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-white rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden">
        
        {/* Header Visual */}
        <div className={`py-8 flex flex-col items-center ${status === 'valid' ? 'bg-green-50' : 'bg-red-50'}`}>
          {status === 'loading' && (
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          )}
          
          {status === 'valid' && (
            <>
              <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center text-4xl shadow-lg shadow-green-200 mb-4">
                ✓
              </div>
              <h1 className="text-green-800 font-black uppercase tracking-widest text-sm">Verified Member</h1>
            </>
          )}

          {status === 'invalid' && (
            <>
              <div className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center text-4xl shadow-lg shadow-red-200 mb-4">
                ✕
              </div>
              <h1 className="text-red-800 font-black uppercase tracking-widest text-sm">Invalid Certificate</h1>
            </>
          )}
        </div>

        {/* Content Section */}
        <div className="p-8">
          {status === 'loading' && (
            <p className="text-center text-slate-400 font-bold animate-pulse">Menghubungkan ke basis data FPN...</p>
          )}

          {status === 'valid' && memberData && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-1">Nama Anggota</p>
                <h2 className="text-2xl font-serif font-black text-[#0f172a] italic">{memberData.nama}</h2>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-center">
                <div>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-tighter">Divisi</p>
                  <p className="text-xs font-bold text-[#b59449]">{memberData.divisi}</p>
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-tighter">Masa Bakti</p>
                  <p className="text-xs font-bold text-slate-700">2026 - Aktif</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <p className="text-[8px] text-slate-400 font-black uppercase mb-1">Digital Identity Hash (SHA-256)</p>
                <p className="text-[8px] font-mono text-slate-500 break-all leading-tight">
                  {hash}
                </p>
              </div>

              <div className="pt-4 text-center">
                <p className="text-[10px] text-slate-400 italic font-medium leading-relaxed">
                  Data ini divalidasi langsung oleh sistem enkripsi Forum Pemuda Nusantara Provinsi Banten.
                </p>
              </div>
            </div>
          )}

          {status === 'invalid' && (
            <div className="text-center py-4">
              <p className="text-slate-600 font-bold text-sm mb-6">
                Maaf, sertifikat dengan tanda tangan digital ini tidak ditemukan atau telah kedaluwarsa.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="px-6 py-3 bg-[#0f172a] text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-black transition-all"
              >
                Kembali ke Beranda
              </button>
            </div>
          )}
        </div>
        
        {/* Footer Brand */}
        <div className="py-6 border-t border-slate-50 text-center">
          <p className="text-[10px] font-black text-[#0f172a]/20 uppercase tracking-[0.3em]">FPN Banten Verification System</p>
        </div>
      </div>
    </div>
  );
}

// Next.js mewajibkan useSearchParams dibungkus Suspense
export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <VerifyContent />
    </Suspense>
  );
}