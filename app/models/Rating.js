// models/Rating.js
export async function insertRating(db, rating) {
  return await db.collection("ratings").insertOne({
    rating,
    createdAt: new Date(),
  });
}
