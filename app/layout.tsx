import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Providers from './utils/providers';
import { FavoritesProvider } from './utils/favoritesProvider';
import AdSenseScript from './utils/AdSenseScript';
import Footer from '@/compoments/common/Footer';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '실시간 날씨 정보 - 전국 날씨 조회 서비스',
    description: '현재 위치와 전국 지역의 실시간 날씨 정보를 확인하세요. 현재 기온, 최고/최저 기온, 시간대별 날씨, 습도, 풍속 등 상세한 날씨 정보를 제공합니다.',
    keywords: ['날씨', '기상', '날씨 정보', '실시간 날씨', '전국 날씨', '기온', '날씨 예보', 'weather'],
    authors: [{ name: 'Weather Project' }],
    openGraph: {
        title: '실시간 날씨 정보 - 전국 날씨 조회 서비스',
        description: '현재 위치와 전국 지역의 실시간 날씨 정보를 확인하세요.',
        type: 'website',
    },
    // Google AdSense 계정 확인용 메타 태그
    other: {
        'google-adsense-account': 'ca-pub-7246383169537696',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" suppressHydrationWarning>
            <body
                suppressHydrationWarning
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {/* Google AdSense - data-nscript 미지원으로 일반 script 주입 사용 */}
                <AdSenseScript />
                <Providers>
                    <FavoritesProvider>
                        {children}
                        <Footer />
                    </FavoritesProvider>
                </Providers>
            </body>
        </html>
    );
}
