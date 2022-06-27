import { useEffect, useState } from "react";
import { api } from "../../../api/api";
import { PatternMovies } from "./PatternMovies";
import { PopularMovies } from "./PopularMovies";


type UserEventWhenSearchingForMovieProps = {
  movieName: string;
  userSearchedForAMovie: boolean;
};


type Movie = {
  backdrop_path: string;
  image: string;
  overview: string;
  title: string;
  vote_average: string;
};

const API_KEY = import.meta.env.VITE_API_KEY;

export function SearchByMovie({
  movieName,
  userSearchedForAMovie,
}: UserEventWhenSearchingForMovieProps) {
  const [showSearchedMovies, setShowSearchedMovies] = useState<boolean>(false);
  const [searchResultForMovie, setSearchResultForMovie] = useState([]);


  useEffect(() => {
    async function searchByMovie() {
      try {
        const { results } = (await api.get(`search/movie?query=${movieName}&page=1&include_adult=false&language=pt-BR&api_key=${API_KEY}`)).data;
  
        if (!results || results.length === 0) {
          window.alert(`Não foi possivel encontrar o filme, tente novamente!`);
          setShowSearchedMovies(false);
        } else {
          setSearchResultForMovie(results);
          setShowSearchedMovies(true);
        };
        
      } catch (error) {
        window.alert(`Não foi possivel encontrar o filme, tente novamente!`);
        setShowSearchedMovies(false);
      };
    };

    searchByMovie();
  }, [userSearchedForAMovie]);

  
  return (
    <div>
      {showSearchedMovies ? (
        searchResultForMovie.map((movie: Movie) => {
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
      ) : (
        <PopularMovies />
      )}
    </div>
  );
};