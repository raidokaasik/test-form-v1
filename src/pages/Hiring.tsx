import { useState } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { PageWrapper } from '../components/PageWrapper'
import { FormDialog } from '../features/form/formDialog/FormDialog'
import Box from '@mui/material/Box'
import { FormHeader } from '../features/form/formHeader/FormHeader'
import { PersonalDataForm } from '../features/form/Form'

export const Hiring = () => {
  const [openForm, setOpenForm] = useState<boolean>(false)

  return (
    <PageWrapper headerText={'Lorem ipsum'}>
      <Box
        width={'100%'}
        display={'flex'}
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={'10px'}
      >
        <Box width={{ xs: '100%', sm: '60%' }}>
          <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            imperdiet varius nibh a consectetur.
          </Typography>
        </Box>
        <Box width={{ xs: '100%', sm: '40%' }}>
          <FormHeader />
          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'flex-end'}
            gap={'10px'}
            sx={{ mt: '16px' }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{ fontWeight: 700, height: '34px' }}
              onClick={() => setOpenForm(!openForm)}
            >
              ISIKUANKEET
            </Button>
          </Box>
        </Box>
      </Box>
      <Typography fontSize={'14px'} fontWeight={700}>
        Lorem ipsum :
      </Typography>
      <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet varius nibh a consectetur. Nunc et purus leo. Quisque accumsan
        porta vehicula. Proin sollicitudin laoreet dui, eget euismod felis.
        Praesent nec imperdiet nunc, non varius lectus. Aenean ac nibh commodo,
        sagittis sapien vel, condimentum sem.
      </Typography>
      <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet varius nibh a consectetur.
      </Typography>
      <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
        Aliquam aliquet tristique pulvinar. Cras ornare neque ante, at
        pellentesque justo vehicula sit amet. Morbi egestas urna mi, sed posuere
        nulla dapibus at. Nulla ex lacus, vehicula eu massa a, porta congue mi.
        Vivamus vestibulum purus vitae mauris gravida porttitor sit amet porta
        nisl. Integer rhoncus ultrices nulla, a venenatis lectus placerat ac.
      </Typography>
      <Typography marginTop={'16px'} marginBottom={'16px'} variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet varius nibh a consectetur.
      </Typography>
      <FormDialog
        openForm={openForm}
        onCloseHandler={() => setOpenForm(false)}
        dialogContent={<PersonalDataForm />}
      />
    </PageWrapper>
  )
}
