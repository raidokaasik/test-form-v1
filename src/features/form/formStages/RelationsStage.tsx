import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from '../../../components/buttons/NextButton'
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
import { BackButton } from 'src/components/buttons/BackButton'
import { formStages } from '../Form'

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
  } = useStateMachine({
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

  const onSubmit = (data: IRelations) => {
    actions.setRelations(data)
    actions.setFormStage(formStages.EDUCATION)
  }

  const handleBackButton = () => {
    const currentValues = methods.getValues()
    actions.setRelations(currentValues)
    actions.setFormStage(formStages.PERSONALDETAILS)
  }

  return (
    <FormStageWrapper
      nextButton={<NextButton id="relations" label="Järgmine" />}
      backButton={<BackButton label="tagasi" onClick={handleBackButton} />}
    >
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
