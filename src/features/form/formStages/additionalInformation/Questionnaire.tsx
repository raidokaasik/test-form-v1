import React from 'react'
import { useFormContext as hookFormContext } from 'react-hook-form'
import Box from '@mui/material/Box'
import data from './questions.json'
import { QuestionnaireElement } from 'src/components/QuestionnaireElement'

export interface IQuestions {
  belongToAPoliticalParty: boolean
  foreignCriminalRecord: boolean
  disciplinaryDismissal: boolean
  foreginIncome: boolean
}

const QuestionnaireSection = () => {
  const { control } = hookFormContext<IQuestions>()

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} width={'100%'}>
        {data.questions.map((item) => {
          return (
            <QuestionnaireElement
              key={item.key}
              name={item.key}
              text={item.text}
              control={control}
            />
          )
        })}
      </Box>
    </>
  )
}

export const Questionnaire = React.memo(QuestionnaireSection)
