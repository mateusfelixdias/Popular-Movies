import { movieFavorite } from "../database/moviesFavorites";

export async function addMoviesFavorites(req: any, res:any) {
    const { favorite, movie } = req.body;

    await movieFavorite.create({ favorite, movie }, error => {
        return !error ? (res.status(200).send()): res.status(400).send();
    });
};