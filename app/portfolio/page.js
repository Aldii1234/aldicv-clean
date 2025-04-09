"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Smartphone, LayoutDashboard } from "lucide-react";

export const timelineData = [
  {
    id: "1",
    year: "2023",
    title: "Website E-Commerce",
    description:
      "Membangun website toko online menggunakan Next.js, Tailwind, dan Stripe. Fokus pada pengalaman pengguna dan transaksi yang aman.",
    icon: <ShoppingCart className="w-6 h-6 text-primary" />, // Gunakan warna tema
  },
  {
    id: "2",
    year: "2024",
    title: "Aplikasi Mobile Booking",
    description:
      "Mengembangkan aplikasi booking jasa menggunakan React Native dan Firebase. Fitur realtime notifikasi dan pembayaran terintegrasi.",
    icon: <Smartphone className="w-6 h-6 text-accent" />,
  },
  {
    id: "3",
    year: "2025",
    title: "Dashboard Admin PMB",
    description:
      "Membuat dashboard untuk pengelolaan peserta PMB dengan PHP dan MySQL, termasuk upload berkas dan manajemen status peserta.",
    icon: <LayoutDashboard className="w-6 h-6 text-secondary" />,
  },
];

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light py-12 px-6">
      <h2 className="text-3xl font-heading font-bold text-center mb-12">
        Portfolio Timeline
      </h2>

      <div className="relative border-l-4 border-primary pl-6">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3 }}
            className="mb-10 flex gap-4 items-start"
          >
            <div className="mt-1">{item.icon}</div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft dark:shadow-strong transition-shadow w-full">
              <span className="text-sm text-primary font-semibold">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-primary mt-1 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {item.description}
              </p>
              <Link
                href={`/portfolio/${item.id}`}
                className="text-secondary hover:underline font-semibold"
              >
                Lihat Detail →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
