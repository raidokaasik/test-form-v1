import React from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'

const PreviouslyUsedNamesSection = () => {
  const { register } = hookFormContext()
  const [namesUsedBefore, setNamesUsedBefore] = React.useState<boolean>(false)

  const { fields, append, remove } = useFieldArray({
    name: 'previouslyUsedNames',
  })

  return (
    <>
      <Typography variant="body2">
        Varem kasutatud nimed (ka neiupõlvenimi)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl sx={{ flexDirection: 'row', height: '42px' }}>
            <FormLabel sx={{ display: 'flex', alignItems: 'center' }}>
              Varem kasutatud nimed
            </FormLabel>
            <Checkbox
              checked={namesUsedBefore}
              onChange={() => {
                setNamesUsedBefore(!namesUsedBefore)
              }}
            />
          </FormControl>
        </Grid>
      </Grid>
      {namesUsedBefore &&
        fields.map((item, index) => {
          return (
            <Grid container spacing={2} key={item.id}>
              <Grid item xs={5}>
                <TextField
                  fullWidth
                  variant="standard"
                  label={'Nimi'}
                  {...register(`previouslyUsedNames.${index}.name` as const)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  variant="standard"
                  label={'Alates'}
                  {...register(`previouslyUsedNames.${index}.from` as const)}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  variant="standard"
                  label={'Kuni'}
                  {...register(`previouslyUsedNames.${index}.to` as const)}
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

export const PreviousNames = React.memo(PreviouslyUsedNamesSection)
