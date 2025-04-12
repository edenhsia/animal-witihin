import LanguageToggle from './components/LanguageToggle'
import ThemeToggle from './components/ThemeToggle'
import ThemeProvider from './providers/ThemeProvider'
import QuizProvider from './providers/QuizProvider'
import { Routes, Route } from 'react-router'
import Intro from './components/Intro'
import Quiz from './components/Quiz'
import Result from './components/Result'

export default function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <LanguageToggle />
        <ThemeToggle />

        <main className="min-h-screen flex items-center justify-center">
          <div className="max-w-full px-4 py-16">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/result" element={<Result />} />
            </Routes>
          </div>
        </main>
      </QuizProvider>
    </ThemeProvider>
  )
}
