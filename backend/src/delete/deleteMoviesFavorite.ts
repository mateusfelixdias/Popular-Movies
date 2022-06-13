import { movieFavorite } from "../database/moviesFavorites";

export async function deleteMoviesFavorites(req: any, res: any) {
  const { title } = req.body;

  const way = { way: { title } };

  const deleteMovie = await movieFavorite.deleteOne(way);

  if(!deleteMovie){
    res.send(`No sucess.`);
  };
};