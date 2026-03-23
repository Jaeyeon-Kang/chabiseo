import type { Metadata } from "next";
import Link from "next/link";
import { NewVsUsedCalc } from "@/components/calculators/NewVsUsedCalc";
import { NextQuestions } from "@/components/layout/NextQuestions";
import { BASE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "신차 vs 중고차 총소유비 비교 계산기",
  description:
    "5년 기준 총소유비(감가상각 포함)로 신차와 중고차 중 어느 쪽이 경제적으로 유리한지 판단해 드립니다.",
};

const FAQ_ITEMS = [
  {
    q: "감가상각은 어떤 공식으로 계산하나요?",
    a: "신차는 첫해 15% 감가 후 이후 연 9%씩, 중고차는 매년 10%씩 감가하는 모델을 적용합니다. 실제 감가율은 차종·주행거리·사고이력에 따라 다르지만, 일반적인 국산 중형차 기준으로 현실적인 추정치입니다.",
  },
  {
    q: "중고차 정비비가 신차보다 높은 이유는?",
    a: "차령이 높을수록 소모품 교체 주기가 겹치고, 고무·실 계통 부품의 노후화로 수리 항목이 늘어납니다. 계산기에서는 차령 1년당 연 8만원씩 정비비가 추가되는 모델을 적용합니다.",
  },
  {
    q: "보험료 차이는 왜 발생하나요?",
    a: "신차는 차량가액이 높아 보험료가 더 비쌉니다. 계산기에서는 신차 연 90만원, 중고차 연 65만원으로 추정합니다. 실제로는 운전 경력, 사고 이력, 보장 범위에 따라 크게 달라집니다.",
  },
  {
    q: "연료비는 왜 비교에 포함되지 않나요?",
    a: "같은 차종의 신차와 중고차는 연료비가 비슷합니다. 이 계산기는 신차/중고차 선택에서 차이가 나는 항목(감가상각, 취득세, 보험료, 정비비)만 비교하여 핵심에 집중합니다.",
  },
];

export default function NewVsUsedPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "신차 vs 중고차 총소유비 비교", item: `${BASE_URL}/calculator/new-vs-used` },
    ],
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "신차 vs 중고차 총소유비 비교 계산기",
    description: "감가상각·정비비·보험료 차이까지 합산한 5년 총소유비로 신차와 중고차를 비교하는 도구",
    url: `${BASE_URL}/calculator/new-vs-used`,
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
          <h1 className="text-2xl font-bold text-slate-900">신차 vs 중고차 총소유비</h1>
          <p className="text-[15px] text-slate-600 leading-relaxed">
            구매가 차이만 보면 판단이 틀릴 수 있습니다. 감가상각, 보험료, 정비비 차이까지 더해서
            5년 동안 실제로 얼마나 드는지 비교해보세요.
          </p>
        </header>

        <NewVsUsedCalc />

        {/* 계산 근거 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-l-2 border-blue-500 pl-3">계산 근거</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 text-[15px] text-slate-600 leading-relaxed">
            <p>
              총소유비 = 감가상각 + 취득세(7%) + 보험료 + 정비비로 산출합니다.
              감가상각은 국산 중형차 평균 잔존가치율을 기반으로 한 추정 모델이며,
              보험료는 보험개발원 통계 기반, 정비비는 서비스센터 공시 공임표 기준입니다.
            </p>
            <p>
              실제 감가율은 차종(수입차는 더 빠름), 주행거리, 사고이력, 시장 수급에 따라 크게 달라질 수 있습니다.
              중요한 결정은 실제 시세 조회와 전문가 상담을 병행하세요.
            </p>
          </div>
        </section>

        {/* 실제 입력 예시 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-l-2 border-blue-500 pl-3">실제 입력 예시</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 text-[15px] text-slate-600 leading-relaxed">
            <p className="font-semibold text-slate-800">신차 3,500만원 vs 3년식 중고차 2,000만원, 5년 보유 기준</p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div>
                <p className="text-xs text-slate-400 mb-1">신차 5년 총소유비</p>
                <p className="text-lg font-bold text-blue-600">약 3,060만원</p>
                <p className="text-xs text-slate-400">감가 1,615만 + 취득세 245만 + 보험 450만 + 정비 250만</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 mb-1">중고차 5년 총소유비</p>
                <p className="text-lg font-bold text-emerald-600">약 2,455만원</p>
                <p className="text-xs text-slate-400">감가 820만 + 취득세 140만 + 보험 325만 + 정비 370만</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 pt-2">이 예시에서는 중고차가 약 605만원 절감됩니다. 슬라이더를 조절해 내 상황에 맞는 비교를 해보세요.</p>
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
          출처: 지방세법(취득세), 보험개발원(보험료 통계), 서비스센터 공시 공임표 ·{" "}
          <Link href="/sources" className="text-blue-500 hover:underline">전체 출처 보기</Link>
          {" "}· 마지막 업데이트: 2026-03-22
        </p>

        <NextQuestions
          questions={[
            { text: "첫차 총예산 계산기 (취등록세 포함)", href: "/calculator/first-car-budget", type: "calculator" },
            { text: "중고차 사기 전 유지비에서 꼭 볼 것", href: "/guide/used-car-cost-check", type: "guide" },
            { text: "차를 오래 탈수록 드는 비용", href: "/guide/long-term-car-cost", type: "guide" },
          ]}
        />
      </div>
    </>
  );
}
