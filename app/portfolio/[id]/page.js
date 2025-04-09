"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingCart,
  CheckCircle,
  MonitorSmartphone,
} from "lucide-react";

const portfolioData = [
  {
    id: "1",
    title: "Website E-Commerce",
    description: "Membangun toko online dengan Next.js dan Tailwind CSS.",
    year: "2023",
    detail:
      "Saya merancang dan membangun website e-commerce yang mendukung fitur keranjang, login pengguna, dan pembayaran. Menggunakan Next.js, Tailwind CSS, dan Firebase.",
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
  },
  {
    id: "2",
    title: "Aplikasi Manajemen Tugas",
    description: "Aplikasi pengelolaan tugas dan jadwal.",
    year: "2024",
    detail:
      "Aplikasi ini dibangun dengan React Native dan Supabase, memiliki fitur notifikasi, drag & drop tugas, dan dukungan tema gelap.",
    icon: <CheckCircle className="w-8 h-8 text-accent" />,
  },
  {
    id: "3",
    title: "Landing Page Personal",
    description: "Website portofolio pribadi dengan animasi Framer Motion.",
    year: "2025",
    detail:
      "Landing page ini menggunakan Next.js, Framer Motion, dan Tailwind. Menampilkan profil, skills, dan project dengan desain modern responsif.",
    icon: <MonitorSmartphone className="w-8 h-8 text-secondary" />,
  },
];

export default function PortfolioDetail() {
  const { id } = useParams();
  const portfolio = portfolioData.find((item) => item.id === id);

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light flex flex-col items-center justify-center px-6 py-12">
        <p className="text-lg mb-4">Portofolio tidak ditemukan.</p>
        <Link
          href="/portfolio"
          className="text-secondary hover:underline font-semibold"
        >
          ← Kembali ke Portfolio
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light px-6 py-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/10 dark:bg-gray-700 rounded-full">
            {portfolio.icon}
          </div>
          <h1 className="text-3xl font-heading font-bold">
            {portfolio.title}
          </h1>
        </div>

        <span className="text-sm text-muted dark:text-gray-400 mb-2 block">
          Tahun: {portfolio.year}
        </span>

        <p className="text-lg mb-6 leading-relaxed">{portfolio.detail}</p>

        <Link
          href="/portfolio"
          className="inline-block text-secondary hover:underline font-semibold text-sm"
        >
          ← Kembali ke Portfolio
        </Link>
      </div>
    </motion.div>
  );
}
