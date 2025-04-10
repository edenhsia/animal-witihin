import { ThemeToggle } from './components/ThemeToggle'
import ThemeProvider from './providers/ThemeProvider'
import { Routes, Route } from 'react-router'
import Intro from './components/Intro'
import Quiz from './components/Quiz'
import Result from './components/Result'

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />

      <main className="min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>
    </ThemeProvider>
  )
}
