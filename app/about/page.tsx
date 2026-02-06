import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '서비스 소개 - 실시간 날씨 정보',
    description: '실시간 날씨 정보 서비스에 대해 알아보세요. 전국 지역의 정확한 날씨 정보를 제공하는 서비스입니다.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">서비스 소개</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">실시간 날씨 정보 서비스</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        저희 서비스는 전국 어디서나 정확하고 실시간으로 날씨 정보를 확인할 수 있도록 도와드립니다. 
                        OpenWeatherMap API와 카카오 로컬 API를 활용하여 신뢰할 수 있는 날씨 데이터를 제공하며, 
                        사용자 친화적인 인터페이스로 쉽고 빠르게 필요한 정보를 확인할 수 있습니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        현재 위치 기반 날씨 조회부터 전국 주요 도시의 날씨 검색까지, 
                        다양한 방법으로 날씨 정보에 접근할 수 있습니다. 또한 즐겨찾기 기능을 통해 
                        자주 확인하는 지역의 날씨를 빠르게 조회할 수 있어 일상생활에 유용합니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">주요 기능</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>현재 위치 기반 날씨 조회:</strong> GPS를 활용한 자동 위치 인식으로 현재 위치의 날씨를 즉시 확인할 수 있습니다.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>지역 검색 기능:</strong> 키워드 검색을 통해 전국 어느 지역의 날씨든 쉽게 찾아볼 수 있습니다.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>상세 날씨 정보:</strong> 현재 기온, 체감 온도, 최고/최저 기온, 습도, 풍속 등 다양한 날씨 정보를 제공합니다.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>시간대별 날씨 예보:</strong> 향후 8시간 동안의 시간대별 날씨 변화를 확인할 수 있습니다.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>즐겨찾기 기능:</strong> 자주 확인하는 지역을 즐겨찾기로 저장하여 빠르게 접근할 수 있습니다. 최대 6개까지 저장 가능합니다.</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span><strong>별칭 설정:</strong> 즐겨찾기한 지역에 사용자 정의 별칭을 설정하여 더욱 편리하게 관리할 수 있습니다.</span>
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">사용 기술</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        본 서비스는 최신 웹 기술을 활용하여 개발되었습니다:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li>• <strong>React & Next.js:</strong> 빠르고 반응형인 사용자 인터페이스</li>
                        <li>• <strong>TypeScript:</strong> 타입 안정성을 통한 안정적인 코드</li>
                        <li>• <strong>TanStack Query:</strong> 효율적인 데이터 페칭 및 캐싱</li>
                        <li>• <strong>Tailwind CSS:</strong> 현대적이고 반응형인 디자인</li>
                        <li>• <strong>OpenWeatherMap API:</strong> 정확한 날씨 데이터 제공</li>
                        <li>• <strong>카카오 로컬 API:</strong> 지역 검색 및 좌표 변환</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">문의 및 피드백</h2>
                    <p className="text-gray-700 leading-relaxed">
                        서비스 이용 중 불편사항이나 개선 의견이 있으시면 언제든지 연락주시기 바랍니다. 
                        사용자 여러분의 소중한 의견을 바탕으로 더 나은 서비스를 제공하도록 노력하겠습니다.
                    </p>
                </section>

                <div className="mt-8 pt-6 border-t border-gray-200">
                    <a 
                        href="/" 
                        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        홈으로 돌아가기
                    </a>
                </div>
            </div>
        </div>
    );
}
