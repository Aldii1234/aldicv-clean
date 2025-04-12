// app/api/contact/route.js
import clientPromise from "@/app/lib/mongodb";

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

    const client = await clientPromise;
    const db = client.db("portfolio");

    await db.collection("contacts").insertOne({
      nama,
      email,
      pesan,
      waktu: new Date(),
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return new Response(JSON.stringify({
      success: false,
      message: "Terjadi kesalahan server",
    }), {
      status: 500,
    });
  }
}
