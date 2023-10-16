import { GlobalState } from 'little-state-machine'
import { IEducation } from '../formStages/EducationStage'
import { IPersonalDetailsStage } from '../formStages/PersonalDetailsStage'
import { IPerviousExperience } from '../formStages/PreviousExperience'
import { IRelations } from '../formStages/RelationsStage'
import { IAdditionalInformation } from '../formStages/AdditionalInformationStage'

export const setFormStage = (state: any, payload: string) => {
  return {
    ...state,
    formStage: payload,
  }
}

export const setPersonalDetails = (
  state: GlobalState,
  payload: IPersonalDetailsStage
): GlobalState => {
  return {
    ...state,
    form: {
      ...state.form,
      personalDetails: payload,
    },
  }
}

export const setRelations = (
  state: GlobalState,
  payload: IRelations
): GlobalState => {
  return {
    ...state,
    form: {
      ...state.form,
      relations: payload,
    },
  }
}

export const setEducation = (
  state: GlobalState,
  payload: IEducation
): GlobalState => {
  return {
    ...state,
    form: {
      ...state.form,
      education: payload,
    },
  }
}

export const setPreviousExperience = (
  state: GlobalState,
  payload: IPerviousExperience
): GlobalState => {
  return {
    ...state,
    form: {
      ...state.form,
      previousExperience: payload,
    },
  }
}

export const setAdditionalInformation = (
  state: GlobalState,
  payload: IAdditionalInformation
): GlobalState => {
  return {
    ...state,
    form: {
      ...state.form,
      additionalInformation: payload,
    },
  }
}
