/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        quiz: {
          bg: '#fdf5ff',
          card: 'rgba(255,255,255,0.9)',
          primary: '#7c5cbf',
          primarySoft: '#9b7fd4',
          accent: '#e8a838',
        },
      },
    },
  },
  plugins: [],
}

