import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  answers: [] as string[],
}

type AnswerPayload = {
  questionIndex: number
  answerValue: string
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    answerQuestion: (state, action: PayloadAction<AnswerPayload>) => {
      state.answers[action.payload.questionIndex] = action.payload.answerValue
    },
  },
})

export const { answerQuestion } = quizSlice.actions
export default quizSlice.reducer
