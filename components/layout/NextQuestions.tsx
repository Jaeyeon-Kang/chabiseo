import Link from "next/link";
import type { NextQuestion } from "@/types";

interface NextQuestionsProps {
  questions: NextQuestion[];
  title?: string;
}

const typeIcon: Record<NextQuestion["type"], string> = {
  calculator: "🧮",
  guide: "📖",
  compare: "⚖️",
};

export function NextQuestions({ questions, title = "다음 질문" }: NextQuestionsProps) {
  if (questions.length === 0) return null;

  return (
    <section className="mt-8">
      <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
        {title}
      </h3>
      <div className="grid gap-2">
        {questions.map((q) => (
          <Link
            key={q.href}
            href={q.href}
            className="flex items-center gap-3 p-4 bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm rounded-xl transition-all group shadow-sm"
          >
            <span className="text-lg">{typeIcon[q.type]}</span>
            <span className="text-[15px] text-slate-700 group-hover:text-blue-600 transition-colors flex-1">
              {q.text}
            </span>
            <span className="text-slate-300 group-hover:text-blue-400 transition-colors">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
