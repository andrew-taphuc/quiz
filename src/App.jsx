import { QuizLayout } from './components/layout/QuizLayout'
import { useQuizEngine } from './hooks/useQuizEngine'
import { ConfigPage } from './pages/ConfigPage'
import { QuizPage } from './pages/QuizPage'
import { ResultPage } from './pages/ResultPage'
import { ReviewPage } from './pages/ReviewPage'
import { PracticePage } from './pages/PracticePage'

function App() {
  const quiz = useQuizEngine()

  if (quiz.loading) {
    return (
      <QuizLayout>
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-slate-600">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-purple-200 border-t-purple-500" />
          <p>Đang tải câu hỏi...</p>
        </div>
      </QuizLayout>
    )
  }

  if (quiz.screen === 'config') {
    return (
      <QuizLayout>
        <ConfigPage quiz={quiz} />
      </QuizLayout>
    )
  }

  if (quiz.screen === 'quiz') {
    return (
      <QuizLayout>
        <QuizPage quiz={quiz} />
      </QuizLayout>
    )
  }

  if (quiz.screen === 'practice') {
    return (
      <QuizLayout>
        <PracticePage quiz={quiz} />
      </QuizLayout>
    )
  }

  if (quiz.screen === 'result') {
    return (
      <QuizLayout>
        <ResultPage quiz={quiz} />
      </QuizLayout>
    )
  }

  if (quiz.screen === 'review') {
    return (
      <QuizLayout>
        <ReviewPage quiz={quiz} />
      </QuizLayout>
    )
  }

  return null
}

export default App
