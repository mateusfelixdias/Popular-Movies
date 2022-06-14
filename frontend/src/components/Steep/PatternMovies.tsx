import { addMoviesFavorites } from "../../../isFavoritesMethods/addedToYourFavorites";
import { deleteToYouFavorites } from "../../../isFavoritesMethods/deleteToYouFavorites";
import { localStoreIsFavorite } from "../../../isFavoritesMethods/addedToYourFavoritesOnLocalstorage";
import { useIsFavorite } from "../../../hooks/isFavorite";

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
  title,
}: movieAttributesPros) {
  const { isFavorite, setIsFavoriteTrue, setIsFavoriteFalse } = useIsFavorite();
  const movieIsFavotiteOrNo = localStorage.getItem(title);

  
  return (
    <>
      <div className="text-zinc-900 flex items-center justify-between gap-[8px] bg-[#1D1C3B] rounded-lg p-[4px] m-0 m-auto mb-[8px] w-[100%] shadow-2xl mt-8">
        <div className="flex items-center gap-4 mobile:flex-col mobilemin:flex-col">
          <img
            className="w-[92px] h-[92px] mr-4 rounded-lg mobile:w-[66px] mobile:h-[66px]"
            src={image}
            alt={alt}
          />
          <div className="flex flex-col items-center text-zinc-100">
            <span> {title} </span>
          </div>

          <div className="flex items-center gap-[8px]">
            <img
              className="flex items-center gap-[8px]"
              src="../../image/estrelinha.svg"
              alt="estrelinha"
            />
            <span className="text-zinc-100 gap-[4px]">{rating}</span>

            <img
              className="flex ml-2"
              onClick={() => {
                isFavorite
                  ? (setIsFavoriteFalse(), localStoreIsFavorite(title, "false"), deleteToYouFavorites(title, "true"))
                  : (setIsFavoriteTrue(), localStoreIsFavorite(title, "true"), addMoviesFavorites( alt, description, image, rating, title, "true"));
              }}
              src={
                movieIsFavotiteOrNo === "true"
                  ? "../../image/coração.svg"
                  : "../../image/coraçãoVazio.svg"
              }
            />
            <span className="text-zinc-100 flex items-center">Favoritar</span>
          </div>

          <div className="whitespace-normal w-[100%] ml-20 text-zinc-100 mobile:mr-[60px] mobilemin:mr-[65px]">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};