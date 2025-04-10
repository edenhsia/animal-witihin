import { useState, type ReactNode } from 'react'
import { QuizContext } from '@/context/QuizContext'

export default function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<string[]>([])

  return (
    <QuizContext.Provider value={{ answers, setAnswers }}>
      {children}
    </QuizContext.Provider>
  )
}
