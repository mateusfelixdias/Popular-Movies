import { movieFavorite } from "../database/moviesFavorites";

export async function deleteMoviesFavorites(req: any, res: any) {
  const { title } = req.body;

  const movie = await movieFavorite.findOne({ way: { title } });

  const way = { way: { title } };

  if(movie?.isFavorite === "false"){
    const deleteMovie = await movieFavorite.deleteOne(way);

    if(!deleteMovie){
      res.send(`No sucess.`);
    };
  };
};