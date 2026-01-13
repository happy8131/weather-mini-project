export const WeatherFetcher = async (latitude: number, longitude: number) => {
    try {
        const res = await fetch(
            `/api/weather/current?lat=${latitude}&lon=${longitude}`
        );
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
};

export const HourWeatherFetcher = async (
    latitude: number,
    longitude: number
) => {
    try {
        const res = await fetch(
            `/api/weather/hour?lat=${latitude}&lon=${longitude}`
        );
        const result = await res.json();
        return result;
    } catch (err) {
        console.log(err);
    }
};
