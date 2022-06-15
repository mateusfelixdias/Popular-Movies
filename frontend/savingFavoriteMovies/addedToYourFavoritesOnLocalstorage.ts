export async function addMoviesFavorites(
  alt: string,
  description: string,
  image: string,
  rating: string,
  title: string,
) {
  const favoriteMovie = { alt, description, image, rating, title };
  const allFavoritesMovies:any = [];
  localStorage.setItem(alt, JSON.stringify(favoriteMovie));
  allFavoritesMovies.push(localStorage.getItem(alt));
  localStorage.setItem("allMovies", allFavoritesMovies);
};

export function selectingMovieAsFavorite(title: string, isFavorite: string) {
  localStorage.setItem(title, String(isFavorite));
};