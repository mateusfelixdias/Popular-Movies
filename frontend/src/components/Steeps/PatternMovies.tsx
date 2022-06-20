import imgHeart from "../../../image/coração.svg";
import imgEmptyheart from "../../../image/coraçãoVazio.svg";
import imgLittlestar from "../../../image/estrelinha.svg";
import { addedFavoriteMoviesInLocalstorage } from "../../saving-movies-favorites-localstorage/addedFavoriteMoviesInLocalstorage";
import { deleteMovieFromFavorites } from "../../saving-movies-favorites-localstorage/deleteMovieFromFavorites";
import { useIsFavorite } from "../../hooks/isFavorite";
import { selectingMoviesWithTrueOrFalseInLocalStorage } from "../../saving-movies-favorites-localstorage/selectingMoviesWithTrueOrFalseInLocalStorage";


type movieAttributesProps = {
  alt: string;
  description: string;
  image: string;
  rating: string;
  title: string;
};


export function PatternMovies({
  alt,
  description,
  image,
  rating,
  title,
}: movieAttributesProps) {
  const { isFavorite, setIsFavoriteTrue, setIsFavoriteFalse } = useIsFavorite();
  const trueOrFalseMovieInLocalstorage = localStorage.getItem(title);


  function savingOrDeleteFavoriteMoviesToLocalStorage() {
    if (isFavorite) {
      deleteMovieFromFavorites(alt);
      selectingMoviesWithTrueOrFalseInLocalStorage(title, "false");
      setIsFavoriteFalse();
    } else {
      addedFavoriteMoviesInLocalstorage(alt, description, image, rating, title);
      selectingMoviesWithTrueOrFalseInLocalStorage(title, "true");
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
              src={imgLittlestar}
              alt="estrelinha"
            />
            <span className="text-zinc-100 gap-[4px]">{rating}</span>

            <button
              type="button"
              className="flex items-center w-[50px] h-[50px] ml-[30px]"
              onClick={savingOrDeleteFavoriteMoviesToLocalStorage}
            >
              <img
                src={trueOrFalseMovieInLocalstorage === "true" ? imgHeart : imgEmptyheart}
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