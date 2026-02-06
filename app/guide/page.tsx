import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '사용 가이드 - 날씨 정보 서비스',
    description: '실시간 날씨 정보 서비스를 효과적으로 사용하는 방법을 알아보세요.',
};

export default function GuidePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">사용 가이드</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">시작하기</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        실시간 날씨 정보 서비스를 처음 사용하시는 분들을 위한 간단한 가이드입니다. 
                        이 가이드를 따라하시면 서비스의 모든 기능을 쉽게 활용하실 수 있습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. 현재 위치 날씨 확인하기</h2>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-gray-700 leading-relaxed mb-3">
                            서비스에 접속하면 자동으로 현재 위치의 날씨 정보가 표시됩니다. 
                            브라우저에서 위치 권한을 허용해주시면 GPS를 통해 정확한 위치를 파악하여 해당 지역의 날씨를 보여드립니다.
                        </p>
                        <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• 위치 권한 요청 시 "허용"을 선택해주세요</li>
                            <li>• 위치 정보는 서버에 저장되지 않으며, 날씨 조회 목적으로만 사용됩니다</li>
                            <li>• 위치 권한을 거부하셔도 검색 기능을 통해 날씨를 확인할 수 있습니다</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. 지역 검색하기</h2>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-gray-700 leading-relaxed mb-3">
                            상단의 검색창에 원하는 지역명을 입력하면 해당 지역의 날씨 정보를 확인할 수 있습니다.
                        </p>
                        <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• 도시명, 구/군명, 동/면/읍명 등 다양한 형식으로 검색 가능합니다</li>
                            <li>• 예: "서울", "강남구", "부산 해운대구" 등</li>
                            <li>• 검색 결과가 여러 개 나올 경우 원하는 지역을 선택하세요</li>
                            <li>• 검색한 지역의 날씨 정보가 즉시 화면에 표시됩니다</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. 날씨 정보 이해하기</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">현재 기온</h3>
                            <p className="text-gray-700 text-sm">
                                화면 중앙에 크게 표시되는 숫자는 현재 기온입니다. 섭씨(°C) 단위로 표시됩니다.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">체감 온도</h3>
                            <p className="text-gray-700 text-sm">
                                현재 기온 아래에 표시되는 "체감" 온도는 실제로 느껴지는 온도입니다. 
                                바람, 습도 등을 고려하여 계산됩니다.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">최고/최저 기온</h3>
                            <p className="text-gray-700 text-sm">
                                하늘색 박스에 표시되는 최저(파란색)와 최고(빨간색) 기온은 당일의 예상 최저 및 최고 기온입니다.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">습도</h3>
                            <p className="text-gray-700 text-sm">
                                공기 중 수증기의 양을 백분율로 나타낸 것입니다. 높을수록 습하고, 낮을수록 건조합니다.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">풍속</h3>
                            <p className="text-gray-700 text-sm">
                                바람의 속도를 초당 미터(m/s) 단위로 표시합니다. 1m/s는 약 3.6km/h에 해당합니다.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. 시간대별 날씨 확인하기</h2>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                        <p className="text-gray-700 leading-relaxed mb-3">
                            화면 하단에 표시되는 시간대별 날씨는 향후 8시간 동안의 날씨 변화를 보여줍니다.
                        </p>
                        <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• 각 시간대의 기온과 날씨 아이콘을 확인할 수 있습니다</li>
                            <li>• 가로로 스크롤하여 더 많은 시간대를 볼 수 있습니다</li>
                            <li>• 외출 계획을 세울 때 참고하시면 유용합니다</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. 즐겨찾기 사용하기</h2>
                    <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">즐겨찾기 추가</h3>
                            <p className="text-gray-700 text-sm mb-2">
                                날씨 화면 오른쪽 상단의 별 아이콘을 클릭하면 현재 지역이 즐겨찾기에 추가됩니다. 
                                별이 노란색으로 변하면 추가 완료입니다.
                            </p>
                            <p className="text-gray-600 text-xs">
                                최대 6개까지 즐겨찾기를 추가할 수 있습니다.
                            </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">즐겨찾기 보기</h3>
                            <p className="text-gray-700 text-sm">
                                왼쪽 상단의 하트 아이콘을 클릭하면 즐겨찾기 목록 페이지로 이동합니다. 
                                여기서 저장된 모든 지역의 날씨를 한눈에 확인할 수 있습니다.
                            </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">별칭 설정</h3>
                            <p className="text-gray-700 text-sm">
                                즐겨찾기 목록에서 각 지역의 별칭을 수정할 수 있습니다. 
                                "집", "회사", "여행지" 등 원하는 이름으로 변경하여 더 쉽게 관리하세요.
                            </p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">즐겨찾기 삭제</h3>
                            <p className="text-gray-700 text-sm">
                                즐겨찾기 목록에서 삭제 버튼을 클릭하거나, 날씨 화면에서 다시 별 아이콘을 클릭하면 
                                즐겨찾기에서 제거됩니다.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. 상세 페이지 보기</h2>
                    <p className="text-gray-700 leading-relaxed">
                        즐겨찾기 목록에서 지역 카드를 클릭하면 해당 지역의 상세 날씨 정보 페이지로 이동합니다. 
                        더 자세한 날씨 정보를 확인할 수 있습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">자주 묻는 질문 (FAQ)</h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold text-gray-800 mb-1">Q: 위치 정보가 정확하지 않아요</h3>
                            <p className="text-gray-700 text-sm">
                                A: GPS 정확도는 기기와 환경에 따라 다를 수 있습니다. 검색 기능을 사용하여 원하는 지역을 직접 선택하시면 더 정확한 정보를 얻을 수 있습니다.
                            </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold text-gray-800 mb-1">Q: 즐겨찾기가 저장되지 않아요</h3>
                            <p className="text-gray-700 text-sm">
                                A: 즐겨찾기는 브라우저의 로컬 스토리지에 저장됩니다. 브라우저 설정에서 쿠키 및 사이트 데이터가 차단되어 있지 않은지 확인해주세요.
                            </p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold text-gray-800 mb-1">Q: 날씨 정보는 얼마나 자주 업데이트되나요?</h3>
                            <p className="text-gray-700 text-sm">
                                A: 날씨 정보는 실시간으로 업데이트되며, 페이지를 새로고침하면 최신 정보를 확인할 수 있습니다.
                            </p>
                        </div>
                    </div>
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
