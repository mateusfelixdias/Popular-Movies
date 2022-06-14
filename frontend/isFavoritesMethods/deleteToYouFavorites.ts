import { apiMoviesIsFavorites } from "../api/api";

export async function deleteToYouFavorites(title: string, isFavorite: string) {
    await apiMoviesIsFavorites.post('/delete', {
        title,
        isFavorite
    });
};