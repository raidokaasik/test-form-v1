import Typography from '@mui/material/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { setFormStage, setPreviousExperience } from '../formActions/actions'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from 'src/components/NextButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {
  IWorkExperience,
  WorkExperience,
  workExperienceDefaultValue,
} from './previousExperience/WorkExperience'
import {
  ArmyExperience,
  IArmyExperience,
  armyExperienceDefaultValue,
} from './previousExperience/ArmyExperience'

export interface IPerviousExperience {
  workExperience: IWorkExperience[] | null
  hasArmyExperience: boolean
  armyExperience: IArmyExperience[] | null
}

export const PerviousExperienceStage = () => {
  const {
    state: {
      form: { previousExperience },
    },
    actions,
  } = useStateMachine({
    setFormStage,
    setPreviousExperience,
  })

  const methods = useForm<IPerviousExperience>({
    defaultValues: {
      workExperience: previousExperience?.workExperience ?? [
        workExperienceDefaultValue,
      ],
      hasArmyExperience: previousExperience?.hasArmyExperience ?? false,
      armyExperience: previousExperience?.armyExperience ?? [
        armyExperienceDefaultValue,
      ],
    },
    mode: 'onBlur',
  })

  const onSubmit = (data: IPerviousExperience) => {
    actions.setPreviousExperience(data)
    actions.setFormStage('additionalInformation')
  }

  const handleBackButton = () => {
    const currentValues = methods.getValues()
    actions.setPreviousExperience(currentValues)
    actions.setFormStage('education')
  }

  return (
    <FormStageWrapper
      nextButton={<NextButton id="previousExperienceData" label="Järgmine" />}
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
          VARASEM ELUKÄIK JA TEGEVUS
        </Typography>
      </Box>
      <FormProvider {...methods}>
        <form
          id="previousExperienceData"
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '16px',
          }}
        >
          <WorkExperience />
          <ArmyExperience />
        </form>
      </FormProvider>
    </FormStageWrapper>
  )
}
