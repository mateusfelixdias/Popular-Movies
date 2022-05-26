export default function App() {
  return (
      <main className="w-[100%] mobilemin:w-[500px]">

        <h1 className="text-4xl text-[#f1f5f9] pb-8 mobile:flex mobile:items-center">Filmes Populares</h1>

        <div className="bg-[#ffffff33] w-[50%] m-auto m-0 mb-[8px] flex p-[8px] rounded-lg">
          <input className="p-[8px] w-[100%] h-[100%] text-zinc-900 outline-none border-none bg-transparent" type="text" name="pesquisar" placeholder="Digite algum filme para pesquisar..." />
          <button type="button"><img src="./src/image/search-icon.svg" alt="pesquisar" /></button>
        </div>

        <div className="mt-8 mb-8 text-zinc-200">
          <input className="mr-[10px]" type="checkbox" name="filmsFavoritos" /> <span>Mostrar apenas meus filmes favoritos.</span>
        </div>

    
        <div className="text-zinc-900 flex items-center justify-between gap-[8px] bg-[#1D1C3B] rounded-lg p-[4px] m-0 m-auto mb-[8px] w-[100%] shadow-2xl">
            <div className="flex items-center gap-4 mobile:flex-col mobilemin:flex-col">
              <img className="w-[92px] h-[92px] mr-4 rounded-lg mobile:w-[66px] mobile:h-[66px]" src="./src/image/batman.svg" alt="image batman" />
              <div className="flex flex-col items-center text-zinc-100">
                <span> Batman (2022) </span>
              </div>

            <div className="flex items-center gap-[8px]">
              <img className="flex items-center gap-[8px]" src="./src/image/Vector.svg" alt="favoritar" />
              <span className="text-zinc-100 gap-[4px]">9.4</span>
   
              <img className="flex ml-2" src="./src/image/coraçãoVazio.svg" alt="favoritar" />
              <span className="text-zinc-100 flex items-center">Favoritar</span> 
            </div>

            <div className="whitespace-normal w-[100%] ml-20 text-zinc-100 mobile:mr-[60px] mobilemin:mr-[60px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>


        <div className="text-zinc-900 flex items-center justify-between gap-[8px] bg-[#1D1C3B] rounded-lg p-[4px] m-0 m-auto mb-[8px] w-[100%] shadow-2xl mt-8">
            <div className="flex items-center gap-4 mobile:flex-col mobilemin:flex-col">
              <img className="w-[92px] h-[92px] mr-4 rounded-lg mobile:w-[66px] mobile:h-[66px]" src="./src/image/avatar.svg" alt="image avatar" />
              <div className="flex flex-col items-center text-zinc-100">
                <span> Avatar (2009) </span>
              </div>

            <div className="flex items-center gap-[8px]">
              <img className="flex items-center gap-[8px]" src="./src/image/Vector.svg" alt="favoritar" />
              <span className="text-zinc-100 gap-[4px]">9.5</span>
   
              <img className="flex ml-2" src="./src/image/coraçãoVazio.svg" alt="favoritar" />
              <span className="text-zinc-100 flex items-center">Favoritar</span> 
            </div>

            <div className="whitespace-normal w-[100%] ml-20 text-zinc-100 mobile:mr-[60px] mobilemin:mr-[60px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>


        <div className="text-zinc-900 flex items-center justify-between gap-[8px] bg-[#1D1C3B] rounded-lg p-[4px] m-0 m-auto mb-[8px] w-[100%] shadow-2xl mt-8">
            <div className="flex items-center gap-4 mobile:flex-col mobilemin:flex-col">
              <img className="w-[92px] h-[92px] mr-4 rounded-lg mobile:w-[66px] mobile:h-[66px]" src="./src/image/vigadores.svg" alt="image vingadores era de ultron" />
              <div className="flex flex-col items-center text-zinc-100">
                <span> Vingadores Era de Ultron (2015) </span>
              </div>

            <div className="flex items-center gap-[8px]">
              <img className="flex items-center gap-[8px]" src="./src/image/Vector.svg" alt="favoritar" />
              <span className="text-zinc-100 gap-[4px]">9.0</span>
   
              <img className="flex ml-2" src="./src/image/coraçãoVazio.svg" alt="favoritar" />
              <span className="text-zinc-100 flex items-center">Favoritar</span> 
            </div>

            <div className="whitespace-normal w-[100%] ml-20 text-zinc-100 mobile:mr-[60px] mobilemin:mr-[60px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>


        <div className="text-zinc-900 flex items-center justify-between gap-[8px] bg-[#1D1C3B] rounded-lg p-[4px] m-0 m-auto mb-[8px] w-[100%] shadow-2xl mt-8">
            <div className="flex items-center gap-4 mobile:flex-col mobilemin:flex-col">
              <img className="w-[92px] h-[92px] mr-4 rounded-lg mobile:w-[66px] mobile:h-[66px]" src="./src/image/vigadoresUltimato.svg" alt="image vingadores ultimato" />
              <div className="flex flex-col items-center text-zinc-100">
                <span> Vingadores ultimato (2019) </span>
              </div>

            <div className="flex items-center gap-[8px]">
              <img className="flex items-center gap-[8px]" src="./src/image/Vector.svg" alt="favoritar" />
              <span className="text-zinc-100 gap-[4px]">9.7</span>
   
              <img className="flex ml-2" src="./src/image/coraçãoVazio.svg" alt="favoritar" />
              <span className="text-zinc-100 flex items-center">Favoritar</span> 
            </div>

            <div className="whitespace-normal w-[100%] ml-20 text-zinc-100 mobile:mr-[60px] mobilemin:mr-[60px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>       
      </main>
  );
};
