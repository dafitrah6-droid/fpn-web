"use client";

import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-24 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-amber-500 font-bold hover:underline mb-12 inline-block uppercase tracking-widest text-xs">
          ← Kembali ke Beranda
        </Link>
        
        <h1 className="text-5xl font-black text-slate-950 mb-4 uppercase tracking-tighter italic">
          Terms of <span className="text-amber-500">Service</span>
        </h1>
        <p className="text-slate-400 font-bold mb-12 uppercase tracking-[0.3em] text-xs border-b pb-4">
          Ketentuan Layanan & Kode Etik Anggota
        </p>

        <div className="space-y-10 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">1. Kesepakatan Pengguna</h2>
            <p>
              Dengan mengakses situs ini dan mendaftar sebagai bagian dari Forum Pelajar Negarawan (FPN) Banten, Anda menyatakan telah berusia minimal 14 tahun atau memiliki izin wali, serta setuju untuk terikat secara hukum pada seluruh ketentuan yang berlaku.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">2. Kode Etik Digital & Siber</h2>
            <p>Sebagai organisasi yang berfokus pada kedaulatan digital, setiap anggota dilarang keras untuk:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Melakukan upaya peretasan (*unauthorized access*) terhadap aset digital milik FPN atau instansi pemerintah.</li>
              <li>Menyebarkan informasi bohong (hoaks), ujaran kebencian, atau propaganda yang mengancam stabilitas nasional.</li>
              <li>Menggunakan identitas FPN untuk kepentingan pribadi yang bersifat komersial tanpa persetujuan pengurus inti.</li>
            </ul>
          </section>

          <section className="bg-amber-50 p-8 rounded-2xl border-l-8 border-amber-500">
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">3. Larangan Penyalahgunaan Identitas</h2>
            <p>
              Setiap bentuk pemalsuan sertifikat digital, tanda anggota, atau dokumen resmi FPN Banten akan diproses secara hukum berdasarkan **Pasal 35 UU ITE** terkait pemalsuan informasi atau dokumen elektronik.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">4. Kepemilikan Intelektual</h2>
            <p>
              Seluruh materi edukasi, riset, dan aset visual dalam platform ini adalah hak milik intelektual FPN Banten. Penggunaan ulang tanpa izin atau tanpa mencantumkan sumber dapat dikenakan sanksi sesuai UU Hak Cipta yang berlaku di Indonesia.
            </p>
          </section>

          <section className="bg-red-50 text-red-950 p-8 rounded-2xl border-l-8 border-red-600">
            <h2 className="text-xl font-black uppercase mb-4 italic">5. Sanksi & Diskualifikasi</h2>
            <p className="mb-4 font-bold">Pelanggaran terhadap ketentuan ini dapat mengakibatkan:</p>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="font-bold text-red-600">01.</span>
                <span>Pencabutan status keanggotaan secara tidak hormat (Blacklist).</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-red-600">02.</span>
                <span>Pembatalan seluruh sertifikasi dan penghargaan yang telah didapat melalui program FPN.</span>
              </li>
              <li className="flex gap-4">
                <span className="font-bold text-red-600">03.</span>
                <span>Pelaporan kepada pihak berwenang (Kepolisian/BSSN) jika ditemukan unsur tindak pidana siber berdasarkan **UU ITE**.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">6. Perubahan Ketentuan</h2>
            <p>
              FPN Banten berhak memperbarui Terms of Service ini sewaktu-waktu. Perubahan akan berlaku efektif segera setelah dipublikasikan di halaman ini.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-400 font-medium italic">
            Ditetapkan di Tangerang, Banten. Seluruh hak hukum dilindungi.
          </p>
        </div>
      </div>
    </div>
  );
}