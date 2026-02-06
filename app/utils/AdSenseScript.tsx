'use client';

import { useEffect } from 'react';

const ADSENSE_CLIENT = 'ca-pub-7246383169537696';

/**
 * AdSense 스크립트를 일반 <script> 태그로 주입합니다.
 * Next.js Script 컴포넌트는 data-nscript 속성을 붙이는데,
 * AdSense가 이 속성을 지원하지 않아 경고가 발생하므로
 * 클라이언트에서 직접 주입하는 방식으로 처리합니다.
 */
export default function AdSenseScript() {
    useEffect(() => {
        if (document.querySelector(`script[src*="adsbygoogle.js?client=${ADSENSE_CLIENT}"]`)) {
            return;
        }
        const script = document.createElement('script');
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
        script.async = true;
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
    }, []);

    return null;
}
