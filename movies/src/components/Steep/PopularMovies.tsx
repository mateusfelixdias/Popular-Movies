import { popularMoveis } from "../../../api/url";
import { PatternMovies } from "./PatternMovies";


export function PopularMovies() {
  popularMoveis()
    .then(res => localStorage.setItem("moviesPopulares", JSON.stringify(res)))
    .catch(error => error);
  const moviesPopulares = JSON.parse(localStorage.getItem("moviesPopulares") || "");

  return (
    <div>
      {moviesPopulares.map((movie: any) => {
        return (
          <PatternMovies
            alt={`Imagem do(a) ${movie.title}.`}
            description={movie.overview}
            image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            rating={movie.vote_average}
            title={movie.title}
          />
        );
      })};
    </div>
  );
};