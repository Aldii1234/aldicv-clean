import Image from "next/image";

const KelasCard = ({ namaKelas, teman }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 text-center">
      {/* Nama Kelas */}
      <h2 className="text-xl font-bold text-blue-600">{namaKelas}</h2>

      {/* Foto Profil Teman */}
      <div className="flex justify-center gap-3 mt-4">
        {teman.map((t, index) => (
          <Image
            key={index}
            src={t.foto}
            alt={t.nama}
            width={50}
            height={50}
            className="w-12 h-12 rounded-full border-2 border-blue-400"
          />
        ))}
      </div>
    </div>
  );
};

export default KelasCard;
