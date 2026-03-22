"use client";

import { useState } from "react";
import fuelDefaults from "@/data/fuel-price-defaults.json";

const fmt = (n: number) => n.toLocaleString("ko-KR");

const DEFAULT_EFF = { gasoline: 12.5, hybrid: 18.0, ev: 4.5 };

interface CompareRow {
  label: string;
  monthlyMin: number;
  monthlyMax: number;
  barColor: string;
  textColor: string;
}

export function FuelVsEvCalc() {
  const [monthlyMileage, setMonthlyMileage] = useState(1200);
  const [homeChargeRatio, setHomeChargeRatio] = useState(70);
  const [result, setResult] = useState<CompareRow[] | null>(null);

  function handleCalc() {
    const f = fuelDefaults as unknown as Record<string, number>;

    const gasMin = Math.round((monthlyMileage / (DEFAULT_EFF.gasoline * 1.1)) * f.gasoline);
    const gasMax = Math.round((monthlyMileage / (DEFAULT_EFF.gasoline * 0.9)) * f.gasoline);

    const hybMin = Math.round((monthlyMileage / (DEFAULT_EFF.hybrid * 1.1)) * f.gasoline);
    const hybMax = Math.round((monthlyMileage / (DEFAULT_EFF.hybrid * 0.9)) * f.gasoline);

    const kwh = monthlyMileage / DEFAULT_EFF.ev;
    const homeRatio = homeChargeRatio / 100;
    const publicRatio = 1 - homeRatio;
    const evMin = Math.round(kwh * (homeRatio * f.ev_home_slow_night + publicRatio * f.ev_public_slow));
    const evMax = Math.round(kwh * (homeRatio * f.ev_home_slow + publicRatio * f.ev_public_fast_50kw));

    setResult([
      { label: "가솔린", monthlyMin: gasMin, monthlyMax: gasMax, barColor: "bg-orange-400", textColor: "text-orange-600" },
      { label: "하이브리드", monthlyMin: hybMin, monthlyMax: hybMax, barColor: "bg-amber-400", textColor: "text-amber-600" },
      { label: "전기차(EV)", monthlyMin: evMin, monthlyMax: evMax, barColor: "bg-blue-500", textColor: "text-blue-600" },
    ]);
  }

  return (
    <div className="space-y-6">
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-5">

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

        <div className="space-y-2">
          <label className="flex justify-between text-sm text-slate-600">
            <span>전기차 자가 충전 비율</span>
            <span className="font-semibold text-blue-600">{homeChargeRatio}%</span>
          </label>
          <input
            type="range" min={0} max={100} step={10}
            value={homeChargeRatio}
            onChange={(e) => setHomeChargeRatio(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-slate-400">
            <span>외부 충전만</span><span>집에서만 충전</span>
          </div>
        </div>

        <button
          onClick={handleCalc}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
        >
          비교하기
        </button>
      </div>

      {result && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-5">
          <h3 className="text-base font-semibold text-slate-800">월 연료·충전비 비교</h3>

          {result.map((row) => {
            const maxVal = Math.max(...result.map((r) => r.monthlyMax));
            const barWidth = Math.round((row.monthlyMax / maxVal) * 100);
            return (
              <div key={row.label} className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className={`text-sm font-semibold ${row.textColor}`}>{row.label}</span>
                  <span className="text-sm font-semibold text-slate-700 tabular-nums">
                    {fmt(row.monthlyMin)} ~ {fmt(row.monthlyMax)}원
                  </span>
                </div>
                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${row.barColor}`}
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>
            );
          })}

          <p className="text-xs text-slate-400 pt-2 border-t border-slate-100">
            연비: 가솔린 12.5km/L · 하이브리드 18.0km/L · EV 4.5km/kWh 기준.
            충전요금: 환경부·한국전력 공시 기준 (2026-03-22).
          </p>
        </div>
      )}
    </div>
  );
}
