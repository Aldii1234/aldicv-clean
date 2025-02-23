"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-blue-600 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">My CV</h1>
        <ul className="hidden md:flex space-x-6 text-lg">
          {["home","about", "skills", "portfolio", "services", "contact"].map((item) => (
            <li key={item}>
              <Link href={`/${item}`} className="hover:text-purple-600">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isMenuOpen && (
        <ul className="md:hidden bg-white text-blue-600 text-center py-4">
          {["home","about", "skills", "portfolio", "services", "contact"].map((item) => (
            <li key={item}>
              <Link href={`/${item}`} className="block py-2">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
