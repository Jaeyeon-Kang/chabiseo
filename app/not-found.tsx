import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | 차비서",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center space-y-6">
      <p className="text-6xl font-bold text-slate-200">404</p>
      <h1 className="text-2xl font-bold text-slate-900">페이지를 찾을 수 없습니다</h1>
      <p className="text-slate-500">
        요청하신 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
        <Link href="/" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
          홈으로 돌아가기
        </Link>
        <Link href="/calculator/first-car-budget" className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors">
          첫차 예산 계산기
        </Link>
      </div>

      <div className="pt-8 text-sm text-slate-400 space-y-2">
        <p className="font-medium text-slate-500">자주 찾는 페이지</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
          <Link href="/guide/engine-oil-interval" className="hover:text-blue-600 transition-colors">엔진오일 교체주기</Link>
          <Link href="/guide/brake-pad-signal" className="hover:text-blue-600 transition-colors">브레이크패드 교체시기</Link>
          <Link href="/guide/first-car-hidden-costs" className="hover:text-blue-600 transition-colors">첫차 숨은비용</Link>
          <Link href="/calculator/fuel-vs-ev" className="hover:text-blue-600 transition-colors">연료비 비교</Link>
        </div>
      </div>
    </div>
  );
}
