"use client"; 

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link"; 

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState("BERANDA");
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const pengurusInti = [
    { nama: "Silfiana Dian", jabatan: "Ketua Umum" },
    { nama: "Ismail Ilham", jabatan: "Wakil Ketua" },
    { nama: "Angga Maulana", jabatan: "Sekretaris" },
    { nama: "Noviatul Hasanah", jabatan: "Wakil Sekretaris" },
  ];

  const divisi = [
    { 
      nama: "Acara dan Program", 
      ketua: "Revi Arumi", 
      anggota: ["Shakila Ratu", "Kahfi Wiratama", "Serelisa Naiborhu"] 
    },
    { 
      nama: "Media dan Kreatif", 
      ketua: "Muhammad Dafitrah", 
      anggota: ["Sahla Izzti"] 
    },
    { 
      nama: "Humas", 
      ketua: "Ikhsana", 
      anggota: ["Elza Vionita"] 
    },
  ];

  const menuItems = [
    { name: 'BERANDA', path: '/' },
    { name: 'PROFIL', path: '/profil' },
    { name: 'BERITA', path: '#berita' }, 
    { name: 'EDUKASI', path: '/edukasi' },
    { name: 'KARIR', path: '/karir' },
    { name: 'HUBUNGI KAMI', path: '/hubungi-kami' },
  ];

  const allArticles = [
    { title: "Sejarah Pembentukan FPN", date: "27 Maret 2026", category: "ORGANISASI" },
    { title: "Dasar Hukum Organisasi", date: "15 Juli 2025", category: "DOKUMEN" },
    { title: "Nilai-Nilai Negarawan", date: "10 Juni 2025", category: "EDUKASI" }
  ];

  const filteredArticles = allArticles.filter(art =>
    art.title.toLowerCase().includes(search.toLowerCase()) ||
    art.category.toLowerCase().includes(search.toLowerCase())
  );

  const Modal = ({ title, content, isOpen, onClose }: any) => {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <div className="bg-zinc-900 border border-zinc-800 w-full max-w-lg rounded-3xl p-8 relative shadow-2xl">
          <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white font-bold text-xl p-2 cursor-pointer">✕</button>
          <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">{title}</h2>
          <div className="text-zinc-400 text-sm leading-relaxed space-y-4">
            {content}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 scroll-smooth">
      <div className="bg-slate-950 py-3 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4 text-white">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 border-2 border-amber-500">
                <span className="text-slate-950 font-black text-[10px] leading-none text-center uppercase">FPN<br/>ID</span>
            </div>
            <div className="leading-tight">
              <h1 className="text-lg font-bold tracking-tight text-white">FORUM PELAJAR</h1>
              <p className="text-sm font-light text-slate-300 uppercase tracking-widest">Negarawan Provinsi Banten</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="relative flex-1">
            <input 
              type="text" 
              placeholder="Ketik pencarian..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-80 bg-white/10 text-white border-none rounded py-2 px-4 focus:ring-2 focus:ring-amber-500 outline-none text-sm placeholder:text-slate-400 transition-all"
            />
          </div>
          <div className="flex gap-4 text-white font-medium">
             <a href="https://instagram.com" target="_blank" className="hover:text-amber-500 transition-colors text-xs font-bold">IG</a>
             <a href="https://facebook.com" target="_blank" className="hover:text-amber-500 transition-colors text-xs font-bold">FB</a>
             <a href="https://youtube.com" target="_blank" className="hover:text-amber-500 transition-colors text-xs font-bold">YT</a>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-start overflow-x-auto no-scrollbar">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.path}
              onClick={() => setActiveMenu(item.name)}
              className={`px-5 py-5 text-xs font-bold transition-all whitespace-nowrap border-b-2 ${
                activeMenu === item.name 
                ? "text-slate-950 border-amber-500 bg-slate-50" 
                : "text-slate-600 border-transparent hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-slate-950 mb-4 border-l-8 border-amber-500 pl-5 uppercase tracking-tighter italic">
              Tentang FPN
            </h2>
            <div className="h-1 w-20 bg-amber-500 mb-6"></div>
          </div>
          
          <p className="text-xl leading-relaxed text-slate-700 mb-8 font-light">
            Forum Pelajar Negarawan (FPN) Provinsi Banten merupakan wadah pergerakan pelajar di tanah jawara yang berfokus pada penguatan nilai kedaulatan, keamanan digital, dan kepemimpinan lokal untuk masa depan bangsa.
          </p>

          <div className="relative w-full h-[450px] bg-slate-100 rounded-xl overflow-hidden shadow-2xl border border-slate-200 group">
              <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-transparent transition-all"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
                 <svg className="w-16 h-16 mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
                 <p className="italic font-medium text-sm">Preview: Foto Kegiatan Pusdatik FPN</p>
              </div>
          </div>
        </div>

        <aside id="berita" className="space-y-10 scroll-mt-24">
          <div>
            <h3 className="text-lg font-black text-slate-950 mb-6 border-b-4 border-amber-500 pb-2 inline-block uppercase tracking-widest text-sm">
              {search ? 'Hasil Pencarian' : 'Artikel Terkait'}
            </h3>
            <div className="space-y-6">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((art, i) => {
                  const slug = art.title.toLowerCase().replace(/ /g, "-");
                  return (
                    <Link href={`/berita/${slug}`} key={i} className="flex gap-4 group cursor-pointer p-2 hover:bg-slate-50 rounded-lg transition-all">
                      <div className="w-16 h-16 bg-slate-950/10 shrink-0 rounded-lg flex items-center justify-center group-hover:bg-amber-500/20">
                        <span className="text-slate-950 font-bold text-xs">{i+1}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-amber-500 tracking-widest uppercase">{art.category}</span>
                        <h4 className="font-bold text-sm leading-tight text-slate-950 group-hover:text-amber-500 transition-colors mt-1">
                          {art.title}
                        </h4>
                        <p className="text-[10px] text-slate-400 mt-1 font-medium">{art.date}</p>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <p className="text-xs text-slate-400 italic px-2">Maaf, materi "{search}" tidak ditemukan.</p>
              )}
            </div>
          </div>

          <div className="bg-slate-950 p-6 rounded-xl text-white shadow-lg relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500 opacity-20 rounded-full"></div>
              <h4 className="font-bold mb-2 uppercase text-sm">Pendaftaran Anggota</h4>
              <p className="text-[11px] text-slate-300 mb-4">Mari berkontribusi untuk kedaulatan digital Indonesia.</p>
              <Link href="/daftar" className="inline-block bg-amber-500 text-slate-950 text-[10px] font-black py-2 px-4 rounded hover:bg-white transition-colors uppercase tracking-wider">
                DAFTAR SEKARANG
              </Link>
          </div>
        </aside>
      </main>

      <section className="bg-slate-50 py-16 border-y border-slate-100 mb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Total Anggota", value: "30+", icon: "👥" },
            { label: "Kegiatan Selesai", value: "2", icon: "✅" },
            { label: "Wilayah Cakupan", value: "38 Prov", icon: "📍" },
            { label: "Sertifikasi Digital", value: "300", icon: "🎓" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform inline-block">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-black text-slate-950 block">{stat.value}</h4>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1 italic">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-0 bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl">
          <div className="relative h-[450px] bg-slate-200 group">
             <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-all"></div>
             <div className="absolute inset-0 flex items-center justify-center text-slate-400 italic text-xs p-10 text-center">
                [ Foto Dokumentasi Utama: Pelantikan Pengurus FPN Banten 2026 ]
             </div>
             <div className="absolute top-8 left-8 bg-amber-500 text-slate-950 text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                Sorotan Utama
             </div>
          </div>
          <div className="p-12 md:p-16 flex flex-col justify-center bg-white">
             <span className="text-xs font-black text-amber-500 tracking-[0.4em] uppercase mb-6 block">
               Warta Terkini
             </span>
             <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tighter italic leading-[0.9] mb-8">
               FPN Banten Perkuat <br/> <span className="text-amber-500">Kedaulatan Digital</span> <br/> di Tanah Jawara
             </h2>
             <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-md">
               Menghadapi tantangan siber masa depan, kami meluncurkan inisiatif literasi keamanan data untuk mencetak generasi pemimpin yang tangguh secara teknologi dan karakter.
             </p>
             <Link 
               href="/berita/fpn-banten-perkuat-kedaulatan" 
               className="group flex items-center gap-3 text-xs font-black text-slate-950 uppercase tracking-widest"
             >
               <span className="border-b-2 border-amber-500 pb-1 group-hover:text-amber-500 transition-colors">Baca Selengkapnya</span>
               <span className="text-amber-500 group-hover:translate-x-2 transition-transform">→</span>
             </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-950 uppercase tracking-tighter italic">
            Struktur <span className="text-amber-500 underline decoration-slate-950 decoration-4 underline-offset-8">Kepengurusan</span>
          </h2>
          <p className="text-[10px] text-slate-400 font-bold tracking-[0.4em] mt-6 uppercase">FPN Provinsi Banten Periode 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
          {pengurusInti.map((p, i) => (
            <div key={i} className="bg-slate-950 p-6 rounded-lg border-b-4 border-amber-500 shadow-xl group hover:-translate-y-1 transition-all">
              <span className="text-[9px] font-black text-amber-500 tracking-widest uppercase opacity-70 group-hover:opacity-100">{p.jabatan}</span>
              <h3 className="text-white font-bold text-sm mt-1 uppercase tracking-tight">{p.nama}</h3>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {divisi.map((d, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-amber-500 transition-colors">
              <h4 className="text-amber-500 font-black text-[10px] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-950 rounded-full"></span> Divisi {d.nama}
              </h4>
              <div className="mb-6">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Ketua Divisi</p>
                <p className="text-slate-950 font-black text-sm uppercase mt-1">{d.ketua}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Anggota</p>
                <ul className="space-y-2">
                  {d.anggota.map((agt, idx) => (
                    <li key={idx} className="text-[11px] font-bold text-slate-600 flex items-center gap-3">
                      <span className="w-1.5 h-[1px] bg-amber-500"></span> {agt.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center border-t border-slate-50">
        <h2 className="text-4xl font-black text-slate-950 mb-4 uppercase tracking-tighter">
          BERGABUNG BERSAMA KAMI
        </h2>
        <p className="text-slate-500 text-sm mb-12 max-w-lg mx-auto leading-relaxed">
          FPN Banten membuka kesempatan bagi pelajar berdedikasi untuk mengisi posisi strategis.
        </p>

        <div className="space-y-4 mb-12">
          {["Divisi Cyber Security", "Divisi Hubungan Internasional", "Pusdatik (Data & Informasi)"].map((posisi) => (
            <div key={posisi} className="bg-white p-6 rounded-2xl border border-slate-100 flex justify-between items-center max-w-2xl mx-auto shadow-sm hover:border-amber-500 transition-all group">
              <span className="font-bold text-slate-950 uppercase tracking-tight text-sm">{posisi}</span>
              <span className="bg-slate-100 text-[9px] font-black px-3 py-1 rounded-full uppercase text-slate-400 group-hover:bg-amber-500/10 group-hover:text-amber-500 transition-colors">OPEN</span>
            </div>
          ))}
        </div>

        <Link 
          href="/daftar" 
          className="inline-block bg-slate-950 text-white font-black px-12 py-4 rounded-full hover:bg-amber-500 hover:text-slate-950 transition-all shadow-xl tracking-widest uppercase text-xs"
        >
          DAFTAR SEKARANG
        </Link>
      </section>

      <footer className="bg-slate-950 text-white pt-20 pb-10 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-slate-700/50 pb-16">
          <div className="md:col-span-2">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-full border-4 border-amber-500 flex items-center justify-center">
                   <span className="text-slate-950 font-black text-xs leading-none text-center uppercase">FPN<br/>BTN</span>
                </div>
                <div>
                   <h3 className="text-2xl font-black tracking-tighter uppercase leading-none">FPN <span className="text-amber-500">Banten</span></h3>
                   <p className="text-[10px] text-slate-400 uppercase tracking-[0.3em] mt-1 font-bold">Forum Pelajar Negarawan</p>
                </div>
             </div>
             <p className="text-sm text-slate-300 leading-loose max-w-md italic">
               "Menciptakan ruang digital yang aman, tangguh, dan berdaulat bagi generasi muda Banten melalui kepemimpinan yang berkarakter yang berlandaskan pancasila."
             </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-amber-500 uppercase tracking-widest text-sm">Informasi Publik</h4>
            <ul className="space-y-4 text-xs font-medium text-slate-400">
              <li className="hover:text-white cursor-pointer flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1 h-1 bg-amber-500"></span> Struktur Organisasi
              </li>
              <li className="hover:text-white cursor-pointer flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1 h-1 bg-amber-500"></span> Strategi Keamanan
              </li>
              <li className="hover:text-white cursor-pointer flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1 h-1 bg-amber-500"></span> Dokumen Publik
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 text-amber-500 uppercase tracking-widest text-sm">Hubungi Kami</h4>
            <div className="text-xs text-slate-400 space-y-4 leading-relaxed font-medium">
              <p className="flex gap-2">
                <span className="text-amber-500 font-bold">ALAMAT:</span> Tangerang, Banten, Indonesia
              </p>
              <p className="flex gap-2">
                <span className="text-amber-500 font-bold">EMAIL:</span> fpnbanten@gmail.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">
            © 2026 Forum Pelajar Negarawan Banten | Developed by MUHAMMAD DAFITRAH
          </p>
          <div className="flex gap-6 text-[10px] font-bold text-slate-500">
            <Link 
              href="/privacy" 
              className="hover:text-white uppercase tracking-widest cursor-pointer transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-white uppercase tracking-widest cursor-pointer transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>

      <Modal 
        isOpen={showPrivacy} 
        onClose={() => setShowPrivacy(false)} 
        title="Privacy Policy"
        content={
          <div className="space-y-4">
            <p>Data yang dikumpulkan (Nama, Email, WhatsApp) hanya digunakan untuk keperluan administratif Forum Pelajar Negarawan Banten.</p>
            <p>Kami tidak akan membagikan data pribadi Anda kepada pihak ketiga tanpa izin eksplisit dari pemilik data.</p>
          </div>
        }
      />

      <Modal 
        isOpen={showTerms} 
        onClose={() => setShowTerms(false)} 
        title="Terms of Service"
        content={
          <div className="space-y-4">
            <p>Dengan mendaftar, Anda setuju untuk mengikuti kode etik organisasi dan menjaga nama baik FPN Banten.</p>
            <p>Penyalahgunaan akun atau data anggota lain dapat mengakibatkan pencabutan status keanggotaan secara sepihak.</p>
          </div>
        }
      />
    </div>
  );
}