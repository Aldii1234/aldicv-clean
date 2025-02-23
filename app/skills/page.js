import { Code, Database, PaintBucket } from "lucide-react";

export default function Skills() {
  return (
    <section className="container mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: "Web Development",
            icon: Code,
            description: "Membangun website responsif dan interaktif menggunakan HTML, CSS, JavaScript, dan framework seperti React & Next.js.",
          },
          {
            name: "Database Management",
            icon: Database,
            description: "Mengelola database dengan MySQL, PostgreSQL, dan MongoDB untuk kebutuhan aplikasi skala kecil hingga besar.",
          },
          {
            name: "UI/UX Design",
            icon: PaintBucket,
            description: "Merancang antarmuka pengguna yang estetis dan mudah digunakan dengan Figma, Tailwind CSS, dan komponen UI modern.",
          },
        ].map((skill, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-xl transition-transform transform hover:scale-105">
            <skill.icon size={40} className="text-purple-600 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">{skill.name}</h3>
            <p className="text-gray-600 mt-2">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
