"use client";
import { useState, useEffect } from "react";

export default function SmartChatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Halo! Tanyakan apa saja atau ketik 'dark mode' / 'light mode'" },
  ]);
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("light"); // default light

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const lowerInput = input.toLowerCase();
    if (lowerInput.includes("dark mode")) {
      setTheme("dark");
      setMessages((prev) => [...prev, { sender: "bot", text: "Tema diubah ke Dark Mode 🌙" }]);
      setInput("");
      return;
    }
    if (lowerInput.includes("light mode")) {
      setTheme("light");
      setMessages((prev) => [...prev, { sender: "bot", text: "Tema diubah ke Light Mode ☀️" }]);
      setInput("");
      return;
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      const botReply = data.reply || "Maaf, saya tidak bisa menjawab itu.";
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    } catch {
      setMessages((prev) => [...prev, { sender: "bot", text: "Gagal merespon." }]);
    }

    setInput("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 rounded shadow max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-2">Smart Chatbot 🤖</h2>
      <div className="h-64 overflow-y-auto mb-4 space-y-2">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded ${msg.sender === "bot" ? "bg-gray-200 dark:bg-gray-700" : "bg-blue-500 text-white self-end ml-auto"}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-l dark:bg-gray-700 dark:text-white"
          placeholder="Ketik sesuatu..."
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
