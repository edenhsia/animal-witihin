import { Card } from './ui/card'
import { Button } from './ui/button'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

import { calcFinalScore, getBestMatchAnimal } from '@/utils/score'

export default function Result() {
  const { answers } = useSelector((state: RootState) => state.quiz)

  const finalScore = calcFinalScore(answers)
  const bestMatchAnimal = getBestMatchAnimal(finalScore)

  return (
    <Card className="p-6 w-full max-w-xl">
      <h2 className="text-xl font-bold text-center">
        你最像的動物是 🐾 {bestMatchAnimal.name}
      </h2>

      <img src={bestMatchAnimal.image} className="w-64 rounded-xl mx-auto" />
      <p>{bestMatchAnimal.personality}</p>

      <Button asChild>
        <Link to="/">重新測驗</Link>
      </Button>
    </Card>
  )
}
