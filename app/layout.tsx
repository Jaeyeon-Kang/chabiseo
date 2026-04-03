import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { BASE_URL } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "차계부 — 자동차 비용 판단 가이드",
    template: "%s | 차계부",
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
  verification: {
    google: "google68c300082e77cfeb",
    other: { "naver-site-verification": ["49d17fcba635a42f4bf401a398e0e5e102c78f57"] },
  },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "차계부 — 자동차 비용 판단 가이드",
    description: "차 살 때·탈 때·정비할 때, 돈 문제를 숫자로 바로 이해하세요.",
    locale: "ko_KR",
    type: "website",
    siteName: "차계부",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "차계부 — 자동차 비용 판단 가이드" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "차계부 — 자동차 비용 판단 가이드",
    description: "차 살 때·탈 때·정비할 때, 돈 문제를 숫자로 바로 이해하세요.",
    images: ["/og-image.png"],
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
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
