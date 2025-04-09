"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // ✅ Import yang benar

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // ✅ Gunakan custom hook

  const menuItems = [
    { path: "/home", label: "Home" },
    // { path: "/teman-kelas", label: "Teman Kelas" },
    { path: "/about", label: "About" },
    // { path: "/skills", label: "Skills" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
    { path: "/setting", label: "Setting" },
    // { path: "page", label: "Setting" },
  ];

  return (
    <nav className="bg-white text-blue-600 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My CV</h1>

        {/* Navbar Menu (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="hover:text-purple-600">
                {item.label}
              </Link>
            </li>
          ))}

          {/* Theme Toggle Button */}
          <li>
            <button onClick={toggleTheme} className="ml-4">
              {theme === "light" ? (
                <Moon size={22} className="hover:text-purple-600" />
              ) : (
                <Sun size={22} className="hover:text-purple-600" />
              )}
            </button>
          </li>
        </ul>

        {/* Foto Profil */}
        <Link href="/profile">
          <img
            src="/aldi.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white shadow-md cursor-pointer"
            onError={(e) => (e.currentTarget.src = "/default-avatar.png")}
          />
        </Link>

        {/* Button Menu Mobile */}
        <button className="md:hidden ml-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navbar Menu (Mobile) */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white text-blue-600 text-center py-4">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="block py-2">
                {item.label}
              </Link>
            </li>
          ))}

          {/* Theme Toggle di Mobile Menu */}
          <li className="py-2">
            <button onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon size={22} className="mx-auto" />
              ) : (
                <Sun size={22} className="mx-auto" />
              )}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
