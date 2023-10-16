import Typography from '@mui/material/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { useEffect } from 'react'
import { useStateMachine } from 'little-state-machine'
import { setEducation, setFormStage } from '../formActions/actions'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from 'src/components/NextButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {
  GeneralEducation,
  IGeneralEducation,
  generalEducationDefaultValue,
} from './educationSections/GeneralEducation'
import {
  AcademicEducation,
  IAcademicEducation,
  academicEducationDefaultValue,
} from './educationSections/AcademicEducation'

interface IEducationStage {
  generalEducation: IGeneralEducation[]
  hasAcademicEducation: boolean
  academicDegrees: IAcademicEducation[]
}

export const EducationStage = () => {
  const {
    state: {
      form: { education },
    },
    actions,
  }: any = useStateMachine({ setFormStage, setEducation })

  const methods = useForm<IEducationStage>({
    defaultValues: {
      generalEducation: education?.generalEducation ?? [
        generalEducationDefaultValue,
      ],
      hasAcademicEducation: education?.hasAcademicEducation ?? false,
      academicDegrees: education?.academicDegrees ?? [
        academicEducationDefaultValue,
      ],
    },
    mode: 'onBlur',
  })

  const onSubmit = (data: IEducationStage) => {
    console.log('DATA::', data)
    actions.setEducation(data)
    actions.setFormStage('result')
  }

  useEffect(() => {
    console.log('MOUNTS STATE::')
  }, [])

  const handleBackButton = () => {
    const currentValues = methods.getValues()
    actions.setFormStage('education')
    console.log('SET_BACK_BUTTON::', currentValues)
  }

  return (
    <FormStageWrapper
      nextButton={<NextButton id="educationData" label="Järgmine" />}
      backButton={
        <Button
          variant={'contained'}
          color={'secondary'}
          onClick={handleBackButton}
        >
          tagasi
        </Button>
      }
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
        >
          <GeneralEducation />
          <AcademicEducation />
        </form>
      </FormProvider>
    </FormStageWrapper>
  )
}
