import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '날씨 블로그 - 날씨 정보와 생활 이야기',
    description: '날씨와 관련된 다양한 생활 정보, 계절별 팁, 건강 관리법 등 유용한 글을 확인하세요.',
};

const posts = [
    { slug: 'daily-outfit-by-temperature', title: '기온별 옷차림 가이드: 매일 아침 뭘 입을지 고민될 때', date: '2026-01-15', summary: '기온 구간별로 추천하는 옷차림을 정리했습니다. 아침마다 날씨 앱을 보고도 뭘 입어야 할지 모르겠다면 이 글을 참고하세요.' },
    { slug: 'rainy-day-checklist', title: '비 오는 날 외출 준비 체크리스트', date: '2026-01-20', summary: '갑작스러운 비에 당황하지 않도록, 비 오는 날 꼭 챙겨야 할 준비물과 생활 팁을 정리했습니다.' },
    { slug: 'humidity-and-health', title: '습도가 건강에 미치는 영향과 관리 방법', date: '2026-01-25', summary: '습도에 따라 피부, 호흡기, 수면 질이 달라집니다. 적정 습도를 유지하는 방법을 알아봅니다.' },
    { slug: 'wind-chill-explained', title: '체감 온도란? 바람이 부는 날 더 춥게 느껴지는 이유', date: '2026-02-01', summary: '실제 기온과 체감 온도가 다른 이유, 체감 온도 계산 원리와 대처법을 설명합니다.' },
    { slug: 'seasonal-health-tips', title: '계절별 건강 관리: 봄·여름·가을·겨울 맞춤 생활법', date: '2026-02-05', summary: '각 계절의 특성에 맞는 건강 관리법과 주의사항을 정리했습니다.' },
    { slug: 'weather-and-exercise', title: '날씨에 따른 운동 가이드: 언제 어떤 운동이 좋을까?', date: '2026-02-10', summary: '기온·습도·풍속에 따라 적합한 운동 종류와 시간대를 추천합니다.' },
    { slug: 'fine-dust-indoor-tips', title: '미세먼지 나쁨일 때 실내에서 할 수 있는 것들', date: '2026-02-15', summary: '미세먼지 농도가 높은 날, 실내에서 건강하게 보내는 방법과 공기 질 관리 팁을 안내합니다.' },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8 mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">날씨 블로그</h1>
                    <p className="text-gray-600 leading-relaxed">
                        날씨 데이터만으로는 알 수 없는 실용적인 생활 정보를 담았습니다.
                        기온별 옷차림부터 계절별 건강 관리, 미세먼지 대처법까지
                        일상에서 바로 활용할 수 있는 날씨 관련 이야기를 확인해 보세요.
                    </p>
                </div>

                <div className="space-y-4">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                            <article className="bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6">
                                <time className="text-xs text-blue-500 font-medium">{post.date}</time>
                                <h2 className="text-xl font-semibold text-gray-900 mt-1 mb-2">{post.title}</h2>
                                <p className="text-gray-600 text-sm leading-relaxed">{post.summary}</p>
                            </article>
                        </Link>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        홈으로 돌아가기
                    </Link>
                </div>
            </div>
        </div>
    );
}
