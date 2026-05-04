"use client";
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function DaftarPage() {
  const router = useRouter(); 
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState(""); 
  const [wa, setWa] = useState("");
  const [instansi, setInstansi] = useState("");
  const [divisi, setDivisi] = useState("MEDIA DAN KREATIF");

  const [selectedProvinsi, setSelectedProvinsi] = useState("BANTEN");
  const [selectedKota, setSelectedKota] = useState("KOTA TANGERANG");

  const dataIndonesia: { [key: string]: string[] } = {
    "BANTEN": ["KOTA TANGERANG", "KAB. TANGERANG", "TANGERANG SELATAN", "KOTA SERANG", "KAB. SERANG", "CILEGON", "LEBAK", "PANDEGLANG"],
    "DKI JAKARTA": ["JAKARTA PUSAT", "JAKARTA BARAT", "JAKARTA SELATAN", "JAKARTA TIMUR", "JAKARTA UTARA", "KEP. SERIBU"],
    "JAWA BARAT": ["BANDUNG", "BOGOR", "DEPOK", "BEKASI", "CIREBON", "SUKABUMI", "TASIKMALAYA", "CIMAHI", "GARUT"],
    "JAWA TENGAH": ["SEMARANG", "SURAKARTA (SOLO)", "MAGELANG", "TEGAL", "SALATIGA", "PURWOKERTO", "PEKALONGAN"],
    "DI YOGYAKARTA": ["YOGYAKARTA", "SLEMAN", "BANTUL", "KULON PROGO", "GUNUNGKIDUL"],
    "JAWA TIMUR": ["SURABAYA", "MALANG", "SIDOARJO", "GRESIK", "BANYUWANGI", "MADIUN", "KEDIRI", "MOJOKERTO"],
    "ACEH": ["BANDA ACEH", "LHOKSEUMAWE", "LANGSA", "MEULABOH", "SABANG"],
    "SUMATERA UTARA": ["MEDAN", "BINJAI", "PEMATANGSIANTAR", "DELI SERDANG", "TEBING TINGGI"],
    "SUMATERA BARAT": ["PADANG", "BUKITTINGGI", "PAYAKUMBUH", "PARIAMAN"],
    "RIAU": ["PEKANBARU", "DUMAI", "SIAK", "INDRAGIRI HILIR"],
    "KEPULAUAN RIAU": ["BATAM", "TANJUNGPINANG", "BINTAN", "KARIMUN"],
    "JAMBI": ["JAMBI", "SUNGAI PENUH", "MUARO JAMBI"],
    "SUMATERA SELATAN": ["PALEMBANG", "PRABUMULIH", "LUBUKLINGGAU", "OKU"],
    "KEP. BANGKA BELITUNG": ["PANGKAL PINANG", "BELITUNG", "BANGKA"],
    "BENGKULU": ["BENGKULU", "REJANG LEBONG", "MUKOMUKO"],
    "LAMPUNG": ["BANDAR LAMPUNG", "METRO", "LAMPUNG SELATAN"],
    "BALI": ["DENPASAR", "BADUNG", "GIANYAR", "TABANAN", "BULELENG"],
    "NUSA TENGGARA BARAT": ["MATARAM", "BIMA", "SUMBAWA"],
    "NUSA TENGGARA TIMUR": ["KUPANG", "MAUMERE", "ENDE", "LABUAN BAJO"],
    "KALIMANTAN BARAT": ["PONTIANAK", "SINGKAWANG", "KUBU RAYA"],
    "KALIMANTAN TENGAH": ["PALANGKA RAYA", "SAMPIT", "PANGKALAN BUN"],
    "KALIMANTAN SELATAN": ["BANJARMASIN", "BANJARBARU", "MARTAPURA"],
    "KALIMANTAN TIMUR": ["SAMARINDA", "BALIKPAPAN", "BONTANG", "KUTAI KARTANEGARA"],
    "KALIMANTAN UTARA": ["TANJUNG SELOR", "TARAKAN", "NUNUKAN"],
    "SULAWESI UTARA": ["MANADO", "BITUNG", "TOMOHON"],
    "GORONTALO": ["GORONTALO", "LIMBOTO", "BONE BOLANGO"],
    "SULAWESI TENGAH": ["PALU", "POSO", "LUWUK"],
    "SULAWESI BARAT": ["MAMUJU", "POLEWALI MANDAR", "MAJENE"],
    "SULAWESI SELATAN": ["MAKASSAR", "GOWA", "MAROS", "PAREPARE", "PALOPO"],
    "SULAWESI TENGGARA": ["KENDARI", "BAU-BAU", "KOLAKA"],
    "MALUKU": ["AMBON", "TUAL", "MALUKU TENGAH"],
    "MALUKU UTARA": ["TERNATE", "TIDORE", "SOFIFI"],
    "PAPUA": ["JAYAPURA", "BIAK", "SERUI"],
    "PAPUA BARAT": ["MANOKWARI", "FAKFAK"],
    "PAPUA SELATAN": ["MERAUKE", "ASMAT"],
    "PAPUA TENGAH": ["NABIRE", "TIMIKA"],
    "PAPUA PEGUNUNGAN": ["WAMENA"],
    "PAPUA BARAT DAYA": ["SORONG"]
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://127.0.0.1/api-fpm/register.php", {
        method: "POST", 
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          nama: nama,
          email: email,
          divisi: divisi,
          wa: wa,
          instansi: instansi,
          provinsi: selectedProvinsi,
          kota: selectedKota,
          password: email 
        }),
      });

      const text = await response.text();
      let result;
      try {
        result = JSON.parse(text);
      } catch (e) {
        throw new Error("Server XAMPP tidak mengirimkan format JSON yang valid.");
      }

      if (result.error) {
        alert("Gagal mendaftar: " + result.error);
        return;
      }

      if (result.user && result.user.id_anggota_hash) {
        document.cookie = `user_hash=${result.user.id_anggota_hash}; path=/; max-age=86400; SameSite=Lax`;
      }

      const userData = { 
        nama, 
        email, 
        wa, 
        instansi, 
        divisi, 
        selectedKota, 
        selectedProvinsi,
        id_anggota: result.id_anggota,
        id_anggota_hash: result.user?.id_anggota_hash
      };
      localStorage.setItem("user_member", JSON.stringify(userData));

      alert("Pendaftaran Berhasil! Selamat Datang di Portal Negarawan.");
      router.push('/dashboard');

    } catch (err) {
      alert("Koneksi gagal! \n1. Pastikan Apache di XAMPP sudah menyala (Hijau).\n2. Cek apakah folder 'api-fpm' berada di htdocs.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-6 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-bssn-dark via-slate-900 to-black">
      <div className="max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <div className="bg-bssn-dark p-8 text-center relative overflow-hidden">
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-bssn-gold opacity-10 rounded-full blur-2xl"></div>
          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4 border-4 border-bssn-gold flex items-center justify-center font-bold text-bssn-dark shadow-lg">FPN</div>
          <h2 className="text-xl font-bold text-white uppercase tracking-widest">Formulir Anggota</h2>
          <p className="text-xs text-slate-400 mt-2 italic tracking-tighter">Gabung bersama ribuan pelajar negarawan lainnya.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Nama Lengkap</label>
            <input 
              type="text" required
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-bssn-gold outline-none transition-all font-bold uppercase"
              placeholder="Masukkan nama sesuai ijazah..."
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Alamat Email (Gmail)</label>
            <input 
              type="email" required
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-bssn-gold outline-none transition-all font-medium"
              placeholder="contoh@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
            <p className="text-[9px] text-blue-700 font-bold uppercase">Info Sistem:</p>
            <p className="text-[10px] text-blue-600 italic">Kata sandi Anda akan diset otomatis sama dengan Email demi kemudahan akses pertama kali.</p>
          </div>
          
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Instansi Sekolah / Universitas</label>
            <input 
              type="text" 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-bssn-gold outline-none transition-all"
              placeholder="Contoh: SMA Negeri 1 Tangerang"
              value={instansi}
              onChange={(e) => setInstansi(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Nomor WhatsApp</label>
            <input 
              type="tel" 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-bssn-gold outline-none transition-all"
              placeholder="0812xxxx"
              value={wa}
              onChange={(e) => setWa(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Provinsi</label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-3 text-xs focus:ring-2 focus:ring-bssn-gold outline-none font-bold"
                value={selectedProvinsi}
                onChange={(e) => {
                  setSelectedProvinsi(e.target.value);
                  setSelectedKota(dataIndonesia[e.target.value][0]); 
                }}
              >
                {Object.keys(dataIndonesia).map((prov) => (
                  <option key={prov} value={prov}>{prov}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Kota</label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-2 py-3 text-xs focus:ring-2 focus:ring-bssn-gold outline-none font-bold"
                value={selectedKota}
                onChange={(e) => setSelectedKota(e.target.value)}
              >
                {dataIndonesia[selectedProvinsi].map((kota) => (
                  <option key={kota} value={kota}>{kota}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Divisi Tujuan</label>
            <select 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-bssn-gold outline-none font-bold"
              value={divisi}
              onChange={(e) => setDivisi(e.target.value)}
            >
              <option>MEDIA DAN KREATIF</option>
              <option>ACARA DAN PROGRAM</option>
              <option>HUMAS</option>
            </select>
          </div>

          <div className="pt-4">
            <button 
              type="submit"
              className="w-full bg-bssn-dark hover:bg-black text-bssn-gold font-black py-4 rounded-xl transition-all shadow-xl active:scale-95 border-b-4 border-bssn-gold/50"
            >
              KIRIM DATA & BUKA DASHBOARD
            </button>
          </div>
          
          <div className="text-center pt-2">
             <Link href="/" className="text-[9px] font-black text-slate-400 hover:text-bssn-gold transition-all uppercase tracking-[0.2em]">
                ← BATAL DAN KEMBALI
             </Link>
          </div>
        </form>
      </div>
    </div>
  );
}