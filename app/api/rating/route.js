// app/api/rating/route.js
import { NextResponse } from 'next/server';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../lib/firebase'; // gunakan relative path, bukan @

export async function POST(req) {
  try {
    const { rating } = await req.json();
    const parsedRating = parseInt(rating);

    if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
      return NextResponse.json(
        { success: false, message: 'Rating tidak valid (1-5)' },
        { status: 400 }
      );
    }

    await addDoc(collection(db, 'ratings'), {
      rating: parsedRating,
      timestamp: new Date()
    });

    return NextResponse.json({
      success: true,
      message: 'Rating berhasil disimpan'
    });
  } catch (error) {
    console.error('Gagal menyimpan rating:', error);
    return NextResponse.json(
      { success: false, message: 'Gagal menyimpan rating' },
      { status: 500 }
    );
  }
}
