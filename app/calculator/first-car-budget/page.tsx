import type { Metadata } from "next";
import { FirstCarBudgetCalc } from "@/components/calculators/FirstCarBudgetCalc";
import { NextQuestions } from "@/components/layout/NextQuestions";

export const metadata: Metadata = {
  title: "첫차 총예산 계산기 — 차값 외 숨겨진 비용 포함",
  description:
    "차값만 보면 안 됩니다. 취등록세·보험료·연료비·소모품까지 첫해 실제 총비용과 월 유지비를 한 번에 계산하세요.",
};

export default function FirstCarBudgetPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">계산기</p>
        <h1 className="text-2xl font-bold text-slate-900">첫차 총예산 계산기</h1>
        <p className="text-[15px] text-slate-600 leading-relaxed">
          차값만 보면 안 됩니다. 취등록세·보험·연료비·소모품까지 합산한 첫해 총비용과 월 유지비를 먼저 확인하세요.
        </p>
      </header>

      <FirstCarBudgetCalc />

      <NextQuestions
        questions={[
          { text: "가솔린·하이브리드·EV 월 연료비 비교하기", href: "/calculator/fuel-vs-ev", type: "calculator" },
          { text: "신차 vs 중고차, 5년 총비용 비교", href: "/calculator/new-vs-used", type: "calculator" },
          { text: "첫차 살 때 빠지는 비용 7가지", href: "/guide/first-car-hidden-costs", type: "guide" },
          { text: "엔진오일 교체주기 — 차 받고 처음 할 일", href: "/guide/engine-oil-interval", type: "guide" },
        ]}
      />
    </div>
  );
}
