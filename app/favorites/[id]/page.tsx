'use client';

import { useParams, useRouter } from 'next/navigation';
import { useFavorites } from '@/app/utils/favoritesProvider';
import { useQuery } from '@tanstack/react-query';
import { WeatherFetcher, HourWeatherFetcher } from '@/lib/weatherUntil';
import { HourWeahter } from '@/compoments/weather/page';

export default function FavoriteDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const { favorites } = useFavorites();

    const place = favorites.find((p) => p.id === id);

    if (!place) {
        return <p className="text-center mt-10">존재하지 않는 장소입니다.</p>;
    }

    const { data: currWeather } = useQuery({
        queryKey: ['current', place.lat, place.lon],
        queryFn: () => WeatherFetcher(place.lat, place.lon),
    });

    const { data: hourWeather } = useQuery({
        queryKey: ['hour', place.lat, place.lon],
        queryFn: () => HourWeatherFetcher(place.lat, place.lon),
    });

    return (
        <div className="min-h-screen bg-linear-to-b from-sky-100 to-blue-200 px-4 py-6">
            <div className="max-w-md mx-auto bg-white/80 rounded-2xl shadow p-6">
                <button
                    onClick={() => router.back()}
                    className="text-sm text-sky-500 mb-4"
                >
                    ← 뒤로가기
                </button>

                {/* 장소명 */}
                <h1 className="text-xl font-bold mb-1">{place.alias}</h1>
                <p className="text-sm text-gray-500 mb-6">{place.name}</p>

                {/* 현재 기온 */}
                <div className="text-center mb-6">
                    <p className="text-5xl font-bold">
                        {currWeather?.main.temp}°
                    </p>
                    <p className="text-sm text-gray-500">
                        체감 {currWeather?.main.feels_like}°
                    </p>
                </div>

                {/* 최저 / 최고 */}
                <div className="flex justify-between bg-sky-50 rounded-xl p-4 mb-6 text-center">
                    <div>
                        <p className="text-xs text-gray-500">최저</p>
                        <p className="text-lg font-semibold text-blue-600">
                            {currWeather?.main.temp_min}°
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">최고</p>
                        <p className="text-lg font-semibold text-red-500">
                            {currWeather?.main.temp_max}°
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                    <div className="flex flex-col items-center">
                        <span>습도</span>
                        <span className="font-medium">
                            {currWeather?.main?.humidity}%
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>풍속</span>
                        <span className="font-medium">
                            {currWeather?.wind?.speed} m/s
                        </span>
                    </div>
                </div>

                {/* 시간대별 기온 */}
                <h2 className="text-sm font-semibold text-gray-700 mb-3">
                    시간대별 기온
                </h2>

                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    {hourWeather
                        ?.filter(
                            (item: HourWeahter) =>
                                item.dt * 1000 >
                                Date.now() -
                                    new Date().getTimezoneOffset() * 60 * 1000
                        )
                        .slice(0, 8)
                        .map((item: HourWeahter) => (
                            <div
                                key={item.dt}
                                className="min-w-18 shrink-0 rounded-xl bg-white/70 backdrop-blur shadow-sm p-3 flex flex-col items-center"
                            >
                                <span className="text-xs text-gray-500 mb-1">
                                    {item.dt_txt.slice(11, 16)}
                                </span>

                                <img
                                    src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    alt=""
                                    className="w-8 h-8"
                                />

                                <span className="text-sm font-semibold text-gray-800 mt-1">
                                    {item.main.temp}°
                                </span>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}
