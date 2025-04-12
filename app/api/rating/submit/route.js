// app/api/rating/route.js
import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // pastikan ini benar
const client = new MongoClient(uri);

export async function POST(request) {
  try {
    const { rating } = await request.json();

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ message: "Rating tidak valid" }, { status: 400 });
    }

    await client.connect();
    const db = client.db("websiteku");
    const collection = db.collection("ratings");

    await collection.insertOne({
      rating: Number(rating),
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Rating berhasil disimpan" }, { status: 200 });
  } catch (err) {
    console.error("Gagal simpan rating:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
