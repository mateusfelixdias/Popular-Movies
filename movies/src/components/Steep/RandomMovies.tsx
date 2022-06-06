import { api } from "../../../lib/api";
import { api_key } from "../../../api/chaveApi";
import { PatternMovies } from "./PatternMovies";

export function RandomMovies() {
  async function random() {
    const moviesUrl = await api.get(
      `/search/movie?query=Spiderman&page=1&include_adult=false&api_key=${api_key}`
    );

    const movieResults = moviesUrl.data.results.map((movie: any) => {
      return {
        alt: `Imagem do(a) ${movie.title}.`,
        description: movie.overview,
        image: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
        rating: movie.vote_average,
        title: movie.title,
      };
    });

    localStorage.setItem("movies", JSON.stringify(movieResults));
  };
  random();

  const movieResults = JSON.parse(localStorage.getItem("movies") || "");

  return (
    <div>
      {movieResults.map((movie: any) => {
        return (
          <PatternMovies
            alt={movie.alt}
            description={movie.description}
            image={movie.image}
            rating={movie.rating}
            title={movie.title}
          />
        );
      })}
    </div>
  );
};