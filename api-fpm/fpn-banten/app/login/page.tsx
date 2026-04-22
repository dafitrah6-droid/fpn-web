"use client";

import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // --- LOGIKA LOGIN KE DATABASE XAMPP ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); 

    try {
      const response = await fetch("http://localhost/api-fpm/login.php", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email: email.trim(), password: password }),
      });

      const rawResponse = await response.text();
      
      try {
        const result = JSON.parse(rawResponse);

        if (result.success) {
          localStorage.setItem("user_member", JSON.stringify(result.user));
          setTimeout(() => {
            router.push("/dashboard");
          }, 1000);
        } else {
          alert(result.error || "Login Gagal.");
          setIsLoading(false);
        }
      } catch (jsonErr) {
        console.error("PHP Error:", rawResponse);
        alert("Server mengirim respon tidak valid. Pastikan kolom 'id_anggota_hash' sudah ditambahkan ke tabel 'anggota'!");
        setIsLoading(false);
      }

    } catch (err) {
      alert("Tidak dapat terhubung ke server XAMPP. Pastikan Apache menyala.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-bssn-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-bssn-dark/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-bssn-dark rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-bssn-gold shadow-xl transition-transform hover:scale-110 duration-500">
              <span className="text-white font-black text-[10px] leading-none uppercase text-center">FPN<br/>ID</span>
          </div>
          <h1 className="text-3xl font-black text-bssn-dark tracking-tighter uppercase italic">
            Portal <span className="text-bssn-gold underline decoration-bssn-dark">Negarawan</span>
          </h1>
          <p className="text-[10px] text-slate-400 font-bold tracking-[0.3em] mt-3 uppercase">Otentikasi Anggota FPN Banten</p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-2xl relative overflow-hidden">
          {isLoading && (
            <div className="absolute top-0 left-0 h-1 bg-bssn-gold animate-progress-loading w-full"></div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Email Resmi</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="masukkan email anda"
                disabled={isLoading}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-bssn-gold outline-none transition-all placeholder:text-slate-300 font-medium disabled:opacity-50"
              />
            </div>

            <div className="relative">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">Kata Sandi</label>
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                disabled={isLoading}
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 text-sm focus:ring-2 focus:ring-bssn-gold outline-none transition-all placeholder:text-slate-300 font-medium disabled:opacity-50"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-[42px] text-slate-400 hover:text-bssn-dark transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                )}
              </button>
            </div>

            <div className="flex justify-between items-center px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-3 h-3 accent-bssn-dark cursor-pointer" />
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-bssn-dark transition-colors uppercase">Ingat Saya</span>
              </label>
              <Link href="/forgot-password" className="text-[10px] font-bold text-bssn-gold hover:text-bssn-dark uppercase tracking-tighter transition-colors">Lupa Sandi?</Link>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-bssn-dark text-white font-black py-4 rounded-2xl shadow-lg hover:bg-bssn-gold hover:text-bssn-dark transition-all uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-2 disabled:bg-slate-300 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Masuk Sistem</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
              Belum terdaftar? <Link href="/daftar" className="text-bssn-gold hover:underline font-black">Daftar Sekarang</Link>
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="text-[9px] font-black text-slate-300 hover:text-bssn-dark transition-colors uppercase tracking-[0.3em] flex items-center justify-center gap-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Kembali ke Portal Utama
          </Link>
        </div>
      </div>
    </div>
  );
}