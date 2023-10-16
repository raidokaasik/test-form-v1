import { PersonalDetailsStage } from './formStages/PersonalDetailsStage'
import { RelationsStage } from './formStages/RelationsStage'
import { useStateMachine } from 'little-state-machine'
import { Result } from './formStages/Result'
import { EducationStage } from './formStages/EducationStage'

export const RenderFormStage = () => {
  const { state }: any = useStateMachine()

  const stages: any = {
    personalDetails: <PersonalDetailsStage />,
    relations: <RelationsStage />,
    education: <EducationStage />,
    result: <Result />,
  }

  return <>{stages[state.formStage]}</>
}
