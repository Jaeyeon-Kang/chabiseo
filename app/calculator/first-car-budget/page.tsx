import type { Metadata } from "next";
import Link from "next/link";
import { FirstCarBudgetCalc } from "@/components/calculators/FirstCarBudgetCalc";
import { NextQuestions } from "@/components/layout/NextQuestions";
import { BASE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "첫차 총예산 계산기 — 차값 외 숨겨진 비용 포함",
  description:
    "차값만 보면 안 됩니다. 취등록세·보험료·연료비·소모품까지 첫해 실제 총비용과 월 유지비를 한 번에 계산하세요.",
};

const FAQ_ITEMS = [
  {
    q: "취득세는 어떻게 계산되나요?",
    a: "비영업용 차량 기준 차량 구매가의 7%가 취득세로 부과됩니다. 2,500만원 차량이면 175만원입니다. 전기차는 최대 140만원까지 감면 혜택이 적용됩니다(2026년 기준, 정책 변경 시 달라질 수 있음).",
  },
  {
    q: "보험료 범위가 왜 이렇게 넓은가요?",
    a: "자동차 보험료는 운전 경력, 사고 이력, 차종, 보장 범위, 특약에 따라 크게 달라집니다. 신규 면허 기준 첫해 70~140만원이 일반적이며, 무사고 경력이 쌓이면 매년 줄어듭니다.",
  },
  {
    q: "월 유지비에 포함되지 않는 항목은?",
    a: "취득세와 공채 비용은 일회성 비용이라 월 유지비에서 제외됩니다. 월 유지비는 보험료, 연료비, 소모품, 주차비 등 매달 반복 발생하는 비용만 포함합니다.",
  },
  {
    q: "연비는 어떤 기준으로 계산하나요?",
    a: "국토교통부 공인 평균 연비를 기준으로 합니다. 휘발유 12.5km/L, 경유 15.0km/L, 하이브리드 18.0km/L, 전기차 4.5km/kWh, LPG 10.0km/L이며, 실주행 편차를 반영해 ±10% 범위로 산출합니다.",
  },
];

export default function FirstCarBudgetPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "첫차 총예산 계산기", item: `${BASE_URL}/calculator/first-car-budget` },
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
        <header className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm text-blue-600 font-medium">계산기</p>
            <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">2026-03 데이터 반영</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900">첫차 총예산 계산기</h1>
          <p className="text-[15px] text-slate-600 leading-relaxed">
            차값만 보고 예산을 잡으면 나중에 당황합니다. 취등록세, 보험, 연료비, 소모품 교체까지
            첫해에 실제로 나가는 돈을 항목별로 미리 확인하세요.
          </p>
        </header>

        <FirstCarBudgetCalc />

        {/* 계산 근거 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-l-2 border-blue-500 pl-3">계산 근거</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 text-[15px] text-slate-600 leading-relaxed">
            <p>
              이 계산기는 <strong>지방세법(취득세 7%)</strong>, <strong>국토교통부 공인 연비</strong>,
              <strong>한국석유공사 오피넷 전국 평균 유가</strong>, <strong>환경부·한국전력 충전 요금</strong>을 기준으로 산출합니다.
            </p>
            <p>
              보험료는 보험개발원 통계 기반 범위 추정이며, 소모품 비용은 km당 15~35원(엔진오일, 필터류, 와이퍼 등)으로 계산합니다.
              모든 수치는 월 1~2회 검토 후 반영합니다.
            </p>
          </div>
        </section>

        {/* 실제 입력 예시 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-l-2 border-blue-500 pl-3">실제 입력 예시</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 text-[15px] text-slate-600 leading-relaxed">
            <p className="font-semibold text-slate-800">아반떼 1.6 가솔린, 신차 2,500만원, 월 1,200km 주행, 아파트 자가 주차</p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex gap-2"><span className="text-blue-500 shrink-0">•</span><span>취득세: 175만원 (2,500만 × 7%)</span></li>
              <li className="flex gap-2"><span className="text-blue-500 shrink-0">•</span><span>공채 실질비용: 약 20만원</span></li>
              <li className="flex gap-2"><span className="text-blue-500 shrink-0">•</span><span>첫해 보험: 70~140만원</span></li>
              <li className="flex gap-2"><span className="text-blue-500 shrink-0">•</span><span>연간 연료비: 약 176~215만원</span></li>
              <li className="flex gap-2"><span className="text-blue-500 shrink-0">•</span><span>연간 소모품: 약 22~50만원</span></li>
              <li className="flex gap-2"><span className="text-blue-500 shrink-0">•</span><span>월 실 운행비: 약 22~34만원 (취득세 제외)</span></li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-l-2 border-blue-500 pl-3">자주 묻는 질문</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-2">
                <p className="text-sm font-semibold text-slate-800">Q. {item.q}</p>
                <p className="text-[15px] text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 출처 */}
        <p className="text-xs text-slate-400">
          출처: 지방세법, 국토교통부 공인연비, 한국석유공사 오피넷, 환경부 충전요금, 보험개발원 통계 ·{" "}
          <Link href="/sources" className="text-blue-500 hover:underline">전체 출처 보기</Link>
          {" "}· 마지막 업데이트: 2026-03-22
        </p>

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
