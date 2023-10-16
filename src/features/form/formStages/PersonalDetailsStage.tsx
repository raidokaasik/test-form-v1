import Typography from '@mui/material/Typography'
import { useForm, FormProvider } from 'react-hook-form'
import { Box } from '@mui/material'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from '../../../components/NextButton'
import { Nationality } from './personalDetailsSections/Nationality'
import { Communications } from './personalDetailsSections/Communications'
import {
  PreviousNames,
  previousNameDefaultValues,
} from './personalDetailsSections/PreviousNames'
import { Address } from './personalDetailsSections/Address'
import { PersonalDocument } from './personalDetailsSections/PersonalDocument'
import { PersonalCredentials } from './personalDetailsSections/PersonalCredentials'
import { useStateMachine } from 'little-state-machine'
import { setPersonalDetails, setFormStage } from '../formActions/actions'
import { DriversLicense } from './personalDetailsSections/DriversLicense'
import { dateType } from 'src/components/fields/FormDateField/FormDateField'

export type IOrigin = {
  nationality: string
  nativeLanguage: string
  hasOtherNationalityInfo: boolean
  other: {
    nationality: string
    from: dateType
    to: dateType
    present: boolean
  }
}

export interface IPersonalDetailsStage {
  personalId: string
  firstName: string
  lastName: string
  origin: IOrigin
  driversLicense: {
    hasLicense: boolean
    categories: string
    date: dateType
  }
  previouslyUsedNames: {
    hasPerviouslyUsedNames: boolean
    names: Array<Record<string, string>> | []
  }
  communications: Array<Record<string, string>>
  document: {
    docType: string
    id: string
    dateOfIssue: dateType
    dateOfExpiry: dateType
    authority: string
  }
  address: {
    city: string
    county: string
    street: string
    houseNumber: string
    appartmentNr: string
    zip: string
  }
}

export const PersonalDetailsStage = () => {
  const {
    state: {
      form: { personalDetails },
    },
    actions,
  } = useStateMachine({ setFormStage, setPersonalDetails })

  const methods = useForm<IPersonalDetailsStage>({
    defaultValues: getDefaultValues(personalDetails),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  })

  const onSubmit = (data: any) => {
    actions.setPersonalDetails(data)
    actions.setFormStage('relations')
  }

  return (
    <FormStageWrapper
      nextButton={<NextButton id="personalData" label="Järgmine" />}
    >
      <Box pl={'16px'} pr={'16px'} pt={'16px'}>
        <Typography variant="h5" fontWeight={600}>
          ISIKUANDMED
        </Typography>
      </Box>
      <FormProvider {...methods}>
        <form
          id="personalData"
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '16px',
          }}
        >
          <PersonalCredentials />
          <Nationality />
          <DriversLicense />
          <PersonalDocument />
          <Address />
          <Communications />
          <PreviousNames />
        </form>
      </FormProvider>
    </FormStageWrapper>
  )
}

const getDefaultValues = (personalDetails: IPersonalDetailsStage | null) => {
  return {
    personalId: personalDetails?.personalId ?? '',
    firstName: personalDetails?.firstName ?? '',
    lastName: personalDetails?.lastName ?? '',
    origin: {
      nationality: personalDetails?.origin?.nationality || '',
      nativeLanguage: personalDetails?.origin?.nativeLanguage ?? '',
      hasOtherNationalityInfo:
        personalDetails?.origin.hasOtherNationalityInfo ?? false,
      other: {
        nationality: personalDetails?.origin?.other?.nationality ?? '',
        from: personalDetails?.origin?.other?.from ?? null,
        to: personalDetails?.origin?.other?.to ?? null,
        present: personalDetails?.origin?.other?.present ?? false,
      },
    },
    driversLicense: {
      hasLicense: personalDetails?.driversLicense.hasLicense ?? false,
      categories: personalDetails?.driversLicense.categories ?? '',
      date: personalDetails?.driversLicense.date ?? null,
    },
    previouslyUsedNames: {
      hasPerviouslyUsedNames:
        personalDetails?.previouslyUsedNames.hasPerviouslyUsedNames ?? false,
      names: personalDetails?.previouslyUsedNames.names ?? [
        previousNameDefaultValues,
      ],
    },
    communications: personalDetails?.communications ?? [
      {
        commType: '',
        commValue: '',
      },
    ],
    document: {
      docType: personalDetails?.document.docType ?? '',
      id: personalDetails?.document.id ?? '',
      dateOfIssue: personalDetails?.document.dateOfIssue ?? null,
      dateOfExpiry: personalDetails?.document.dateOfExpiry ?? null,
      authority: personalDetails?.document.authority ?? '',
    },
    address: {
      city: personalDetails?.address.city ?? '',
      county: personalDetails?.address.county ?? '',
      street: personalDetails?.address.street ?? '',
      houseNumber: personalDetails?.address.houseNumber ?? '',
      appartmentNr: personalDetails?.address.appartmentNr ?? '',
      zip: personalDetails?.address.zip ?? '',
    },
  }
}
