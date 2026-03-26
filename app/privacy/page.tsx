import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 차계부",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">정책</p>
        <h1 className="text-2xl font-bold text-slate-900">개인정보처리방침</h1>
      </header>

      <div className="space-y-6 text-[15px] text-slate-600 leading-relaxed">
        <p>차계부는 현재 회원 가입 기능이 없으며, 개인을 식별할 수 있는 정보를 수집하지 않습니다.</p>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">수집 정보</h2>
          <p>
            계산기 입력값(주행거리, 연료 타입, 차량 가격 등)은 브라우저 내에서만 처리되며
            서버에 저장되지 않습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">광고 및 분석</h2>
          <p>
            본 사이트는 Google AdSense 및 Google Analytics를 사용합니다.
            이 서비스들은 쿠키를 사용하여 광고 효과를 측정하고 사이트 이용 통계를 수집합니다.
            Google의 개인정보 보호 정책은 Google 웹사이트에서 확인하실 수 있습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">쿠키</h2>
          <p>
            브라우저 설정을 통해 쿠키 사용을 거부할 수 있습니다.
            다만 일부 기능이 제한될 수 있습니다.
          </p>
        </section>

        <p className="text-sm text-slate-400">최종 업데이트: 2026-03-22</p>
      </div>
    </div>
  );
}
