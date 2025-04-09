import { NextResponse } from 'next/server';
import { collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export async function POST(req) {
  try {
    const data = await req.json();
    await addDoc(collection(db, 'contacts'), data);

    return NextResponse.json({
      success: true,
      message: 'Pesan berhasil disimpan!',
    });
  } catch (error) {
    console.error('Gagal menyimpan pesan:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Terjadi kesalahan saat menyimpan pesan.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const contactsRef = collection(db, 'contacts');
    const q = query(contactsRef, orderBy('timestamp', 'desc'), limit(5)); // ambil 5 terakhir
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map(doc => doc.data());

    return NextResponse.json(data);
  } catch (error) {
    console.error("Gagal mengambil komentar:", error);
    return NextResponse.json(
      { success: false, message: 'Gagal mengambil komentar' },
      { status: 500 }
    );
  }
}
