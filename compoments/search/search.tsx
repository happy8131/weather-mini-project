'use client';

import { useState } from 'react';
import { CurrentWeahter, HourWeahter } from '../page';
import districts from '@/data/korea_districts.json';
import { useQuery } from '@tanstack/react-query';
import { HourWeatherFetcher, WeatherFetcher } from '@/lib/weatherUntil';
interface PagenationBtnType {
    //  slideIndex: number;
    // setCurrWeather: React.Dispatch<React.SetStateAction<CurrentWeahter | null>>;
    //  setHourWeather: React.Dispatch<React.SetStateAction<HourWeahter[] | null>>;
    setCoord: React.Dispatch<
        React.SetStateAction<{ lat: number; lon: number } | null>
    >;
}

export default function WeatherSearch({ setCoord }: PagenationBtnType) {
    const [results, setResults] = useState<string[]>([]);
    const [keyword, setKeyword] = useState('');
    // const [searchCoord, setSearchCoord] = useState<{
    //     lat: number;
    //     lon: number;
    // } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setKeyword(value);

        if (!value) {
            setResults([]);
            return;
        }

        const filtered = districts
            .filter((item) => item.includes(value))
            .slice(0, 10);

        setResults(filtered);
    };

    const handleClickSearchButton = async (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        e.stopPropagation();
        try {
            const res = await fetch(`/api/weather/search?query=${keyword}`);
            const result = await res.json();
            if (result.documents.length) {
                // const resCurr = await fetch(
                //     `/api/weather/current?lat=${result.documents[0].y}&lon=${result.documents[0].x}`
                // );
                // const resHour = await fetch(
                //     `/api/weather/hour?lat=${result.documents[0].y}&lon=${result.documents[0].x}`
                // );
                // const resultCurr = await resCurr.json();
                // const resultHour = await resHour.json();
                const { y, x } = result.documents[0]; // y=lat, x=lon

                setCoord({
                    lat: Number(y),
                    lon: Number(x),
                });

                //    setCurrWeather(resultCurr);
                //    setHourWeather(resultHour);
            } else {
                alert('해당 장소의 정보가 제공되지 않습니다.');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="relative mb-6">
            <div className="flex items-center gap-2">
                <input
                    value={keyword}
                    onChange={handleChange}
                    type="text"
                    placeholder="지역 검색 (예: 수원, 서울)"
                    className="flex-1 rounded-xl border border-gray-200 bg-white/70 px-4 py-2 text-sm outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-200"
                />
                <button
                    type="button"
                    onClick={handleClickSearchButton}
                    className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 transition"
                >
                    검색
                </button>
            </div>

            {/* 검색 리스트 */}
            {results.length > 0 && (
                <ul className="absolute z-20 mt-2 w-full rounded-xl bg-white shadow-lg overflow-hidden">
                    {results.map((item) => (
                        <li
                            key={item}
                            onClick={() => {
                                setKeyword(item);
                                setResults([]);
                            }}
                            className="cursor-pointer px-4 py-2 text-sm hover:bg-sky-100"
                        >
                            {item.replaceAll('-', ' ')}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
