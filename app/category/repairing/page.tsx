import type { Metadata } from "next";
import Link from "next/link";
import { GUIDES } from "@/data/guides";
import { GuideCard } from "@/components/ui/GuideCard";

export const metadata: Metadata = {
  title: "고장·수리 가이드 — 정비비 범위 허브",
  description: "수리비가 적정한지, 수리해야 할지 교체해야 할지 판단할 때 필요한 비용 정보를 모았습니다.",
};

export default function RepairingCategoryPage() {
  const guides = GUIDES.filter((g) => g.category === "repairing");

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-400 font-medium">카테고리</p>
        <h1 className="text-2xl font-bold text-slate-100">🛠️ 고장·수리</h1>
        <p className="text-[15px] text-slate-400 leading-relaxed">
          수리 견적이 적정한지, 수리와 교체 중 어느 쪽이 유리한지 판단하는 데 필요한 정보입니다.
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

      <div className="border-t border-slate-800 pt-6 space-y-2">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">관련 계산기</p>
        <Link href="/calculator/new-vs-used" className="flex items-center gap-3 p-4 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-2xl text-[15px] text-slate-300 hover:text-slate-100 transition-colors group">
          <span>🔄</span>
          <span className="flex-1">신차 vs 중고차 총소유비 비교</span>
          <span className="text-slate-600 group-hover:text-blue-400 transition-colors">→</span>
        </Link>
      </div>
    </div>
  );
}
