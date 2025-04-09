"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { UserCircle2, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <main
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-200 dark:bg-gray-800"
    >
      {/* Judul Halaman */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Tentang Saya
      </motion.h1>

      {/* Foto Profil */}
      <motion.div
        className="rounded-full overflow-hidden mb-6 shadow-lg border-4 border-blue-500"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Image src="/aldi.jpg" alt="Foto Profil" width={160} height={160} className="object-cover" />
      </motion.div>

      {/* Deskripsi */}
      <motion.p
        className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Saya adalah seorang pengembang web dan mobile yang berfokus pada pembuatan antarmuka modern, responsif, dan ramah pengguna.
      </motion.p>

      {/* Info Kontak */}
      <motion.div
        className="space-y-4 text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <UserCircle2 className="w-5 h-5 text-blue-600 dark:text-purple-400" />
          <span>Nama: Aldi Denaldi</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-600 dark:text-purple-400" />
          <span>Email: denaldialdi4@email.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-blue-600 dark:text-purple-400" />
          <span>Telepon: +62 831-0964-3743</span>
        </div>
      </motion.div>
    </main>
  );
}
