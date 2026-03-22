import type { Metadata } from "next";
import { NewVsUsedCalc } from "@/components/calculators/NewVsUsedCalc";
import { NextQuestions } from "@/components/layout/NextQuestions";

export const metadata: Metadata = {
  title: "신차 vs 중고차 총소유비 비교 계산기",
  description:
    "5년 기준 총소유비(감가상각 포함)로 신차와 중고차 중 어느 쪽이 경제적으로 유리한지 판단해 드립니다.",
};

export default function NewVsUsedPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">계산기</p>
        <h1 className="text-2xl font-bold text-slate-900">신차 vs 중고차 총소유비</h1>
        <p className="text-[15px] text-slate-600 leading-relaxed">
          구매가 차이만 보지 마세요. 감가상각·정비비·보험료 차이까지 합산한 5년 총소유비로 비교해 드립니다.
        </p>
      </header>

      <NewVsUsedCalc />

      <NextQuestions
        questions={[
          { text: "첫차 총예산 계산기 (취등록세 포함)", href: "/calculator/first-car-budget", type: "calculator" },
          { text: "중고차 사기 전 유지비에서 꼭 볼 것", href: "/guide/used-car-cost-check", type: "guide" },
          { text: "차를 오래 탈수록 드는 비용", href: "/guide/long-term-car-cost", type: "guide" },
        ]}
      />
    </div>
  );
}
