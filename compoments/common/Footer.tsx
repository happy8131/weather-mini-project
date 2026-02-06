'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div>
                        <h3 className="font-semibold mb-3">서비스</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/" className="hover:text-blue-300 transition-colors">
                                    홈
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-blue-300 transition-colors">
                                    서비스 소개
                                </Link>
                            </li>
                            <li>
                                <Link href="/guide" className="hover:text-blue-300 transition-colors">
                                    사용 가이드
                                </Link>
                            </li>
                            <li>
                                <Link href="/tips" className="hover:text-blue-300 transition-colors">
                                    날씨 팁
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">법적 고지</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-blue-300 transition-colors">
                                    개인정보처리방침
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-blue-300 transition-colors">
                                    이용약관
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">정보</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>날씨 데이터: OpenWeatherMap</li>
                            <li>지역 검색: 카카오 로컬 API</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-3">연락처</h3>
                        <p className="text-sm text-gray-300">
                            서비스 관련 문의사항이 있으시면<br />
                            개인정보처리방침 페이지를 통해<br />
                            연락주시기 바랍니다.
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} 실시간 날씨 정보 서비스. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
