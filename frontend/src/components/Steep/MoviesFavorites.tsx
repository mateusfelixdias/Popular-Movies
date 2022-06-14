import { apiMoviesIsFavorites } from "../../../api/api";
import { useEffect, useState } from "react";
import { PatternMovies } from "./PatternMovies";

export function MoviesFavorites() {
  const [allMoviesFavoritos, setAllMoviesFavorites] = useState<any>();
  const [notHaveMoviesAsFavorites, setNotHaveMoviesAsFavorites] = useState<boolean>(false);

  async function moviesAll() {
    const { data } = await apiMoviesIsFavorites.get("/moviesAll");

    if (data.length === 0) {
      window.alert(`No Momento Você Não Selecionou Nenhum Filme Como Favorito!`);
      setNotHaveMoviesAsFavorites(false);
    } else {
      setNotHaveMoviesAsFavorites(true);
      setAllMoviesFavorites(data);
    };
  };

  useEffect(() => {
    moviesAll();
  }, []);

  return (
    <>
      {notHaveMoviesAsFavorites
        ? allMoviesFavoritos.map((movie: any) => {
            return (
              <PatternMovies
                alt={movie.alt}
                description={movie.description}
                image={movie.image}
                rating={movie.rating}
                title={movie.title}
              />
            );
          })
        : null}
    </>
  );
};