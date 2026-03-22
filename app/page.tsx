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
    title: "첫차 총예산 계산기",
    desc: "취등록세, 보험, 연료비, 소모품까지 — 첫해에 실제로 얼마나 드는지 항목별로 확인해보세요.",
    badge: "첫차 구매 전 필수",
  },
  {
    href: "/calculator/fuel-vs-ev",
    icon: "⚡",
    iconBg: "bg-teal-100",
    title: "연료비 비교 계산기",
    desc: "내 주행거리 기준으로 가솔린·하이브리드·전기차 중 어느 쪽이 실제로 저렴한지 비교해보세요.",
    badge: null,
  },
  {
    href: "/calculator/new-vs-used",
    icon: "🔄",
    iconBg: "bg-violet-100",
    title: "신차 vs 중고차 총소유비",
    desc: "가격 차이만 보면 판단이 틀릴 수 있습니다. 감가상각·보험·정비비까지 더한 5년 총소유비로 비교해보세요.",
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
  {
    href: "/category/buying",
    icon: "🏷️",
    label: "살 때",
    bg: "bg-blue-50 hover:bg-blue-100",
    border: "border-blue-200 hover:border-blue-300",
    label_color: "text-blue-700",
  },
  {
    href: "/category/maintaining",
    icon: "🔧",
    label: "유지·정비",
    bg: "bg-emerald-50 hover:bg-emerald-100",
    border: "border-emerald-200 hover:border-emerald-300",
    label_color: "text-emerald-700",
  },
  {
    href: "/category/repairing",
    icon: "🛠️",
    label: "고장·수리",
    bg: "bg-amber-50 hover:bg-amber-100",
    border: "border-amber-200 hover:border-amber-300",
    label_color: "text-amber-700",
  },
  {
    href: "/category/ev",
    icon: "⚡",
    label: "EV·친환경",
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
          <span className="text-blue-600">비용 먼저</span> 확인하세요
        </h1>
        <p className="text-[15px] text-slate-500 max-w-xl leading-relaxed">
          실시간 견적이 아니라 믿을 수 있는 범위와 기준입니다.
          어느 정도 드는지 미리 알면, 정비소에서도 딜러 앞에서도 덜 흔들립니다.
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
              <span className={`text-sm font-semibold ${c.label_color}`}>{c.label}</span>
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

      {/* 사이트 소개 */}
      <section className="text-sm text-slate-400 leading-relaxed border-t border-slate-200 pt-8 space-y-3">
        <p>
          차비서의 수치는 실시간 견적이 아닙니다.
          제조사 매뉴얼, 국토교통부·한국전력 공공 통계, 서비스센터 공시가를 기반으로 한 범위값이며,
          실제 비용은 차종·지역·운행 조건에 따라 다릅니다.
        </p>
        <p>
          중요한 정비 결정은 반드시 전문 정비사에게 직접 확인하세요.
        </p>
      </section>

    </div>
  );
}
