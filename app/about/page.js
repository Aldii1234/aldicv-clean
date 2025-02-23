import { User, Briefcase, Code, Star } from "lucide-react";

export default function About() {
  return (
    <section className="container mx-auto py-20 text-center">
      {/* Ikon Profil */}
      <User size={50} className="mx-auto text-purple-600" />
      
      {/* Judul Halaman */}
      <h2 className="text-3xl font-bold mt-4">Tentang Saya</h2>
      <p className="text-lg text-gray-700 mt-4 px-6 md:px-20">
        Saya seorang pengembang web yang bersemangat dengan pengalaman dalam pengembangan frontend dan backend.
        Saya memiliki keahlian dalam membangun aplikasi web yang responsif, cepat, dan modern.
      </p>

      {/* Info Singkat */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pengalaman Kerja */}
        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center">
          <Briefcase size={40} className="text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold">Pengalaman</h3>
          <p className="text-gray-600 mt-2">5+ tahun di industri pengembangan web.</p>
        </div>

        {/* Keahlian Utama */}
        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center">
          <Code size={40} className="text-green-600 mb-4" />
          <h3 className="text-xl font-semibold">Keahlian</h3>
          <p className="text-gray-600 mt-2">JavaScript, React, Next.js, Node.js, Tailwind CSS.</p>
        </div>

        {/* Reputasi & Kepuasan Klien */}
        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center">
          <Star size={40} className="text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold">Kepuasan Klien</h3>
          <p className="text-gray-600 mt-2">100+ proyek sukses dengan ulasan positif.</p>
        </div>
      </div>
    </section>
  );
}
