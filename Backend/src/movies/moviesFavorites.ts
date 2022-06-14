import { movieFavorite } from "../database/moviesFavorites";

export async function moviesFavorites(req:any, res:any){
    res.send( await movieFavorite.find({}) );
};