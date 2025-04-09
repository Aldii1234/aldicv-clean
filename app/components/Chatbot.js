"use client";
import { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! Ketik sesuatu, contoh: 'berita terkini'" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    if (input.toLowerCase().includes("berita")) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sebentar, saya ambil berita terbaru..." },
      ]);

      try {
        const res = await fetch("/api/berita");
        const data = await res.json();

        if (data.length > 0) {
          const beritaList = data
            .slice(0, 5)
            .map((item, idx) => `${idx + 1}. ${item.title}`)
            .join("\n\n");

          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: `Berita Terkini:\n\n${beritaList}` },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: "Tidak ada berita tersedia saat ini." },
          ]);
        }
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Gagal mengambil berita. Coba lagi nanti." },
        ]);
      }
    } else {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Maaf, saya belum mengerti. Coba ketik: 'berita terkini'",
        },
      ]);
    }

    setInput(""); // Kosongkan input
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full max-w-md mx-auto">
      {/* Chat Box */}
      <div className="h-64 overflow-y-auto mb-4 pr-1 space-y-2 border p-2 rounded">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded max-w-xs whitespace-pre-wrap ${
              msg.sender === "bot"
                ? "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                : "bg-blue-500 text-white ml-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatRef} />
      </div>

      {/* Input */}
      <div className="flex">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-l bg-white text-black dark:bg-gray-700 dark:text-white focus:outline-none focus:ring focus:ring-blue-400"
          placeholder="Ketik pesan..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
        >
          Kirim
        </button>
      </div>
    </div>
  );
}
