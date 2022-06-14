import { movieFavorite } from "../database/moviesFavorites";

export async function deleteMoviesFavorites(req: any, res: any) {
  const { title, isFavorite } = req.body;

  const way = { way: { title } };

  if(isFavorite === "true"){
    const deleteMovie = await movieFavorite.deleteOne(way);

    if(!deleteMovie){
      res.send(`No sucess.`);
    };
  };
};