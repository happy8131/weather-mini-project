'use client';

import { FavoritePlace } from '@/app/utils/favoritesProvider';
import { WeatherFetcher } from '@/lib/weatherUntil';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
    place: FavoritePlace;
    onRemove: (id: string) => void;
    onUpdateAlias: (id: string, alias: string) => void;
}
export default function FavoriteCard({
    place,
    onRemove,
    onUpdateAlias,
}: Props) {
    const { data } = useQuery({
        queryKey: ['current', place?.lat, place?.lon],
        queryFn: () => WeatherFetcher(place?.lat, place?.lon),
    });

    const [isEdit, setIsEdit] = useState(false);
    const [alias, setAlias] = useState(place?.alias);
    const router = useRouter();

    const handleSave = () => {
        if (!alias.trim()) return;
        onUpdateAlias(place.id, alias);
        setIsEdit(false);
    };

    return (
        <div
            onClick={() => router.push(`/favorites/${place.id}`)}
            className="rounded-xl bg-white/80 shadow p-4"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="flex justify-between items-center mb-2"
            >
                {isEdit ? (
                    <input
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                        className="flex-1 mr-2 rounded border px-2 py-1 text-sm"
                    />
                ) : (
                    <h3 className="font-semibold">{place.alias}</h3>
                )}
                <button
                    onClick={() => (isEdit ? handleSave() : setIsEdit(true))}
                    className="text-xs text-sky-500 hover:underline"
                >
                    {isEdit ? '완료' : '수정'}
                </button>

                <button>⭐</button>
                {/* 별칭 */}

                <button
                    onClick={() => onRemove(place.id)}
                    className=" text-gray-400 hover:text-red-500"
                >
                    ✕
                </button>
            </div>

            <p className="text-2xl font-bold">{data?.main.temp}°</p>
            <p className="text-sm text-gray-500">
                {data?.main.temp_min}° / {data?.main.temp_max}°
            </p>
        </div>
    );
}
