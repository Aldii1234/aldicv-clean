"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Star } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [success, setSuccess] = useState(false);

  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratings, setRatings] = useState([]);

  // Load rating dari localStorage
  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("ratings") || "[]");
    setRatings(storedRatings);
  }, []);

  // Simpan rating ke localStorage
  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
  }, [ratings]);

  const averageRating = ratings.length
    ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
    : "0.0";

  const handleRating = async (rating) => {
    setUserRating(rating);
    setRatings([...ratings, rating]);

    try {
      const res = await fetch("/api/ratings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating }),
      });

      if (res.ok) {
        console.log("Rating berhasil disimpan");
      }
    } catch (err) {
      console.error("Gagal simpan rating:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ nama: "", email: "", pesan: "" });
      setSuccess(true);
    }
  };

  return (
    <motion.section
      className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl w-full mx-auto py-12">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hubungi Saya
        </motion.h1>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* Info Kontak */}
          <div className="space-y-6 text-gray-800 dark:text-gray-300">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <div>
                <h2 className="font-semibold text-lg">Email</h2>
                <p>denaldialdi4@example.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-green-500" />
              <div>
                <h2 className="font-semibold text-lg">Telepon</h2>
                <p>+62 812 3456 7890</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-purple-500" />
              <div>
                <h2 className="font-semibold text-lg">Alamat</h2>
                <p>Jl. Cigereleng Rt 12 Rw 05 Desa Srirahayu Kecamatan Cikancung, Kabupaten Bandung</p>
              </div>
            </div>

            {/* Rating Section */}
            <div className="mt-6">
              <h2 className="font-semibold text-lg mb-2">Beri Rating Website Ini:</h2>
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-7 h-7 cursor-pointer transition-colors ${
                      (hoverRating || userRating) >= star ? "text-yellow-400" : "text-gray-400"
                    }`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => handleRating(star)}
                    fill={(hoverRating || userRating) >= star ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <p className="text-sm">
                Rating {averageRating} (from {ratings.length} voters)
              </p>
              {userRating > 0 && (
                <p className="text-green-500 text-sm mt-1">
                  Terima kasih atas rating Anda: {userRating} ⭐
                </p>
              )}
            </div>
          </div>

          {/* Form Kontak */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama</label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
                placeholder="Nama Anda"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
                placeholder="Email Anda"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pesan</label>
              <textarea
                name="pesan"
                value={form.pesan}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
                placeholder="Tulis pesan Anda..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>

            {success && (
              <p className="text-green-600 text-sm mt-2">Pesan berhasil dikirim!</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}
