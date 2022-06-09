import { movieFavorite } from "../database/moviesFavorites";

export async function addMoviesFavorites(req: any, res:any) {
    const { favorite, movie } = req.body;

    await movieFavorite.create({ favorite, movie }, error => {
        !error ? res.send(`Sucess`): res.send(`No sucess`);
    });
};