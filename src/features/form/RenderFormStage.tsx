import { PersonalDetailsStage } from './formStages/PersonalDetailsStage'
import { RelationsStage } from './formStages/RelationsStage'
import { useStateMachine } from 'little-state-machine'

export const RenderFormStage = () => {
  const { state }: any = useStateMachine()

  const stages: any = {
    personalDetails: <PersonalDetailsStage />,
    relations: <RelationsStage />,
  }

  return <>{stages[state.formStage]}</>
}
