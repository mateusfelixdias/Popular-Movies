import { model, Schema } from "mongoose";

interface patternMovieFavorite {
  favorite: boolean;
  movie: string;
};

const movieFavoriteSchema = new Schema({
  favorite: { type: Boolean, required: true },
  movie: { type: String, required: true },
});

export const movieFavorite = model<patternMovieFavorite>("moveisfavorites", movieFavoriteSchema);