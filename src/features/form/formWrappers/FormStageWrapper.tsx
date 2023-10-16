import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'

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
  return (
    <Box
      height={'100%'}
      width={'100%'}
      position={'relative'}
      boxSizing={'border-box'}
    >
      <Box height={'calc(100% - 50px)'} width={'100%'} overflow={'auto'}>
        {children}
      </Box>
      <ButtonContainer>
        {backButton && (
          <Box position={'absolute'} left={'16px'}>
            {backButton}
          </Box>
        )}
        {nextButton && (
          <Box position={'absolute'} right={'16px'}>
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
  bottom: 0,
  left: 0,
  height: '50px',
}))
