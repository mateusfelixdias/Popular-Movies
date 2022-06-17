import { useState } from "react";

export function useShowOnlyFavorites(){
    const [showOnlyFavorites, setShowOnlyFavorites] = useState<boolean>(false);

    return {
        showOnlyFavorites,
        setShowOnlyFavoritesOn: () => setShowOnlyFavorites(true),
        setShowOnlyFavoritesOff: () => setShowOnlyFavorites(false)
    };
};