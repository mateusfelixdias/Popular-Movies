import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export const apiMoviesIsFavorites = axios.create({
    baseURL: 'http://localhost:8080'
});