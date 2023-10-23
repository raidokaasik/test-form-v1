import { RenderFormStage } from './RenderFormStage'

import { StateMachineProvider, createStore } from 'little-state-machine'
import { IPersonalDetailsStage } from './formStages/PersonalDetailsStage'
import { IRelations } from './formStages/RelationsStage'
import { IEducation } from './formStages/EducationStage'
import { IPerviousExperience } from './formStages/PreviousExperience'
import { IAdditionalInformation } from './formStages/AdditionalInformationStage'

export enum formStages {
  PERSONALDETAILS = 'personalDetails',
  RELATIONS = 'relations',
  EDUCATION = 'education',
  PERVIOUS_EXPERIENCE = 'previousExperience',
  ADDITIONAL_INFORATION = 'additionalInformation',
  RESULT = 'result',
}

export interface IStore {
  form: {
    personalDetails: IPersonalDetailsStage | null
    relations: IRelations | null
    education: IEducation | null
    previousExperience: IPerviousExperience | null
    additionalInformation: IAdditionalInformation | null
  }
  formStage: formStages
  formHeader: string
  profileImage: string | null
}

createStore(
  {
    form: {
      personalDetails: null,
      relations: {
        familyMembers: null,
        closeFriends: null,
      },
      education: null,
      previousExperience: null,
      additionalInformation: null,
    },
    formStage: formStages.PERSONALDETAILS,
    formHeader: 'ISIKUANDMED',
    profileImage: null,
  },
  {
    persist: 'none',
  }
)

export const PersonalDataForm = () => {
  return (
    <StateMachineProvider>
      <RenderFormStage />
    </StateMachineProvider>
  )
}
