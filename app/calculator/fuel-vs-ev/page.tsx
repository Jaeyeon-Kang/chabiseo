import type { Metadata } from "next";
import { FuelVsEvCalc } from "@/components/calculators/FuelVsEvCalc";
import { NextQuestions } from "@/components/layout/NextQuestions";

export const metadata: Metadata = {
  title: "연료비 비교 계산기 — 가솔린·하이브리드·EV 월 비용 비교",
  description:
    "월 주행거리와 충전 환경을 입력하면 가솔린·하이브리드·EV 3가지 연료 타입의 월 비용을 나란히 비교해 드립니다.",
};

export default function FuelVsEvPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">계산기</p>
        <h1 className="text-2xl font-bold text-slate-900">연료비 비교 계산기</h1>
        <p className="text-[15px] text-slate-600 leading-relaxed">
          같은 거리를 달렸을 때 가솔린·하이브리드·EV의 월 연료·충전비를 나란히 비교합니다.
          차 교체를 고려 중이라면 먼저 이 숫자를 확인하세요.
        </p>
      </header>

      <FuelVsEvCalc />

      <NextQuestions
        questions={[
          { text: "첫차 총예산 (취등록세·보험 포함) 계산하기", href: "/calculator/first-car-budget", type: "calculator" },
          { text: "신차 vs 중고차 5년 총소유비 비교", href: "/calculator/new-vs-used", type: "calculator" },
          { text: "하이브리드가 생각보다 유리한 경우", href: "/guide/hybrid-advantage", type: "guide" },
          { text: "전기차가 안 맞는 사람 유형", href: "/guide/ev-not-for-everyone", type: "guide" },
        ]}
      />
    </div>
  );
}
