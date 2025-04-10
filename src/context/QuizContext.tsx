import { createContext } from 'react'

type QuizContextType = {
  answers: string[]
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>
}

export const QuizContext = createContext<QuizContextType>({
  answers: [],
  setAnswers: () => null,
})
