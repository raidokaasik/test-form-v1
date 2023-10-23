import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useStateMachine } from 'little-state-machine'

interface FormStageWrapperProps {
  nextButton?: React.ReactElement
  backButton?: React.ReactElement
  children?: React.ReactElement | React.ReactElement[]
}

export const FormStageWrapper = ({
  nextButton,
  backButton,
  children,
}: FormStageWrapperProps) => {
  const {
    state: { formHeader },
  } = useStateMachine()

  return (
    <Box
      height={'100%'}
      width={'100%'}
      position={'relative'}
      boxSizing={'border-box'}
    >
      <Box
        pl={'16px'}
        pr={'16px'}
        pt={'16px'}
        height={'59px'}
        sx={{ boxSizing: 'border-box' }}
      >
        <Typography variant="h5" fontWeight={700}>
          {formHeader}
        </Typography>
        <Divider sx={{ mt: '10px' }} />
      </Box>
      <Box height={'calc(100% - 109px)'} width={'100%'} overflow={'auto'}>
        {children}
      </Box>
      <ButtonContainer>
        {backButton && (
          <Box position={'absolute'} left={'24px'}>
            {backButton}
          </Box>
        )}
        {nextButton && (
          <Box position={'absolute'} right={'24px'}>
            {nextButton}
          </Box>
        )}
      </ButtonContainer>
    </Box>
  )
}

const ButtonContainer = styled(Box)(() => ({
  width: '100%',
  position: 'absolute',
  boxSizing: 'border-box',
  paddingTop: '5px',
  bottom: 0,
  left: 0,
  height: '50px',
}))
