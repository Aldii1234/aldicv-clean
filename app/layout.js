"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

export default function RootLayout({ children }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 1, y: 0 }); // Tetap terlihat, tidak animasi ulang
    }
  }, [controls, inView]);

  return (
    <html lang="id">
      <body className="bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />

          <motion.main
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="pt-20 min-h-screen"
          >
            {children}
          </motion.main>

          <div className="fixed bottom-4 right-4">
            <ThemeToggle /> {/* Letakkan toggle di pojok bawah */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
