import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, GUIDE_SLUGS } from "@/data/guides";
import { NextQuestions } from "@/components/layout/NextQuestions";

export async function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "가이드를 찾을 수 없습니다" };
  return { title: guide.title, description: guide.description };
}

function renderBody(body: string) {
  const paragraphs = body.split("\n\n");
  return paragraphs.map((para, j) => {
    const lines = para.split("\n");
    const isBulletBlock = lines.every((l) => l.trimStart().startsWith("•"));

    if (isBulletBlock) {
      return (
        <ul key={j} className="space-y-1.5 pl-1">
          {lines.map((line, k) => (
            <li key={k} className="flex gap-2 text-[15px] text-slate-600 leading-relaxed">
              <span className="text-blue-500 shrink-0 mt-0.5">•</span>
              <span>{line.replace(/^•\s*/, "")}</span>
            </li>
          ))}
        </ul>
      );
    }

    return (
      <p key={j} className="text-[15px] text-slate-600 leading-relaxed">
        {para}
      </p>
    );
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const relatedGuides = guide.relatedGuides
    .map((s) => getGuideBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getGuideBySlug>>[];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      {/* 헤더 */}
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">가이드</p>
        <h1 className="text-2xl font-bold text-slate-900 leading-snug">{guide.title}</h1>
        <p className="text-[15px] text-slate-500 leading-relaxed">{guide.description}</p>
        <p className="text-xs text-slate-400">마지막 업데이트: {guide.updatedAt}</p>
      </header>

      {/* 관련 계산기 CTA */}
      {guide.relatedCalculator && (
        <Link
          href={guide.relatedCalculator.href}
          className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 hover:border-blue-400 hover:bg-blue-100 transition-colors group"
        >
          <span className="text-sm text-blue-700 group-hover:text-blue-800 font-medium">
            🧮 {guide.relatedCalculator.label}
          </span>
          <span className="text-blue-400 group-hover:text-blue-600">→</span>
        </Link>
      )}

      {/* 본문 */}
      <article className="space-y-8">
        {guide.sections.map((section, i) => (
          <section key={i} className="space-y-3">
            {section.heading && (
              <h2 className="text-lg font-bold text-slate-900 border-l-2 border-blue-500 pl-3">
                {section.heading}
              </h2>
            )}
            <div className="space-y-3">
              {renderBody(section.body)}
            </div>
          </section>
        ))}
      </article>

      {/* FAQ */}
      {guide.faq && guide.faq.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-base font-bold text-slate-900 border-l-2 border-blue-500 pl-3">
            자주 묻는 질문
          </h2>
          <div className="space-y-3">
            {guide.faq.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-2">
                <p className="text-sm font-semibold text-slate-800">Q. {item.q}</p>
                <p className="text-[15px] text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {relatedGuides.length > 0 && (
        <NextQuestions
          title="관련 가이드"
          questions={relatedGuides.map((g) => ({
            text: g.title,
            href: `/guide/${g.slug}`,
            type: "guide" as const,
          }))}
        />
      )}
    </div>
  );
}
