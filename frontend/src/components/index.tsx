import imgSearch from "../../image//pesquisar.svg";
import { MoviesFavorites } from "./Steeps/MoviesFavorites";
import { useEffect, useState } from "react";
import { useShowOnlyFavorites } from "../hooks/showOnlyFavorites";
import { PopularMovies } from "./Steeps/PopularMovies";
import { SearchByMovie } from "./Steeps/SearchByMovie";

export function Movies() {
  const [movieName, setMovieName] = useState<string>("");
  const [ifUsersSearchForAMovie, setIfUsersSearchForAMovie] = useState<boolean>(false);
  const { showOnlyFavorites, setShowOnlyFavoritesOn, setShowOnlyFavoritesOff } = useShowOnlyFavorites();

  useEffect(() => {
    document.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        setIfUsersSearchForAMovie(true);
      }
    });
  }, []);

  return (
    <main className="w-[100%] mobilemin:w-[550px] flex flex-col items-center">
      <h1 className="text-4xl text-[#f1f5f9] pb-8 text-center italic">
        Filmes Populares
      </h1>

      <div className="bg-[#ffffff33] w-[60%] m-auto m-0 mb-[8px] flex p-[8px] rounded-lg mobile:w-[70%] mobilemin:w-[100%]">
        <input
          className=" p-[8px] w-[100%] h-[100%] text-zinc-900 outline-none border-none bg-transparent italic text-zinc-100"
          type="text"
          placeholder="Digite algum filme para pesquisar..."
          onChange={(data) => {
            setMovieName(data.target.value);
            setIfUsersSearchForAMovie(false);
          }}
        />
        <button
          type="button"
          disabled={movieName.length == 0 ? true : false}
          onClick={() => setIfUsersSearchForAMovie(true)}
        >
          <img className="pr-2" src={imgSearch} alt="pesquisar" />
        </button>
      </div>

      <div className="mt-8 text-zinc-200 text-center">
        <input
          className="mr-[10px]"
          type="checkbox"
          onChange={() =>
            showOnlyFavorites
              ? setShowOnlyFavoritesOff()
              : setShowOnlyFavoritesOn()
          }
        />
        <span>Mostrar apenas meus filmes favoritos.</span>
      </div>

      <div>
        {ifUsersSearchForAMovie ? (
          showOnlyFavorites ? (
            <MoviesFavorites />
          ) : (
            <SearchByMovie movieName={movieName} userSearchedForAMovie={true} />
          )
        ) : showOnlyFavorites ? (
          <MoviesFavorites />
        ) : (
          <PopularMovies />
        )}
      </div>
    </main>
  );
};