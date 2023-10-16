import Grid from '@mui/material/Grid'
import React from 'react'
import { useFormContext as hookFormContext } from 'react-hook-form'
import { MaskField, MaskTypes } from 'src/components/fields/MaskField'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'

const PersonalCredentialsSection = () => {
  const { control } = hookFormContext()

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MaskField
            name={'personalId'}
            control={control}
            label="Isikukood"
            helperText="Sisestage isikukood"
            type={MaskTypes.ID}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <OnlyTextField
            control={control}
            capitalize
            name={'firstName'}
            label={'Eesnimi'}
            helperText={'Sisestage eesnimi'}
          />
        </Grid>
        <Grid item xs={6}>
          <OnlyTextField
            control={control}
            capitalize
            name={'lastName'}
            label={'Perekonnanimi'}
            helperText={'Sisestage perekonnanimi'}
          />
        </Grid>
      </Grid>
    </>
  )
}

export const PersonalCredentials = React.memo(PersonalCredentialsSection)
