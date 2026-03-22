"use client";

import { useState } from "react";
import { AssumptionsAccordion } from "@/components/ui/AssumptionsAccordion";

const fmt = (n: number) => n.toLocaleString("ko-KR");

interface CompareResult {
  newTotalCost: number;
  usedTotalCost: number;
  newDepreciation: number;
  usedDepreciation: number;
  winner: "신차" | "중고차" | "비슷함";
  diff: number;
  assumptions: string[];
}

// 감가상각: 신차 첫해 15%, 이후 연 8~10%
function calcDepreciation(price: number, years: number, isNew: boolean): number {
  if (isNew) {
    let val = price * 0.85; // 첫해
    for (let i = 1; i < years; i++) val *= 0.91; // 이후 연 9%
    return price - val;
  } else {
    // 중고차는 이미 감가 반영된 가격, 이후 연 10%
    let val = price;
    for (let i = 0; i < years; i++) val *= 0.90;
    return price - val;
  }
}

export function NewVsUsedCalc() {
  const [newPrice, setNewPrice] = useState(35000000);
  const [usedPrice, setUsedPrice] = useState(20000000);
  const [usedAge, setUsedAge] = useState(3);
  const [holdYears, setHoldYears] = useState(5);
  const [result, setResult] = useState<CompareResult | null>(null);

  function handleCalc() {
    const newDepreciation = calcDepreciation(newPrice, holdYears, true);
    const usedDepreciation = calcDepreciation(usedPrice, holdYears, false);

    // 신차: 취득세 7%, 높은 보험료, 낮은 정비비
    const newTax = Math.round(newPrice * 0.07);
    const newInsurance = 900000 * holdYears;   // 연 90만원 평균
    const newMaintenance = 500000 * holdYears; // 연 50만원

    // 중고차: 취득세 7% (중고차 기준가 적용), 낮은 보험료, 높은 정비비
    const usedTax = Math.round(usedPrice * 0.07);
    const usedInsurance = 650000 * holdYears;    // 연 65만원 평균
    const usedMaintenance = (500000 + usedAge * 80000) * holdYears; // 차령에 따라 증가

    const newTotalCost = newDepreciation + newTax + newInsurance + newMaintenance;
    const usedTotalCost = usedDepreciation + usedTax + usedInsurance + usedMaintenance;

    const diff = Math.abs(newTotalCost - usedTotalCost);
    const threshold = Math.min(newTotalCost, usedTotalCost) * 0.05;

    let winner: CompareResult["winner"];
    if (diff < threshold) winner = "비슷함";
    else if (newTotalCost < usedTotalCost) winner = "신차";
    else winner = "중고차";

    setResult({
      newTotalCost,
      usedTotalCost,
      newDepreciation,
      usedDepreciation,
      winner,
      diff,
      assumptions: [
        `신차 ${holdYears}년 보유 기준 감가: 첫해 15%, 이후 연 9%`,
        `중고차(${usedAge}년식) ${holdYears}년 보유 기준 감가: 연 10%`,
        `보험료: 신차 연 90만원 / 중고차 연 65만원 추정`,
        `정비비: 신차 연 50만원 / 중고차 차령에 따라 연 ${fmt(500000 + usedAge * 80000)}원 추정`,
        "취득세: 비영업용 기준 7% 적용",
        "실제 감가는 차종·주행거리·사고이력에 따라 다릅니다",
      ],
    });
  }

  const winnerStyle: Record<string, string> = {
    "신차": "text-blue-400 border-blue-700 bg-blue-950/30",
    "중고차": "text-emerald-400 border-emerald-700 bg-emerald-950/30",
    "비슷함": "text-amber-400 border-amber-700 bg-amber-950/30",
  };

  return (
    <div className="space-y-6">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 space-y-5">

        {/* 신차 가격 */}
        <div className="space-y-2">
          <label className="flex justify-between text-sm text-slate-300">
            <span>신차 가격</span>
            <span className="font-semibold text-blue-400 tabular-nums">{fmt(newPrice)}원</span>
          </label>
          <input type="range" min={10000000} max={80000000} step={1000000}
            value={newPrice} onChange={(e) => setNewPrice(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-600">
            <span>1,000만원</span><span>8,000만원</span>
          </div>
        </div>

        {/* 중고차 가격 */}
        <div className="space-y-2">
          <label className="flex justify-between text-sm text-slate-300">
            <span>중고차 가격</span>
            <span className="font-semibold text-emerald-400 tabular-nums">{fmt(usedPrice)}원</span>
          </label>
          <input type="range" min={3000000} max={50000000} step={500000}
            value={usedPrice} onChange={(e) => setUsedPrice(Number(e.target.value))}
            className="w-full"
            style={{ "--thumb-color": "#10b981" } as React.CSSProperties}
          />
          <div className="flex justify-between text-xs text-slate-600">
            <span>300만원</span><span>5,000만원</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* 중고차 차령 */}
          <div className="space-y-2">
            <label className="flex justify-between text-sm text-slate-300">
              <span>중고차 차령</span>
              <span className="font-semibold text-slate-200">{usedAge}년</span>
            </label>
            <input type="range" min={1} max={15} step={1}
              value={usedAge} onChange={(e) => setUsedAge(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-600">
              <span>1년</span><span>15년</span>
            </div>
          </div>

          {/* 보유 기간 */}
          <div className="space-y-2">
            <label className="flex justify-between text-sm text-slate-300">
              <span>보유 예정</span>
              <span className="font-semibold text-slate-200">{holdYears}년</span>
            </label>
            <input type="range" min={1} max={10} step={1}
              value={holdYears} onChange={(e) => setHoldYears(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-slate-600">
              <span>1년</span><span>10년</span>
            </div>
          </div>
        </div>

        <button onClick={handleCalc}
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors">
          비교하기
        </button>
      </div>

      {result && (
        <div className="space-y-4">
          {/* 판단 */}
          <div className={`border rounded-2xl p-5 ${winnerStyle[result.winner]}`}>
            <p className="text-xs text-slate-400 mb-1">{holdYears}년 기준 유리한 선택</p>
            <p className="text-2xl font-bold">{result.winner}</p>
            {result.winner !== "비슷함" && (
              <p className="text-sm mt-1 text-slate-400">
                {result.winner === "신차" ? "중고차 대비 " : "신차 대비 "}
                약 {fmt(result.diff)}원 절감 예상
              </p>
            )}
          </div>

          {/* 총비용 비교표 */}
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5">
            <h3 className="text-sm font-semibold text-slate-300 mb-4">{holdYears}년 총소유비 비교</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-500 mb-1">신차</p>
                <p className="text-xl font-bold text-blue-400 tabular-nums">{fmt(result.newTotalCost)}원</p>
                <p className="text-xs text-slate-500 mt-1">감가: {fmt(result.newDepreciation)}원</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">중고차 ({usedAge}년식)</p>
                <p className="text-xl font-bold text-emerald-400 tabular-nums">{fmt(result.usedTotalCost)}원</p>
                <p className="text-xs text-slate-500 mt-1">감가: {fmt(result.usedDepreciation)}원</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-slate-600">
              총소유비 = 감가상각 + 취득세 + 보험료 ({holdYears}년) + 정비비 ({holdYears}년)
            </p>
          </div>

          <AssumptionsAccordion assumptions={result.assumptions} />
        </div>
      )}
    </div>
  );
}
