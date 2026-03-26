"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

const CONSENT_KEY = "chagyebu_cookie_consent";

export function CookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored === "true") setConsent(true);
      else if (stored === "false") setConsent(false);
    } catch {
      // Private browsing or storage disabled — show banner
    }
  }, []);

  function accept() {
    try { localStorage.setItem(CONSENT_KEY, "true"); } catch {}
    setConsent(true);
  }

  function decline() {
    try { localStorage.setItem(CONSENT_KEY, "false"); } catch {}
    setConsent(false);
  }

  return (
    <>
      {consent === true && (
        <>
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7755590920394652"
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TY81JM0FMP"
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TY81JM0FMP');
          `}</Script>
        </>
      )}

      {consent === null && (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 bg-white border-t border-slate-200 shadow-lg">
          <div className="mx-auto max-w-3xl flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <p className="text-sm text-slate-600 flex-1">
              이 사이트는 서비스 개선과 광고를 위해 쿠키를 사용합니다.{" "}
              <a href="/privacy" className="text-blue-600 underline">개인정보처리방침</a>
            </p>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                거부
              </button>
              <button
                onClick={accept}
                className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                동의
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
