import type { Metadata } from 'next';
import Weather from '@/compoments/weather/page';

export const metadata: Metadata = {
    title: '실시간 날씨 정보 - 전국 날씨 조회 서비스',
    description: '현재 위치와 전국 지역의 실시간 날씨 정보를 확인하세요. 현재 기온, 최고/최저 기온, 시간대별 날씨, 습도, 풍속 등 상세한 날씨 정보를 제공합니다.',
};

export default async function Home() {
    return (
        <div>
            <Weather />
        </div>
    );
}
