import { NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongodb"; // <= RELATIF
import { insertRating } from "../../../../models/Rating"; // <= RELATIF

export async function POST(req) {
  try {
    const body = await req.json();
    const { nama, komentar, rating } = body;

    if (!nama || !komentar || !rating) {
      return NextResponse.json({ message: "Data tidak lengkap!" }, { status: 400 });
    }

    await insertRating({ nama, komentar, rating });

    return NextResponse.json({ message: "Rating berhasil dikirim" }, { status: 200 });
  } catch (error) {
    console.error("Gagal simpan rating:", error);
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
  }
}
