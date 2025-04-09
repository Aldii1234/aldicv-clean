"use client";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-lg transition-colors duration-300"
    >
      {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
    </button>
  );
}
