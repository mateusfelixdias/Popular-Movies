import { movieFavorite } from "../database/moviesFavorites";

export async function updateMoviesFavorites(req: any, res: any) {
  const { movie } = req.body;

  const currentMovie = await movieFavorite.findOne({ movie });

  const way = { way: { movie } };

  if (currentMovie?.favorite) {
    const movieIsFavoriteFalse = await movieFavorite.updateOne(way.way, {$set: { favorite: false } });
    movieIsFavoriteFalse ? res.status(200).send() : res.status(400).send();
  } else {
    const movieIsFavoriteTrue = await movieFavorite.updateOne(way.way, {$set: { favorite: true }});
    movieIsFavoriteTrue ? res.status(200).send() : res.status(400).send();
  };
};