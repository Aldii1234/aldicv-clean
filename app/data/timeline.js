import { ShoppingCart, Smartphone, LayoutDashboard } from "lucide-react";

export const timelineData = [
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
