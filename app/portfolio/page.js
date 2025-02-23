import Image from "next/image";

export default function Portfolio() {
  return (
    <section className="container mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: "Website E-Commerce",
            image: "/nike.jpg",
            description: "Membangun platform e-commerce yang responsif dengan fitur pembayaran dan manajemen produk.",
          },
          {
            name: "Aplikasi Mobile",
            image: "/ui.jpg",
            description: "Mengembangkan aplikasi mobile dengan UI/UX yang menarik dan performa tinggi.",
          },
          {
            name: "Sistem Manajemen Data",
            image: "/wb.jpg",
            description: "Membuat sistem manajemen berbasis web untuk mengelola data perusahaan secara efisien.",
          },
        ].map((project, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-xl transition-transform transform hover:scale-105">
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={200}
              className="rounded-lg mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
