"use client";

import { useState, useEffect } from "react";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [average, setAverage] = useState(null);
  const [totalVoters, setTotalVoters] = useState(0);

  useEffect(() => {
    fetch("/api/rating")
      .then(res => res.json())
      .then(data => {
        setAverage(data.average?.toFixed(1));
        setTotalVoters(data.totalVoters);
      });
  }, []);

  const submitRating = async () => {
    const res = await fetch("/api/rating", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rating }),  // disesuaikan
    });
    if (res.ok) {
      alert("Rating disimpan!");
      location.reload();
    } else {
      alert("Gagal menyimpan rating.");
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-sm mx-auto text-center">
      <h2 className="text-xl font-semibold mb-2">Beri Rating:</h2>
      <div className="flex justify-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={`text-3xl ${
              (hover || rating) >= star ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            ★
          </button>
        ))}
      </div>
      <button
        onClick={submitRating}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>

      {average && (
        <p className="mt-4 text-gray-700">
          Rating {average} (dari {totalVoters} orang)
        </p>
      )}
    </div>
  );
}
