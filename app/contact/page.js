import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section className="container mx-auto py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg text-gray-600 mb-10">Hubungi saya untuk kolaborasi atau proyek!</p>

      {/* Kontak Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { icon: Mail, text: "aldidenaldi@email.com" },
          { icon: Phone, text: "+62 812-3456-7890" },
          { icon: MapPin, text: "Bandung, Indonesia" },
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-xl flex items-center space-x-4 justify-center">
            <item.icon size={30} className="text-blue-600" />
            <span className="text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Form Kontak */}
      <form className="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-xl">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <textarea
            rows="4"
            placeholder="Pesan Anda"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition-all"
        >
          <Send size={20} />
          <span>Kirim Pesan</span>
        </button>
      </form>

      {/* Media Sosial */}
      <div className="mt-10 flex justify-center space-x-6">
        {[
          { icon: Facebook, link: "https://facebook.com" },
          { icon: Twitter, link: "https://twitter.com" },
          { icon: Instagram, link: "https://instagram.com" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-all"
          >
            <social.icon size={30} />
          </a>
        ))}
      </div>
    </section>
  );
}
