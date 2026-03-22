import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/data/guides";
import { GuideCard } from "@/components/ui/GuideCard";

export const metadata: Metadata = {
  title: "살 때 가이드 — 첫차·중고차 비용 허브",
  description: "첫차 살 때 빠지는 비용, 중고차 유지비 체크 등 구매 전 꼭 알아야 할 비용 정보를 모았습니다.",
};

export default function BuyingCategoryPage() {
  const guides = GUIDES.filter((g) => g.category === "buying");

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">카테고리</p>
        <h1 className="text-2xl font-bold text-slate-900">🏷️ 살 때</h1>
        <p className="text-[15px] text-slate-600 leading-relaxed">
          차를 구매하기 전에 꼭 알아야 할 비용 정보입니다.
        </p>
      </header>

      <div className="grid gap-3">
        {guides.map((g) => (
          <GuideCard key={g.slug} slug={g.slug} title={g.title} description={g.description} />
        ))}
        {guides.length === 0 && (
          <p className="text-slate-500 text-sm py-8 text-center">가이드를 준비 중입니다.</p>
        )}
      </div>

      <div className="border-t border-slate-200 pt-6 space-y-2">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">관련 계산기</p>
        <Link href="/calculator/first-car-budget" className="flex items-center gap-3 p-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-2xl text-[15px] text-slate-700 hover:text-blue-600 transition-colors group">
          <span>🚗</span>
          <span className="flex-1">첫차 총예산 계산기</span>
          <span className="text-slate-600 group-hover:text-blue-400 transition-colors">→</span>
        </Link>
        <Link href="/calculator/new-vs-used" className="flex items-center gap-3 p-4 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 rounded-2xl text-[15px] text-slate-700 hover:text-blue-600 transition-colors group">
          <span>🔄</span>
          <span className="flex-1">신차 vs 중고차 총소유비 비교</span>
          <span className="text-slate-600 group-hover:text-blue-400 transition-colors">→</span>
        </Link>
      </div>
    </div>
  );
}
