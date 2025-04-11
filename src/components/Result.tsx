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
import { useMemo, useRef } from 'react'
import { toPng } from 'html-to-image'
import { toast } from 'sonner'

export default function Result() {
  const { t } = useTranslation()
  const { answers } = useQuizContext()

  const resultRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
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

  async function handleDownload() {
    if (!resultRef.current) return

    try {
      if (buttonRef.current) buttonRef.current.style.display = 'none'

      await new Promise((resolve) => setTimeout(resolve, 100))

      const dataUrl = await toPng(resultRef.current)
      const link = document.createElement('a')
      link.download = 'animal-within-result.png'
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('image download failed', err)
      toast.error(t('result.download_failed'))
    } finally {
      if (buttonRef.current) buttonRef.current.style.display = 'block'
    }
  }

  if (!answers || answers.length !== 10) {
    return <Navigate to="/" replace />
  }

  return (
    <Card ref={resultRef} className="p-6 w-full max-w-xl space-y-6">
      <h2 className="text-xl font-bold text-center">
        {t('result.title', { animal: t(bestMatchAnimal.name) })}
      </h2>

      <div className="flex items-center justify-center">
        <img src={bestMatchAnimal.image} className="w-1/2 rounded-xl mr-2" />
        <div className="w-1/2 h-40 flex-shrink-0">
          <ResponsiveContainer>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#a1a1aa" />
              <PolarAngleAxis
                dataKey="subject"
                style={{
                  fontSize: '0.75rem',
                }}
              />
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

      <div ref={buttonRef} className="max-w-xs mx-auto space-y-3">
        <Button className="w-full" onClick={handleDownload}>
          {t('result.download_image')}
        </Button>
        <Button asChild variant="outline" className="w-full">
          <Link to="/">{t('result.retake')}</Link>
        </Button>
      </div>
    </Card>
  )
}
