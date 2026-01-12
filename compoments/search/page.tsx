import { useRouter } from 'next/navigation';

export default function WeatherSearch(
    setCurrWeather: any,
    setHourWeather: any
) {
    const router = useRouter();
    const handleClickSearchButton = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        e.preventDefault();
        e.stopPropagation();

        router.push('/');
    };
    return (
        <div className="flex items-center gap-2 mb-6">
            <input
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
    );
}
