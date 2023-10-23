import Typography from '@mui/material/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { setAdditionalInformation, setFormStage } from '../formActions/actions'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from 'src/components/buttons/NextButton'
import Box from '@mui/material/Box'
import {
  ILanguage,
  Languages,
  languagesDefaultValue,
} from './additionalInformation/Languages'
import { Questionnaire } from './additionalInformation/Questionnaire'
import { formStages } from '../Form'
import { BackButton } from 'src/components/buttons/BackButton'

export interface IAdditionalInformation {
  languages: ILanguage[] | null
  belongToAPoliticalParty: boolean
  foreignCriminalRecord: boolean
  disciplinaryDismissal: boolean
  foreginIncome: boolean
}

export const AdditionalInformationStage = () => {
  const {
    state: {
      form: { additionalInformation },
    },
    actions,
  } = useStateMachine({
    setFormStage,
    setAdditionalInformation,
  })

  const methods = useForm<IAdditionalInformation>({
    defaultValues: {
      languages: additionalInformation?.languages ?? [languagesDefaultValue],
      belongToAPoliticalParty:
        additionalInformation?.belongToAPoliticalParty ?? false,
      foreignCriminalRecord:
        additionalInformation?.foreignCriminalRecord ?? false,
      disciplinaryDismissal:
        additionalInformation?.disciplinaryDismissal ?? false,
      foreginIncome: additionalInformation?.foreginIncome ?? false,
    },
    mode: 'onBlur',
  })

  const onSubmit = (data: IAdditionalInformation) => {
    actions.setAdditionalInformation(data)
    actions.setFormStage(formStages.RESULT)
  }

  const handleBackButton = () => {
    const currentValues = methods.getValues()
    actions.setAdditionalInformation(currentValues)
    actions.setFormStage(formStages.PERVIOUS_EXPERIENCE)
  }

  return (
    <FormStageWrapper
      nextButton={
        <NextButton id="additionalInformationData" label="Järgmine" />
      }
      backButton={<BackButton label="tagasi" onClick={handleBackButton} />}
    >
      <FormProvider {...methods}>
        <form
          id="additionalInformationData"
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '16px',
          }}
        >
          <Languages />
          <Questionnaire />
        </form>
      </FormProvider>
      <Box pl={'16px'} pr={'16px'} pt={'16px'}>
        <Typography variant="body2" fontSize={'14px'}>
          Kinnitan esitatud andmete õigsust ning olen nõus enda kohta esitatud
          andmete kontrollimise ja töötlemisega Politsei- ja Piirivalveameti,
          Kaitsepolitseiameti või Sisekaitseakadeemia poolt.
        </Typography>
      </Box>
    </FormStageWrapper>
  )
}
