import Link from "next/link";

interface GuideCardProps {
  slug: string;
  title: string;
  description: string;
}

export function GuideCard({ slug, title, description }: GuideCardProps) {
  return (
    <Link
      href={`/guide/${slug}`}
      className="group flex items-start justify-between gap-4 bg-slate-800 hover:bg-slate-700/80 border border-slate-700 hover:border-blue-600/50 rounded-2xl p-5 transition-all"
    >
      <div className="flex-1 min-w-0">
        <h2 className="text-base font-semibold text-slate-100 group-hover:text-blue-300 transition-colors leading-snug">
          {title}
        </h2>
        <p className="text-[15px] text-slate-400 mt-1.5 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
      <span className="text-slate-600 group-hover:text-blue-400 transition-colors self-center shrink-0 text-lg">
        →
      </span>
    </Link>
  );
}
