import React from 'react'
// import { ReactComponent as Add } from 'public/icons/add-square-svgrepo-com.svg?url'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'

const CommunicationsSection = () => {
  const { register } = hookFormContext()

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
                label={'Sidevahend'}
                {...register(`communications.${index}.type` as const)}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                fullWidth
                variant="standard"
                label={'Väärtus'}
                {...register(`communications.${index}.value` as const)}
              />
            </Grid>
            <Grid item xs={1}>
              {index > 0 ? (
                <IconButton
                  onClick={() => {
                    remove(index)
                  }}
                >
                  x
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    append({ type: '', value: '' })
                  }}
                >
                  +
                </IconButton>
              )}
            </Grid>
          </Grid>
        )
      })}
    </>
  )
}

export const Communications = React.memo(CommunicationsSection)
