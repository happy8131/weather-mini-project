export const WeatherFetcher = async (latitude: number, longitude: number) => {
    const res = await fetch(
        `/api/weather/current?lat=${latitude}&lon=${longitude}`
    );
    const result = await res.json();
    return result;
};

export const HourWeatherFetcher = async (
    latitude: number,
    longitude: number
) => {
    const res = await fetch(
        `/api/weather/hour?lat=${latitude}&lon=${longitude}`
    );
    const result = await res.json();
    return result;
};

export const SearchFetcher = async (keyword: string) => {
    try {
        console.log('2');
        const res = await fetch(`/api/weather/search?query=${keyword}`);
        const result = await res.json();
        if (result.documents.length) {
            WeatherFetcher(result.documents[0].y, result.documents[0].x);
            // const resCurr = await fetch(
            //     `/api/weather/current?lat=${result.documents[0].y}&lon=${result.documents[0].x}`
            // );
            HourWeatherFetcher(result.documents[0].y, result.documents[0].x);
            // const resHour = await fetch(
            //     `/api/weather/hour?lat=${result.documents[0].y}&lon=${result.documents[0].x}`
            // );
            // const resultCurr = await resCurr.json();
            // const resultHour = await resHour.json();
        } else {
            alert('해당 장소의 정보가 제공되지 않습니다.');
        }
    } catch (err) {
        console.log(err);
    }
};
