import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from '../../../components/NextButton'
import Box from '@mui/material/Box'
import { FormProvider, useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import { setFormStage, setRelations } from '../formActions/actions'
import {
  familyMember,
  FamilyMembers,
  IFamilyMember,
  Parents,
} from './relationsSections/FamilyMembers'
import {
  CloseFriends,
  ICloseFriend,
  closeFriend,
} from './relationsSections/CloseFriends'

export interface IRelations {
  familyMembers: IFamilyMember[] | null
  closeFriends: ICloseFriend[] | null
}

const familyMembersDefaultValues = [
  { ...familyMember, typeOfRelation: Parents.FATHER },
  { ...familyMember, typeOfRelation: Parents.MOTHER },
]

const closeFriendsDefaultValues = [{ ...closeFriend }, { ...closeFriend }]

export const RelationsStage = () => {
  const {
    state: {
      form: { relations },
    },
    actions,
  }: any = useStateMachine({
    setFormStage,
    setRelations,
  })

  const methods = useForm<IRelations>({
    defaultValues: {
      familyMembers: relations?.familyMembers ?? [
        ...familyMembersDefaultValues,
      ],
      closeFriends: relations?.closeFriends ?? [...closeFriendsDefaultValues],
    },
    mode: 'onBlur',
  })

  const onSubmit = (data: any) => {
    actions.setRelations(data)
    actions.setFormStage('education')
  }

  const handleBackButton = () => {
    const currentValues = methods.getValues()
    actions.setRelations(currentValues)
    actions.setFormStage('personalDetails')
  }

  return (
    <FormStageWrapper
      nextButton={<NextButton id="relations" label="Järgmine" />}
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
      <Box pl={'16px'} pr={'16px'} mt="16px">
        <Typography variant="h5" fontWeight={600}>
          PEREKONDLIKUD JA TUTVUSSIDEMED
        </Typography>
      </Box>
      <FormProvider {...methods}>
        <form
          id="relations"
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '16px',
          }}
        >
          <FamilyMembers />
          <CloseFriends />
        </form>
      </FormProvider>
    </FormStageWrapper>
  )
}
