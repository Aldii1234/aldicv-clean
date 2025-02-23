import { Code, Database, PaintBucket, Shield, Globe, Smartphone } from "lucide-react";

export default function Services() {
  return (
    <section className="container mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: "Web Development",
            icon: Code,
            description: "Membangun website modern, responsif, dan cepat menggunakan teknologi terkini seperti Next.js dan React.",
          },
          {
            name: "Database Management",
            icon: Database,
            description: "Mengelola database yang aman dan efisien dengan MySQL, PostgreSQL, dan MongoDB.",
          },
          {
            name: "UI/UX Design",
            icon: PaintBucket,
            description: "Membuat desain yang menarik dan user-friendly menggunakan Figma dan Tailwind CSS.",
          },
          {
            name: "Cyber Security",
            icon: Shield,
            description: "Melindungi data dan sistem dari ancaman keamanan dengan teknik enkripsi dan firewall.",
          },
          {
            name: "SEO Optimization",
            icon: Globe,
            description: "Meningkatkan visibilitas website di mesin pencari dengan optimasi SEO yang efektif.",
          },
          {
            name: "Mobile Development",
            icon: Smartphone,
            description: "Mengembangkan aplikasi mobile untuk iOS dan Android dengan React Native dan Flutter.",
          },
        ].map((service, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-xl transition-transform transform hover:scale-105">
            <service.icon size={40} className="text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
