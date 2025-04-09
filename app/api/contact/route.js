const clientPromise = require("@/app/lib/mongodb");

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.nama || !body.email || !body.pesan) {
      return new Response(JSON.stringify({ success: false, message: "Data tidak lengkap" }), {
        status: 400,
      });
    }

    const client = await clientPromise;
    const db = client.db("portfolio"); // Ganti dengan nama DB kamu

    const result = await db.collection("pesan").insertOne({
      nama: body.nama,
      email: body.email,
      pesan: body.pesan,
      waktu: new Date(),
    });

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 200,
    });
  } catch (error) {
    console.error("❌ Gagal simpan pesan:", error);
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
    });
  }
}
