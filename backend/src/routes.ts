import { addMoviesFavorites } from "./added/addMoviesFavorites";
import { deleteMoviesFavorites } from "./delete/deleteMoviesFavorite"
import { moviesFavorites } from "./movies/moviesFavorites";
import express from "express";

const routes = express.Router();

routes.post("/delete", deleteMoviesFavorites);

routes.get("/moviesAll", moviesFavorites);

routes.post("/isFavorite", addMoviesFavorites);

export default routes;