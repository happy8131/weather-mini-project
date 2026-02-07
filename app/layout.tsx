import type { Metadata } from 'next';
import Script from 'next/script';
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
    // Google Search Console 사이트 소유권 확인
    verification: {
        google: 'Z5SGOJdFcxHqAwC7_mM_qw7GRxRdfQmGytnI5IAcmpg',
    },
    // Google AdSense 계정 확인용 메타 태그
    // 네이버 서치어드바이저 사이트 소유권 확인
    other: {
        'google-adsense-account': 'ca-pub-7246383169537696',
        'naver-site-verification': '335dfb074090473e2bbefe6d946579d61fe695bc',
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
                {/* Google tag (gtag.js) - 공식 스니펫 */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-8WMPR3K71L"
                    strategy="afterInteractive"
                />
                <Script id="gtag-config" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-8WMPR3K71L');
                    `}
                </Script>
                <Providers>
                    <FavoritesProvider>
                        <div className="flex min-h-screen flex-col">
                            <main className="flex-1">{children}</main>
                            <Footer />
                        </div>
                    </FavoritesProvider>
                </Providers>
            </body>
        </html>
    );
}
