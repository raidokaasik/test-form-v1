import { RenderFormStage } from './RenderFormStage'

import { StateMachineProvider, createStore } from 'little-state-machine'
import { IPersonalDetailsStage } from './formStages/PersonalDetailsStage'
import { IRelations } from './formStages/RelationsStage'
import { IEducation } from './formStages/EducationStage'
import { IPerviousExperience } from './formStages/PreviousExperience'
import { IAdditionalInformation } from './formStages/AdditionalInformationStage'

export interface IStore {
  form: {
    personalDetails: IPersonalDetailsStage | null
    relations: IRelations | null
    education: IEducation | null
    previousExperience: IPerviousExperience | null
    additionalInformation: IAdditionalInformation | null
  }
  formStage: string
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
    formStage: 'additionalInformation',
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
