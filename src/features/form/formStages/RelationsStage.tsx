import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { FormStageWrapper } from '../formWrappers/FormStageWrapper'
import { NextButton } from '../../../components/NextButton'
import Box from '@mui/material/Box'
import { useStateMachine } from 'little-state-machine'
import { setFormStage, setRelations } from '../formActions/actions'

export const RelationsStage = () => {
  const { actions }: any = useStateMachine({
    setFormStage,
    setRelations,
  })

  const handleBackButton = () => {
    actions.setFormStage('personalDetails')
  }

  return (
    <FormStageWrapper
      nextButton={<NextButton id="relations" label="Järgmine" />}
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
      <Box pl={'16px'} pr={'16px'} mt="16px">
        <Typography variant="h5" fontWeight={600}>
          PEREKONDLIKUD JA TUTVUSSIDEMED
        </Typography>
      </Box>
    </FormStageWrapper>
  )
}
