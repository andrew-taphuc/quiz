import { useEffect, useMemo, useState } from 'react'

const TYPES = [
  { value: 'tất cả', label: 'Tất cả' },
  { value: 'cơ bản', label: 'Cơ bản' },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function useQuizEngine() {
  const [allQuestions, setAllQuestions] = useState([])
  const [loading, setLoading] = useState(true)
  const [screen, setScreen] = useState('config')
  const [count, setCount] = useState(5)
  const [type, setType] = useState('tất cả')
  const [generatedQuiz, setGeneratedQuiz] = useState([])
  const [answers, setAnswers] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState('single') // 'single' | 'all'
  const [mode, setMode] = useState('exam') // 'exam' | 'practice'
  const [practiceSource, setPracticeSource] = useState('random') // 'random' | 'all'
  const [practiceRevealMode, setPracticeRevealMode] = useState('full') // 'full' | 'onlyCorrect'

  useEffect(() => {
    fetch('/quiz.json')
      .then((res) => res.json())
      .then((data) => {
        setAllQuestions(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const filteredByType = useMemo(
    () =>
      type === 'tất cả'
        ? allQuestions
        : allQuestions.filter((q) => q.type === type),
    [allQuestions, type],
  )

  const maxCount = useMemo(
    () => Math.min(50, Math.max(1, filteredByType.length || 1)),
    [filteredByType.length],
  )

  const handleStart = () => {
    if (mode === 'practice') {
      let quizQuestions = filteredByType
      if (practiceSource === 'random') {
        const pool = shuffle(filteredByType)
        const take = Math.min(count, pool.length)
        quizQuestions = pool.slice(0, take)
      }

      setGeneratedQuiz(quizQuestions)
      setAnswers({})
      setCurrentIndex(0)
      setScreen('practice')
      return
    }

    const pool = shuffle(filteredByType)
    const take = Math.min(count, pool.length)
    setGeneratedQuiz(pool.slice(0, take))
    setAnswers({})
    setCurrentIndex(0)
    setScreen('quiz')
  }

  const setAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
  }

  const handleNext = () => {
    setCurrentIndex((idx) => Math.min(idx + 1, generatedQuiz.length - 1))
  }

  const handlePrev = () => {
    setCurrentIndex((idx) => Math.max(idx - 1, 0))
  }

  const handleSubmit = () => {
    setScreen('result')
  }

  const resetToConfig = () => {
    setScreen('config')
    setGeneratedQuiz([])
    setAnswers({})
    setCurrentIndex(0)
    setViewMode('single')
    setMode('exam')
  }

  const score = useMemo(
    () =>
      generatedQuiz.filter((q) => answers[q.id] === q.correct_answer).length,
    [generatedQuiz, answers],
  )

  const total = generatedQuiz.length
  const percent = total ? Math.round((score / total) * 100) : 0

  return {
    TYPES,
    loading,
    screen,
    setScreen,
    allQuestions,
    filteredByType,
    count,
    setCount,
    maxCount,
    type,
    setType,
    generatedQuiz,
    currentIndex,
    answers,
    setAnswer,
    handleNext,
    handlePrev,
    handleSubmit,
    handleStart,
    resetToConfig,
    viewMode,
    setViewMode,
    mode,
    setMode,
    practiceSource,
    setPracticeSource,
    practiceRevealMode,
    setPracticeRevealMode,
    score,
    total,
    percent,
  }
}

