import { ResultIcon } from '../components/icons/ResultIcon'

export function ResultPage({ quiz }) {
  const { score, total, percent, generatedQuiz, answers, resetToConfig, setScreen } =
    quiz

  let mood = 'ok'
  if (percent >= 90) mood = 'great'
  else if (percent >= 70) mood = 'good'

  const messages = {
    great: [
      'Xuất sắc! Bạn đang làm rất tốt.',
      'Phong độ đỉnh cao, tiếp tục phát huy nhé!',
    ],
    good: [
      'Rất ổn! Chỉ cần luyện thêm một chút nữa.',
      'Bạn đang đi đúng hướng, cố lên!',
    ],
    ok: [
      'Mỗi lần làm là một lần tiến bộ.',
      'Đừng nản, ôn lại phần sai và thử lại nhé!',
    ],
  }

  const msg =
    messages[mood][Math.floor(Math.random() * messages[mood].length)]

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-4">
        <ResultIcon
          mood={mood}
          className="h-14 w-14 drop-shadow-[0_0_25px_rgba(251,191,36,0.65)]"
        />
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
            Kết quả bài làm
          </p>
          <h1 className="text-lg font-semibold text-slate-50">{msg}</h1>
        </div>
      </div>

      <div className="flex items-end justify-between rounded-2xl border border-slate-800/80 bg-slate-900/80 px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.6)]">
        <div>
          <p className="text-xs font-medium text-slate-400">Số câu đúng</p>
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-semibold text-indigo-400">
              {score}
            </span>
            <span className="text-sm font-medium text-slate-300">
              / {total} câu
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-medium text-slate-400">Tỷ lệ chính xác</p>
          <p className="text-xl font-semibold text-emerald-400">
            {percent}
            <span className="text-sm text-emerald-300">%</span>
          </p>
        </div>
      </div>

      <div className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4">
        <p className="text-xs font-medium text-slate-300">Chi tiết từng câu</p>
        <ul className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-3">
          {generatedQuiz.map((q, i) => {
            const correct = answers[q.id] === q.correct_answer
            return (
              <li
                key={q.id}
                className={`flex items-center justify-between rounded-full px-3 py-1 ${
                  correct
                    ? 'bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40'
                    : 'bg-rose-500/15 text-rose-300 ring-1 ring-rose-500/40'
                }`}
              >
                <span className="font-medium">Câu {i + 1}</span>
                <span className="text-[11px] font-semibold">
                  {correct ? 'Đúng' : 'Sai'}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setScreen('review')}
          className="inline-flex w-1/2 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-200 shadow-sm transition hover:border-slate-600 hover:bg-slate-800"
        >
          Xem lại bài làm
        </button>
        <button
          type="button"
          onClick={resetToConfig}
          className="inline-flex w-1/2 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition hover:brightness-110"
        >
          Làm đề khác
          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-900/70 bg-slate-900/40 text-[9px]">
            ↻
          </span>
        </button>
      </div>
    </div>
  )
}

