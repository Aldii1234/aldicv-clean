"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PortfolioCard({ portfolio }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500 hover:border-purple-500 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold mb-2">{portfolio.title}</h3>
      <p className="text-sm mb-4">{portfolio.description}</p>
      <span className="text-xs text-gray-500 dark:text-gray-400">Tahun: {portfolio.year}</span>
      <div className="mt-4">
        <Link
          href={`/portfolio/${portfolio.id}`}
          className="text-blue-600 dark:text-purple-400 hover:underline text-sm"
        >
          Lihat Detail →
        </Link>
      </div>
    </motion.div>
  );
}
