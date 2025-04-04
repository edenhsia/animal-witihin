import { Card } from './ui/card'
import { Button } from './ui/button'
import { useState, useEffect } from 'react'
import { quizData } from '@/data/quizData'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { answerQuestion } from '@/store/quizSlice'
import { useShuffledOptions } from '@/hooks/useShuffleOptions'

export default function Quiz() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const currentQuestionData = quizData[currentQuestion]
  const shuffledOptions = useShuffledOptions(currentQuestionData.options)

  function handleAnserQuestion(index: number) {
    const selectedOption = shuffledOptions[index]

    setSelectedIndex(index)
    dispatch(
      answerQuestion({
        questionIndex: currentQuestion,
        answerValue: selectedOption.value,
      })
    )

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion((prev) => (prev += 1))
        return
      }

      navigate('/result')
    }, 550)
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
      <h2>{currentQuestionData.question}</h2>
      <div className="space-y-3">
        {shuffledOptions.map((option, index) => {
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
