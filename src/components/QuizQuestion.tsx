import { Card } from './ui/card'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'
import { quizData } from '@/data/quizData'

export default function QuizQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  function handleAnserQuestion(index: number) {
    setSelectedIndex(index)

    if (currentQuestion < quizData.length - 1) {
      setTimeout(() => {
        setCurrentQuestion((prev) => (prev += 1))
      }, 1000)

      return
    }

    // TODO: direct to result page
  }

  function handleBack() {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => (prev -= 1))
    }
  }

  useEffect(() => {
    setSelectedIndex(null)
  }, [currentQuestion])

  return (
    <Card className="p-6 w-full max-w-xl">
      <h2>{quizData[currentQuestion].question}</h2>
      <div className="space-y-3">
        {quizData[currentQuestion].options.map((option, index) => {
          return (
            <Button
              key={index}
              variant={selectedIndex === index ? 'default' : 'outline'}
              className="w-full"
              onClick={() => handleAnserQuestion(index)}
            >
              {option.text}
            </Button>
          )
        })}
      </div>

      <div className="pt-4 flex items-center">
        {currentQuestion >= 1 && (
          <Button variant="secondary" onClick={handleBack}>
            ⬅️ 返回
          </Button>
        )}
        <div className="text-sm text-zinc-400 ml-auto">
          {currentQuestion + 1} / {quizData.length}
        </div>
      </div>
    </Card>
  )
}
