import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/data/guides";
import { GuideCard } from "@/components/ui/GuideCard";

export const metadata: Metadata = {
  title: "EV·친환경 가이드 — 전기차 비용 허브",
  description: "전기차 충전비, EV가 맞는 경우·안 맞는 경우, 하이브리드 vs EV 비교 등 전기차 비용 정보를 모았습니다.",
};

export default function EvCategoryPage() {
  const guides = GUIDES.filter((g) => g.category === "ev");

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-400 font-medium">카테고리</p>
        <h1 className="text-2xl font-bold text-slate-100">⚡ EV·친환경</h1>
        <p className="text-[15px] text-slate-400 leading-relaxed">
          전기차와 하이브리드의 실제 비용을 확인하세요.
        </p>
      </header>

      <div className="grid gap-3">
        {guides.map((g) => (
          <GuideCard key={g.slug} slug={g.slug} title={g.title} description={g.description} />
        ))}
        {guides.length === 0 && (
          <p className="text-sm text-slate-500 text-center py-4">가이드를 준비 중입니다.</p>
        )}
      </div>

      <div className="border-t border-slate-800 pt-6 space-y-2">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">관련 계산기</p>
        <Link href="/calculator/fuel-vs-ev" className="flex items-center gap-3 p-4 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-2xl text-[15px] text-slate-300 hover:text-slate-100 transition-colors group">
          <span>⚡</span>
          <span className="flex-1">연료비 비교 계산기 (EV 충전비 포함)</span>
          <span className="text-slate-600 group-hover:text-blue-400 transition-colors">→</span>
        </Link>
      </div>
    </div>
  );
}
