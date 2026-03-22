import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "차비서 — 자동차 비용 판단 가이드",
    template: "%s | 차비서",
  },
  description:
    "차 살 때, 탈 때, 고칠 때 드는 비용을 미리 파악할 수 있는 계산기와 가이드 모음. 첫차 총예산, 연료비 비교, 정비비 범위를 한눈에.",
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
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.css"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7755590920394652"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <script dangerouslySetInnerHTML={{ __html: `if('serviceWorker'in navigator){navigator.serviceWorker.getRegistrations().then(r=>{for(let s of r)s.unregister()})}` }} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TY81JM0FMP" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TY81JM0FMP');
        `}</Script>
      </body>
    </html>
  );
}
