"use client";

import { useState } from "react";
import type { FuelType } from "@/types";
import {
  calcFirstCarBudget,
  type FirstCarBudgetResult,
} from "@/lib/calc-first-car-budget";
import { CostBreakdownCard } from "@/components/ui/CostBreakdownCard";
import { AssumptionsAccordion } from "@/components/ui/AssumptionsAccordion";

const FUEL_OPTIONS: { value: FuelType; label: string }[] = [
  { value: "gasoline", label: "휘발유" },
  { value: "diesel", label: "경유" },
  { value: "hybrid", label: "하이브리드" },
  { value: "ev", label: "전기차(EV)" },
  { value: "lpg", label: "LPG" },
];

const fmt = (n: number) => n.toLocaleString("ko-KR");

export function FirstCarBudgetCalc() {
  const [carPrice, setCarPrice] = useState(25000000);
  const [fuelType, setFuelType] = useState<FuelType>("gasoline");
  const [monthlyMileage, setMonthlyMileage] = useState(1200);
  const [hasParking, setHasParking] = useState(true);
  const [result, setResult] = useState<FirstCarBudgetResult | null>(null);

  function handleCalc() {
    setResult(calcFirstCarBudget({ carPrice, fuelType, monthlyMileageKm: monthlyMileage, hasParking }));
  }

  return (
    <div className="space-y-6">
      {/* 입력 */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-5">

        {/* 차량 구매가 */}
        <div className="space-y-2">
          <label className="flex justify-between text-sm text-slate-600">
            <span>차량 구매가</span>
            <span className="font-semibold text-blue-600 tabular-nums">{fmt(carPrice)}원</span>
          </label>
          <input
            type="range" min={5000000} max={80000000} step={500000}
            value={carPrice}
            onChange={(e) => setCarPrice(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>500만원</span><span>8,000만원</span>
          </div>
        </div>

        {/* 연료 타입 */}
        <div className="space-y-2">
          <label className="text-sm text-slate-600">연료 타입</label>
          <div className="flex flex-wrap gap-2">
            {FUEL_OPTIONS.map((o) => (
              <button
                key={o.value}
                onClick={() => setFuelType(o.value)}
                className={`px-3 py-1.5 rounded-lg text-sm transition-colors border ${
                  fuelType === o.value
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* 월 주행거리 */}
        <div className="space-y-2">
          <label className="flex justify-between text-sm text-slate-600">
            <span>월 주행거리</span>
            <span className="font-semibold text-blue-600 tabular-nums">{fmt(monthlyMileage)}km</span>
          </label>
          <input
            type="range" min={300} max={5000} step={100}
            value={monthlyMileage}
            onChange={(e) => setMonthlyMileage(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>300km</span><span>5,000km</span>
          </div>
        </div>

        {/* 주차 환경 */}
        <div className="space-y-2">
          <label className="text-sm text-slate-600">주차 환경</label>
          <div className="flex gap-2">
            {[
              { val: true, label: "자가 주차 (무료)" },
              { val: false, label: "유료 주차 필요" },
            ].map((o) => (
              <button
                key={String(o.val)}
                onClick={() => setHasParking(o.val)}
                className={`flex-1 py-2 rounded-lg text-sm transition-colors border ${
                  hasParking === o.val
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleCalc}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
        >
          총예산 계산하기
        </button>
      </div>

      {/* 결과 */}
      {result && (
        <div className="space-y-4">
          {/* 핵심 요약 */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 space-y-3">
            <p className="text-xs text-slate-500">첫해 예상 총비용</p>
            <p className="text-3xl font-bold text-slate-900 tabular-nums leading-tight">
              {fmt(result.firstYearTotal.min)} ~<br />
              {fmt(result.firstYearTotal.max)}
              <span className="text-base font-normal text-slate-500 ml-1">원</span>
            </p>
            <p className="text-sm text-slate-500">
              월 환산:{" "}
              <span className="text-slate-800 font-semibold">
                {fmt(result.monthlyTotal.min)} ~ {fmt(result.monthlyTotal.max)}원/월
              </span>
            </p>
          </div>

          <CostBreakdownCard
            title="비용 항목별 분해"
            updatedAt={result.updatedAt}
            items={[
              { label: "취득세", cost: { min: result.acquisitionTax, max: result.acquisitionTax, unit: "원" } },
              { label: "등록비", cost: { min: result.registrationFee, max: result.registrationFee, unit: "원" } },
              { label: "첫해 보험료", cost: result.firstYearInsurance },
              { label: "연간 연료비", cost: result.annualFuel },
              { label: "연간 소모품", cost: result.annualConsumables },
              ...(result.monthlyParking.max > 0
                ? [{ label: "월 주차비", cost: result.monthlyParking }]
                : []),
            ]}
          />

          <AssumptionsAccordion assumptions={result.assumptions} />
        </div>
      )}
    </div>
  );
}
