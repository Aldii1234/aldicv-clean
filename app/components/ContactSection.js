"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [success, setSuccess] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    const storedRatings = JSON.parse(localStorage.getItem("ratings") || "[]");
    setRatings(storedRatings);
  }, []);

  useEffect(() => {
    localStorage.setItem("ratings", JSON.stringify(ratings));
    if (userRating > 0) {
      fetch("/api/rating", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating: userRating }),
      });
    }
  }, [ratings]);

  const averageRating = ratings.length
    ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
    : "0.0";

  const handleRating = (rating) => {
    setUserRating(rating);
    setRatings((prev) => [...prev, rating]);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setForm({ nama: "", email: "", pesan: "" });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-100 via-slate-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 dark:text-white"
        >
          Hubungi Kami
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <Mail className="mx-auto mb-2 w-6 h-6 text-blue-500" />
            <p>email@example.com</p>
          </div>
          <div>
            <Phone className="mx-auto mb-2 w-6 h-6 text-green-500" />
            <p>+62 812 3456 7890</p>
          </div>
          <div>
            <MapPin className="mx-auto mb-2 w-6 h-6 text-red-500" />
            <p>Jl. Contoh Alamat No.123, Bandung</p>
          </div>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg space-y-4"
        >
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={form.nama}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          />
          <textarea
            name="pesan"
            placeholder="Pesan"
            value={form.pesan}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Kirim Pesan
          </button>
          {success && (
            <p className="text-green-600 dark:text-green-400 text-center">
              Pesan berhasil dikirim!
            </p>
          )}
        </form>

        <div className="text-center">
          <p className="text-lg mb-2 text-gray-800 dark:text-gray-200">Beri Rating Website ini</p>
          <div className="flex justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-7 h-7 cursor-pointer transition ${
                  (hoverRating || userRating) >= star ? "text-yellow-400" : "text-gray-400"
                }`}
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Rata-rata: <span className="font-semibold">{averageRating}</span> / 5
          </p>
        </div>
      </div>
    </section>
  );
}
