"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-6">
      {/* Animasi Judul */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Selamat Datang di <span className="text-yellow-300">Fortfolio Aldi Denaldi</span>
      </motion.h1>

      {/* Animasi Subjudul */}
      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Temukan teman belajar terbaik dan bangun komunitas edukasi yang inspiratif.
      </motion.p>

      {/* Tombol CTA */}
      <motion.a
        href="/teman-kelas"
        className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-yellow-300 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Mulai Sekarang
      </motion.a>

      {/* Background Effect */}
      <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-[50%]"></div>
    </section>
  );
}
