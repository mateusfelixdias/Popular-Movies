import { PatternMovies } from "./PatternMovies";

export function SearchByMovie() {
  const moviesResultsSearch = JSON.parse(localStorage.getItem("moviesResultsSearch") || "");

  return (
    <div>
      {moviesResultsSearch.map((movie: any) => {
        return (
          <PatternMovies
            alt={`Imagem do(a) ${movie.title}.`}
            description={movie.overview}
            image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            rating={movie.vote_average}
            title={movie.title}
          />
        );
      })}
    </div>
  );
}
