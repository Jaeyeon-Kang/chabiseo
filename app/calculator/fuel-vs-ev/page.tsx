import type { Metadata } from "next";
import Link from "next/link";
import { FuelVsEvCalc } from "@/components/calculators/FuelVsEvCalc";
import { NextQuestions } from "@/components/layout/NextQuestions";
import { BASE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "연료비 비교 계산기 — 가솔린·하이브리드·EV 월 비용 비교",
  description:
    "월 주행거리와 충전 환경을 입력하면 가솔린·하이브리드·EV 3가지 연료 타입의 월 비용을 나란히 비교해 드립니다.",
};

const FAQ_ITEMS = [
  {
    q: "EV 충전 단가는 어떤 기준인가요?",
    a: "환경부·한국전력 공시 기준입니다. 집충전(완속)은 kWh당 73~120원, 공용 완속 255원, 공용 급속(50kW) 347원, 급속(100kW) 420원입니다. 집충전 비율에 따라 가중 평균으로 계산합니다.",
  },
  {
    q: "하이브리드 연료비는 왜 휘발유 단가로 계산하나요?",
    a: "하이브리드 차량은 주유소에서 휘발유를 넣습니다. 전기 모터는 회생 제동으로 자동 충전되므로 별도 충전 비용이 없고, 연비만 일반 가솔린 대비 높게(18.0km/L) 적용됩니다.",
  },
  {
    q: "집충전이 불가능하면 EV가 무조건 비싼가요?",
    a: "공용 급속충전만 사용하면 가솔린 하이브리드보다 비쌀 수 있습니다. 집충전 비율 슬라이더를 0%로 놓고 확인해보세요. 공용 완속충전을 활용하면 비용이 상당히 줄어듭니다.",
  },
  {
    q: "디젤은 왜 비교에 포함되지 않나요?",
    a: "이 계산기는 가장 대중적인 3가지 연료 타입(가솔린, 하이브리드, EV)을 비교합니다. 디젤을 포함한 전체 연료 타입 비교는 첫차 총예산 계산기에서 가능합니다.",
  },
];

export default function FuelVsEvPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "연료비 비교 계산기", item: `${BASE_URL}/calculator/fuel-vs-ev` },
    ],
  };

  const webAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "연료비 비교 계산기",
    description: "가솔린·하이브리드·EV 3가지 연료 타입의 월 연료·충전비를 나란히 비교하는 도구",
    url: `${BASE_URL}/calculator/fuel-vs-ev`,
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
          <h1 className="text-2xl font-bold text-slate-900">연료비 비교 계산기</h1>
          <p className="text-[15px] text-slate-600 leading-relaxed">
            내 주행거리와 충전 환경을 넣으면 가솔린·하이브리드·전기차 중 어느 쪽이 실제로 저렴한지
            월 단위로 비교해볼 수 있습니다.
          </p>
        </header>

        <FuelVsEvCalc />

        {/* 계산 근거 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-l-2 border-blue-500 pl-3">계산 근거</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 text-[15px] text-slate-600 leading-relaxed">
            <p>
              연료 단가는 <strong>한국석유공사 오피넷 전국 평균</strong>(휘발유 1,680원/L 기준),
              EV 충전 요금은 <strong>환경부·한국전력 공시 기준</strong>을 적용합니다.
            </p>
            <p>
              연비는 국토교통부 공인 평균 기준이며, 실주행 편차를 반영해 ±10% 범위로 최솟값과 최댓값을 산출합니다.
              EV 충전비는 집충전과 외부충전 비율을 가중 평균하여 계산합니다.
            </p>
          </div>
        </section>

        {/* 실제 입력 예시 */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 border-l-2 border-blue-500 pl-3">실제 입력 예시</h2>
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-3 text-[15px] text-slate-600 leading-relaxed">
            <p className="font-semibold text-slate-800">월 1,200km 주행, 집충전 70%인 경우</p>
            <ul className="space-y-1.5 pl-1">
              <li className="flex gap-2"><span className="text-orange-500 shrink-0">•</span><span>가솔린: 월 약 13~16만원 (연비 12.5km/L, 휘발유 1,680원/L)</span></li>
              <li className="flex gap-2"><span className="text-amber-500 shrink-0">•</span><span>하이브리드: 월 약 9~11만원 (연비 18.0km/L, 휘발유 1,680원/L)</span></li>
              <li className="flex gap-2"><span className="text-blue-500 shrink-0">•</span><span>전기차: 월 약 2~5만원 (연비 4.5km/kWh, 집충전 70% 기준)</span></li>
            </ul>
            <p className="text-xs text-slate-400 pt-2">집충전 비율을 0%로 변경하면 공용충전만 사용하는 시나리오를 확인할 수 있습니다.</p>
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
          출처: 한국석유공사 오피넷, 환경부 충전요금, 한국전력, 국토교통부 공인연비 ·{" "}
          <Link href="/sources" className="text-blue-500 hover:underline">전체 출처 보기</Link>
          {" "}· 마지막 업데이트: 2026-03-22
        </p>

        <NextQuestions
          questions={[
            { text: "첫차 총예산 (취등록세·보험 포함) 계산하기", href: "/calculator/first-car-budget", type: "calculator" },
            { text: "신차 vs 중고차 5년 총소유비 비교", href: "/calculator/new-vs-used", type: "calculator" },
            { text: "하이브리드가 생각보다 유리한 경우", href: "/guide/hybrid-advantage", type: "guide" },
            { text: "EV 구매 전: 충전 인프라 손익분기점 확인", href: "/guide/ev-not-for-everyone", type: "guide" },
          ]}
        />
      </div>
    </>
  );
}
