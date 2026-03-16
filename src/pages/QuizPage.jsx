import { ProgressBar } from '../components/ProgressBar'
import { QuestionCard } from '../components/QuestionCard'

export function QuizPage({ quiz }) {
  const {
    generatedQuiz,
    currentIndex,
    answers,
    setAnswer,
    handleNext,
    handlePrev,
    handleSubmit,
    viewMode,
  } = quiz

  const question = generatedQuiz[currentIndex]
  if (!question) return null

  if (viewMode === 'all') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 font-medium text-slate-100 ring-1 ring-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Cả đề — {generatedQuiz.length} câu hỏi
          </span>
          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-slate-700">
            Chạm vào từng câu để chọn đáp án
          </span>
        </div>

        <ProgressBar current={generatedQuiz.filter((q) => answers[q.id]).length - 1} total={generatedQuiz.length} />

        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
          {generatedQuiz.map((q, idx) => (
            <div key={q.id}>
              <div className="mb-1 flex items-center justify-between text-[11px] text-slate-400">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-0.5 ring-1 ring-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                  Câu {idx + 1}
                </span>
                <span className="rounded-full bg-slate-900/80 px-2.5 py-0.5 text-[10px] text-slate-300 ring-1 ring-slate-700">
                  {q.type}
                </span>
              </div>
              <QuestionCard
                question={q}
                selectedOptionId={answers[q.id]}
                onSelect={setAnswer}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-1">
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex min-w-[140px] items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 px-4 py-2.5 text-sm font-semibold text-emerald-950 shadow-md transition hover:brightness-110"
          >
            Nộp bài
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-emerald-900/40 bg-emerald-50/70 text-[9px]">
              ✓
            </span>
          </button>
        </div>
      </div>
    )
  }

  const selected = answers[question.id]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1 font-medium text-slate-100 ring-1 ring-slate-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Câu {currentIndex + 1} / {generatedQuiz.length}
        </span>
        <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300 ring-1 ring-slate-700">
          {question.type}
        </span>
      </div>

      <ProgressBar current={currentIndex} total={generatedQuiz.length} />

      <QuestionCard
        question={question}
        selectedOptionId={selected}
        onSelect={setAnswer}
      />

      <div className="flex gap-3 pt-1">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="inline-flex w-1/2 flex-1 items-center justify-center gap-1 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition hover:border-slate-600 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span className="inline-block h-4 w-4 rounded border border-slate-500" />
          Câu trước
        </button>
        {currentIndex < generatedQuiz.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex w-1/2 flex-1 items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:brightness-110"
          >
            Câu sau
            <span className="inline-block h-4 w-4 rounded-full border border-slate-900/70 bg-slate-900/40" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            className="inline-flex w-1/2 flex-1 items-center justify-center gap-1 rounded-xl bg-gradient-to-r from-emerald-400 to-lime-300 px-4 py-2.5 text-sm font-semibold text-emerald-950 shadow-md transition hover:brightness-110"
          >
            Nộp bài
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-emerald-900/40 bg-emerald-50/70 text-[9px]">
              ✓
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

