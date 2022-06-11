import { addMoviesFavorites } from "./added/addMoviesFavorites";
import { deleteMoviesFavorites } from "./delete/deleteMoviesFavorite"
import express from "express";

const routes = express.Router();

routes.delete("/delete", deleteMoviesFavorites);

routes.post("/isFavorite", addMoviesFavorites);

export default routes;