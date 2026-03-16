export function ReviewPage({ quiz }) {
  const { generatedQuiz, answers, setScreen } = quiz

  if (!generatedQuiz.length) {
    setScreen('config')
    return null
  }

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            Xem lại bài làm
          </p>
          <h1 className="text-lg font-semibold text-slate-50">
            Đáp án đúng màu xanh, chọn sai màu đỏ
          </h1>
        </div>
        <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300 ring-1 ring-slate-700">
          {generatedQuiz.length} câu hỏi
        </span>
      </div>

      <div className="max-h-[60vh] space-y-4 overflow-y-auto pr-1">
        {generatedQuiz.map((q, idx) => {
          const userAnswer = answers[q.id]
          const isCorrect = userAnswer === q.correct_answer

          return (
            <div
              key={q.id}
              className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.6)]"
            >
              <div className="mb-3 flex items-center justify-between text-[11px] text-slate-300">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/70 px-2.5 py-0.5 ring-1 ring-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                  Câu {idx + 1}
                </span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${
                    isCorrect
                      ? 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40'
                      : 'bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/40'
                  }`}
                >
                  {isCorrect ? 'Trả lời đúng' : 'Trả lời sai'}
                </span>
              </div>

              <h2 className="mb-3 text-sm font-semibold leading-relaxed text-slate-50 sm:text-base">
                {q.question}
              </h2>

              <ul className="space-y-2 text-sm">
                {q.options.map((opt) => {
                  const isCorrectOption = opt.id === q.correct_answer
                  const isUserChosen = opt.id === userAnswer

                  let optionClass =
                    'border-slate-700 bg-slate-900/80 text-slate-200'
                  if (isCorrectOption) {
                    optionClass =
                      'border-emerald-500/70 bg-emerald-500/10 text-emerald-100'
                  } else if (isUserChosen && !isCorrectOption) {
                    optionClass =
                      'border-rose-500/70 bg-rose-500/10 text-rose-100'
                  }

                  return (
                    <li key={opt.id}>
                      <div
                        className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm ${optionClass}`}
                      >
                        <span
                          className={`mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full border text-[10px] ${
                            isCorrectOption
                              ? 'border-emerald-400 bg-emerald-500 text-white'
                              : isUserChosen && !isCorrectOption
                              ? 'border-rose-400 bg-rose-500 text-white'
                              : 'border-slate-500 bg-slate-900 text-slate-400'
                          }`}
                        >
                          {isCorrectOption ? '✓' : isUserChosen ? '✗' : ''}
                        </span>
                        <span className="text-[0.95rem] leading-relaxed">
                          {opt.text}
                        </span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={() => setScreen('result')}
          className="inline-flex w-1/2 flex-1 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition hover:border-slate-600 hover:bg-slate-800"
        >
          Quay lại kết quả
        </button>
        <button
          type="button"
          onClick={() => setScreen('config')}
          className="inline-flex w-1/2 flex-1 items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:brightness-110"
        >
          Làm đề mới
        </button>
      </div>
    </div>
  )
}

