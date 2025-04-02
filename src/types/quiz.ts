export type ScoreKey =
  | 'activity'
  | 'friendliness'
  | 'intelligence'
  | 'independence'
  | 'curiosity'

export interface Option {
  value: string
  text: string
  score: Partial<Record<ScoreKey, number>>
}
