import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { api_key } from "../../../api/chaveApi";
import { PatternMovies } from "./PatternMovies";

export function PopularMovies() {
  const [resultsPopularMovies, setResultsPopularMovies] = useState<any>();
  const [showPopularMovies, setShowPopularMovies] = useState<boolean>(false);

  async function getPopularMoveis() {
    const moviesPopulares = await api.get(`movie/popular?api_key=${api_key}&language=pt-BR&page=1`);
    const { results } = moviesPopulares.data;

    setResultsPopularMovies(results);
    setShowPopularMovies(true);
  };

  useEffect(() => {
    getPopularMoveis();
  }, []);

  return (
    <div>
      {showPopularMovies
        ? resultsPopularMovies.map((movie: any) => {
            return (
              <PatternMovies
                alt={`Imagem do(a) ${movie.title}.`}
                description={movie.overview}
                image={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                rating={movie.vote_average}
                title={movie.title}
              />
            );
          })
        : null}
    </div>
  );
};