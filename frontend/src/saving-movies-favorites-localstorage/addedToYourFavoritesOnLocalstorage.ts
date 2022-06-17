export async function addMoviesFavorites(
  alt: string,
  description: string,
  image: string,
  rating: string,
  title: string,
) {
  const allFavoritesMovies: any = [];
  localStorage.setItem(alt, JSON.stringify({ alt, description, image, rating, title }));
  allFavoritesMovies.push(JSON.stringify({ alt, description, image, rating, title }));
  localStorage.setItem("allMovies", allFavoritesMovies);
};

export function selectingMovieAsFavorite(title: string, isFavorite: string) {
  localStorage.setItem(title, String(isFavorite));
};