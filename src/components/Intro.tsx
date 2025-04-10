import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

export default function Intro() {
  return (
    <Card className="max-w-xl w-full p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">
        你的內在人格像哪種動物？
      </h1>
      <p>
        如果你是一隻動物，你覺得會是哪一種？
        <br />
        是奔放的冒險派、冷靜的觀察者，還是那種每天都想耍廢、在角落打瞌睡的類型？
      </p>
      <p>
        這份測驗會透過 10
        題輕鬆有趣的問題，從你的直覺出發，帶你挖掘那隻藏在你心裡的小動物 🐾
      </p>

      <Button asChild>
        <Link to="/quiz">開始測驗</Link>
      </Button>
    </Card>
  )
}
