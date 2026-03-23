import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "차비서 — 자동차 비용 판단 가이드",
};

const CALCULATORS = [
  {
    href: "/calculator/first-car-budget",
    icon: "🚗",
    iconBg: "bg-blue-100",
    title: "첫차 실지출액 계산기",
    desc: "차량 가액만 보면 안 됩니다. 취등록세, 보험, 연료비, 소모품까지 — 숨만 쉬어도 나가는 첫해 실지출액을 항목별로 산출합니다.",
    badge: "첫차 구매 전 필수",
  },
  {
    href: "/calculator/fuel-vs-ev",
    icon: "⚡",
    iconBg: "bg-teal-100",
    title: "내연기관 vs 전기차 유지비",
    desc: "카탈로그 연비에 속지 마세요. 내 주행거리와 충전 환경 기준으로 가솔린·하이브리드·전기차 월 비용을 직접 비교합니다.",
    badge: null,
  },
  {
    href: "/calculator/new-vs-used",
    icon: "🔄",
    iconBg: "bg-violet-100",
    title: "신차 vs 중고차 5년 총비용",
    desc: "중고차가 무조건 저렴한 건 아닙니다. 수리비·감가상각까지 더한 5년 총소유비로 실제 손익을 항목별로 비교합니다.",
    badge: null,
  },
] as const;

const POPULAR_GUIDES = [
  { href: "/guide/engine-oil-interval", label: "호갱 방지: 엔진오일 적정 교체 주기" },
  { href: "/guide/brake-pad-signal", label: "브레이크패드 과잉 교체 당하지 않는 법" },
  { href: "/guide/tire-timing", label: "타이어 교체시기" },
  { href: "/guide/battery-timing", label: "배터리 교체시기" },
  { href: "/guide/first-car-hidden-costs", label: "딜러가 말 안 해주는 첫차 부대비용 7가지" },
];

const CATEGORIES = [
  {
    href: "/category/buying",
    icon: "🏷️",
    label: "구매 비용 검증",
    bg: "bg-blue-50 hover:bg-blue-100",
    border: "border-blue-200 hover:border-blue-300",
    label_color: "text-blue-700",
  },
  {
    href: "/category/maintaining",
    icon: "🔧",
    label: "소모품·정비",
    bg: "bg-emerald-50 hover:bg-emerald-100",
    border: "border-emerald-200 hover:border-emerald-300",
    label_color: "text-emerald-700",
  },
  {
    href: "/category/repairing",
    icon: "🛠️",
    label: "수리비·견적",
    bg: "bg-amber-50 hover:bg-amber-100",
    border: "border-amber-200 hover:border-amber-300",
    label_color: "text-amber-700",
  },
  {
    href: "/category/ev",
    icon: "⚡",
    label: "EV 충전·유지비",
    bg: "bg-teal-50 hover:bg-teal-100",
    border: "border-teal-200 hover:border-teal-300",
    label_color: "text-teal-700",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-12">

      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
          차 살 때, 탈 때, 고칠 때<br />
          <span className="text-blue-600">견적 전에</span> 먼저 확인하세요
        </h1>
        <p className="text-[15px] text-slate-500 max-w-xl leading-relaxed">
          표준 비용 범위를 미리 알면 과다 청구를 바로 걸러낼 수 있습니다.
          계산기와 가이드로 내 상황에 맞는 적정 비용을 확인하세요.
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          {["가이드 12개", "계산기 3종", "매월 업데이트"].map((s) => (
            <span key={s} className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* 계산기 */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          바로 계산해보기
        </h2>
        <div className="grid gap-3">
          {CALCULATORS.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group flex gap-4 bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-2xl p-5 transition-all shadow-sm"
            >
              <div className={`w-11 h-11 ${c.iconBg} rounded-xl flex items-center justify-center text-xl shrink-0`}>
                {c.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {c.title}
                  </h3>
                  {c.badge && (
                    <span className="text-xs px-2 py-0.5 bg-blue-50 text-blue-600 border border-blue-200 rounded-full">
                      {c.badge}
                    </span>
                  )}
                </div>
                <p className="text-[15px] text-slate-500 mt-1 leading-relaxed">{c.desc}</p>
              </div>
              <span className="text-slate-400 group-hover:text-blue-500 transition-colors self-center shrink-0 text-lg">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 카테고리 */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          주제별로 찾기
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {CATEGORIES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group flex flex-col items-center gap-3 py-6 ${c.bg} border ${c.border} rounded-2xl transition-all shadow-sm hover:shadow-md`}
            >
              <span className="text-3xl">{c.icon}</span>
              <span className={`text-sm font-semibold text-center px-2 ${c.label_color}`}>{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 인기 가이드 */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          많이 읽은 가이드
        </h2>
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm divide-y divide-slate-100">
          {POPULAR_GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="flex items-center justify-between px-5 py-3.5 text-[15px] text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors group"
            >
              <span>{g.label}</span>
              <span className="text-slate-400 group-hover:text-blue-500 transition-colors">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 면책 조항 */}
      <section className="text-xs text-slate-400 leading-relaxed border-t border-slate-200 pt-8 space-y-2">
        <p className="font-semibold text-slate-500">[면책 조항]</p>
        <p>
          본 사이트의 모든 산출 결과는 공공 통계(국토교통부·한국전력 등), 제조사 공시가 및 표준 공임표를
          바탕으로 한 추정치입니다. 개별 차량 상태·지역·정비소에 따라 실제 청구 금액과 차이가 발생할 수 있으며,
          본 사이트는 해당 결과에 대한 법적 책임을 지지 않습니다.
        </p>
      </section>

    </div>
  );
}
