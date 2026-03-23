"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/calculator/first-car-budget", label: "첫차 실지출" },
  { href: "/calculator/fuel-vs-ev", label: "내연기관 vs EV" },
  { href: "/category/maintaining", label: "소모품·정비" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-3xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="28" height="28" rx="6" fill="#2563eb" className="group-hover:fill-blue-700 transition-colors" />
            <text x="14" y="15.5" dominantBaseline="middle" textAnchor="middle"
              fontFamily="'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif"
              fontWeight="900" fontSize="14.5" fill="white">차</text>
          </svg>
          <span className="text-blue-600 font-bold text-lg tracking-tight group-hover:text-blue-700 transition-colors">
            차비서
          </span>
          <span className="hidden sm:block text-xs text-slate-400">
            자동차 비용 계산기 & 정비비 단가표
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {NAV.map((n) => {
            const isActive = pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? "text-blue-600 bg-blue-50 font-medium"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
