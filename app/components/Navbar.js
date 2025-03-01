"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Gunakan array menu dengan teks yang sudah diformat secara statis
  const menuItems = [
    { path: "/home", label: "Home" },
    { path: "/teman-kelas", label: "Teman Kelas" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white text-blue-600 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My CV</h1>

        {/* Navbar Menu (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-lg">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="hover:text-purple-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Foto Profil dengan Default */}
        <Link href="/profile">
          <img
            src="/aldi.jpg"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-white shadow-md cursor-pointer"
            onError={(e) => (e.currentTarget.src = "/default-avatar.png")} // Jika error, pakai default
          />
        </Link>

        {/* Button Menu Mobile */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
        </ul>
      )}
    </nav>
  );
}
