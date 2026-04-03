import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기",
  description: "계산 오류 제보, 기능 제안, 기타 문의를 남겨주세요.",
  alternates: {
    canonical: "https://chagyebu.co.kr/contact",
  },
};

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdyPTKhyb3auX4zUivjvA8c-T5sXbeil_2q-V005XUiQYkDDA/viewform?embedded=true";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 space-y-8">
      <header className="space-y-2">
        <p className="text-sm text-blue-600 font-medium">문의</p>
        <h1 className="text-2xl font-bold text-slate-900">문의하기</h1>
        <p className="text-[15px] text-slate-500">
          계산 오류 제보, 기능 제안, 기타 문의를 남겨주세요.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
        <iframe
          src={GOOGLE_FORM_URL}
          width="100%"
          height="700"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="차계부 문의하기"
          className="block"
        >
          Loading…
        </iframe>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <div className="bg-slate-50 rounded-xl p-5">
          <div className="font-semibold text-slate-900 mb-1">오류 제보</div>
          <p className="text-slate-500">
            계산 결과가 실제와 다르거나 데이터 오류를 발견하셨다면 알려주세요.
            빠르게 확인 후 수정하겠습니다.
          </p>
        </div>
        <div className="bg-slate-50 rounded-xl p-5">
          <div className="font-semibold text-slate-900 mb-1">기능 제안</div>
          <p className="text-slate-500">
            필요한 계산기나 개선 아이디어가 있으시면 제안해 주세요.
            사용자 피드백을 적극 반영하고 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
