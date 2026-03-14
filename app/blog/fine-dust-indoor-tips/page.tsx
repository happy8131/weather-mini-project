import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '미세먼지 나쁨일 때 실내에서 할 수 있는 것들 - 날씨 블로그',
    description: '미세먼지 농도가 높은 날, 실내에서 건강하게 보내는 방법과 공기 질 관리 팁을 안내합니다.',
};

export default function FineDustPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <time className="text-xs text-blue-500 font-medium">2026-02-15</time>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">미세먼지 나쁨일 때 실내에서 할 수 있는 것들</h1>

                <p className="text-gray-700 leading-relaxed mb-4">
                    봄철이면 어김없이 찾아오는 미세먼지. 농도가 "나쁨"이나 "매우 나쁨"인 날에는
                    야외 활동을 최소화하는 것이 건강을 지키는 가장 확실한 방법입니다.
                    그렇다면 집에만 있어야 할까요? 미세먼지가 심한 날에도 실내에서 생산적이고
                    건강하게 시간을 보내는 방법을 알아봅니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">실내 공기 질 관리가 먼저</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    바깥 공기가 나쁘다고 창문을 꼭 닫아두기만 하면 실내 이산화탄소 농도가 올라가면서
                    두통, 졸음, 집중력 저하가 생길 수 있습니다. 미세먼지가 비교적 적은 시간대
                    (보통 오전 10시 이전이나 비 온 직후)에 5~10분 정도 짧게 환기하고,
                    나머지 시간에는 공기청정기를 가동하는 것이 가장 효과적입니다.
                </p>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 text-sm"><strong>공기청정기 팁:</strong> 방문을 닫고 사용해야 효율이 높아집니다. 필터는 제조사 권장 주기보다 조금 더 자주 교체하면 성능을 유지할 수 있습니다. 없다면 젖은 수건을 방 안에 걸어두는 것만으로도 미세먼지 일부를 가라앉힐 수 있습니다.</p>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">실내에서 할 수 있는 운동</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    야외 운동을 못 한다고 운동을 포기할 필요는 없습니다.
                    요가, 필라테스, 홈트레이닝(맨몸 운동)은 공간이 좁아도 충분히 할 수 있습니다.
                    유튜브나 운동 앱을 활용하면 레벨별 루틴을 따라 할 수 있어 편리합니다.
                    운동 중에는 공기청정기를 최대로 가동해 실내 공기를 깨끗하게 유지하세요.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">호흡기 건강 지키기</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    미세먼지는 코와 목의 점막을 자극해 기침, 인후통, 비염을 유발합니다.
                    실내에서 가습기를 사용해 적정 습도(40~60%)를 유지하면 점막이 건조해지는 것을 방지할 수 있습니다.
                    따뜻한 물이나 허브차를 자주 마시면 목을 촉촉하게 유지하는 데 도움이 됩니다.
                    코 세척(생리식염수)을 하면 코 안에 남아있는 미세먼지를 씻어낼 수 있어 비염 완화에 효과적입니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">외출이 꼭 필요할 때</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    어쩔 수 없이 외출해야 한다면 KF94 이상의 마스크를 착용하세요.
                    콘택트렌즈 대신 안경을 쓰면 눈에 미세먼지가 닿는 것을 줄일 수 있습니다.
                    귀가 후에는 옷을 바로 세탁하고, 샤워로 머리카락과 피부의 미세먼지를 씻어내세요.
                    실내로 들어오면서 현관에서 옷을 털고, 신발은 밖에 두는 것도 좋은 습관입니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">공기 정화 식물 활용</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    산세베리아, 스파티필룸, 아레카야자 등 공기 정화 효과가 있는 식물을 실내에 두면
                    미세먼지 제거에 약간의 도움이 됩니다. NASA 연구에 따르면 이들 식물은 포름알데히드,
                    벤젠 같은 유해물질도 흡수합니다. 물론 공기청정기를 대체할 수는 없지만,
                    인테리어 효과와 함께 심리적 안정감도 줄 수 있어 추천합니다.
                </p>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>팁:</strong> 미세먼지 농도는 시간대별로 달라집니다.
                        시간대별 날씨 예보를 확인하면 미세먼지가 적은 시간에 환기나 짧은 외출을 계획할 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
                    <Link href="/blog" className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">목록으로</Link>
                    <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">날씨 확인하기</Link>
                </div>
            </div>
        </div>
    );
}
