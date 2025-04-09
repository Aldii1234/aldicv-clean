"use client";
import {
  Code,
  Database,
  PaintBucket,
  Shield,
  Globe,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
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

  return (
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
                <service.icon
                  size={40}
                  className="text-primary mx-auto"
                />
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
  );
}
