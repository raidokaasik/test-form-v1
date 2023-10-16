import Box from '@mui/material/Box'
import { useStateMachine } from 'little-state-machine'
import { useEffect } from 'react'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { setFormStage } from '../formActions/actions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const Result = () => {
  const {
    actions,
    state: {
      form: {
        personalDetails,
        relations,
        education,
        previousExperience,
        additionalInformation,
      },
    },
  } = useStateMachine({ setFormStage })
  useEffect(() => {}, [])

  const handleBackButton = () => {
    actions.setFormStage('additionalInformation')
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
        <Typography variant="body2">Täiendav isikuteave</Typography>
        <pre>{JSON.stringify(additionalInformation, null, 2)}</pre>
      </Box>
    </FormStageWrapper>
  )
}
