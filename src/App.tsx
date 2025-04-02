import { ThemeToggle } from './components/ThemeToggle'
import ThemeProvider from './providers/ThemeProvider'
import QuizQuestion from './components/QuizQuestion'

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <main className="min-h-screen flex items-center justify-center">
        <QuizQuestion />
      </main>
    </ThemeProvider>
  )
}
