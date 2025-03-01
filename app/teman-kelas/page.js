"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const kelasData = [
  {
    namaKelas: "Sistem Informasi",
    teman: [
      { nama: "Aldi", foto: "https://randomuser.me/api/portraits/men/1.jpg" },
      { nama: "Budi", foto: "https://randomuser.me/api/portraits/men/2.jpg" },
      { nama: "Citra", foto: "https://randomuser.me/api/portraits/women/1.jpg" },
      { nama: "Dinda", foto: "https://randomuser.me/api/portraits/women/2.jpg" },
      { nama: "Eko", foto: "https://randomuser.me/api/portraits/men/3.jpg" },
    ],
  },
  {
    namaKelas: "Komputer Akuntansi",
    teman: [
      { nama: "Fajar", foto: "https://randomuser.me/api/portraits/men/4.jpg" },
      { nama: "Gina", foto: "https://randomuser.me/api/portraits/women/3.jpg" },
      { nama: "Hadi", foto: "https://randomuser.me/api/portraits/men/5.jpg" },
      { nama: "Indra", foto: "https://randomuser.me/api/portraits/men/6.jpg" },
      { nama: "Joko", foto: "https://randomuser.me/api/portraits/men/7.jpg" },
    ],
  },
  {
    namaKelas: "Bisnis Digital",
    teman: [
      { nama: "Karin", foto: "https://randomuser.me/api/portraits/women/4.jpg" },
      { nama: "Lutfi", foto: "https://randomuser.me/api/portraits/men/8.jpg" },
      { nama: "Maya", foto: "https://randomuser.me/api/portraits/women/5.jpg" },
      { nama: "Nanda", foto: "https://randomuser.me/api/portraits/women/6.jpg" },
      { nama: "Omar", foto: "https://randomuser.me/api/portraits/men/9.jpg" },
    ],
  },
];

export default function TemanKelas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Daftar Kelas & Kawan Terbaik ✨
      </motion.h1>

      {/* Grid Layout untuk Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {kelasData.map((kelas, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-3xl p-6 text-center border border-blue-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">{kelas.namaKelas}</h2>
            <div className="flex justify-center gap-4 mt-4">
              {kelas.teman.map((t, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={t.foto}
                    alt={t.nama}
                    width={60}
                    height={60}
                    className="w-14 h-14 rounded-full border-4 border-blue-500 shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
