import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '날씨에 따른 운동 가이드 - 날씨 블로그',
    description: '기온·습도·풍속에 따라 적합한 운동 종류와 시간대를 추천합니다.',
};

export default function WeatherExercisePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <time className="text-xs text-blue-500 font-medium">2026-02-10</time>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">날씨에 따른 운동 가이드: 언제 어떤 운동이 좋을까?</h1>

                <p className="text-gray-700 leading-relaxed mb-4">
                    운동의 효과를 극대화하고 부상을 방지하려면 날씨 조건을 고려하는 것이 중요합니다.
                    같은 달리기라도 한여름 낮에 하는 것과 선선한 아침에 하는 것은 몸에 미치는 영향이 전혀 다릅니다.
                    기온, 습도, 풍속에 따라 적합한 운동 종류와 시간대를 알아보겠습니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">기온별 추천 운동</h2>
                <div className="space-y-3 mb-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">30°C 이상: 실내 운동 권장</h3>
                        <p className="text-gray-700 text-sm">수영, 실내 헬스, 요가, 필라테스가 적합합니다. 야외 운동은 이른 아침(6~7시)이나 해가 진 뒤(7시 이후)에만 하세요. 운동 중 15~20분마다 물을 마시고, 어지러움이나 두통이 오면 즉시 중단하세요.</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">20~29°C: 야외 운동 최적 조건</h3>
                        <p className="text-gray-700 text-sm">조깅, 자전거, 등산, 배드민턴 등 대부분의 야외 운동이 적합합니다. 자외선이 강한 시간대는 피하되, 아침이나 오후 늦게 야외 활동을 즐기세요.</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">10~19°C: 유산소 운동의 황금 온도</h3>
                        <p className="text-gray-700 text-sm">마라톤, 장거리 달리기, 하이킹에 가장 좋은 기온대입니다. 체온 조절이 잘 되어 오래 운동해도 부담이 적습니다. 준비운동을 충분히 한 뒤 시작하세요.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">0~9°C: 보온에 신경 쓰며 운동</h3>
                        <p className="text-gray-700 text-sm">여러 겹의 옷을 입고 시작한 뒤, 체온이 오르면 한 겹씩 벗는 방식이 좋습니다. 근육이 차가우면 부상 위험이 커지므로, 실내에서 10분 이상 준비운동을 하세요.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 text-sm mb-1">0°C 이하: 실내 운동 위주</h3>
                        <p className="text-gray-700 text-sm">야외 운동 시 동상, 저체온증 위험이 있습니다. 실내 헬스, 수영, 실내 클라이밍이 안전합니다. 야외가 필요하다면 방풍·보온이 되는 전문 운동복을 착용하세요.</p>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">습도와 운동</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    습도 70% 이상에서 격렬한 운동은 탈수와 열사병 위험을 높입니다.
                    땀이 증발하지 못해 체온이 계속 올라가기 때문입니다.
                    고습도 환경에서는 운동 강도를 낮추고, 평소보다 물을 1.5배 이상 섭취하세요.
                    반대로 습도 30% 이하의 건조한 날에는 호흡기가 쉽게 건조해지므로,
                    코로 숨 쉬는 것을 의식하고 운동 전후로 물을 충분히 마시세요.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">풍속과 운동</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    바람이 5m/s 이하인 날은 대부분의 야외 운동이 편하게 가능합니다.
                    10m/s 이상이면 자전거 타기, 배드민턴 같은 바람에 영향받는 운동은 피하는 게 좋습니다.
                    겨울에 바람이 강한 날 운동할 때는 바람을 등지고 출발해서, 돌아올 때 바람을 맞는 코스를 짜면
                    체온이 올라간 상태에서 찬 바람을 맞으므로 저체온증 위험이 줄어듭니다.
                </p>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>팁:</strong> 시간대별 날씨 예보에서 기온·풍속이 가장 적절한 시간을 찾아 운동 시간을 정하면
                        더 효과적이고 안전하게 운동할 수 있습니다.
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
