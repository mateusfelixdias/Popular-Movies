import { apiMoviesIsFavorites } from "../api/api";

export async function addMoviesFavorites(
  alt: string,
  description: string,
  image: string,
  rating: string,
  title: string,
  isFavorite: string
) {
  await apiMoviesIsFavorites.post("/isFavorite", {
    alt,
    description,
    image,
    rating,
    title,
    isFavorite
  });
};