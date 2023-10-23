import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useFormContext as hookFormContext } from 'react-hook-form'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import { FormDateField } from 'src/components/fields/FormDateField/FormDateField'
import { DashedDivider } from 'src/components/DashedDivider'

const DocumentSection = () => {
  const {
    register,
    control,
    formState: { errors },
  } = hookFormContext<IPersonalDetailsStage>()

  return (
    <>
      <DashedDivider />
      <Typography variant="h6">Isikut tõendav dokument</Typography>
      <Typography variant="body2" mt={'5px'} mb={'5px'}>
        Isikutunnistus, pass
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <OnlyTextField
            control={control}
            name={'document.docType'}
            label={'Dokumendi nimetus'}
            helperText={'Sisestage dokumendi tüüp'}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="standard"
            label={'Number'}
            {...register('document.id', {
              required: 'Sisesta dokumendi number',
            })}
            error={Boolean(errors?.document?.id)}
            helperText={errors?.document?.id?.message as string}
          />
        </Grid>
        <Grid item xs={4}>
          <FormDateField
            control={control}
            name={'document.dateOfIssue'}
            label="Välja antud"
            helperText="Sisesta kuupäev"
          />
        </Grid>
        <Grid item xs={4}>
          <FormDateField
            control={control}
            name={'document.dateOfExpiry'}
            label="Kehtiv kuni"
            helperText="Sisesta kuupäev"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="standard"
            label={'Väljaandja'}
            {...register('document.authority', {
              required: 'Sisesta väljaandja',
            })}
            error={Boolean(errors?.document?.authority)}
            helperText={errors?.document?.authority?.message as string}
          />
        </Grid>
      </Grid>
    </>
  )
}

export const PersonalDocument = React.memo(DocumentSection)
