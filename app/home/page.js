import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      
      {/* Gambar Hero */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <Image 
          src="/aldi.jpg" 
          alt="Background"
          layout="fill" 
          objectFit="cover" 
          priority
        />
      </div>

      {/* Kontainer Konten */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold">Saya <span className="text-yellow-400">Aldi Denaldi</span></h1>
        <p className="text-lg md:text-xl mt-4">
          Prodi Sistem Informasi
        </p>

        {/* CTA (Call to Action) */}
        <div className="mt-6 flex justify-center space-x-4">
          <a 
            href="/contact" 
            className="bg-yellow-400 text-black px-6 py-3 rounded-lg text-lg font-semibold flex items-center space-x-2 hover:bg-yellow-300 transition-all"
          >
            <span>Hubungi Saya</span>
            <ArrowRight size={20} />
          </a>
          <a 
            href="/portfolio" 
            className="bg-white text-blue-600 px-6 py-3 rounded-lg text-lg font-semibold flex items-center space-x-2 hover:bg-gray-200 transition-all"
          >
            <span>Lihat Portofolio</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
