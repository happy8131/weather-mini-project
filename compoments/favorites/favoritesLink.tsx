'use client';

import { useFavorites } from '@/app/utils/favoritesProvider';
import { useRouter } from 'next/navigation';

export default function FavoritesLinkButton() {
    const { favorites } = useFavorites();
    const router = useRouter();

    return (
        <button
            onClick={() => router.push('/favorites')}
            className="flex items-center gap-1 text-sm text-sky-600 hover:text-sky-800 transition"
        >
            <span className="text-lg">★</span>
            <span>즐겨찾기 {favorites?.length}</span>
        </button>
    );
}
