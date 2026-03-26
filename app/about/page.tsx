import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "차계부 소개",
  description: "차계부는 자동차 비용을 미리 파악할 수 있는 계산기와 가이드 모음입니다.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">소개</p>
        <h1 className="text-2xl font-bold text-slate-900">차계부 소개</h1>
      </header>

      <div className="space-y-6 text-[15px] text-slate-600 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-800">차계부가 뭐예요?</h2>
          <p>
            자동차 관련 비용을 미리 파악할 수 있는 계산기와 가이드 모음입니다.
            "이 차 사면 한 달에 얼마나 드나", "브레이크패드 지금 갈아야 하나", "전기차가 진짜 더 저렴한가"처럼
            지갑과 직결된 질문에 숫자로 답합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-800">실시간 견적은 아닙니다</h2>
          <p>
            지역별 공임이나 당일 부품 단가를 실시간으로 반영하지 않습니다.
            대신 제조사 매뉴얼, 국토교통부·한국전력 공공 통계, 서비스센터 공시가를 기반으로
            믿을 수 있는 범위를 보여줍니다.
          </p>
          <p>
            실제 비용은 차종·지역·운행 조건·정비소에 따라 달라질 수 있습니다.
            중요한 정비 결정은 전문 정비사에게 직접 확인하세요.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-semibold text-slate-800">수치는 얼마나 자주 업데이트하나요?</h2>
          <p>
            연료 단가, 충전 요금, 세금 기준처럼 바뀌는 수치는 월 1~2회 검토 후 반영합니다.
            각 페이지 하단에 마지막 업데이트 날짜를 표시해두었습니다.
          </p>
        </section>
      </div>
    </div>
  );
}
