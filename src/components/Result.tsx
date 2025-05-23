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
import { downloadAsImage } from '@/utils/downloadAsImage'

export default function Result() {
  const { t } = useTranslation()
  const { answers } = useQuizContext()

  const hideRef = useRef<HTMLDivElement>(null)
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

  function handleDownload() {
    downloadAsImage({ elementId: 'result', hideRef })
  }

  if (!answers || answers.length !== 10) {
    return <Navigate to="/" replace />
  }

  return (
    <Card id="result" className="p-6 w-full max-w-xl">
      <h2 className="text-xl font-bold text-center">
        {t('result.title', { animal: t(bestMatchAnimal.name) })}
      </h2>

      <div className="md:flex md:items-center md:justify-center">
        <img
          src={bestMatchAnimal.image}
          className="w-60 mx-auto mb-6 rounded-xl md:w-1/2 md:mr-2 md:mb-0 md:ml-0"
        />
        <div className="mx-auto w-full h-60 md:w-1/2 md:h-36">
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
                name="Traits"
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

      <div ref={hideRef}>
        <p className="text-xs text-center text-white/80 mb-2">
          ⚠️ LINE／IG 等 App 內可能無法下載，建議使用瀏覽器重新操作
        </p>
        <div className="max-w-xs mx-auto space-y-3">
          <Button className="w-full" onClick={handleDownload}>
            {t('result.download_image')}
          </Button>
          <Button asChild variant="outline" className="w-full">
            <Link to="/">{t('result.retake')}</Link>
          </Button>
        </div>
      </div>
    </Card>
  )
}
