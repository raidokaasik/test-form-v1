import { PersonalDetailsStage } from './formStages/PersonalDetailsStage'
import { RelationsStage } from './formStages/RelationsStage'
import { useStateMachine } from 'little-state-machine'
import { Result } from './formStages/Result'
import { EducationStage } from './formStages/EducationStage'
import { PerviousExperienceStage } from './formStages/PreviousExperience'
import { AdditionalInformationStage } from './formStages/AdditionalInformationStage'

export const RenderFormStage = () => {
  const { state } = useStateMachine()

  const stages: Record<string, React.ReactElement> = {
    personalDetails: <PersonalDetailsStage />,
    relations: <RelationsStage />,
    education: <EducationStage />,
    previousExperience: <PerviousExperienceStage />,
    additionalInformation: <AdditionalInformationStage />,
    result: <Result />,
  }

  return <>{stages[state.formStage]}</>
}
