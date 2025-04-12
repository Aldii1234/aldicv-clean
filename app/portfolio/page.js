"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { timelineData } from "@/app/data/timeline";

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
