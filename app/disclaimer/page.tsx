import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "면책고지 | 차계부",
  description: "차계부 사이트에서 제공하는 정보의 정확성과 활용에 관한 면책 고지입니다.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-6">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">정책</p>
        <h1 className="text-2xl font-bold text-slate-900">면책고지</h1>
      </header>

      <div className="space-y-4 text-[15px] text-slate-600 leading-relaxed">
        <p>
          차계부(이하 "본 사이트")에서 제공하는 모든 정보와 계산 결과는
          교육적·참고적 목적으로만 제공됩니다.
        </p>
        <p>
          본 사이트의 수치는 제조사 기준, 공공 통계, 서비스센터 공시가를 바탕으로 한 추정 범위이며,
          실제 비용은 차종·지역·운행 조건·정비소에 따라 달라질 수 있습니다.
        </p>
        <p>
          본 사이트의 정보를 근거로 한 차량 구매, 정비, 보험 가입 등의 결정에 대해
          차계부는 어떠한 법적 책임도 지지 않습니다.
        </p>
        <p>
          중요한 비용 결정은 반드시 전문 정비사, 보험 설계사, 공인된 딜러에게 직접 확인하시기 바랍니다.
        </p>
        <p className="text-sm text-slate-400">최종 업데이트: 2026-03-22</p>
      </div>
    </div>
  );
}
