import { movieFavorite } from "../database/moviesFavorites";

export async function addMoviesFavorites(req: any, res: any) {
  const { alt, description, image, rating, title, isFavorite } = req.body;

  if(!await movieFavorite.findOne({ title })){
    const dataMovies = { alt, description, image, rating, title, isFavorite };

    await movieFavorite.create( dataMovies, (error) => { 
      !error ? res.send(`Sucess`) : res.send(`No sucess`); 
    });
  };
};
