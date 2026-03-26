import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "출처 및 데이터 기준 | 차계부",
  description: "차계부 계산기와 가이드에서 사용하는 데이터의 출처와 기준을 안내합니다.",
};

const SOURCES = [
  {
    category: "세금·등록",
    items: [
      { name: "지방세법 (취득세 7% 기준)", url: "https://www.law.go.kr", desc: "비영업용 자동차 취득세율, EV 감면 한도" },
      { name: "국토교통부 — 자동차등록 안내", url: "https://www.molit.go.kr", desc: "공채 매입, 등록 절차, 번호판 발급" },
    ],
  },
  {
    category: "연료·충전 단가",
    items: [
      { name: "한국석유공사 오피넷 (전국 평균 유가)", url: "https://www.opinet.co.kr", desc: "휘발유·경유·LPG 전국 평균 가격" },
      { name: "환경부 — 전기차 충전요금 공시", url: "https://www.me.go.kr", desc: "공용 완속·급속 충전 요금" },
      { name: "한국전력 — 전기요금표", url: "https://cyber.kepco.co.kr", desc: "가정용 심야·일반 전기 요금 (집충전 기준)" },
    ],
  },
  {
    category: "연비",
    items: [
      { name: "국토교통부 — 자동차 에너지소비효율", url: "https://www.molit.go.kr", desc: "차종별 공인 연비 (km/L, km/kWh)" },
    ],
  },
  {
    category: "보험·정비",
    items: [
      { name: "보험개발원 — 자동차보험 참조순보험료", url: "https://www.kidi.or.kr", desc: "차종·연령·경력별 보험료 통계" },
      { name: "제조사 서비스센터 공시 공임표", url: null, desc: "현대·기아·BMW 등 공식 서비스센터 부품비+공임 기준" },
    ],
  },
  {
    category: "자동차세",
    items: [
      { name: "지방세법 — 자동차세 세율", url: "https://www.law.go.kr", desc: "배기량별 cc당 세율, 차령 감면율 (최대 50%)" },
    ],
  },
];

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">출처</p>
        <h1 className="text-2xl font-bold text-slate-900">출처 및 데이터 기준</h1>
        <p className="text-[15px] text-slate-600 leading-relaxed">
          차계부의 계산기와 가이드에서 사용하는 모든 수치는 아래 공공 통계 및 공시 자료를 기반으로 합니다.
          연료 단가와 충전 요금은 월 1~2회 검토 후 반영합니다.
        </p>
      </header>

      <div className="space-y-6">
        {SOURCES.map((group) => (
          <section key={group.category} className="space-y-3">
            <h2 className="text-base font-semibold text-slate-800 border-l-2 border-blue-500 pl-3">
              {group.category}
            </h2>
            <div className="space-y-2">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                      <p className="text-[15px] text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline shrink-0 mt-0.5"
                      >
                        바로가기 →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="border-t border-slate-200 pt-6 space-y-2 text-xs text-slate-400 leading-relaxed">
        <p>
          위 출처의 수치는 전국 평균 또는 표준 기준이며, 지역·차종·개인 조건에 따라 실제 금액과 차이가 발생할 수 있습니다.
          중요한 비용 결정은 전문 정비사, 보험 설계사, 공인된 딜러에게 직접 확인하시기 바랍니다.
        </p>
        <p>마지막 업데이트: 2026-03-22</p>
      </div>
    </div>
  );
}
