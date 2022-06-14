import { apiMoviesIsFavorites } from "../api/api";

export async function deleteToYouFavorites(title: string, isFavorite: any) {
    await apiMoviesIsFavorites.post('/delete', {
        title,
        isFavorite
    });
};