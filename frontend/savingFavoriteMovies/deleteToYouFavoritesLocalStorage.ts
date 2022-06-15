export async function deleteToYouFavorites(movies: string) {
    localStorage.setItem(movies, "");
};