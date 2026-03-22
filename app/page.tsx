import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "차비서 — 자동차 비용 판단 가이드",
};

const CALCULATORS = [
  {
    href: "/calculator/first-car-budget",
    icon: "🚗",
    title: "첫차 총예산 계산기",
    desc: "차값만 보면 안 됩니다. 취등록세·보험·연료비·소모품까지 첫해 실제 총비용을 한 번에 확인하세요.",
    badge: "첫차 구매층 필수",
  },
  {
    href: "/calculator/fuel-vs-ev",
    icon: "⚡",
    title: "연료비 비교 계산기",
    desc: "가솔린·하이브리드·EV 3가지 연료 타입의 월 비용을 나란히 비교해 드립니다.",
    badge: null,
  },
  {
    href: "/calculator/new-vs-used",
    icon: "🔄",
    title: "신차 vs 중고차 총소유비",
    desc: "5년 기준 총소유비(감가상각 포함)로 신차와 중고차 중 어느 쪽이 유리한지 판단해 드립니다.",
    badge: null,
  },
] as const;

const POPULAR_GUIDES = [
  { href: "/guide/engine-oil-interval", label: "엔진오일 교체주기" },
  { href: "/guide/brake-pad-signal", label: "브레이크패드 교체 신호" },
  { href: "/guide/tire-timing", label: "타이어 교체시기" },
  { href: "/guide/battery-timing", label: "배터리 교체시기" },
  { href: "/guide/first-car-hidden-costs", label: "첫차 살 때 빠지는 비용 7가지" },
];

const CATEGORIES = [
  { href: "/category/buying", icon: "🏷️", label: "살 때" },
  { href: "/category/maintaining", icon: "🔧", label: "탈 때·정비" },
  { href: "/category/repairing", icon: "🛠️", label: "고장·수리" },
  { href: "/category/ev", icon: "⚡", label: "EV·친환경" },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 space-y-14">

      {/* Hero */}
      <section className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 leading-tight">
          차 살 때·탈 때·정비할 때<br />
          <span className="text-blue-400">돈 판단</span>을 도와드립니다
        </h1>
        <p className="text-slate-400 text-base max-w-xl leading-relaxed">
          정확한 실시간 견적이 아니라, 신뢰할 수 있는 범위와 판단 기준을 드립니다.
          숫자를 먼저 보고, 그 다음 왜 그런지 이해하세요.
        </p>
      </section>

      {/* 계산기 3개 */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          계산기 — 숫자부터 바로
        </h2>
        <div className="grid gap-3">
          {CALCULATORS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex gap-4 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-blue-600/60 rounded-2xl p-5 transition-all"
            >
              <span className="text-2xl shrink-0 mt-0.5">{c.icon}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-slate-100 group-hover:text-blue-300 transition-colors">
                    {c.title}
                  </h3>
                  {c.badge && (
                    <span className="text-xs px-2 py-0.5 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full">
                      {c.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">{c.desc}</p>
              </div>
              <span className="text-slate-600 group-hover:text-blue-400 transition-colors self-center shrink-0 text-lg">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 카테고리 */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          카테고리별 보기
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="flex flex-col items-center gap-2 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl transition-colors"
            >
              <span className="text-2xl">{c.icon}</span>
              <span className="text-sm text-slate-300 font-medium">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 인기 가이드 */}
      <section className="space-y-3">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
          많이 찾는 가이드
        </h2>
        <div className="divide-y divide-slate-800">
          {POPULAR_GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="flex items-center justify-between py-3 text-sm text-slate-300 hover:text-blue-300 transition-colors group"
            >
              <span>{g.label}</span>
              <span className="text-slate-600 group-hover:text-blue-400 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 사이트 소개 */}
      <section className="text-slate-500 text-sm leading-relaxed border-t border-slate-800 pt-8 space-y-3">
        <p>
          차비서는 "정확한 실시간 견적"을 주는 사이트가 아닙니다.
          차종·지역·운행 조건에 따라 실제 비용은 달라지기 때문에, 단일 숫자보다 신뢰할 수 있는 범위와 판단 기준을 드립니다.
        </p>
        <p>
          모든 수치는 제조사 매뉴얼, 국토교통부·한국전력 공공 통계, 서비스센터 공시가를 바탕으로 합니다.
          업데이트 날짜와 출처 유형은 각 페이지에 표시됩니다.
        </p>
      </section>

    </div>
  );
}
