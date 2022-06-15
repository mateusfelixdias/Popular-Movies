export async function addMoviesFavorites(
  alt: string,
  description: string,
  image: string,
  rating: string,
  title: string,
) {
  const favoriteMovie = { alt, description, image, rating, title };
  localStorage.setItem(alt, JSON.stringify(favoriteMovie));
};

export function selectingMovieAsFavorite(title: string, isFavorite: string) {
  localStorage.setItem(title, `${isFavorite}`);
};