import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
  const body = await req.json();

  if (!body.nama || !body.email || !body.pesan) {
    return new Response(JSON.stringify({ success: false, message: "Data tidak lengkap" }), {
      status: 400,
    });
  }

  const client = await clientPromise;
  const db = client.db("portfolio"); // sesuaikan dengan nama DB kamu

  await db.collection("contacts").insertOne({
    nama: body.nama,
    email: body.email,
    pesan: body.pesan,
    waktu: new Date(),
  });

  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
