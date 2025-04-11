import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  function toggleLanguage() {
    const nextLanguage = i18n.language === 'zh' ? 'en' : 'zh'
    i18n.changeLanguage(nextLanguage)
    localStorage.setItem('lang', nextLanguage)
  }

  return (
    <Button
      variant="outline"
      className="fixed right-16 top-4"
      onClick={toggleLanguage}
    >
      {i18n.language === 'zh' ? '中文' : 'EN'}
    </Button>
  )
}
