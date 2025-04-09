"use client";
import { useEffect, useState } from "react";

export default function BeritaTerkini() {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/berita")
      .then((res) => res.json())
      .then((data) => {
        setBerita(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-500">Memuat berita...</p>;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white dark:bg-gray-800 rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">📰 Berita Terkini</h2>
      <ul className="space-y-2">
        {berita.map((item, idx) => (
          <li key={idx}>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
