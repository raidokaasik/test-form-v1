import React from 'react'
// import { ReactComponent as Add } from 'public/icons/add-square-svgrepo-com.svg?url'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import { SmallButton } from 'src/components/buttons/SmallButton'
import { IPersonalDetailsStage } from '../PersonalDetailsStage'

const CommunicationsSection = () => {
  const { register } = hookFormContext<IPersonalDetailsStage>()

  const { fields, append, remove } = useFieldArray({
    name: 'communications',
  })

  return (
    <>
      <Typography variant="body2">
        Sidevahendite numbrid/aadressid/kasutajatunnused
      </Typography>
      <Typography variant="subtitle2">
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
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="standard"
                label={'Sidevahend'}
                {...register(`communications.${index}.commValue` as const)}
              />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              {index > 0 ? (
                <SmallButton onClick={() => remove(index)} label="X" />
              ) : (
                <SmallButton
                  onClick={() => {
                    append({ commType: '', commValue: '' })
                  }}
                  label="Lisa"
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
