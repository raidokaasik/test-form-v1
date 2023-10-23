import { useForm, FormProvider } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { setEducation, setFormStage } from '../formActions/actions'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from 'src/components/buttons/NextButton'
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
import { formStages } from '../Form'
import { BackButton } from 'src/components/buttons/BackButton'

export interface IEducation {
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
  } = useStateMachine({ setFormStage, setEducation })

  const methods = useForm<IEducation>({
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

  const onSubmit = (data: IEducation) => {
    actions.setEducation(data)
    actions.setFormStage(formStages.PERVIOUS_EXPERIENCE)
  }

  const handleBackButton = () => {
    const currentValues = methods.getValues()
    actions.setEducation(currentValues)
    actions.setFormStage(formStages.RELATIONS)
  }

  return (
    <FormStageWrapper
      nextButton={<NextButton id="educationData" label="Järgmine" />}
      backButton={<BackButton label="tagasi" onClick={handleBackButton} />}
    >
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
