import { PopularMovies } from "./Steep/PopularMovies";

export function Movies() {

  return (
    <main className="w-[100%] mobilemin:w-[550px] flex flex-col items-center">
      <h1 className="text-4xl text-[#f1f5f9] pb-8 text-center">
        Filmes Populares
      </h1>

      <div className="bg-[#ffffff33] w-[50%] m-auto m-0 mb-[8px] flex p-[8px] rounded-lg">
        <input
          className="p-[8px] w-[100%] h-[100%] text-zinc-900 outline-none border-none bg-transparent"
          type="text"
          name="pesquisar"
          placeholder="Digite algum filme para pesquisar..."
        />
        <button type="submit">
          <img src="../../../image/pesquisar.svg" alt="pesquisar" />
        </button>
      </div>

      <div className="mt-8 text-zinc-200 text-center">
        <input className="mr-[10px]" type="checkbox" name="filmsFavoritos" />
        <span>Mostrar apenas meus filmes favoritos.</span>
      </div>

      <div>
        <PopularMovies/>
      </div>
    </main>
  );
};
