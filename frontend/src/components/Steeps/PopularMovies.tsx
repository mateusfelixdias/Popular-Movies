import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { PatternMovies } from "./PatternMovies";


type Movie = {
  backdrop_path: string;
  image: string;
  overview: string;
  title: string;
  vote_average: string;
};

const API_KEY = import.meta.env.VITE_API_KEY;

export function PopularMovies() {
  const [resultsPopularMovies, setResultsPopularMovies] = useState([]);
  const [showPopularMovies, setShowPopularMovies] = useState<boolean>(false);

  
  useEffect(() => {
    async function getPopularMoveis() {
      const { results } = (await api.get(`movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)).data;
      setResultsPopularMovies(results);
      setShowPopularMovies(true);
    };

    getPopularMoveis();
  }, []);


  return (
    <div>
      {showPopularMovies
        ? resultsPopularMovies.map((movie: Movie) => {
            return (
              <PatternMovies
                key={movie.title}
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