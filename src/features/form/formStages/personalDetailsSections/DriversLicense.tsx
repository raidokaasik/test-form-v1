import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useFormContext as hookFormContext } from 'react-hook-form'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { FormDateField } from 'src/components/fields/FormDateField/FormDateField'
import { DashedDivider } from 'src/components/DashedDivider'
import { CustomToggleButton } from 'src/components/toggle/CustomToggleButton'

const DriversLicenseSection = () => {
  const {
    register,
    setValue,
    clearErrors,
    control,
    formState: { errors, defaultValues },
  } = hookFormContext<IPersonalDetailsStage>()

  const [driversLicense, setDriversLicense] = React.useState<boolean>(
    defaultValues?.driversLicense?.hasLicense ?? false
  )

  const handleHasLicenseCheckbox = (checked: boolean) => {
    if (!checked) {
      clearErrors('driversLicense')
      setValue('driversLicense.categories', '')
      setValue('driversLicense.date', null)
    }
    setDriversLicense(!driversLicense)
  }

  return (
    <>
      <DashedDivider />
      <Typography variant="h6">juhtimisõigus</Typography>
      <Typography variant="body2" mt={'5px'}>
        Juhtimisõiguse omamise korral märkige juhiloa väljaandmise kuupäev ja
        missuguse kategooria sõidukeid on lubatud juhtida
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CustomToggleButton
            control={control}
            name={'driversLicense.hasLicense'}
            label={'Juhtimisõigus'}
            alignment="row"
            onOtherChange={handleHasLicenseCheckbox}
            sx={{ mt: '10px' }}
          />
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
