'use client';

import { useGeolocation } from '@/hook/useLocationHook';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import WeatherSearch from './search/search';
import { useQuery } from '@tanstack/react-query';
import { HourWeatherFetcher, WeatherFetcher } from '@/lib/weatherUntil';
import { useFavorites } from '@/app/utils/favoritesProvider';
import FavoriteButton from './favorites/FavoriteButton';
import FavoritesLinkButton from './favorites/favoritesLink';

export interface CurrentWeahter {
    main: {
        feels_like: number;
        temp: number;
        temp_max: number;
        temp_min: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    name: string;
}

export interface HourWeahter {
    dt_txt: string;
    dt: number;
    weather: { icon: string }[];
    main: {
        feels_like: number;
        temp: number;
        temp_max: number;
        temp_min: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    name: string;
}

export default function GeoClient() {
    const { latitude, longitude } = useGeolocation();
    const [coord, setCoord] = useState<{
        lat: number;
        lon: number;
    } | null>(null);
    const {
        data: currWeather,
        error: currErr,
        isLoading,
    } = useQuery({
        queryKey: ['current', coord?.lat, coord?.lon],
        queryFn: () => WeatherFetcher(coord!.lat, coord!.lon),
        enabled: !!coord,
    });
    const { data: hourWeather, error: hourErr } = useQuery({
        queryKey: ['hour', coord?.lat, coord],
        queryFn: () => HourWeatherFetcher(coord!.lat, coord!.lon),
        enabled: !!coord,
    });

    // const [currWeather, setCurrWeather] = useState<CurrentWeahter | null>(null);
    //  const [hourWeather, setHourWeather] = useState<HourWeahter[] | null>([]);
    //  const [bWeather, setbWeather] = useState(true);

    //오늘 날짜
    const today = new Date().toLocaleDateString('sv-SE', {
        timeZone: 'Asia/Seoul',
    });
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    const isFavorite = favorites.some(
        (f) => f.lat === coord?.lat && f.lon === coord?.lon
    );

    useEffect(() => {
        if (latitude && longitude) {
            setCoord({
                lat: latitude,
                lon: longitude,
            });
        }
    }, [latitude, longitude]);

    // useEffect(() => {
    //     //현재위치 api
    //     const WeatherData = async () => {
    //         const res = await fetch(
    //             `/api/weather/current?lat=${latitude}&lon=${longitude}`
    //         );
    //         const result = await res.json();
    //         setCurrWeather(result);
    //     };
    //     //시간대 별 api
    //     const HourWeatherData = async () => {
    //         const res = await fetch(
    //             `/api/weather/hour?lat=${latitude}&lon=${longitude}`
    //         );
    //         const result = await res.json();
    //         setHourWeather(result);
    //     };
    //     if (bWeather === !loading) {
    //         WeatherData();
    //         HourWeatherData();
    //         setbWeather(false);
    //     }
    // }, [latitude, longitude]);

    // if (isLoading)
    //     return (
    //         <div className="min-h-screen bg-linear-to-b from-sky-100 to-blue-200 flex items-center justify-center px-4">
    //             <p>데이터 불러오는 중...</p>
    //         </div>
    //     );

    return (
        <div className="min-h-screen bg-linear-to-b from-sky-100 to-blue-200 flex items-center justify-center px-4">
            <div className="w-full max-w-md rounded-2xl bg-white/80 backdrop-blur shadow-xl p-6">
                <WeatherSearch setCoord={setCoord} />
                <div className="flex items-center justify-between mb-4">
                    {/*즐겨찾기 링크 */}
                    <FavoritesLinkButton />
                    {/* 지역 / 상태 */}
                    <div className="text-center mb-6">
                        <h1 className="text-lg font-semibold text-gray-700">
                            현재 날씨
                        </h1>
                        <p className="text-sm text-gray-500">
                            {currWeather?.name}
                        </p>
                    </div>
                    {/*즐겨찾기 추가*/}
                    <FavoriteButton
                        coord={coord}
                        currWeather={currWeather}
                        favorites={favorites}
                        isFavorite={isFavorite}
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                    />
                </div>
                {/* 현재 기온 */}
                <div className="flex flex-col items-center mb-6">
                    <span className="text-6xl font-bold text-gray-900">
                        {currWeather?.main?.temp}°
                    </span>
                    <span className="text-sm text-gray-500 mt-1">
                        체감 {currWeather?.main?.feels_like}°
                    </span>
                </div>

                {/* 최고 / 최저 */}
                <div className="flex justify-between text-center bg-sky-50 rounded-xl p-4 mb-6">
                    <div className="flex-1">
                        <p className="text-xs text-gray-500">최저</p>
                        <p className="text-lg font-semibold text-blue-600">
                            {currWeather?.main?.temp_min}°
                        </p>
                    </div>
                    <div className="flex-1">
                        <p className="text-xs text-gray-500">최고</p>
                        <p className="text-lg font-semibold text-red-500">
                            {currWeather?.main?.temp_max}°
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
                <div>
                    <h2 className="text-sm font-semibold text-gray-700 mb-3">
                        시간대별 기온
                    </h2>

                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                        {hourWeather
                            ?.filter(
                                (item: { dt_txt: string }) =>
                                    item.dt_txt.slice(0, 10) === today
                            )
                            .map((item: HourWeahter) => (
                                <div
                                    key={item.dt}
                                    className="min-w-18 shrink-0 rounded-xl bg-white/70 backdrop-blur shadow-sm p-3 flex flex-col items-center"
                                >
                                    <span className="text-xs text-gray-500 mb-1">
                                        {item?.dt_txt?.slice(11, 16)}
                                    </span>

                                    <img
                                        src={`https://openweathermap.org/img/wn/${item.weather[0]?.icon}@2x.png`}
                                        alt=""
                                        className="w-8 h-8"
                                    />

                                    <span className="text-sm font-semibold text-gray-800 mt-1">
                                        {item.main?.temp}°
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
