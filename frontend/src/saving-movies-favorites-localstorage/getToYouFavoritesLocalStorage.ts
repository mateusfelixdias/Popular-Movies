export function getToYouFavoriteslocalStorage() {
  const allMoviesSelectedAsFavorites = localStorage.getItem("all favorite movies");

  if (allMoviesSelectedAsFavorites) {
    return JSON.parse(allMoviesSelectedAsFavorites);
  } else {
    return [];
  };
};