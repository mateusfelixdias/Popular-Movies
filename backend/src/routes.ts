import { addMoviesFavorites } from "./added/addMoviesFavorites";
import { updateMoviesFavorites } from "./update/updateMoviesFavorite";
import express from "express";

const routes = express.Router();

routes.put("/update", updateMoviesFavorites);

routes.post("/isFavorite", addMoviesFavorites);

export default routes;