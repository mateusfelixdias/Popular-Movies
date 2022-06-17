export async function deleteToYouFavorites(alt:string) {
    localStorage.setItem(alt, "");
};