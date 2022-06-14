import { useState } from "react";

export function useIsFavorite(){
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    return {
        isFavorite: isFavorite, 
        setIsFavoriteTrue: () => setIsFavorite(true),
        setIsFavoriteFalse: () => setIsFavorite(false)
    };
};