import type { ScoreKey } from '@/types/quiz'
import { quizData } from '@/data/quizData'
import { animalProfiles } from '@/data/animalProfiles'

export function calcFinalScore(userAnswers: string[]) {
  const totalScore: Record<ScoreKey, number> = {
    activity: 0,
    friendliness: 0,
    intelligence: 0,
    independence: 0,
    curiosity: 0,
  }

  userAnswers.forEach((answer, questionIndex) => {
    const question = quizData[questionIndex]
    const selected = question.options.find((option) => option.value === answer)

    if (!selected) return

    for (const key in selected.score) {
      const typedKey = key as ScoreKey
      totalScore[typedKey] += selected.score[typedKey] ?? 0
    }
  })

  return totalScore
}

export function getBestMatchAnimal(userScore: Record<ScoreKey, number>) {
  const scoredProfiles = animalProfiles.map((profile) => {
    const distance = (Object.keys(userScore) as ScoreKey[]).reduce(
      (acc, key) => {
        return acc + Math.abs(userScore[key] - profile.scores[key])
      },
      0
    )

    return {
      profile,
      distance,
    }
  })

  const ranked = scoredProfiles.sort((a, b) => a.distance - b.distance)

  return ranked[0].profile
}
