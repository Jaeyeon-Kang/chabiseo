import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "업데이트 기록 | 차계부",
  description: "차계부 계산기와 가이드의 데이터 업데이트 이력을 확인할 수 있습니다.",
};

const UPDATES = [
  {
    date: "2026-03-22",
    version: "v1.1",
    items: [
      "쿠키 동의 배너 추가 (GA·AdSense 동의 후 로딩)",
      "글로벌 에러 바운더리 추가",
      "EV 취득세 감면액을 설정 파일에서 관리하도록 변경",
      "계산기 페이지 본문 보강 (계산 근거, 입력 예시, FAQ)",
      "출처 페이지 신설",
      "텍스트 오류 수정 (오타, 모순 표현, 라벨 불일치 등)",
    ],
  },
  {
    date: "2026-03-22",
    version: "v1.0",
    items: [
      "첫차 총예산 계산기 출시",
      "연료비 비교 계산기 (가솔린·하이브리드·EV) 출시",
      "신차 vs 중고차 총소유비 비교 계산기 출시",
      "가이드 12개 작성 (소모품·정비, 구매, EV, 수리비)",
      "SEO 구조 완성 (sitemap, robots, JSON-LD, 메타데이터)",
      "연료 단가: 한국석유공사 오피넷 2026-03-22 기준 반영",
      "EV 충전 요금: 환경부·한국전력 2026-03-22 기준 반영",
    ],
  },
];

const NEXT_UPDATE_ITEMS = [
  "연료 단가 정기 업데이트 (월 1~2회)",
  "EV 충전 요금 변동 반영",
  "자동차세 세법 개정 사항 반영",
  "신규 가이드 추가 예정",
];

export default function UpdateLogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">기록</p>
        <h1 className="text-2xl font-bold text-slate-900">업데이트 기록</h1>
        <p className="text-[15px] text-slate-600 leading-relaxed">
          차계부의 데이터와 기능 변경 이력입니다. 연료 단가, 충전 요금, 세금 기준처럼
          변하는 수치는 월 1~2회 검토 후 반영합니다.
        </p>
      </header>

      <div className="space-y-6">
        {UPDATES.map((update) => (
          <section key={`${update.version}-${update.date}`} className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                {update.version}
              </span>
              <span className="text-sm text-slate-500">{update.date}</span>
            </div>
            <ul className="space-y-1.5 pl-1">
              {update.items.map((item, i) => (
                <li key={i} className="flex gap-2 text-[15px] text-slate-600 leading-relaxed">
                  <span className="text-blue-500 shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="border-t border-slate-200 pt-6 space-y-3">
        <h2 className="text-base font-semibold text-slate-800">다음 업데이트 예정</h2>
        <ul className="space-y-1.5 pl-1">
          {NEXT_UPDATE_ITEMS.map((item, i) => (
            <li key={i} className="flex gap-2 text-[15px] text-slate-500 leading-relaxed">
              <span className="text-slate-300 shrink-0 mt-0.5">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
