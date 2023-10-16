import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Controller, useFormContext as hookFormContext } from 'react-hook-form'
import { OnlyTextField } from '../../../../components/fields/OnlyTextField'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { FormDateField } from '../../../../components/fields/FormDateField/FormDateField'
import { Dayjs } from 'dayjs'

const DocumentSection = () => {
  const {
    register,
    control,
    formState: { errors },
  } = hookFormContext<IPersonalDetailsStage>()
  return (
    <>
      <Typography variant="body2">
        Isikut tõendav dokument (isikutunnistus, pass)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <OnlyTextField
            register={{
              ...register('document.docType', {
                required: 'Sisesta dokumendi tüüp',
              }),
            }}
            label={'Dokumendi nimetus'}
            helperText={errors?.document?.docType?.message as string}
            error={Boolean(errors?.document?.docType)}
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
          <Controller
            name="document.dateOfIssue"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <FormDateField
                  value={value}
                  handleChange={(value: Dayjs | null) => {
                    onChange(value)
                  }}
                  label="Välja antud"
                />
              )
            }}
          />

          {/* <TextField
            fullWidth
            variant="standard"
            label={'Välja antud'}
            {...register('document.dateOfIssue')}
          /> */}
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="standard"
            label={'Kehtiv kuni'}
            {...register('document.dateOfExpiry')}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            variant="standard"
            label={'Väljaandja'}
            {...register('document.authority')}
          />
        </Grid>
      </Grid>
    </>
  )
}

export const PersonalDocument = React.memo(DocumentSection)
