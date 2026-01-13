'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export interface FavoritePlace {
    id: string;
    name: string;
    alias: string;
    lat: number;
    lon: number;
}

const FavoritesContext = createContext<{
    favorites: FavoritePlace[];
    addFavorite: (p: FavoritePlace) => void;
    removeFavorite: (id: string) => void;
    updateAlias: (id: string, alias: string) => void;
} | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<FavoritePlace[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem('favorites');
        if (saved) setFavorites(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (place: FavoritePlace) => {
        setFavorites((prev) => {
            if (prev.length >= 6) return prev;
            if (prev.some((p) => p.id === place.id)) return prev;
            return [...prev, place];
        });
    };

    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((p) => p.id !== id));
    };

    const updateAlias = (id: string, alias: string) => {
        setFavorites((prev) =>
            prev.map((p) => (p.id === id ? { ...p, alias } : p))
        );
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addFavorite, removeFavorite, updateAlias }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export const useFavorites = () => {
    const ctx = useContext(FavoritesContext);
    if (!ctx) throw new Error('FavoritesProvider missing');
    return ctx;
};
