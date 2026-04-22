"use client";

import React from 'react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white p-8 md:p-24 font-sans text-slate-800">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-amber-500 font-bold hover:underline mb-12 inline-block uppercase tracking-widest text-xs">
          ← Kembali ke Beranda
        </Link>
        
        <h1 className="text-5xl font-black text-slate-950 mb-4 uppercase tracking-tighter italic">
          Privacy <span className="text-amber-500">Policy</span>
        </h1>
        <p className="text-slate-400 font-bold mb-12 uppercase tracking-[0.3em] text-xs border-b pb-4">
          Terakhir Diperbarui: 22 April 2026
        </p>

        <div className="space-y-10 leading-relaxed text-sm md:text-base">
          <section>
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">1. Landasan Hukum</h2>
            <p>
              Kebijakan Privasi ini disusun berdasarkan **Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP)**. Forum Pelajar Negarawan (FPN) Banten berkomitmen untuk melindungi data pribadi anggota sebagai hak asasi manusia yang fundamental.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">2. Data yang Dikumpulkan</h2>
            <p>Kami mengumpulkan data identitas yang diberikan secara sukarela melalui formulir pendaftaran, meliputi namun tidak terbatas pada:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>Nama Lengkap (sesuai identitas resmi)</li>
              <li>Alamat Surat Elektronik (Email)</li>
              <li>Nomor Telepon/WhatsApp</li>
              <li>Data Pendidikan dan Institusi Sekolah</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">3. Penggunaan dan Pemrosesan Data</h2>
            <p>
              Sesuai **Pasal 20 UU PDP**, pemrosesan data dilakukan untuk tujuan administratif organisasi, komunikasi resmi, dan verifikasi keanggotaan. FPN Banten dilarang menggunakan data pribadi di luar tujuan yang telah disepakati tanpa persetujuan eksplisit dari subjek data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">4. Keamanan dan Kebocoran Data</h2>
            <p>
              Kami menerapkan standar keamanan enkripsi digital untuk mencegah akses yang tidak sah. Dalam hal terjadi kegagalan perlindungan data pribadi, FPN akan memberikan pemberitahuan tertulis dalam waktu paling lama 3 x 24 jam kepada subjek data pribadi sesuai amanat undang-undang.
            </p>
          </section>

          <section className="bg-slate-950 text-white p-8 rounded-2xl border-l-8 border-amber-500">
            <h2 className="text-xl font-black uppercase mb-4 italic text-amber-500">5. Ketentuan Pidana & Denda</h2>
            <p className="mb-4">Pelanggaran terhadap perlindungan data pribadi dalam platform ini tunduk pada ketentuan pidana UU PDP:</p>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-4">
                <span className="text-amber-500 font-bold">●</span>
                <span><strong>Pasal 67:</strong> Setiap orang yang dengan sengaja dan melawan hukum memperoleh atau mengumpulkan data pribadi yang bukan miliknya dipidana dengan pidana penjara paling lama 5 tahun dan/atau pidana denda paling banyak <strong>Rp5.000.000.000,00 (lima miliar rupiah)</strong>.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-amber-500 font-bold">●</span>
                <span><strong>Pasal 68:</strong> Setiap orang yang dengan sengaja dan melawan hukum memasang dan/atau menggunakan alat bukti palsu untuk memalsukan Data Pribadi dipidana dengan pidana penjara paling lama 6 tahun dan/atau denda paling banyak <strong>Rp6.000.000.000,00 (enam miliar rupiah)</strong>.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-950 uppercase mb-4 italic">6. Hak Subjek Data</h2>
            <p>
              Anda memiliki hak untuk mengakhiri pemrosesan, menghapus, dan/atau menarik kembali persetujuan pemrosesan data pribadi Anda yang tersimpan di database kami dengan menghubungi divisi Humas FPN Banten.
            </p>
          </section>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100">
          <p className="text-xs text-slate-400 font-medium italic">
            Dokumen ini merupakan bagian dari transparansi tata kelola digital Forum Pelajar Negarawan Banten.
          </p>
        </div>
      </div>
    </div>
  );
}