import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useFormContext as hookFormContext } from 'react-hook-form'

const AddressSection = () => {
  const { register } = hookFormContext()
  return (
    <>
      <Typography variant="body2">Tegelik elukoht</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="standard"
            label={'Maakond'}
            {...register('address.county')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="standard"
            label={'Linn'}
            {...register('address.city')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="standard"
            label={'Vald'}
            {...register('address.settlement')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="standard"
            label={'Tänav'}
            {...register('address.street')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="standard"
            label={'Maja number'}
            {...register('address.houseNumber')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="standard"
            label={'Korteri number'}
            {...register('address.appartmentNr')}
          />
        </Grid>
      </Grid>
    </>
  )
}

export const Address = React.memo(AddressSection)
