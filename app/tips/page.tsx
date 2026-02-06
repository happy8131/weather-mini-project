import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '날씨 정보 및 생활 팁 - 날씨 정보 서비스',
    description: '날씨 정보를 활용한 실용적인 생활 팁과 날씨 관련 유용한 정보를 확인하세요.',
};

export default function TipsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">날씨 정보 및 생활 팁</h1>
                
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">날씨 정보 이해하기</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        날씨 정보를 제대로 이해하면 일상생활에서 큰 도움이 됩니다. 
                        각 항목이 의미하는 바를 알고 활용하시면 더욱 효과적으로 날씨 정보를 활용하실 수 있습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. 기온 정보 활용하기</h2>
                    <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">현재 기온</h3>
                            <p className="text-gray-700 text-sm mb-2">
                                현재 기온은 실외에서 측정된 실제 공기 온도입니다. 이 정보를 바탕으로 옷차림을 결정하세요.
                            </p>
                            <ul className="text-gray-700 text-sm ml-4 space-y-1">
                                <li>• 25°C 이상: 얇은 옷, 반팔, 반바지 추천</li>
                                <li>• 20-25°C: 긴팔 티셔츠, 얇은 겉옷</li>
                                <li>• 15-20°C: 가벼운 겉옷, 가디건</li>
                                <li>• 10-15°C: 얇은 코트, 재킷</li>
                                <li>• 5-10°C: 두꺼운 코트, 패딩</li>
                                <li>• 5°C 이하: 두꺼운 패딩, 목도리, 장갑</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">체감 온도</h3>
                            <p className="text-gray-700 text-sm">
                                체감 온도는 실제 기온과 바람, 습도 등을 고려하여 계산된 온도입니다. 
                                바람이 강하거나 습도가 높으면 체감 온도가 실제 기온과 다를 수 있습니다. 
                                외출 시 체감 온도를 참고하시면 더 정확한 옷차림을 할 수 있습니다.
                            </p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">최고/최저 기온</h3>
                            <p className="text-gray-700 text-sm">
                                하루 중 가장 높은 기온과 가장 낮은 기온을 확인하여 하루 종일 적절한 옷차림을 준비하세요. 
                                일교차가 클 경우 겉옷을 준비하거나 여러 겹의 옷을 입는 것이 좋습니다.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. 습도 정보 활용하기</h2>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed mb-3">
                            습도는 공기 중 수증기의 양을 나타냅니다. 습도에 따라 체감 온도와 건강 상태가 달라질 수 있습니다.
                        </p>
                        <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• <strong>습도 40-60%:</strong> 가장 쾌적한 상태입니다. 실내 공기 관리에 좋은 수준입니다.</li>
                            <li>• <strong>습도 60% 이상:</strong> 습하고 답답하게 느껴질 수 있습니다. 통풍을 잘 시키고 제습기를 사용하세요.</li>
                            <li>• <strong>습도 40% 이하:</strong> 건조한 상태입니다. 가습기를 사용하거나 물을 자주 마시는 것이 좋습니다.</li>
                            <li>• <strong>여름 고습도:</strong> 땀이 잘 마르지 않아 더 덥게 느껴집니다. 시원한 곳에서 휴식을 취하세요.</li>
                            <li>• <strong>겨울 저습도:</strong> 피부가 건조해지고 호흡기 건강에 영향을 줄 수 있습니다. 가습 관리가 필요합니다.</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. 풍속 정보 활용하기</h2>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed mb-3">
                            풍속은 바람의 강도를 나타냅니다. 풍속에 따라 외출 계획을 세우고 안전에 주의하세요.
                        </p>
                        <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• <strong>0-5 m/s:</strong> 약한 바람입니다. 외출에 문제없습니다.</li>
                            <li>• <strong>5-10 m/s:</strong> 보통 바람입니다. 우산 사용 시 주의가 필요합니다.</li>
                            <li>• <strong>10-15 m/s:</strong> 강한 바람입니다. 외출 시 주의하세요. 우산이 뒤집힐 수 있습니다.</li>
                            <li>• <strong>15 m/s 이상:</strong> 매우 강한 바람입니다. 불필요한 외출을 피하고 안전에 주의하세요.</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. 시간대별 날씨 활용하기</h2>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                        <p className="text-gray-700 leading-relaxed mb-3">
                            시간대별 날씨 예보를 활용하면 하루 일정을 효율적으로 계획할 수 있습니다.
                        </p>
                        <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• <strong>외출 시간 선택:</strong> 비가 오지 않는 시간대를 선택하여 외출하세요.</li>
                            <li>• <strong>운동 계획:</strong> 기온이 적당하고 날씨가 좋은 시간대에 운동을 계획하세요.</li>
                            <li>• <strong>세탁 계획:</strong> 비가 오지 않고 바람이 부는 시간대에 빨래를 널면 빨리 마릅니다.</li>
                            <li>• <strong>야외 활동:</strong> 시간대별 기온 변화를 확인하여 적절한 옷차림을 준비하세요.</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. 계절별 날씨 대응 팁</h2>
                    <div className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">봄 (3-5월)</h3>
                            <ul className="text-gray-700 text-sm ml-4 space-y-1">
                                <li>• 일교차가 크므로 겉옷을 준비하세요</li>
                                <li>• 미세먼지와 꽃가루에 주의하세요</li>
                                <li>• 갑작스러운 비에 대비해 우산을 챙기세요</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">여름 (6-8월)</h3>
                            <ul className="text-gray-700 text-sm ml-4 space-y-1">
                                <li>• 높은 기온과 습도에 주의하세요</li>
                                <li>• 자외선 차단제와 모자를 준비하세요</li>
                                <li>• 충분한 수분 섭취가 필요합니다</li>
                                <li>• 집중 호우에 대비하세요</li>
                            </ul>
                        </div>
                        <div className="bg-amber-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">가을 (9-11월)</h3>
                            <ul className="text-gray-700 text-sm ml-4 space-y-1">
                                <li>• 일교차가 크므로 옷차림에 주의하세요</li>
                                <li>• 건조한 날씨에 피부 관리가 필요합니다</li>
                                <li>• 단풍 구경을 위한 날씨 확인이 유용합니다</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">겨울 (12-2월)</h3>
                            <ul className="text-gray-700 text-sm ml-4 space-y-1">
                                <li>• 낮은 기온에 대비한 따뜻한 옷차림이 필요합니다</li>
                                <li>• 건조한 실내 공기 관리가 중요합니다</li>
                                <li>• 빙판길에 주의하세요</li>
                                <li>• 난방비 절약을 위해 실내 온도 관리를 하세요</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. 건강 관리 팁</h2>
                    <div className="bg-pink-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                            <li>• <strong>일교차가 큰 날:</strong> 감기 예방을 위해 옷을 여러 겹 입고, 필요시 벗을 수 있도록 준비하세요.</li>
                            <li>• <strong>고온 다습한 날:</strong> 열사병 예방을 위해 그늘에서 휴식을 취하고 충분한 수분을 섭취하세요.</li>
                            <li>• <strong>저온 건조한 날:</strong> 피부 보호와 호흡기 건강을 위해 가습기를 사용하고 보습제를 바르세요.</li>
                            <li>• <strong>미세먼지가 많은 날:</strong> 외출을 최소화하고 마스크를 착용하세요.</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. 실용적인 활용 예시</h2>
                    <div className="space-y-3 text-gray-700">
                        <div className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span><strong>등교/출근 전:</strong> 오늘의 최고/최저 기온을 확인하여 적절한 옷차림을 선택하세요.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span><strong>야외 활동 계획:</strong> 시간대별 날씨를 확인하여 비가 오지 않는 시간에 활동을 계획하세요.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span><strong>세탁 계획:</strong> 비 예보와 풍속을 확인하여 빨래를 널 시간을 결정하세요.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span><strong>여행 준비:</strong> 목적지의 날씨를 미리 확인하여 필요한 준비물을 챙기세요.</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-blue-600 mr-2 font-bold">✓</span>
                            <span><strong>운동 계획:</strong> 체감 온도와 풍속을 고려하여 실내/실외 운동을 결정하세요.</span>
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
