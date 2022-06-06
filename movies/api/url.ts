import { api } from "../lib/api";
import { api_key } from "./chaveApi";


export async function popularMoveis() {
  const moviesPopulares = await api.get(`/movie/popular?api_key=${api_key}&language=en-US&page=1`);
  const { results } = moviesPopulares.data;
  return results;
};

export async function searchByMovie(movie: string) {
  const searchMovies = await api.get(`/search/movie?query=${movie}&page=1&include_adult=false&api_key=${api_key}`);
  const { results } = searchMovies.data;
  return results;
};
