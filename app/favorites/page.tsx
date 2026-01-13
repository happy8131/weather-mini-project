'use client';

import FavoriteCard from '@/compoments/favorites/favoriteCard';
import { useFavorites } from '../utils/favoritesProvider';

export default function FavoritesPage() {
    const { favorites, removeFavorite, updateAlias } = useFavorites();

    if (!favorites.length) {
        return <p className="text-center mt-10">즐겨찾기가 없습니다.</p>;
    }

    return (
        <div className="p-4 grid grid-cols-2 gap-4">
            {favorites.map((place) => (
                <FavoriteCard
                    key={place.id}
                    place={place}
                    onRemove={removeFavorite}
                    onUpdateAlias={updateAlias}
                />
            ))}
        </div>
    );
}
