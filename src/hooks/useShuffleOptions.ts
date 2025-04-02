import { useEffect, useState } from 'react'
import { Option } from '@/types/quiz'

function shuffle<T>(array: T[]): T[] {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function useShuffledOptions(options: Option[]) {
  const [shuffled, setShuffled] = useState<Option[]>([])

  useEffect(() => {
    setShuffled(shuffle(options))
  }, [options])

  return shuffled
}
