import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { api_key } from "../../../api/chaveApi";
import { PatternMovies } from "./PatternMovies";
import { PopularMovies } from "./PopularMovies";

type MoviesResultsSearchProps = {
  movieName: string;
  userSearchedForMovie: boolean;
};

export function SearchByMovie({
  movieName,
  userSearchedForMovie,
}: MoviesResultsSearchProps) {
  const [showSearchedMovies, setShowSearchedMovies] = useState<boolean>(false);
  const [searchResultForMovie, setSearchResultForMovie] = useState<any>();

  async function searchByMovie() {
    try {
      const searchMovies = await api.get(`search/movie?query=${movieName}&page=1&include_adult=false&api_key=${api_key}`);
      const { results } = searchMovies.data;

      if (!results || results.length === 0) {
        window.alert(`Não foi possivel encontra o filme, tente novamente!`);
        setShowSearchedMovies(false);
      } else {
        setSearchResultForMovie(results);
        setShowSearchedMovies(true);
      };
      
    } catch (error) {
      window.alert(`Não foi possivel encontra o filme, tente novamente!`);
      setShowSearchedMovies(false);
    };
  };

  useEffect(() => {
    searchByMovie();
  }, [userSearchedForMovie]);

  return (
    <div>
      {showSearchedMovies ? (
        searchResultForMovie.map((movie: any) => {
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
      ) : (
        <PopularMovies />
      )}
    </div>
  );
};