import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'
import { DashedDivider } from 'src/components/DashedDivider'
import { AddIcon } from 'src/components/icons/AddIcon'
import { RemoveIcon } from 'src/components/icons/RemoveIcon'

export const defaultCommuncationValue = { commType: '', commValue: '' }

const CommunicationsSection = () => {
  const { register } = hookFormContext<IPersonalDetailsStage>()

  const { fields, append, remove } = useFieldArray({
    name: 'communications',
  })

  return (
    <>
      <DashedDivider />
      <Typography variant="h6">Sidevahendid</Typography>
      <Typography variant="body2" mt={'5px'} mb={'5px'}>
        Mobiiltelefoni number, e-posti aadress, Skype, muu sidevahendi number
        või kasutajatunnus
      </Typography>
      {fields.map((item, index) => {
        return (
          <Grid container spacing={2} key={item.id}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                variant="standard"
                label={'Tüüp'}
                {...register(`communications.${index}.commType` as const)}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                fullWidth
                variant="standard"
                label={'Sidevahend'}
                {...register(`communications.${index}.commValue` as const)}
              />
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              {index > 0 ? (
                <RemoveIcon onClick={() => remove(index)} />
              ) : (
                <AddIcon
                  onClick={() => {
                    append(defaultCommuncationValue)
                  }}
                />
              )}
            </Grid>
          </Grid>
        )
      })}
    </>
  )
}

export const Communications = React.memo(CommunicationsSection)
