"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ContactSection from "../components/ContactSection";
import {
  ArrowRightCircle,
  UserCircle2,
  Mail,
  Phone,
  ShoppingCart,
  Smartphone,
  LayoutDashboard,
  Code,
  Database,
  PaintBucket,
  Shield,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Chatbot from "../components/Chatbot";
import SmartChatbot from "../components/SmartChatbot";

const timelineData = [
  {
    id: "1",
    year: "2023",
    title: "Website E-Commerce",
    description:
      "Membangun website toko online menggunakan Next.js, Tailwind, dan Stripe. Fokus pada pengalaman pengguna dan transaksi yang aman.",
    icon: <ShoppingCart className="w-6 h-6 text-primary" />,
  },
  {
    id: "2",
    year: "2024",
    title: "Aplikasi Mobile Booking",
    description:
      "Mengembangkan aplikasi booking jasa menggunakan React Native dan Firebase. Fitur realtime notifikasi dan pembayaran terintegrasi.",
    icon: <Smartphone className="w-6 h-6 text-accent" />,
  },
  {
    id: "3",
    year: "2025",
    title: "Dashboard Admin PMB",
    description:
      "Membuat dashboard untuk pengelolaan peserta PMB dengan PHP dan MySQL, termasuk upload berkas dan manajemen status peserta.",
    icon: <LayoutDashboard className="w-6 h-6 text-secondary" />,
  },
];

const services = [
  {
    name: "Web Development",
    icon: Code,
    description:
      "Membangun website modern, responsif, dan cepat menggunakan teknologi terkini seperti Next.js dan React.",
  },
  {
    name: "Database Management",
    icon: Database,
    description:
      "Mengelola database yang aman dan efisien dengan MySQL, PostgreSQL, dan MongoDB.",
  },
  {
    name: "UI/UX Design",
    icon: PaintBucket,
    description:
      "Membuat desain yang menarik dan user-friendly menggunakan Figma dan Tailwind CSS.",
  },
  {
    name: "Cyber Security",
    icon: Shield,
    description:
      "Melindungi data dan sistem dari ancaman keamanan dengan teknik enkripsi dan firewall.",
  },
  {
    name: "SEO Optimization",
    icon: Globe,
    description:
      "Meningkatkan visibilitas website di mesin pencari dengan optimasi SEO yang efektif.",
  },
  {
    name: "Mobile Development",
    icon: Smartphone,
    description:
      "Mengembangkan aplikasi mobile untuk iOS dan Android dengan React Native dan Flutter.",
  },
];

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Selamat Datang di Portfolio Saya
        </motion.h1>

        <motion.p
          className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Temukan berbagai karya dan pengalaman saya dalam membangun website, aplikasi mobile, dan sistem dashboard yang modern serta responsif.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="space-x-4"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
          >
            Lihat Portfolio
            <ArrowRightCircle className="ml-2 w-5 h-5" />
          </Link>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors"
          >
            Tentang Saya
          </a>
        </motion.div>

        <div className="mt-12 w-full max-w-2xl">
          <Chatbot />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-200 dark:bg-gray-800 py-20"
      >
        <motion.h1
          className="text-4xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tentang Saya
        </motion.h1>

        <motion.div
          className="rounded-full overflow-hidden mb-6 shadow-lg border-4 border-blue-500"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Image src="/aldi.jpg" alt="Foto Profil" width={160} height={160} className="object-cover" />
        </motion.div>

        <motion.p
          className="text-lg text-center text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Saya adalah seorang pengembang web dan mobile yang berfokus pada pembuatan antarmuka modern, responsif, dan ramah pengguna.
        </motion.p>

        <motion.div
          className="space-y-4 text-gray-700 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <UserCircle2 className="w-5 h-5 text-blue-600 dark:text-purple-400" />
            <span>Nama: Aldi Denaldi</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600 dark:text-purple-400" />
            <span>Email: denaldialdi4@email.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-600 dark:text-purple-400" />
            <span>Telepon: +62 831-0964-3743</span>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Timeline Section */}
      <section className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light py-12 px-6">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Portfolio Timeline
        </h2>

        <div className="relative border-l-4 border-primary pl-6">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3 }}
              className="mb-10 flex gap-4 items-start"
            >
              <div className="mt-1">{item.icon}</div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-soft dark:shadow-strong transition-shadow w-full">
                <span className="text-sm text-primary font-semibold">
                  {item.year}
                </span>
                <h3 className="text-xl font-bold text-primary mt-1 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {item.description}
                </p>
                <Link
                  href={`/portfolio/${item.id}`}
                  className="text-secondary hover:underline font-semibold"
                >
                  Lihat Detail →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-heading font-bold mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-[1.03]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="mb-4">
                  <service.icon size={40} className="text-primary mx-auto" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Chatbot Section */}
      <section className="p-6 bg-gray-100 dark:bg-black transition-colors">
        <h2 className="text-3xl font-bold text-center mb-4 text-black dark:text-white">
          Pengaturan Web & Chatbot 🤖
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Tanyakan sesuatu atau ubah tema dengan perintah seperti "dark mode" atau "light mode".
        </p>
        <div className="max-w-4xl mx-auto">
          <SmartChatbot />
        </div>
      </section>

      {/* ✅ Contact Section Ditambahkan di sini */}
      <ContactSection />
    </main>
  );
}
