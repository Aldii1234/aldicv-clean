// app/api/submit/route.js
import { NextResponse } from 'next/server';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from import { db } from "../../lib/firebase";
// Pastikan path sesuai dengan lokasi file firebase.js

const db = getFirestore(app);

export async function POST(req) {
  try {
    const data = await req.json();

    await addDoc(collection(db, 'contacts'), data);

    return NextResponse.json({ success: true, message: 'Pesan berhasil disimpan!' });
  } catch (error) {
    console.error('Gagal menyimpan pesan:', error);
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan saat menyimpan pesan.' }, { status: 500 });
  }
}
