import { useEffect, useState } from "react";
import { getToYouFavoriteslocalStorage } from "../../saving-movies-favorites-localstorage/getToYouFavoritesLocalStorage";
import { PatternMovies } from "./PatternMovies";


export function MoviesFavorites() {
  const [allMoviesSelectedAsFavorites, setAllMoviesSelectedAsFavorites] = useState([]);
  const [notHaveMoviesAsFavorites, setNotHaveMoviesAsFavorites] = useState<boolean>(false);


  useEffect(() => {
    const getAllMoviesSelectedAsFavorites = getToYouFavoriteslocalStorage();

    if (getAllMoviesSelectedAsFavorites?.length === 0) {
      window.alert(`No Momento Você Não Selecionou Nenhum Filme Como Favorito!`);
      setNotHaveMoviesAsFavorites(false);
    } else {
      setNotHaveMoviesAsFavorites(true);
      setAllMoviesSelectedAsFavorites(getAllMoviesSelectedAsFavorites);
    };
  }, []);


  return (
    <>
      {notHaveMoviesAsFavorites
        ? allMoviesSelectedAsFavorites.map((movie: any) => {
            return (
              <PatternMovies
                key={movie.title}
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