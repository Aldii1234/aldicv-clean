import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tls: true,
});

export async function POST(req) {
  try {
    const body = await req.json();
    await client.connect();
    const db = client.db("websiteku");
    const collection = db.collection("ratings");

    await collection.insertOne(body);

    return Response.json({ success: true });
  } catch (error) {
    console.error("Gagal simpan rating:", error);
    return Response.json({ success: false, error: error.message });
  }
}
