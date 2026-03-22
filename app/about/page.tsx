import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "차비서 소개",
  description: "차비서는 차 살 때·탈 때·정비할 때 드는 돈을 숫자와 기준으로 이해하게 해주는 자동차 비용 정보 허브입니다.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">소개</p>
        <h1 className="text-2xl font-bold text-slate-900">차비서 소개</h1>
      </header>

      <div className="space-y-6 text-[15px] text-slate-600 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-800">차비서는 어떤 사이트인가요?</h2>
          <p>
            차비서는 자동차와 관련된 비용 의사결정을 돕는 정보 허브입니다.
            "이 차 사면 한 달에 얼마나 드나", "브레이크패드 지금 갈아야 하나", "EV가 진짜 더 저렴한가"처럼
            지갑과 직결된 질문에 숫자와 기준으로 답하는 것이 목표입니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-800">정확한 실시간 견적이 아닙니다</h2>
          <p>
            차비서의 수치는 지역별 실시간 공임이나 당일 부품 단가를 반영하지 않습니다.
            대신 제조사 매뉴얼, 국토교통부·한국전력 공공 통계, 서비스센터 공시가를 바탕으로
            신뢰할 수 있는 범위를 제시합니다.
          </p>
          <p>
            실제 비용은 차종·지역·운행 조건·정비소에 따라 달라질 수 있습니다.
            중요한 정비 결정은 반드시 전문 정비사의 직접 점검을 통해 확인하시기 바랍니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-800">데이터 업데이트 정책</h2>
          <p>
            연료 단가, 충전 요금, 세금 기준 등 시간에 따라 변동되는 수치는
            월 1~2회 검토 후 업데이트됩니다. 각 페이지 하단에 마지막 업데이트 날짜를 표시합니다.
          </p>
        </section>
      </div>
    </div>
  );
}
