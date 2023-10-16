import { RenderFormStage } from './RenderFormStage'

import { StateMachineProvider, createStore } from 'little-state-machine'

createStore(
  {
    form: {
      personalDetails: null,
      relations: {
        familyMembers: null,
        closeFriends: null,
      },
    },
    formStage: 'personalDetails',
  } as any,
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
