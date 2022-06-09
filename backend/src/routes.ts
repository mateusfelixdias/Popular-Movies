import { addMoviesFavorites } from "./addMoviesFavorites/addMoviesFavorites";
import express from "express";

const routes = express.Router();

routes.post('/isFavorite', addMoviesFavorites);

export default routes;