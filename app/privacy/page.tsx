import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '개인정보처리방침 - 날씨 정보 서비스',
    description: '실시간 날씨 정보 서비스의 개인정보처리방침을 확인하세요.',
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur rounded-2xl shadow-xl p-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">개인정보처리방침</h1>
                
                <p className="text-gray-600 mb-6 text-sm">
                    최종 수정일: {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. 개인정보의 처리 목적</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        실시간 날씨 정보 서비스(이하 "서비스")는 다음의 목적을 위하여 개인정보를 처리합니다. 
                        처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
                        이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                        <li>• 서비스 제공: 날씨 정보 조회, 지역 검색, 즐겨찾기 기능 제공</li>
                        <li>• 서비스 개선: 사용자 경험 향상 및 서비스 품질 개선</li>
                        <li>• 기술적 지원: 서비스 오류 해결 및 안정성 유지</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. 개인정보의 처리 및 보유기간</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        서비스는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 
                        개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                        <li>• <strong>즐겨찾기 정보:</strong> 사용자의 브라우저 로컬 스토리지에 저장되며, 사용자가 직접 삭제할 때까지 보유됩니다.</li>
                        <li>• <strong>위치 정보:</strong> 서비스 제공을 위해 일시적으로 처리되며, 서버에 저장되지 않습니다.</li>
                        <li>• <strong>로그 정보:</strong> 서비스 운영 및 보안을 위해 최대 1년간 보관될 수 있습니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. 처리하는 개인정보의 항목</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        서비스는 다음의 개인정보 항목을 처리하고 있습니다:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <h3 className="font-semibold text-gray-800 mb-2">필수 항목</h3>
                        <ul className="space-y-1 text-gray-700 ml-4">
                            <li>• 위치 정보 (GPS 좌표) - 날씨 정보 제공을 위해 사용</li>
                            <li>• 검색 키워드 - 지역 검색 기능 제공을 위해 사용</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2">자동 수집 항목</h3>
                        <ul className="space-y-1 text-gray-700 ml-4">
                            <li>• IP 주소, 접속 로그, 쿠키, 접속 기기 정보</li>
                            <li>• 서비스 이용 기록 및 이용 패턴</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. 개인정보의 제3자 제공</h2>
                    <p className="text-gray-700 leading-relaxed">
                        서비스는 원칙적으로 정보주체의 개인정보를 제3자에게 제공하지 않습니다. 
                        다만, 다음의 경우에는 예외로 합니다:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4 mt-4">
                        <li>• 정보주체가 사전에 동의한 경우</li>
                        <li>• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. 개인정보처리의 위탁</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        서비스는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg">
                        <ul className="space-y-2 text-gray-700">
                            <li>• <strong>OpenWeatherMap:</strong> 날씨 데이터 제공</li>
                            <li>• <strong>카카오:</strong> 지역 검색 및 좌표 변환 서비스</li>
                            <li>• <strong>Vercel:</strong> 웹 호스팅 및 서비스 운영</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        정보주체는 다음과 같은 권리를 행사할 수 있습니다:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                        <li>• 개인정보 열람 요구</li>
                        <li>• 개인정보 정정·삭제 요구</li>
                        <li>• 개인정보 처리정지 요구</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                        위 권리 행사는 서비스 운영자에게 서면, 전자우편 등을 통하여 하실 수 있으며, 
                        서비스는 이에 대해 지체 없이 조치하겠습니다.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. 개인정보의 파기</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        서비스는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 
                        지체없이 해당 개인정보를 파기합니다. 파기의 절차 및 방법은 다음과 같습니다:
                    </p>
                    <ul className="space-y-2 text-gray-700 ml-4">
                        <li>• <strong>파기절차:</strong> 불필요한 개인정보는 내부 방침 및 기타 관련 법령에 따라 파기합니다.</li>
                        <li>• <strong>파기방법:</strong> 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. 개인정보 보호책임자</h2>
                    <p className="text-gray-700 leading-relaxed">
                        서비스의 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 
                        불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mt-4">
                        <p className="text-gray-700">
                            <strong>개인정보 보호책임자</strong><br />
                            연락처: 서비스 내 문의 기능을 통해 연락주시기 바랍니다.
                        </p>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. 개인정보 처리방침 변경</h2>
                    <p className="text-gray-700 leading-relaxed">
                        이 개인정보처리방침은 법령·정책 또는 보안기술의 변경에 따라 내용의 추가·삭제 및 수정이 있을 시에는 
                        변경사항의 시행일의 7일 전부터 서비스의 공지사항을 통하여 고지할 것입니다.
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
