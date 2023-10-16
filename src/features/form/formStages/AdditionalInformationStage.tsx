import Typography from '@mui/material/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { setAdditionalInformation, setFormStage } from '../formActions/actions'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from 'src/components/NextButton'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import {
  ILanguage,
  Languages,
  languagesDefaultValue,
} from './additionalInformation/Languages'
import { Questionnaire } from './additionalInformation/Questionnaire'

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
    actions.setFormStage('result')
  }

  const handleBackButton = () => {
    const currentValues = methods.getValues()
    actions.setAdditionalInformation(currentValues)
    actions.setFormStage('previousExperience')
  }

  return (
    <FormStageWrapper
      nextButton={
        <NextButton id="additionalInformationData" label="Järgmine" />
      }
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
          TÄIENDAV ISIKUTEAVE
        </Typography>
      </Box>
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
