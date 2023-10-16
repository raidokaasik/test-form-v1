import Grid from '@mui/material/Grid'
import React from 'react'
import { useFormContext as hookFormContext } from 'react-hook-form'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import { PersonalIDField } from 'src/components/fields/PersonalIdMaskField'

import { setCaptializedValueOptions } from 'src/utils/helpers'

const PersonalCredentialsSection = () => {
  const {
    register,
    formState: { errors },
  } = hookFormContext()

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <PersonalIDField
            register={{
              ...register('personalId', {
                required: 'Sisestage isikukood',
                minLength: {
                  value: 11,
                  message: 'Isikukood peab olema 11-kohaline',
                },
              }),
            }}
            fullWidth
            required
            label={'Isikukood'}
            helperText={errors?.personalId?.message as string}
            error={Boolean(errors.personalId)}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <OnlyTextField
            register={{
              ...register('firstName', {
                required: 'Sisestage eesnimi',
                ...setCaptializedValueOptions,
              }),
            }}
            capitalize
            label={'Eesnimi'}
            error={Boolean(errors.firstName)}
            helperText={errors?.firstName?.message as string}
          />
        </Grid>
        <Grid item xs={6}>
          <OnlyTextField
            register={{
              ...register('lastName', {
                required: 'Sisestage perekonnanimi',
                ...setCaptializedValueOptions,
              }),
            }}
            capitalize
            label={'Perekonnanimi'}
            error={Boolean(errors.lastName)}
            helperText={errors?.lastName?.message as string}
          />
        </Grid>
      </Grid>
    </>
  )
}

export const PersonalCredentials = React.memo(PersonalCredentialsSection)
