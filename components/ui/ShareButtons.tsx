"use client";

import { useState, useCallback } from "react";

interface ShareButtonsProps {
  title: string;
  description?: string;
}

export function ShareButtons({ title, description }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getUrl = useCallback(() => {
    if (typeof window !== "undefined") return window.location.href;
    return "";
  }, []);

  const handleNativeShare = async () => {
    try {
      await navigator.share({ title, text: description, url: getUrl() });
    } catch {
      // cancelled
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // no clipboard
    }
  };

  const handlePrint = () => window.print();

  const hasNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {hasNativeShare && (
        <button
          type="button"
          onClick={handleNativeShare}
          className="text-xs px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors"
        >
          공유
        </button>
      )}
      <button
        type="button"
        onClick={handleCopyUrl}
        className="text-xs px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors"
      >
        {copied ? "복사됨" : "URL 복사"}
      </button>
      <button
        type="button"
        onClick={handlePrint}
        className="text-xs px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-slate-200 transition-colors"
      >
        인쇄 / PDF
      </button>
    </div>
  );
}
