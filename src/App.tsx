import { ThemeToggle } from './components/ThemeToggle'
import ThemeProvider from './providers/ThemeProvider'
import Quiz from './components/Quiz'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />

      <main className="min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
    </ThemeProvider>
  )
}
