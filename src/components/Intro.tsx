import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function Intro() {
  const { t } = useTranslation()

  return (
    <Card className="max-w-xl w-full p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">{t('intro.title')}</h1>
      <p>
        {t('intro.line1')}
        <br />
        {t('intro.line2')}
      </p>
      <p>{t('intro.line3')}</p>

      <Button asChild className="w-full max-w-xs mx-auto">
        <Link to="/quiz">{t('intro.start')}</Link>
      </Button>
    </Card>
  )
}
