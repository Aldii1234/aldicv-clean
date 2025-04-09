"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Star } from "lucide-react";
import { db } from "@/app/lib/firebase"; // sesuaikan path

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
  }, [ratings]);

  const averageRating = ratings.length
    ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
    : "0.0";

  const handleRating = (rating) => {
    setUserRating(rating);
    setRatings([...ratings, rating]);
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
    <section className="bg-gray-100 dark:bg-gray-800 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Kontak & Ulasan</h2>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg mb-8">
          <input
            type="text"
            name="nama"
            placeholder="Nama"
            value={form.nama}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <textarea
            name="pesan"
            placeholder="Pesan"
            value={form.pesan}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Kirim Pesan
          </button>
          {success && <p className="text-green-600 mt-2">Pesan berhasil dikirim!</p>}
        </form>

        <div className="text-center">
          <p className="text-lg mb-4">Beri Rating untuk Website ini</p>
          <div className="flex justify-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 cursor-pointer ${
                  (hoverRating || userRating) >= star ? "text-yellow-400" : "text-gray-400"
                }`}
                onClick={() => handleRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
              />
            ))}
          </div>
          <p>Rata-rata: {averageRating} / 5</p>
        </div>
      </div>
    </section>
  );
}
