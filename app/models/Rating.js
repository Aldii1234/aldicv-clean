import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  rating: Number,
}, {
  timestamps: true,
});

export default mongoose.models.Rating || mongoose.model("Rating", RatingSchema);
