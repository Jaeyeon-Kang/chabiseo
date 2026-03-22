import type { Metadata } from "next";
import { FirstCarBudgetCalc } from "@/components/calculators/FirstCarBudgetCalc";
import { NextQuestions } from "@/components/layout/NextQuestions";

const BASE_URL = "https://www.chabiseo.com";

export const metadata: Metadata = {
  title: "첫차 총예산 계산기 — 차값 외 숨겨진 비용 포함",
  description:
    "차값만 보면 안 됩니다. 취등록세·보험료·연료비·소모품까지 첫해 실제 총비용과 월 유지비를 한 번에 계산하세요.",
};

export default function FirstCarBudgetPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "계산기", item: `${BASE_URL}/calculator/first-car-budget` },
      { "@type": "ListItem", position: 3, name: "첫차 총예산 계산기", item: `${BASE_URL}/calculator/first-car-budget` },
    ],
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "첫차 총예산 계산기",
    description: "취등록세·보험료·연료비·소모품까지 첫해 실제 총비용과 월 유지비를 한 번에 계산하는 도구",
    url: `${BASE_URL}/calculator/first-car-budget`,
    applicationCategory: "FinanceApplication",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />

      <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
        <header className="space-y-2">
          <p className="text-sm text-blue-600 font-medium">계산기</p>
          <h1 className="text-2xl font-bold text-slate-900">첫차 총예산 계산기</h1>
          <p className="text-[15px] text-slate-600 leading-relaxed">
            차값만 보고 예산을 잡으면 나중에 당황합니다. 취등록세, 보험, 연료비, 소모품 교체까지
            첫해에 실제로 나가는 돈을 항목별로 미리 확인하세요.
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
    </>
  );
}
