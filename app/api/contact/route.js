import { connectToDatabase } from "@/app/lib/mongodb";
import mongoose from "mongoose";

// Definisikan skema hanya sekali (hindari re-declare di dev)
const ContactSchema = new mongoose.Schema({
  nama: String,
  email: String,
  pesan: String,
  waktu: {
    type: Date,
    default: Date.now,
  },
});

// Gunakan model jika sudah ada, atau buat baru
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

export async function POST(req) {
  try {
    const body = await req.json();

    const { nama, email, pesan } = body;

    if (!nama || !email || !pesan) {
      return new Response(JSON.stringify({
        success: false,
        message: "Data tidak lengkap",
      }), {
        status: 400,
      });
    }

    await connectToDatabase();

    await Contact.create({ nama, email, pesan });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Terjadi kesalahan server",
    }), {
      status: 500,
    });
  }
}
