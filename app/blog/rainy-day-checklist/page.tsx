import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '비 오는 날 외출 준비 체크리스트 - 날씨 블로그',
    description: '갑작스러운 비에 당황하지 않도록, 비 오는 날 꼭 챙겨야 할 준비물과 생활 팁을 정리했습니다.',
};

export default function RainyDayPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <time className="text-xs text-blue-500 font-medium">2026-01-20</time>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">비 오는 날 외출 준비 체크리스트</h1>

                <p className="text-gray-700 leading-relaxed mb-4">
                    한국의 날씨는 예고 없이 비가 내리는 경우가 잦습니다. 특히 여름철 장마나 가을 소나기는
                    출근길에 갑자기 내려 옷과 가방을 적시기 일쑤입니다. 비 오는 날을 미리 대비하면
                    젖은 옷 때문에 하루를 불쾌하게 보내는 일을 줄일 수 있습니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">필수 준비물</h2>
                <ul className="space-y-2 text-gray-700 ml-4 mb-4">
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span><span><strong>우산:</strong> 접이식 우산 하나를 항상 가방에 넣어 다니세요. 3단 자동 우산은 가볍고 빠르게 펼 수 있어 편리합니다.</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span><span><strong>방수 가방 커버:</strong> 노트북이나 서류가 든 가방에는 방수 커버를 씌우면 안심할 수 있습니다.</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span><span><strong>여분의 양말:</strong> 비에 젖은 양말은 발 냄새와 무좀의 원인이 됩니다. 사무실에 여분의 양말을 비치해두세요.</span></li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2">•</span><span><strong>방수 신발:</strong> 레인부츠까지는 아니더라도, 방수 기능이 있는 운동화나 스니커즈를 신으면 발이 젖는 것을 줄일 수 있습니다.</span></li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">옷차림 팁</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    비 오는 날에는 젖어도 눈에 덜 띄는 어두운 색 계열의 옷을 선택하는 것이 좋습니다.
                    흰색이나 밝은 색은 빗물에 젖으면 투명해지거나 얼룩이 잘 보이기 때문입니다.
                    또한 면 소재보다는 폴리에스터나 나일론처럼 빨리 마르는 소재가 적합합니다.
                    바람이 동반된 비가 내리면 체감 온도가 크게 떨어지므로, 방풍 기능이 있는 겉옷을 챙기세요.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">운전 시 주의사항</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    빗길에서는 제동 거리가 평소보다 1.5배 이상 늘어납니다. 차간 거리를 충분히 확보하고,
                    급브레이크를 피하세요. 수막 현상(하이드로플래닝)이 발생할 수 있는 웅덩이를 피해 주행하고,
                    와이퍼와 전조등을 작동시켜 시야를 확보하는 것이 중요합니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">귀가 후 관리</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    비에 젖은 옷과 신발은 바로 벗어서 통풍이 잘 되는 곳에 널어두세요.
                    젖은 우산은 펼쳐서 말려야 곰팡이가 생기지 않습니다.
                    빗물에 노출된 피부는 깨끗이 씻어주는 것이 좋습니다.
                    특히 여름철 산성비에 노출된 경우 두피와 얼굴을 꼼꼼히 세정하세요.
                </p>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>팁:</strong> 시간대별 날씨 예보를 확인하면 비가 언제 그칠지 예측할 수 있어,
                        외출 시간을 조절하는 데 큰 도움이 됩니다.
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
