import { connectMongo } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { rating } = await req.json();

    if (!rating || typeof rating !== "number" || rating < 1 || rating > 5) {
      return NextResponse.json({ message: "Rating tidak valid" }, { status: 400 });
    }

    const client = await connectMongo();
    const db = client.db(); // ambil default DB dari koneksi URI

    await db.collection("ratings").insertOne({
      rating,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Rating berhasil disimpan ke MongoDB" }, { status: 200 });
  } catch (error) {
    console.error("MongoDB error:", error);
    return NextResponse.json({ message: "Gagal simpan rating" }, { status: 500 });
  }
}
