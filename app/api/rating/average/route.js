import connectMongo from "@/lib/mongodb";
import Rating from "@/models/Rating";

export async function GET() {
  try {
    await connectMongo();
    const allRatings = await Rating.find({}, "rating"); // hanya ambil field rating
    return new Response(JSON.stringify({ allRatings }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
