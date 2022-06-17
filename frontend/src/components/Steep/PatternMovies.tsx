import { addMoviesFavorites } from "../../saving-movies-favorites-localstorage/addedToYourFavoritesOnLocalstorage";
import { deleteToYouFavorites } from "../../saving-movies-favorites-localstorage/deleteToYouFavoritesLocalStorage";
import { selectingMovieAsFavorite } from "../../saving-movies-favorites-localstorage/addedToYourFavoritesOnLocalstorage";
import { useIsFavorite } from "../../hooks/isFavorite";

type movieAttributesPros = {
  alt: any;
  description: any;
  image: any;
  rating: any;
  title: any;
};

export function PatternMovies({
  alt,
  description,
  image,
  rating,
  title
}: movieAttributesPros) {
  const { isFavorite, setIsFavoriteTrue, setIsFavoriteFalse } = useIsFavorite();
  const movieIsFavoriteOrNo = localStorage.getItem(title);

  function savingFavoriteMoviesToLocalStorage() {
    if(isFavorite){
      deleteToYouFavorites(alt);
      selectingMovieAsFavorite(title, 'false');
      setIsFavoriteFalse();
    } else {
      addMoviesFavorites(alt, description, image, rating, title);
      selectingMovieAsFavorite(title, 'true');
      setIsFavoriteTrue();
    };
  };

  return (
    <>
      <div className="text-zinc-900 flex items-center justify-between gap-[8px] bg-[#1D1C3B] rounded-lg p-[4px] m-0 m-auto mb-[8px] w-[100%] shadow-2xl mt-8">
        <div className="flex items-center gap-4 mobile:flex-col mobilemin:flex-col">
          <img
            className="w-[92px] h-[92px] mr-4 rounded-lg mobile:w-[66px] mobile:h-[66px]"
            src={image}
            alt={alt}
          />
          <div className="text-center text-zinc-100">
            <span> {title} </span>
          </div>

          <div className="flex items-center gap-[8px]">
            <img
              className="flex items-center gap-[8px]"
              src="../../image/estrelinha.svg"
              alt="estrelinha"
            />
            <span className="text-zinc-100 gap-[4px]">{rating}</span>

            <button 
              type="button"
              className="flex items-center w-[50px] h-[50px] ml-[30px]"
              onClick={(event) => { event.preventDefault(); savingFavoriteMoviesToLocalStorage();}}
            >
              <img
                src={
                  movieIsFavoriteOrNo === "true"
                    ? "../../image/coração.svg"
                    : "../../image/coraçãoVazio.svg"
                }
              />
            </button>
            <span className="text-zinc-100 flex items-center">Favoritar</span>
          </div>

          <div className="whitespace-normal w-[90%] text-zinc-100 mobile:text-center mobilemin:text-center">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};