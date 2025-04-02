import { ThemeToggle } from './components/ThemeToggle'
import ThemeProvider from './providers/ThemeProvider'
import QuizQuestion from './components/QuizQuestion'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />

      <main className="min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/quiz" element={<QuizQuestion />} />
        </Routes>
      </main>
    </ThemeProvider>
  )
}
