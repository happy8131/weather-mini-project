import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '기온별 옷차림 가이드 - 날씨 블로그',
    description: '기온 구간별로 추천하는 옷차림을 정리했습니다. 아침마다 뭘 입어야 할지 고민될 때 참고하세요.',
};

export default function DailyOutfitPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <time className="text-xs text-blue-500 font-medium">2026-01-15</time>
                <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-6">기온별 옷차림 가이드: 매일 아침 뭘 입을지 고민될 때</h1>

                <p className="text-gray-700 leading-relaxed mb-4">
                    아침에 날씨 앱을 확인하고도 막상 옷장 앞에 서면 뭘 입어야 할지 고민되는 경우가 많습니다.
                    특히 봄·가을처럼 일교차가 큰 계절에는 아침과 낮의 기온 차이 때문에 옷차림을 정하기가 더 어렵습니다.
                    이 글에서는 기온 구간별로 적절한 옷차림을 정리해 두었으니, 날씨 앱에서 기온을 확인한 뒤 참고하시면 됩니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">28°C 이상: 한여름 더위</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    민소매, 반팔 티셔츠, 반바지, 린넨 소재의 가벼운 옷이 적합합니다.
                    통기성이 좋은 면이나 린넨 소재를 선택하면 땀이 나도 쾌적하게 지낼 수 있습니다.
                    자외선이 강한 시간대(오전 11시~오후 3시)에는 모자와 선글라스를 챙기는 것도 좋습니다.
                    냉방이 강한 실내에서는 얇은 카디건 하나를 가방에 넣어두면 유용합니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">23~27°C: 초여름·초가을의 쾌적한 날</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    반팔이나 얇은 긴팔 티셔츠에 면바지 또는 청바지를 매치하면 좋습니다.
                    이 기온대는 대부분의 사람들이 가장 쾌적하게 느끼는 구간이라,
                    두꺼운 겉옷 없이도 활동하기 편합니다.
                    다만 아침저녁에는 살짝 서늘해질 수 있으니 얇은 셔츠나 가디건을 걸칠 수 있게 준비해 두세요.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">17~22°C: 긴팔이 필요한 시기</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    긴팔 티셔츠, 맨투맨, 얇은 니트에 가벼운 겉옷(가디건, 얇은 재킷)을 걸치면 적당합니다.
                    이 구간은 일교차가 클 수 있어서, 낮에는 겉옷을 벗고 아침저녁에는 입는 식으로 조절하는 게 핵심입니다.
                    바람이 불면 체감 온도가 더 낮아질 수 있으니, 바람막이 소재의 겉옷도 좋은 선택입니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">12~16°C: 가을 감성, 코트의 계절</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    니트, 후드, 맨투맨 위에 트렌치코트나 가죽 재킷을 입으면 좋습니다.
                    스카프나 머플러를 가볍게 두르면 목 주위가 따뜻해져 체감 온도가 올라갑니다.
                    이 기온대에서는 히트텍 같은 얇은 내복을 안에 입으면 겉옷을 두껍게 안 입어도 따뜻하게 지낼 수 있습니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5~11°C: 본격적인 겨울 준비</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    두꺼운 니트, 기모 후드 위에 코트나 패딩을 입어야 합니다.
                    장갑, 목도리, 귀마개 등 방한 소품도 챙기세요.
                    바람이 강한 날에는 체감 온도가 영하까지 내려갈 수 있으니,
                    바람을 막아주는 소재의 외투를 선택하는 게 중요합니다.
                </p>

                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4°C 이하: 한파 대비</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    롱패딩이나 두꺼운 코트는 필수이고, 내복·기모 안감 옷을 겹쳐 입는 것이 효과적입니다.
                    손·발·귀·목 등 노출 부위를 최대한 감싸야 동상을 예방할 수 있습니다.
                    외출 시간을 최소화하고, 실내에서 충분히 몸을 녹인 뒤 다시 나가는 것을 권합니다.
                </p>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        <strong>팁:</strong> 우리 서비스의 "체감 온도"를 기준으로 옷차림을 정하면 더 정확합니다.
                        실제 기온이 15°C라도 바람이 강하면 체감 온도가 10°C대로 떨어질 수 있으니,
                        기온보다 체감 온도를 더 신뢰하시는 것을 추천합니다.
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
