export function QuizLayout({ children }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] border border-slate-800/70 bg-slate-950/80 p-[1px] shadow-[0_30px_80px_rgba(15,23,42,0.9)] backdrop-blur-xl">
        <div className="absolute inset-x-20 top-0 h-32 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.3),transparent_65%)] opacity-80" />
        <div className="relative flex flex-col gap-6 rounded-[1.9rem] bg-gradient-to-b from-slate-950/95 via-slate-950/98 to-slate-950/95 px-6 py-6 sm:px-8 sm:py-7">
          <header className="flex flex-col gap-3 border-b border-slate-800/80 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-900/80 ring-1 ring-indigo-500/40">
                <span className="text-sm font-semibold text-indigo-300">QZ</span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Ôn thi vui vẻ
                </p>
                <p className="text-sm text-slate-400">
                  Bộ đề trắc nghiệm khoa học dữ liệu, giao diện mới hiện đại.
                </p>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-400 sm:mt-0">
              <span className="inline-flex h-6 items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900/70 px-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="font-medium text-slate-200">Tập trung ôn luyện</span>
              </span>
            </div>
          </header>

          <main className="relative">{children}</main>

          <footer className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
            <span>Gợi ý: Làm lại nhiều lần để ghi nhớ tốt hơn.</span>
            <span className="hidden sm:inline text-slate-600">
              Made for learners of data & AI.
            </span>
          </footer>
        </div>
      </div>
    </div>
  )
}

