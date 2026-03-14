import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '계절별 건강 관리: 봄·여름·가을·겨울 맞춤 생활법 - 날씨 블로그',
    description: '각 계절의 특성에 맞는 건강 관리법과 주의사항을 정리했습니다.',
};

export default function SeasonalHealthPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <time className="text-xs text-blue-500 font-medium">2026-02-05</time>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">계절별 건강 관리: 봄·여름·가을·겨울 맞춤 생활법</h1>

                <p className="text-gray-700 leading-relaxed mb-4">
                    한국은 사계절이 뚜렷한 만큼, 계절마다 건강 관리 방법도 달라져야 합니다.
                    각 계절에 흔히 발생하는 건강 문제와 그에 맞는 예방·대처법을 구체적으로 정리했습니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">봄 (3~5월): 알레르기와의 전쟁</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    봄은 꽃가루와 황사, 미세먼지가 동시에 찾아오는 계절입니다.
                    알레르기성 비염과 결막염 환자가 급증하며, 아토피 피부염도 악화되기 쉽습니다.
                    일교차가 10°C 이상 벌어지는 날이 많아 감기에 걸리기도 쉽습니다.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 미세먼지 농도가 높은 날은 외출을 줄이고, KF94 마스크를 착용하세요</li>
                        <li>• 외출 후 옷을 털고, 손·얼굴을 깨끗이 씻으세요</li>
                        <li>• 아침에 얇은 겉옷을 꼭 챙기세요 (일교차 대비)</li>
                        <li>• 빨래는 실내에서 건조하고, 창문은 미세먼지가 적은 시간에 환기하세요</li>
                    </ul>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">여름 (6~8월): 더위와 습도 관리</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    여름은 고온 다습한 환경 때문에 열사병, 식중독, 냉방병이 주요 건강 위험입니다.
                    실외 활동 시 열사병에 걸릴 수 있고, 실내에서는 에어컨으로 인한 냉방병에 주의해야 합니다.
                    장마철에는 식중독 위험이 크게 높아지므로 음식 위생에 특히 신경 쓰세요.
                </p>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 한 시간에 한 컵 이상 물을 마시세요 (하루 2L 이상 권장)</li>
                        <li>• 오전 11시~오후 3시 야외 활동을 자제하세요</li>
                        <li>• 에어컨 온도는 실외 온도보다 5~7°C 낮게 설정하세요</li>
                        <li>• 음식은 조리 후 2시간 내에 냉장 보관하세요</li>
                        <li>• 자외선 차단제(SPF 50 이상)를 2시간마다 덧발라 주세요</li>
                    </ul>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">가을 (9~11월): 건조함과 일교차</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    가을은 습도가 급격히 낮아지면서 피부 건조, 호흡기 질환이 증가하는 시기입니다.
                    또한 일교차가 커지면서 심혈관 질환 위험도 높아집니다.
                    특히 아침 운동을 하는 중장년층은 갑작스러운 기온 변화에 주의가 필요합니다.
                </p>
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 보습제를 수시로 발라 피부 건조를 예방하세요</li>
                        <li>• 물을 충분히 마시고, 따뜻한 차를 즐기세요</li>
                        <li>• 아침 운동 전 가벼운 준비운동으로 몸을 풀어주세요</li>
                        <li>• 독감 예방접종을 10~11월 사이에 맞으세요</li>
                    </ul>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">겨울 (12~2월): 한파와 면역력</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    겨울은 낮은 기온과 건조한 공기로 인해 면역력이 떨어지기 가장 쉬운 계절입니다.
                    감기, 독감, 노로바이러스 등이 유행하고, 빙판길 낙상 사고도 빈번합니다.
                    난방 사용으로 실내 공기가 매우 건조해지면서 호흡기 건강이 더욱 중요해집니다.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <ul className="text-gray-700 text-sm space-y-1">
                        <li>• 실내 습도를 40~60%로 유지하세요 (가습기 활용)</li>
                        <li>• 외출 시 모자, 장갑, 목도리로 체온을 보호하세요</li>
                        <li>• 빙판길에서는 보폭을 줄이고, 주머니에서 손을 빼세요</li>
                        <li>• 비타민 D 부족에 주의하고, 충분한 수면을 취하세요</li>
                        <li>• 손 씻기를 철저히 해서 감염병을 예방하세요</li>
                    </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
                    <Link href="/blog" className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">목록으로</Link>
                    <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">날씨 확인하기</Link>
                </div>
            </div>
        </div>
    );
}
