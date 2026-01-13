'use client';

interface Favorite {
    id: string;
    name: string;
    alias: string;
    lat: number;
    lon: number;
}

interface FavoriteButtonProps {
    coord: { lat: number; lon: number } | null;
    currWeather: { name: string } | null;
    favorites: Favorite[];
    isFavorite: boolean;
    addFavorite: (fav: Favorite) => void;
    removeFavorite: (id: string) => void;
}

export default function FavoriteButton({
    coord,
    currWeather,
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
}: FavoriteButtonProps) {
    const handleClick = () => {
        if (!coord || !currWeather) return;

        //최대 개수 제한
        if (!isFavorite && favorites.length >= 6) {
            alert('즐겨찾기는 최대 6개까지 가능합니다.');
            return;
        }

        const id = `${coord.lat}-${coord.lon}`;

        if (isFavorite) {
            removeFavorite(id);
        } else {
            addFavorite({
                id,
                name: currWeather.name,
                alias: currWeather.name,
                lat: coord.lat,
                lon: coord.lon,
            });
        }
    };

    return (
        <button
            onClick={handleClick}
            aria-label="즐겨찾기"
            className={`text-2xl transition ${
                isFavorite
                    ? 'text-yellow-400 hover:scale-110'
                    : 'text-gray-300 hover:text-yellow-300 hover:scale-110'
            }`}
        >
            {isFavorite ? '★' : '☆'}
        </button>
    );
}
