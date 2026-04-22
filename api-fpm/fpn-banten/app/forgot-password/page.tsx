"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(""); // State baru untuk OTP
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false); // Status apakah OTP sudah dikirim
  const router = useRouter();

  // Fungsi untuk mengirim OTP ke Gmail
  const handleSendOtp = async () => {
    if (!email) return alert("Masukkan email terlebih dahulu!");
    setLoading(true);
    try {
      const response = await fetch("http://localhost/api-fpm/forgot_password.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, request_otp: true }), // Parameter untuk trigger kirim email
      });
      const result = await response.json();
      if (result.success) {
        alert("Kode OTP telah dikirim ke email Anda!");
        setIsOtpSent(true);
      } else {
        alert(result.error);
      }
    } catch (err) {
      alert("Gagal terhubung ke server.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost/api-fpm/forgot_password.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email, 
          otp, // Kirim OTP untuk divalidasi di PHP
          new_password: newPassword 
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Berhasil! Silakan login dengan kata sandi baru.");
        router.push('/login');
      } else {
        alert("Error: " + result.error);
      }
    } catch (err) {
      alert("Gagal terhubung ke server. Pastikan XAMPP aktif.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-[#0f172a] text-2xl font-black uppercase tracking-tighter">
          PORTAL <span className="text-[#b59449]">NEGARAWAN</span>
        </h1>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-2">
          Reset Otentikasi Anggota FPN
        </p>
      </div>

      <div className="bg-white p-10 rounded-[40px] shadow-2xl shadow-slate-200 w-full max-w-md border border-slate-100">
        <form onSubmit={handleReset} className="space-y-6">
          <div className="relative">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
              Email Resmi
            </label>
            <div className="flex gap-2">
                <input
                  type="email"
                  required
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#b59449] transition-all"
                  placeholder="email@anda.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="button"
                  onClick={handleSendOtp}
                  disabled={loading || isOtpSent}
                  className="bg-[#b59449] text-white px-4 rounded-2xl text-[9px] font-bold uppercase hover:bg-[#8e7335] disabled:bg-slate-300"
                >
                  {isOtpSent ? "TERKIRIM" : "OTP"}
                </button>
            </div>
          </div>

          {/* INPUT OTP BARU */}
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
              Kode Verifikasi (OTP)
            </label>
            <input
              type="text"
              required
              maxLength={6}
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#b59449] transition-all"
              placeholder="masukkan 6 digit kode"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>

          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">
              Kata Sandi Baru
            </label>
            <input
              type="password"
              required
              className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm focus:outline-none focus:border-[#b59449] transition-all"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0f172a] text-white font-black py-5 rounded-2xl text-[11px] uppercase tracking-[0.2em] hover:bg-[#1e293b] transition-all shadow-lg"
          >
            {loading ? "MEMPROSES..." : "PERBARUI KATA SANDI"}
          </button>

          <div className="text-center">
            <Link href="/login" className="text-[10px] font-black text-[#b59449] uppercase hover:underline">
              KEMBALI KE LOGIN
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}