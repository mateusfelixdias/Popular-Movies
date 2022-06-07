import { useState } from "react";
import { PopularMovies } from "./Steep/PopularMovies";
import { SearchByMovie } from "./Steep/SearchByMovie";

export function Movies() {
  const [movieName, setMovieName] = useState<string>("");
  const [userSearchedForMovie, setUserSearchedForMovie] = useState<boolean>(false);

  return (
    <main className="w-[100%] mobilemin:w-[550px] flex flex-col items-center">
      <h1 className="text-4xl text-[#f1f5f9] pb-8 text-center">
        Filmes Populares
      </h1>

      <div className="bg-[#ffffff33] w-[50%] m-auto m-0 mb-[8px] flex p-[8px] rounded-lg">
        <input
          className=" p-[8px] w-[100%] h-[100%] text-zinc-900 outline-none border-none bg-transparent"
          type="text"
          name="pesquisar"
          placeholder="Digite algum filme para pesquisar..."
          onChange={(data) => {
            setMovieName(data.target.value);
          }}
        />
        <button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            setUserSearchedForMovie(true);
          }}
        >
          <img src="../../../image/pesquisar.svg" alt="pesquisar" />
        </button>
      </div>

      <div className="mt-8 text-zinc-200 text-center">
        <input className="mr-[10px]" type="checkbox" name="filmsFavoritos" />
        <span>Mostrar apenas meus filmes favoritos.</span>
      </div>

      <div>
        {userSearchedForMovie ? (
          <SearchByMovie
            movieName={movieName}
            userSearchedForMovie={userSearchedForMovie}
          />
        ) : (
          <PopularMovies />
        )}
      </div>
    </main>
  );
};