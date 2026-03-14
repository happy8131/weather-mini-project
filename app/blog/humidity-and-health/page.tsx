import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '습도가 건강에 미치는 영향과 관리 방법 - 날씨 블로그',
    description: '습도에 따라 피부, 호흡기, 수면 질이 달라집니다. 적정 습도를 유지하는 방법을 알아봅니다.',
};

export default function HumidityHealthPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <time className="text-xs text-blue-500 font-medium">2026-01-25</time>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">습도가 건강에 미치는 영향과 관리 방법</h1>

                <p className="text-gray-700 leading-relaxed mb-4">
                    날씨를 확인할 때 기온만 보는 분들이 많지만, 사실 습도는 우리 몸에 기온 못지않은 영향을 미칩니다.
                    같은 30°C라도 습도가 40%일 때와 80%일 때 체감하는 더위는 완전히 다릅니다.
                    이 글에서는 습도가 건강에 미치는 구체적인 영향과, 계절별로 습도를 관리하는 실용적인 방법을 소개합니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">적정 습도의 기준</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    세계보건기구(WHO)와 미국 환경보호국(EPA)에서 권장하는 실내 적정 습도는 40~60%입니다.
                    이 범위를 벗어나면 건강에 여러 문제가 생길 수 있습니다.
                    날씨 앱에서 현재 습도를 확인하고, 실내 습도를 적정 범위로 유지하는 습관을 들이면
                    생활의 질이 크게 달라집니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">습도가 너무 높을 때 (60% 이상)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    높은 습도는 땀 증발을 방해해 체온 조절이 어려워집니다. 여름철 무더위가 더 견디기 힘든 이유 중 하나입니다.
                    또한 곰팡이, 진드기, 세균이 번식하기 좋은 환경을 만들어 알레르기성 비염, 아토피, 천식 등을 악화시킬 수 있습니다.
                    식중독 위험도 높아지기 때문에 음식 보관에도 더 신경 써야 합니다.
                </p>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 text-sm"><strong>관리법:</strong> 제습기를 사용하거나, 에어컨의 제습 모드를 활용하세요. 욕실과 주방은 환기를 자주 시키고, 빨래를 실내에서 말리는 것은 피하는 것이 좋습니다. 옷장에는 제습제를 넣어두세요.</p>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">습도가 너무 낮을 때 (40% 이하)</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    건조한 공기는 피부 수분을 빼앗아 가려움, 각질, 주름을 유발합니다.
                    코와 목의 점막이 마르면 바이러스와 세균에 대한 방어력이 떨어져 감기, 독감, 코로나 등 호흡기 감염에 취약해집니다.
                    눈이 건조해지면서 안구건조증이 심해지고, 정전기도 자주 발생합니다.
                    겨울철 난방을 사용하면 실내 습도가 20%대까지 떨어지기도 합니다.
                </p>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 text-sm"><strong>관리법:</strong> 가습기를 사용하되, 세척을 자주 해서 세균 번식을 방지하세요. 빨래를 실내에 널어두거나, 넓은 그릇에 물을 받아두는 것도 효과적입니다. 물을 자주 마시고, 보습제를 수시로 발라 피부를 보호하세요.</p>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">수면과 습도의 관계</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    수면의 질은 습도에 크게 좌우됩니다. 습도가 너무 높으면 끈적거리는 느낌 때문에 잠들기 어렵고,
                    너무 낮으면 코와 목이 건조해져 코골이가 심해지거나 중간에 깨는 일이 잦아집니다.
                    침실의 습도를 45~55%로 유지하면 가장 쾌적하게 잠들 수 있다는 연구 결과가 있습니다.
                </p>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>팁:</strong> 날씨 서비스에서 현재 습도를 확인한 뒤, 실내 습도계와 비교해 보세요.
                        실외 습도가 높은 날에는 환기 대신 제습기를, 실외 습도가 낮은 날에는 가습기를 사용하는 게 효율적입니다.
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
