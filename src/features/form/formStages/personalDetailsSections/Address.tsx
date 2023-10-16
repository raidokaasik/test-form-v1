import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useFormContext as hookFormContext } from 'react-hook-form'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { MaskField, MaskTypes } from 'src/components/fields/MaskField'

const AddressSection = () => {
  const { control } = hookFormContext<IPersonalDetailsStage>()

  return (
    <>
      <Typography variant="body2">Tegelik elukoht</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <OnlyTextField
            name={'address.county'}
            control={control}
            label="Maakond"
            capitalize
            helperText="Sisestage maakond"
          />
        </Grid>
        <Grid item xs={4}>
          <OnlyTextField
            name={'address.city'}
            control={control}
            label="Linn/Vald"
            capitalize
            helperText="Sisestage linn või vald"
          />
        </Grid>
        <Grid item xs={4}>
          <MaskField
            name={'address.zip'}
            control={control}
            label="Postiindeks"
            helperText="Sisestage postiindeks"
            type={MaskTypes.NUMBER}
          />
        </Grid>
        <Grid item xs={4}>
          <OnlyTextField
            name={'address.street'}
            control={control}
            label="Tänav"
            capitalize
            helperText="Sisestage tänav"
          />
        </Grid>
        <Grid item xs={4}>
          <MaskField
            name={'address.houseNumber'}
            control={control}
            label="Maja number"
            helperText="Sisestage maja number"
            type={MaskTypes.NUMBER}
          />
        </Grid>
        <Grid item xs={4}>
          <MaskField
            name={'address.appartmentNr'}
            control={control}
            required={false}
            label="Korteri number"
            helperText="Sisesta korteri number"
            type={MaskTypes.NUMBER}
          />
        </Grid>
      </Grid>
    </>
  )
}

export const Address = React.memo(AddressSection)
