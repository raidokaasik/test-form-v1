import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useStateMachine } from 'little-state-machine'
import { useEffect } from 'react'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { setFormStage } from '../formActions/actions'

export const Result = () => {
  const {
    actions,
    state: {
      form: { personalDetails, relations, education, previousExperience },
    },
  } = useStateMachine({ setFormStage })
  useEffect(() => {}, [])

  const handleBackButton = () => {
    actions.setFormStage('previousExperience')
  }

  return (
    <FormStageWrapper
      backButton={
        <Button
          variant={'contained'}
          color={'secondary'}
          onClick={handleBackButton}
        >
          tagasi
        </Button>
      }
    >
      <Box padding={'16px'}>
        <Typography variant="h4">Tulemus</Typography>
        <Typography variant="body2">Isikuandmed</Typography>
        <pre>{JSON.stringify(personalDetails, null, 2)}</pre>
        <Typography variant="body2">Lähisuhted</Typography>
        <pre>{JSON.stringify(relations, null, 2)}</pre>
        <Typography variant="body2">Haridus</Typography>
        <pre>{JSON.stringify(education, null, 2)}</pre>
        <Typography variant="body2">Varasem kogemus</Typography>
        <pre>{JSON.stringify(previousExperience, null, 2)}</pre>
      </Box>
    </FormStageWrapper>
  )
}
