import { FavoritePlace } from '@/app/utils/favoritesProvider';
import { WeatherFetcher } from '@/lib/weatherUntil';
import { useQuery } from '@tanstack/react-query';

// export interface FavoritePlace {
//     id: string; // lat-lon 기반 or uuid
//     name: string; // 원래 장소명 (수원시)
//     alias: string; // 사용자 별칭
//     lat: number;
//     lon: number;
//     place: number;
//     onRemove: (id: string) => void;
// }

interface Props {
    place: FavoritePlace;
    onRemove: (id: string) => void;
}
export default function FavoriteCard({ place, onRemove }: Props) {
    const { data } = useQuery({
        queryKey: ['current', place?.lat, place.lon],
        queryFn: () => WeatherFetcher(place.lat, place.lon),
    });

    return (
        <div className="rounded-xl bg-white/80 shadow p-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold">{place.alias}</h3>
                <button>⭐</button>
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
