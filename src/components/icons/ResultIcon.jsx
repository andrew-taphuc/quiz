export function ResultIcon({ mood, className = 'h-16 w-16' }) {
  if (mood === 'great') {
    return (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="32"
          cy="32"
          r="24"
          className="fill-yellow-100 stroke-amber-300"
          strokeWidth="2"
        />
        <path
          d="M24 28C24 26.895 24.895 26 26 26C27.105 26 28 26.895 28 28"
          className="stroke-amber-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M36 28C36 26.895 36.895 26 38 26C39.105 26 40 26.895 40 28"
          className="stroke-amber-500"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 38C26.5 40 29 41 32 41C35 41 37.5 40 40 38"
          className="stroke-amber-500"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M32 14L34.4 20H40.8L35.6 23.9L38 30L32 26.4L26 30L28.4 23.9L23.2 20H29.6L32 14Z"
          className="fill-amber-400 stroke-amber-500"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (mood === 'good') {
    return (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="14"
          y="12"
          width="36"
          height="40"
          rx="6"
          className="fill-sky-100 stroke-sky-300"
          strokeWidth="2"
        />
        <path
          d="M22 24H34"
          className="stroke-sky-500"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M22 30H38"
          className="stroke-sky-400"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M22 36H34"
          className="stroke-sky-400"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M20 16L24 12"
          className="stroke-sky-400"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M30 46L37 33L44 46"
          className="stroke-emerald-500"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 41L36 44L43 35"
          className="stroke-emerald-500"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="22"
        className="fill-purple-100 stroke-purple-300"
        strokeWidth="2"
      />
      <path
        d="M23 27C23.5 26 24.5 25.4 25.6 25.4C26.7 25.4 27.7 26 28.2 27"
        className="stroke-purple-500"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M35.8 27C36.3 26 37.3 25.4 38.4 25.4C39.5 25.4 40.5 26 41 27"
        className="stroke-purple-500"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 40C26 38.5 28.5 37.7 31 37.7C33.5 37.7 36 38.5 38 40"
        className="stroke-purple-500"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M18 20L20 22L24 18"
        className="stroke-emerald-500"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

