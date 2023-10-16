import { IFamilyMember } from '../formStages/relationsSections/FamilyMembers'

export const setFormStage = (state: any, payload: any) => {
  return {
    ...state,
    formStage: payload,
  }
}

export const setPersonalDetails = (state: any, payload: any) => {
  console.log('SET_RELATIONS_PAYLOAD::', payload)

  return {
    ...state,
    form: {
      ...state.form,
      personalDetails: payload,
    },
  }
}

export const setRelations = (state: any, payload: IFamilyMember[]) => {
  console.log('SET_RELATIONS_PAYLOAD::', payload)
  return {
    ...state,
    form: {
      ...state.form,
      relations: payload,
    },
  }
}
