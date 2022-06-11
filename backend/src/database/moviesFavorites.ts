import { model, Schema } from "mongoose";

interface patternMovieFavorite {
  alt: string,
  description: string,
  image: string,
  rating: string,
  title: string,
  isFavorite: boolean
};

const movieFavoriteSchema = new Schema({
  alt: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: String, required: true },
  title: { type: String, required: true },
  isFavorite: { type: Boolean, required: true },
});

export const movieFavorite = model<patternMovieFavorite>("moveisfavorites", movieFavoriteSchema);