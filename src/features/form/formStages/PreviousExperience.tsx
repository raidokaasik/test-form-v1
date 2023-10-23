import { useForm, FormProvider } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { setFormStage, setPreviousExperience } from '../formActions/actions'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from 'src/components/buttons/NextButton'
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
import { formStages } from '../Form'
import { BackButton } from 'src/components/buttons/BackButton'

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
    actions.setFormStage(formStages.ADDITIONAL_INFORATION)
  }

  const handleBackButton = () => {
    const currentValues = methods.getValues()
    actions.setPreviousExperience(currentValues)
    actions.setFormStage(formStages.EDUCATION)
  }

  return (
    <FormStageWrapper
      nextButton={<NextButton id="previousExperienceData" label="Järgmine" />}
      backButton={<BackButton label="tagasi" onClick={handleBackButton} />}
    >
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
