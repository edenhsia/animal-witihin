import { Card } from './ui/card'
import { Button } from './ui/button'
import { animalProfiles } from '@/data/animalProfiles'
import { Link } from 'react-router-dom'

export default function Result() {
  // TODO: 取得使用者選取結果，獲取最接近動物
  return (
    <Card className="p-6 w-full max-w-xl">
      <h2 className="text-xl font-bold text-center">
        你最像的動物是 🐾 {animalProfiles[0].name}
      </h2>

      <img src={animalProfiles[0].image} className="w-64 rounded-xl mx-auto" />
      <p>{animalProfiles[0].personality}</p>

      <Button asChild>
        <Link to="/quiz">重新測驗</Link>
      </Button>
    </Card>
  )
}
