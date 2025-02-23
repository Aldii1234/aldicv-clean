import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="text-center py-20 flex flex-col items-center bg-blue-600 text-white">
      <div className="relative">
        <Image 
          src="/aldi.jpg" 
          alt="Aldi Denaldi" 
          width={160} 
          height={160} 
          className="rounded-full shadow-lg border-4 border-white hover:scale-105 transition-transform duration-300"
          priority 
        />
      </div>
      <h1 className="text-4xl font-bold mt-4 drop-shadow-lg">Aldi Denaldi</h1>
      <p className="text-white/80 text-lg mt-2">Prodi Sistem Informasi</p>
    </section>
  );
}
