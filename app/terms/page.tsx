import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '이용약관 - 날씨 정보 서비스',
    description: '실시간 날씨 정보 서비스의 이용약관을 확인하세요.',
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">이용약관</h1>
                
                <p className="text-gray-600 mb-6 text-sm">
                    최종 수정일: {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제1조 (목적)</h2>
                    <p className="text-gray-700 leading-relaxed">
                        본 약관은 실시간 날씨 정보 서비스(이하 "서비스")의 이용과 관련하여 서비스 제공자와 이용자 간의 
                        권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제2조 (정의)</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>1. "서비스"란 날씨 정보를 제공하는 웹사이트 및 관련 서비스를 의미합니다.</li>
                        <li>2. "이용자"란 본 약관에 따라 서비스를 이용하는 자를 의미합니다.</li>
                        <li>3. "콘텐츠"란 서비스를 통해 제공되는 모든 정보, 데이터, 텍스트, 그래픽 등을 의미합니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제3조 (약관의 효력 및 변경)</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        1. 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        2. 서비스는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 약관을 변경한 경우에는 
                        변경된 약관의 내용과 시행일을 명시하여 현행약관과 함께 서비스의 초기화면에 그 시행일 7일 이전부터 
                        시행일 후 상당한 기간 동안 공지합니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제4조 (서비스의 제공 및 변경)</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        1. 서비스는 다음과 같은 업무를 수행합니다:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4 mb-4">
                        <li>• 실시간 날씨 정보 제공</li>
                        <li>• 지역별 날씨 검색 서비스</li>
                        <li>• 시간대별 날씨 예보 제공</li>
                        <li>• 즐겨찾기 기능 제공</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                        2. 서비스는 필요한 경우 서비스의 내용을 추가 또는 변경할 수 있습니다. 
                        다만, 이 경우에는 추가 또는 변경내용을 사전에 공지합니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제5조 (서비스의 중단)</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        1. 서비스는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 
                        서비스의 제공을 일시적으로 중단할 수 있습니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        2. 서비스는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 
                        손해에 대하여 배상합니다. 단, 서비스가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제6조 (이용자의 의무)</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        이용자는 다음 행위를 하여서는 안 됩니다:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                        <li>1. 신청 또는 변경 시 허위내용의 등록</li>
                        <li>2. 타인의 정보 도용</li>
                        <li>3. 서비스에 게시된 정보의 변경</li>
                        <li>4. 서비스가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                        <li>5. 서비스 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                        <li>6. 서비스 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                        <li>7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제7조 (개인정보보호)</h2>
                    <p className="text-gray-700 leading-relaxed">
                        서비스는 이용자의 개인정보 보호를 위하여 노력합니다. 이용자의 개인정보 보호에 관해서는 관련법령 및 
                        서비스가 정하는 "개인정보처리방침"에 정한 바에 따릅니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제8조 (저작권의 귀속 및 이용제한)</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        1. 서비스가 작성한 저작물에 대한 저작권 기타 지적재산권은 서비스에 귀속합니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        2. 이용자는 서비스를 이용함으로써 얻은 정보 중 서비스에 지적재산권이 귀속된 정보를 
                        서비스의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 
                        제3자에게 이용하게 하여서는 안 됩니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제9조 (면책조항)</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        1. 서비스는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 
                        서비스 제공에 관한 책임이 면제됩니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        2. 서비스는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        3. 서비스는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 
                        그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">제10조 (준거법 및 관할법원)</h2>
                    <p className="text-gray-700 leading-relaxed">
                        1. 서비스와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 
                        주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        2. 서비스와 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용합니다.
                    </p>
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
