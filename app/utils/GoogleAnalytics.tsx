'use client';

import { useEffect } from 'react';

const GA_MEASUREMENT_ID = 'G-8WMPR3K71L';

/**
 * Google Analytics 4 (GA4) 스크립트를 로드하고 측정 ID로 초기화합니다.
 * 모든 페이지 뷰가 자동으로 수집됩니다.
 */
export default function GoogleAnalytics() {
    useEffect(() => {
        if (!GA_MEASUREMENT_ID) return;
        if (document.querySelector(`script[data-ga-id="${GA_MEASUREMENT_ID}"]`)) return;

        // 1. dataLayer·gtag 정의 및 config 호출 (gtag.js 로드 전에 넣어야 함)
        (window as unknown as { dataLayer: unknown[] }).dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer || [];
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag = function () {
            (window as unknown as { dataLayer: unknown[] }).dataLayer.push(arguments);
        };
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('js', new Date());
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('config', GA_MEASUREMENT_ID, { send_page_view: true });

        // 2. gtag.js 로드
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.async = true;
        script.setAttribute('data-ga-id', GA_MEASUREMENT_ID);
        document.head.appendChild(script);
    }, []);

    return null;
}
