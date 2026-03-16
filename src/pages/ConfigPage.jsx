import { StudyIcon } from '../components/icons/StudyIcon'

export function ConfigPage({ quiz }) {
  const {
    TYPES,
    filteredByType,
    count,
    setCount,
    maxCount,
    type,
    setType,
    handleStart,
    viewMode,
    setViewMode,
    mode,
    setMode,
    practiceSource,
    setPracticeSource,
    practiceRevealMode,
    setPracticeRevealMode,
  } = quiz

  const options = [10, 20, 30, 40, 50].filter((n) => n <= maxCount)

  return (
    <div className="space-y-7">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-slate-900/80 p-3 ring-1 ring-indigo-500/40">
          <StudyIcon className="h-10 w-10 text-indigo-400" />
        </div>
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-50">
            Bắt đầu một bộ đề mới
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            Chọn số lượng câu hỏi và chủ đề phù hợp với tốc độ ôn tập của bạn.
          </p>
        </div>
      </div>

      <div className="space-y-5 rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.6)]">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
            Cấu hình đề thi
          </h2>
          <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] text-slate-300">
            Tối đa {maxCount} câu trong ngân hàng
          </span>
        </div>

        <div className="space-y-3">
          <div className="space-y-1 text-sm">
            <label className="font-medium text-slate-200">Số câu hỏi</label>
            <select
              className="w-full rounded-xl border border-slate-700 bg-slate-900/90 px-3 py-2 text-sm text-slate-100 shadow-sm outline-none ring-1 ring-transparent focus:border-indigo-400 focus:ring-indigo-500/40"
              value={Math.min(count, maxCount)}
              onChange={(e) => setCount(Number(e.target.value))}
            >
              {options.map((n) => (
                <option key={n} value={n}>
                  {n} câu
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1 text-sm">
            <label className="font-medium text-slate-200">Loại câu hỏi</label>
            <div className="grid grid-cols-3 gap-2">
              {TYPES.map((t) => (
                <button
                  key={t.value}
                  type="button"
                  onClick={() => setType(t.value)}
                  className={`w-full rounded-full border px-2 py-1.5 text-[11px] font-medium transition ${
                    type === t.value
                      ? 'border-indigo-400 bg-indigo-500/15 text-indigo-200 shadow-sm'
                      : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label className="font-medium text-slate-200">Cách hiển thị đề</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setViewMode('single')}
                className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                  viewMode === 'single'
                    ? 'border-indigo-400 bg-indigo-500/15 text-indigo-200 shadow-sm'
                    : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                }`}
              >
                Từng câu
              </button>
              <button
                type="button"
                onClick={() => setViewMode('all')}
                className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                  viewMode === 'all'
                    ? 'border-indigo-400 bg-indigo-500/15 text-indigo-200 shadow-sm'
                    : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                }`}
              >
                Cả đề dọc
              </button>
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label className="font-medium text-slate-200">Chế độ làm bài</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setMode('exam')}
                className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                  mode === 'exam'
                    ? 'border-indigo-400 bg-indigo-500/15 text-indigo-200 shadow-sm'
                    : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                }`}
              >
                Thi thử
              </button>
              <button
                type="button"
                onClick={() => setMode('practice')}
                className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                  mode === 'practice'
                    ? 'border-indigo-400 bg-indigo-500/15 text-indigo-200 shadow-sm'
                    : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                }`}
              >
                Ôn tập
              </button>
            </div>
          </div>

          {mode === 'practice' && (
            <>
              <div className="space-y-1 text-sm">
                <label className="font-medium text-slate-200">
                  Nguồn câu hỏi ôn tập
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPracticeSource('random')}
                    className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                      practiceSource === 'random'
                        ? 'border-indigo-400 bg-indigo-500/15 text-indigo-200 shadow-sm'
                        : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                    }`}
                  >
                    Ngẫu nhiên theo số lượng
                  </button>
                  <button
                    type="button"
                    onClick={() => setPracticeSource('all')}
                    className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                      practiceSource === 'all'
                        ? 'border-indigo-400 bg-indigo-500/15 text-indigo-200 shadow-sm'
                        : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                    }`}
                  >
                    Tất cả câu trong thư viện
                  </button>
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <label className="font-medium text-slate-200">
                  Cách hiển thị đáp án
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPracticeRevealMode('full')}
                    className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                      practiceRevealMode === 'full'
                        ? 'border-indigo-400 bg-indigo-500/15 text-indigo-200 shadow-sm'
                        : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                    }`}
                  >
                    Đúng/sai từng lựa chọn
                  </button>
                  <button
                    type="button"
                    onClick={() => setPracticeRevealMode('onlyCorrect')}
                    className={`rounded-xl border px-3 py-2 text-xs font-medium transition ${
                      practiceRevealMode === 'onlyCorrect'
                        ? 'border-indigo-400 bg-indigo-500/15 text-indigo-200 shadow-sm'
                        : 'border-slate-700 bg-slate-900/80 text-slate-200 hover:border-indigo-400/60 hover:bg-slate-800'
                    }`}
                  >
                    Chỉ tô đáp án đúng
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        <p className="text-xs text-slate-400">
          Có{' '}
          <span className="font-semibold text-indigo-300">
            {filteredByType.length}
          </span>{' '}
          câu{' '}
          {type !== 'tất cả' ? (
            <span className="italic text-slate-300">({type})</span>
          ) : null}{' '}
          —{' '}
          {mode === 'practice'
            ? practiceSource === 'all'
              ? 'sẽ ôn tập lần lượt toàn bộ.'
              : 'sẽ ôn tập ngẫu nhiên theo số lượng đã chọn.'
            : 'hệ thống sẽ chọn ngẫu nhiên cho đề thi.'}
        </p>

        <button
          type="button"
          onClick={handleStart}
          className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(79,70,229,0.6)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Bắt đầu làm bài ngay
          <span className="inline-block rounded-full bg-slate-950/10 px-2 py-0.5 text-[10px] font-medium">
            Đề ngẫu nhiên, không trùng lặp
          </span>
        </button>
      </div>
    </div>
  )
}

