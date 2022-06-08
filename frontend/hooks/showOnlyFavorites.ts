import { useState } from "react";

export function useShowOnlyFavorites(){
    const [showOnlyFavorites, setShowOnlyFavorites] = useState<"on" | "off">("off");

    return {
        showOnlyFavorites: showOnlyFavorites,
        setShowOnlyFavoritesOn: () => setShowOnlyFavorites('on'),
        setShowOnlyFavoritesOff: () => setShowOnlyFavorites('off')
    };
};