import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 mt-16 py-8 px-4">
      <div className="mx-auto max-w-3xl space-y-4">
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
          <Link href="/about" className="hover:text-slate-600 transition-colors">소개</Link>
          <Link href="/privacy" className="hover:text-slate-600 transition-colors">개인정보처리방침</Link>
          <Link href="/disclaimer" className="hover:text-slate-600 transition-colors">면책고지</Link>
        </div>
        <p className="text-xs text-slate-400 leading-relaxed">
          차비서의 수치는 제조사 기준, 공공 통계, 서비스센터 공시가를 바탕으로 한 예상 범위입니다.
          실제 비용은 차종·지역·운행 조건에 따라 다릅니다. 구체적인 견적은 전문 정비사에게 확인하세요.
        </p>
        <p className="text-xs text-slate-400">© 2026 차비서</p>
      </div>
    </footer>
  );
}
