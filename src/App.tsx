import { ThemeToggle } from './components/ThemeToggle'
import ThemeProvider from './providers/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <h1>Vite</h1>
    </ThemeProvider>
  )
}
