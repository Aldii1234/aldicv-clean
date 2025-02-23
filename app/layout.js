import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <Navbar />
        <main className="pt-20">{children}</main> {/* Tambah padding agar konten tidak tertutup Navbar */}
      </body>
    </html>
  );
}
