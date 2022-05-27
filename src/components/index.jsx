import Movies from "./Movies";

export function App() {
    const movies = [
        {
            image: './src/image/batman.svg',
            alt: 'imagem do batman',
            title: 'Batman (2022)',
            rating: '9.4',
            description: 
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            isFavorited: false
        },

        {
            image: './src/image/avatar.svg',
            alt: 'imagem do avatar',
            title: 'Avatar (2009)',
            rating: '9.5',
            description: 
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            isFavorited: false
        },

        {
            image: './src/image/vingadores.svg',
            alt: 'imagem dos vingadores Era De Ultron',
            title: 'Vingadores Era De Ultron (2015)',
            rating: '9.0',
            description: 
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            isFavorited: false
        },

        {
            image: './src/image/vingadoresUltimato.svg',
            alt: 'imagem dos vingadores Ultimato',
            title: 'Vingadores Ultimato (2019)',
            rating: '9.7',
            description: 
                `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
            isFavorited: false
        }
    ];


    return (
        <main className="w-[100%] mobilemin:w-[550px]">
            <h1 className="text-4xl text-[#f1f5f9] pb-8 text-center">Filmes Populares</h1>

            <div className="bg-[#ffffff33] w-[50%] m-auto m-0 mb-[8px] flex p-[8px] rounded-lg">
            <input className="p-[8px] w-[100%] h-[100%] text-zinc-900 outline-none border-none bg-transparent" type="text" name="pesquisar" placeholder="Digite algum filme para pesquisar..." />
            <button type="button"><img src="./src/image/search-icon.svg" alt="pesquisar" /></button>
            </div>

            <div className="mt-8 text-zinc-200 text-center">
                <input className="mr-[10px]" type="checkbox" name="filmsFavoritos" /> <span>Mostrar apenas meus filmes favoritos.</span>
            </div>
            
            <>
                <Movies movie={ movies[0] } />
                <Movies movie={ movies[1] } />
                <Movies movie={ movies[2] } />
                <Movies movie={ movies[3] } />
            </>

        </main>
    );
};
