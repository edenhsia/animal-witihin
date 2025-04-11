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
import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

export default function Result() {
  const { t } = useTranslation()
  const { answers } = useQuizContext()

  const finalScore = useMemo(() => calcFinalScore(answers), [answers])
  const bestMatchAnimal = useMemo(
    () => getBestMatchAnimal(finalScore),
    [finalScore]
  )

  const radarData = [
    { subject: t('result.traits.activity'), value: finalScore.activity },
    {
      subject: t('result.traits.friendliness'),
      value: finalScore.friendliness,
    },
    {
      subject: t('result.traits.intelligence'),
      value: finalScore.intelligence,
    },
    {
      subject: t('result.traits.independence'),
      value: finalScore.independence,
    },
    { subject: t('result.traits.curiosity'), value: finalScore.curiosity },
  ]

  if (!answers || answers.length !== 10) {
    return <Navigate to="/" replace />
  }

  return (
    <Card className="p-6 w-full max-w-xl space-y-6">
      <h2 className="text-xl font-bold text-center">
        {t('result.title', { animal: t(bestMatchAnimal.name) })}
      </h2>

      <div className="flex items-center justify-center">
        <img src={bestMatchAnimal.image} className="w-1/2 rounded-xl mr-2" />
        <div className="w-1/2 h-40 flex-shrink-0">
          <ResponsiveContainer>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#a1a1aa" />
              <PolarAngleAxis dataKey="subject" className="text-xs" />
              <Radar
                name="You"
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
      <p>{t(bestMatchAnimal.personality)}</p>

      <Button asChild className="w-full max-w-xs mx-auto">
        <Link to="/">{t('result.retake')}</Link>
      </Button>
    </Card>
  )
}
