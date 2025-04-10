import { Card } from './ui/card'
import { Button } from './ui/button'
import { Link } from 'react-router'
import { useQuizContext } from '@/hooks/useQuizContext'
import { calcFinalScore, getBestMatchAnimal } from '@/utils/score'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { Navigate } from 'react-router'

export default function Result() {
  const { answers } = useQuizContext()

  const finalScore = calcFinalScore(answers)
  const bestMatchAnimal = getBestMatchAnimal(finalScore)

  const radarData = [
    { subject: '活力', value: finalScore.activity },
    { subject: '友善', value: finalScore.friendliness },
    { subject: '智慧', value: finalScore.intelligence },
    { subject: '獨立', value: finalScore.independence },
    { subject: '好奇', value: finalScore.curiosity },
  ]

  if (!answers || answers.length !== 10) {
    return <Navigate to="/" replace />
  }

  return (
    <Card className="p-6 w-full max-w-xl space-y-6">
      <h2 className="text-xl font-bold text-center">
        你最像的動物是 🐾 {bestMatchAnimal.name}
      </h2>

      <div className="flex items-center justify-center">
        <img src={bestMatchAnimal.image} className="w-64 rounded-xl mr-4" />
        <div className="w-full h-50 max-w-64 flex-shrink-0">
          <ResponsiveContainer>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#a1a1aa" />
              <PolarAngleAxis dataKey="subject" />
              <Radar
                name="你"
                dataKey="value"
                stroke="#e67300"
                fill="#e67300"
                fillOpacity={0.7}
                animationBegin={300}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p>{bestMatchAnimal.personality}</p>

      <Button asChild className="w-full max-w-xs mx-auto">
        <Link to="/">重新測驗</Link>
      </Button>
    </Card>
  )
}
