import { NextRequest, NextResponse } from 'next/server';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const HOUR_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const KAKAO_URL = 'https://dapi.kakao.com/v2/local/search/address.json';
interface Params {
    action: string;
}

interface RouteParams {
    params: Params;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
    const paramObj = await params;
    const { action } = paramObj;
    const { searchParams } = new URL(request.url);
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');

    const address = searchParams.get('query');

    if (action === 'current') {
        //현재 url

        const url = `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.DATA_WEATHER_KEY}&units=metric&lang=kr`;

        const res = await fetch(url, { cache: 'no-store' });
        const data = await res.json();

        return NextResponse.json(data);
    } else if (action === 'hour') {
        //시간대 별 url
        const url = `${HOUR_URL}?lat=${lat}&lon=${lon}&appid=${process.env.DATA_WEATHER_KEY}&units=metric&lang=kr`;

        const res = await fetch(url, { cache: 'no-store' });
        const data = await res.json();

        return NextResponse.json(data?.list);
    } else if (action === 'search') {
        //검색 좌표 얻기
        const res = await fetch(
            `${KAKAO_URL}?query=${encodeURIComponent(address as string)}`,
            {
                headers: {
                    Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
                },
                cache: 'no-store',
            }
        );

        const text = await res.text();
        const result = JSON.parse(text);

        return NextResponse.json(result);
    }
}
