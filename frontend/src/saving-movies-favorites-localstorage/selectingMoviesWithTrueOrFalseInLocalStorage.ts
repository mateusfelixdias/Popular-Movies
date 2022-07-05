export function selectingMoviesWithTrueOrFalseInLocalStorage(title: string, isFavorite: string ) {
    localStorage.setItem(title, isFavorite);
};