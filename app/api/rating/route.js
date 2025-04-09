import { NextResponse } from "next/server";
import { connectToDatabase } from "@/app/lib/mongodb";

export async function POST(req) {
  const body = await req.json();
  const { db } = await connectToDatabase();

  await db.collection("ratings").insertOne({
    rating: body.rating,
    waktu: new Date(),
  });

  return NextResponse.json({ message: "Rating berhasil disimpan!" });
}
