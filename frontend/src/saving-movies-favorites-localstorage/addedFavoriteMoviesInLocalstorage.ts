import { getToYouFavoriteslocalStorage } from "./getToYouFavoritesLocalStorage";

export async function addedFavoriteMoviesInLocalstorage(
  alt: string,
  description: string,
  image: string,
  rating: string,
  title: string
) {
  const pathToAllFavoriteMovies = "all favorite movies";
  const allFavoriteMovies =  getToYouFavoriteslocalStorage();

  const addingMovieToFavorites = allFavoriteMovies || [];
  addingMovieToFavorites.push({ alt, description, image, rating, title });

  const addingMovieToFavoritesJson = JSON.stringify(addingMovieToFavorites);
  localStorage.setItem(pathToAllFavoriteMovies, addingMovieToFavoritesJson);
};