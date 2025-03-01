"use client";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="relative w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110">
      <Image
        src="/profile.jpg" // Ganti dengan path gambar kamu di public/
        alt="Profile"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default Profile;
