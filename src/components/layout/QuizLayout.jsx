import { useEffect, useState } from 'react'

export function QuizLayout({ children }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved =
      window.localStorage.getItem('quiz-theme') ||
      (window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
        ? 'light'
        : 'dark')

    setTheme(saved === 'light' ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    const body = document.body
    body.classList.remove('theme-dark', 'theme-light')
    body.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark')
    window.localStorage.setItem('quiz-theme', theme)
  }, [theme])

  const isLight = theme === 'light'

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div
        className={`relative w-full max-w-4xl overflow-hidden rounded-[2rem] border p-[1px] backdrop-blur-xl ${
          isLight
            ? 'border-slate-200/80 bg-slate-50/90 shadow-[0_30px_80px_rgba(148,163,184,0.6)]'
            : 'border-slate-800/70 bg-slate-950/80 shadow-[0_30px_80px_rgba(15,23,42,0.9)]'
        }`}
      >
        <div
          className={`absolute inset-x-20 top-0 h-32 opacity-80 ${
            isLight
              ? 'bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),transparent_65%)]'
              : 'bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.3),transparent_65%)]'
          }`}
        />
        <div
          className={`relative flex flex-col gap-6 rounded-[1.9rem] px-6 py-6 sm:px-8 sm:py-7 ${
            isLight
              ? 'bg-gradient-to-b from-slate-50 via-white to-slate-50'
              : 'bg-gradient-to-b from-slate-950/95 via-slate-950/98 to-slate-950/95'
          }`}
        >
          <header
            className={`flex flex-col gap-3 border-b pb-4 sm:flex-row sm:items-center sm:justify-between ${
              isLight ? 'border-slate-200/80' : 'border-slate-800/80'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`inline-flex h-9 w-9 items-center justify-center rounded-2xl ring-1 ${
                  isLight
                    ? 'bg-slate-100 ring-indigo-400/50'
                    : 'bg-slate-900/80 ring-indigo-500/40'
                }`}
              >
                <span
                  className={`text-sm font-semibold ${
                    isLight ? 'text-indigo-500' : 'text-indigo-300'
                  }`}
                >
                  QZ
                </span>
              </div>
              <div>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                    isLight ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  Ôn thi vui vẻ
                </p>
                <p
                  className={`text-sm ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  Bộ đề trắc nghiệm khoa học dữ liệu & Python.
                </p>
              </div>
            </div>
            <div className="mt-1 flex items-center gap-2 text-[11px] sm:mt-0">
              <span
                className={`inline-flex h-6 items-center gap-1 rounded-full border px-2.5 ${
                  isLight
                    ? 'border-slate-200 bg-slate-50 text-slate-700'
                    : 'border-slate-700/70 bg-slate-900/70 text-slate-200'
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isLight ? 'bg-emerald-500' : 'bg-emerald-400'
                  }`}
                />
                <span className="font-medium">
                  Tập trung ôn luyện
                </span>
              </span>
              <button
                type="button"
                onClick={() => setTheme(isLight ? 'dark' : 'light')}
                className={`inline-flex h-6 items-center gap-1 rounded-full border px-2.5 text-[11px] font-medium transition ${
                  isLight
                    ? 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300'
                    : 'border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-500'
                }`}
              >
                <span className="font-mono">
                  {isLight ? '☀ light' : '🌙 dark'}
                </span>
              </button>
            </div>
          </header>

          <main className="relative">{children}</main>

          <footer
            className={`mt-1 flex items-center justify-between text-[11px] ${
              isLight ? 'text-slate-500' : 'text-slate-500'
            }`}
          >
            <span>Gợi ý: Làm lại nhiều lần để ghi nhớ tốt hơn.</span>
            <span
              className={`hidden sm:inline ${
                isLight ? 'text-slate-500' : 'text-slate-600'
              }`}
            >
              Made for learners of data & AI.
            </span>
          </footer>
        </div>
      </div>
    </div>
  )
}

