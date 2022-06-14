export function localStoreIsFavorite(title: string, isFavorite: string){
    localStorage.setItem(title, `${isFavorite}`);
 };