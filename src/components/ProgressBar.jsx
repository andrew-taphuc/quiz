export function ProgressBar({ current, total }) {
  if (!total) return null
  const percent = ((current + 1) / total) * 100

  return (
    <div className="mb-4 h-2.5 w-full overflow-hidden rounded-full bg-slate-800/80">
      <div
        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 shadow-[0_0_18px_rgba(56,189,248,0.7)] transition-[width] duration-300"
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}

