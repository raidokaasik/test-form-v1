import Typography from '@mui/material/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from '../../../components/NextButton'
import { useStateMachine } from 'little-state-machine'
import { setPersonalDetails, setFormStage } from '../formActions/actions'

export const EducationStage = () => {
  const {
    state: {
      form: {},
    },
    actions,
  }: any = useStateMachine({ setFormStage, setPersonalDetails })

  const methods = useForm({
    defaultValues: {},
    mode: 'onBlur',
  })

  const onSubmit = (data: any) => {
    console.log('DATA::', data)
    actions.setFormStage('result')
  }

  useEffect(() => {
    console.log('MOUNTS STATE::')
  }, [])

  return (
    <FormStageWrapper
      nextButton={<NextButton id="educationData" label="Järgmine" />}
    >
      <Box pl={'16px'} pr={'16px'} pt={'16px'}>
        <Typography variant="h5" fontWeight={600}>
          HARIDUSKÄIK
        </Typography>
      </Box>
      <FormProvider {...methods}>
        <form
          id="educationData"
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '16px',
          }}
        ></form>
      </FormProvider>
    </FormStageWrapper>
  )
}
