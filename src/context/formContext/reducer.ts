import { IDispatch } from './actions'

export interface IFormContextState {
  formStage: string
}

export const initialState: IFormContextState = {
  formStage: 'personalDetails',
}

export const FormReducer = (state: IFormContextState, action: IDispatch) => {
  switch (action.type) {
    case 'INIT_STORE':
      return action.value as IFormContextState
    case 'SET_STAGE':
      return { ...state, formStage: action.value }
    default:
      return state
  }
}
