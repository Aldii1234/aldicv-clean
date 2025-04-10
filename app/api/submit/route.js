// app/api/submit/route.js

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { nama, email, pesan } = body;

    if (!nama || !email || !pesan) {
      return NextResponse.json({ message: "Semua kolom wajib diisi!" }, { status: 400 });
    }

    console.log("Pesan diterima:", body);

    // TODO: Simpan ke database, kirim email, dsb

    return NextResponse.json({ message: "Pesan berhasil dikirim" }, { status: 200 });
  } catch (error) {
    console.error("Gagal kirim pesan:", error);
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 });
  }
}
