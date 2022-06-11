import { apiMoviesIsFavorites } from "./api";

export async function addMoviesFavorites(
  alt: string,
  description: string,
  image: string,
  rating: string,
  title: string,
  isFavorite: boolean
) {
  const addMovies = await apiMoviesIsFavorites.post("/isFavorite", {
    alt,
    description,
    image,
    rating,
    title,
    isFavorite
  });
  console.log(addMovies);
};


export function localStoreIsFavorite(title: string, isFavorite: string){
   localStorage.setItem(title, `${isFavorite}`);
};