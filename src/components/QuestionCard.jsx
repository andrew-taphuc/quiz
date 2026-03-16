export function QuestionCard({ question, selectedOptionId, onSelect }) {
  return (
    <div className="mb-4 rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.6)]">
      <h2 className="mb-4 text-base font-semibold leading-relaxed text-slate-50 sm:text-lg">
        {question.question}
      </h2>
      <ul className="space-y-2">
        {question.options.map((opt) => (
          <li key={opt.id}>
            <button
              type="button"
              onClick={() => onSelect(question.id, opt.id)}
              className={`flex w-full items-start gap-3 rounded-xl border px-4 py-3 text-left text-sm transition 
                ${
                  selectedOptionId === opt.id
                    ? 'border-indigo-400 bg-indigo-500/15 text-slate-50 shadow-sm'
                    : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                }`}
            >
              <span
                className={`mt-1 inline-flex h-4 w-4 flex-none items-center justify-center rounded-full border text-[10px]
                  ${
                    selectedOptionId === opt.id
                      ? 'border-indigo-400 bg-indigo-500 text-white'
                      : 'border-slate-500 bg-slate-900 text-slate-400'
                  }`}
              >
                {selectedOptionId === opt.id ? '●' : ''}
              </span>
              <span className="text-[0.95rem] leading-relaxed text-slate-100">
                {opt.text}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

