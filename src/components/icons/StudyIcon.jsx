export function StudyIcon({ className = 'h-12 w-12 text-purple-500' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="10"
        width="36"
        height="26"
        rx="6"
        className="fill-purple-100 stroke-purple-300"
        strokeWidth="2"
      />
      <path
        d="M12 18H30"
        className="stroke-purple-500"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M12 24H24"
        className="stroke-purple-400"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M18 32C20 35 22.5 36.5 24 37C25.5 36.5 28 35 30 32"
        className="stroke-amber-400"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

