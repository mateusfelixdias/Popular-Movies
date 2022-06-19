import { getToYouFavoriteslocalStorage } from "./getToYouFavoritesLocalStorage";

export function deleteMovieFromFavorites(alt: string) {
  const pathToAllFavoriteMovies = "all favorite movies";

  const allFavoriteMovies = getToYouFavoriteslocalStorage() || [];

  const movieIsNotFavorite = allFavoriteMovies.find((movie: any) => movie?.alt === alt);

  const onlyFavoriteMovies = allFavoriteMovies.filter((movie: any) => movie?.alt != movieIsNotFavorite.alt);

  localStorage.setItem(pathToAllFavoriteMovies,JSON.stringify(onlyFavoriteMovies));
};