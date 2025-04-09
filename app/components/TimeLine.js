"use client";

import { useParams } from "next/navigation";
import { timelineData } from "../../components/timeline";
import Link from "next/link";

export default function PortfolioDetail() {
  const { id } = useParams();
  const portfolio = timelineData.find((item) => item.id === id);

  if (!portfolio) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500">Portofolio tidak ditemukan.</p>
        <Link href="/" className="text-blue-500 underline">Kembali ke Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        {portfolio.title}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        <strong>Tahun:</strong> {portfolio.year}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {portfolio.description}
      </p>
      <Link href="/" className="text-purple-600 hover:underline font-semibold">
        ← Kembali ke Timeline
      </Link>
    </div>
  );
}
