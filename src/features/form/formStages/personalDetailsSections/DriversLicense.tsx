import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useState } from 'react'
import { useFormContext as hookFormContext } from 'react-hook-form'

import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { FormDateField } from 'src/components/fields/FormDateField/FormDateField'

const DriversLicenseSection = () => {
  const {
    register,
    setValue,
    clearErrors,
    control,
    formState: { errors, defaultValues },
  } = hookFormContext<IPersonalDetailsStage>()

  const [driversLicense, setDriversLicense] = useState<boolean>(
    defaultValues?.driversLicense?.hasLicense ?? false
  )

  const handleHasLicenseCheckbox = (
    _: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    if (!checked) {
      clearErrors('driversLicense')
      setValue('driversLicense.categories', '')
      setValue('driversLicense.date', null)
    }
    setDriversLicense(!driversLicense)
    setValue('driversLicense.hasLicense', !driversLicense)
  }

  return (
    <>
      <Typography variant="body2">
        Juhtimisõiguse omamise korral märkige juhiloa väljaandmise kuupäev ja
        missuguse kategooria sõidukeid on lubatud juhtida
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl sx={{ flexDirection: 'row', height: '42px' }}>
            <FormLabel sx={{ display: 'flex', alignItems: 'center' }}>
              Juhtimisõigus
            </FormLabel>
            <Checkbox
              checked={driversLicense}
              onChange={handleHasLicenseCheckbox}
            />
          </FormControl>
        </Grid>
      </Grid>
      {driversLicense && (
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="standard"
              label={'Kategooriad'}
              {...register('driversLicense.categories', {
                required: 'Sisesta kategooriad',
              })}
              error={Boolean(errors?.driversLicense?.categories)}
              helperText={errors?.driversLicense?.categories?.message as string}
            />
          </Grid>
          <Grid item xs={6}>
            <FormDateField
              name="driversLicense.date"
              control={control}
              label="Alates"
              helperText="Sisesta kuupäev"
            />
          </Grid>
        </Grid>
      )}
    </>
  )
}

export const DriversLicense = React.memo(DriversLicenseSection)
