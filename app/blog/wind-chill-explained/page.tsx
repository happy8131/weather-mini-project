import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '체감 온도란? 바람이 부는 날 더 춥게 느껴지는 이유 - 날씨 블로그',
    description: '실제 기온과 체감 온도가 다른 이유, 체감 온도 계산 원리와 대처법을 설명합니다.',
};

export default function WindChillPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <time className="text-xs text-blue-500 font-medium">2026-02-01</time>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">체감 온도란? 바람이 부는 날 더 춥게 느껴지는 이유</h1>

                <p className="text-gray-700 leading-relaxed mb-4">
                    겨울에 날씨 앱을 보면 기온은 영상 2°C인데 체감 온도는 영하 5°C로 표시되는 경우가 있습니다.
                    이 차이가 바로 "체감 온도"입니다. 체감 온도는 실제 우리 몸이 느끼는 추위나 더위를
                    숫자로 표현한 것으로, 외출 시 옷차림과 건강 관리에 매우 중요한 지표입니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">체감 온도의 원리</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    우리 몸은 피부 표면에 얇은 공기층을 형성해 체온을 유지합니다. 바람이 불면 이 공기층이 날아가면서
                    체온이 더 빠르게 빼앗깁니다. 바람이 강할수록 체온 손실이 커지기 때문에 같은 기온이라도
                    바람이 부는 날이 훨씬 춥게 느껴지는 것입니다. 이것을 "풍속 냉각 효과(Wind Chill)"라고 합니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">여름의 체감 온도는 다르다</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    여름에는 습도가 체감 온도에 큰 영향을 미칩니다. 기온이 32°C이고 습도가 80%이면
                    체감 온도가 40°C 이상으로 올라갈 수 있습니다. 습도가 높으면 땀이 증발하지 못해
                    체온 조절이 안 되기 때문입니다. 이 상태를 "열 지수(Heat Index)"라고 부릅니다.
                    여름에는 기온보다 열 지수를 확인하는 것이 열사병 예방에 중요합니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">체감 온도별 위험도</h2>
                <div className="space-y-3 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-gray-700 text-sm"><strong>-10°C 이하:</strong> 노출된 피부에 10분 내 동상 위험. 외출을 최소화하고, 나갈 때는 모든 피부를 감싸야 합니다.</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-gray-700 text-sm"><strong>-10~0°C:</strong> 장시간 외출 시 동상 주의. 장갑, 목도리, 귀마개 필수.</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-gray-700 text-sm"><strong>0~10°C:</strong> 두꺼운 겉옷이 필요. 바람이 강하면 체감이 영하까지 내려갈 수 있음.</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-gray-700 text-sm"><strong>체감 35°C 이상:</strong> 열사병, 열경련 위험. 야외 활동을 피하고 충분한 수분을 섭취하세요.</p>
                    </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">생활 속 활용법</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    옷차림을 정할 때 실제 기온이 아닌 체감 온도를 기준으로 정하면 훨씬 정확합니다.
                    예를 들어 기온이 5°C이고 풍속이 10m/s이면 체감 온도는 약 -1°C까지 떨어집니다.
                    이 경우 5°C에 맞는 옷이 아니라 영하에 맞는 옷차림이 필요한 것입니다.
                    우리 서비스에서는 현재 기온 바로 아래에 체감 온도를 표시하고 있으니,
                    외출 전에 체감 온도를 먼저 확인하는 습관을 길러보세요.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
                    <Link href="/blog" className="inline-block px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">목록으로</Link>
                    <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">날씨 확인하기</Link>
                </div>
            </div>
        </div>
    );
}
