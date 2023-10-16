import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useFormContext as hookFormContext } from 'react-hook-form'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { setCaptializedValueOptions } from 'src/utils/helpers'

const AddressSection = () => {
  const {
    register,
    formState: { errors },
  } = hookFormContext<IPersonalDetailsStage>()

  return (
    <>
      <Typography variant="body2">Tegelik elukoht</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <OnlyTextField
            register={{
              ...register('address.county', {
                required: 'Sisesta maakond',
                ...setCaptializedValueOptions,
              }),
            }}
            capitalize
            label={'Maakond'}
            helperText={errors?.address?.county?.message as string}
            error={Boolean(errors?.address?.county)}
          />
        </Grid>
        <Grid item xs={6}>
          <OnlyTextField
            register={{
              ...register('address.city', {
                required: 'Sisesta linn või vald',
                ...setCaptializedValueOptions,
              }),
            }}
            capitalize
            label={'Linn/Vald'}
            helperText={errors?.address?.city?.message as string}
            error={Boolean(errors?.address?.city)}
          />
        </Grid>
        <Grid item xs={4}>
          <OnlyTextField
            register={{
              ...register('address.street', {
                required: 'Sisesta tänav',
                ...setCaptializedValueOptions,
              }),
            }}
            capitalize
            label={'Tänav'}
            helperText={errors?.address?.street?.message as string}
            error={Boolean(errors?.address?.street)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            {...register('address.houseNumber', {
              required: 'Sisesta maja number',
            })}
            fullWidth
            variant="standard"
            label={'Maja number'}
            error={Boolean(errors?.address?.houseNumber)}
            helperText={errors.address?.houseNumber?.message as string}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            {...register('address.appartmentNr', {
              required: 'Sisesta korteri number',
            })}
            fullWidth
            variant="standard"
            label={'Korteri number'}
            error={Boolean(errors?.address?.appartmentNr)}
            helperText={errors.address?.appartmentNr?.message as string}
          />
        </Grid>
      </Grid>
    </>
  )
}

export const Address = React.memo(AddressSection)
