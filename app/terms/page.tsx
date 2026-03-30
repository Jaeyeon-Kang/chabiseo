import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 차계부",
  description: "차계부 서비스 이용약관입니다. 서비스 이용 조건, 면책 범위, 지적재산권 등 주요 사항을 확인하세요.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">정책</p>
        <h1 className="text-2xl font-bold text-slate-900">이용약관</h1>
        <p className="text-[15px] text-slate-500 leading-relaxed">
          차계부 서비스를 이용하시면 아래 약관에 동의하신 것으로 간주됩니다.
        </p>
      </header>

      <div className="space-y-6 text-[15px] text-slate-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">1. 서비스 개요</h2>
          <p>
            차계부(이하 "서비스")는 자동차 취득·유지·수리 비용을 미리 파악할 수 있는
            계산기와 가이드를 무료로 제공합니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">2. 계산 결과의 한계</h2>
          <p>
            본 서비스의 모든 계산 결과는 제조사 기준, 국토교통부·한국전력 등 공공 통계,
            서비스센터 공시가를 바탕으로 한 <strong>예상 범위</strong>입니다.
            실제 비용은 차종·지역·운행 조건·정비소에 따라 달라질 수 있으며,
            중요한 정비·구매 결정은 반드시 전문 정비사·딜러에게 직접 확인하시기 바랍니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">3. 면책 조항</h2>
          <p>
            차계부는 계산 결과를 근거로 한 어떠한 결정(차량 구매, 정비, 보험 가입 등)에 대해서도
            법적 책임을 지지 않습니다. 서비스는 "있는 그대로(as-is)" 제공되며,
            정확성·완전성·최신성을 보장하지 않습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">4. 지적재산권</h2>
          <p>
            서비스 내 모든 콘텐츠(텍스트, 코드, 디자인, 로고 등)의 저작권은 차계부에 귀속됩니다.
            사전 서면 동의 없이 상업적으로 복제·배포·수정하는 것을 금합니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">5. 서비스 변경 및 중단</h2>
          <p>
            차계부는 사전 고지 없이 서비스 내용을 변경하거나 일시·영구적으로 중단할 수 있습니다.
            이로 인한 손해에 대해 책임을 지지 않습니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">6. 약관 변경</h2>
          <p>
            본 약관은 필요에 따라 변경될 수 있습니다. 변경 후 서비스를 계속 이용하시면
            변경된 약관에 동의하신 것으로 간주됩니다.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800">7. 준거법</h2>
          <p>본 약관은 대한민국 법률에 따라 해석되고 적용됩니다.</p>
        </section>

        <p className="text-sm text-slate-400">최종 업데이트: 2026-03-30</p>
      </div>
    </div>
  );
}
