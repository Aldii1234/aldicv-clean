// app/api/rating/route.js

import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
import { insertRating } from "../../../models/Rating";

export async function POST(req) {
  try {
    const body = await req.json();
    const { rating } = body;

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ message: "Rating tidak valid" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    await insertRating(db, rating);

    return NextResponse.json({ message: "Rating berhasil disimpan" }, { status: 200 });
  } catch (error) {
    console.error("Gagal simpan rating:", error);
    return NextResponse.json({ message: "Gagal menyimpan rating" }, { status: 500 });
  }
}
