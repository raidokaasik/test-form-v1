import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useReducer,
  useContext,
} from 'react'
import { initialState, FormReducer, IFormContextState } from './reducer'
import { IFormActions, defaultActions, getActions } from './actions'

export interface IFormContext extends IFormActions {
  state: IFormContextState
}

const FormContext = createContext<IFormContext>({
  state: initialState,
  ...defaultActions,
})

export function FormContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(FormReducer, initialState)
  const actions: IFormActions = getActions(dispatch)

  const contextValue = useMemo(() => {
    return { state, ...actions }
  }, [state, actions])

  // useEffect(() => {
  // 	console.log("LOAD FORM STATE");
  // 	const storage = sessionStorage.getItem("FORM_STATE");
  // 	if (storage) {
  // 		const parsed = JSON.parse(storage);
  // 		dispatch({
  // 			type: "INIT_STORE",
  // 			value: parsed,
  // 		});
  // 	}
  // }, []);

  // useEffect(() => {
  // 	console.log("SET FORM STATE");
  // 	if (state !== initialState) {
  // 		sessionStorage.setItem("FORM_STATE", JSON.stringify(state));
  // 	}
  // }, [state]);

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  )
}

export function useFormContext() {
  return useContext(FormContext)
}
