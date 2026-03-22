import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "차비서 — 자동차 비용 판단 가이드",
    template: "%s | 차비서",
  },
  description:
    "차 살 때·탈 때·정비할 때 드는 돈을 숫자와 기준으로 바로 이해하게 해주는 사이트. 첫차 총예산, 연료비 비교, 정비비 범위를 한 번에.",
  keywords: [
    "자동차 유지비",
    "자동차 정비비",
    "첫차 비용",
    "EV 충전비",
    "엔진오일 교체주기",
    "자동차 비용 계산기",
  ],
  openGraph: {
    title: "차비서 — 자동차 비용 판단 가이드",
    description: "차 살 때·탈 때·정비할 때, 돈 문제를 숫자로 바로 이해하세요.",
    locale: "ko_KR",
    type: "website",
    siteName: "차비서",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="h-full">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
