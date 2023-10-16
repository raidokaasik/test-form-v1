import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import React from 'react'
import { DashedDivider } from 'src/components/DashedDivider'
import { SmallButton } from 'src/components/buttons/SmallButton'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'

export const languagesDefaultValue: ILanguage = {
  language: '',
  level: '',
}

export interface ILanguage {
  id?: string
  language: string
  level: string
}

interface DefaultFormValues {
  languages: Array<ILanguage>
}

const LanguageSection = () => {
  const { control } = hookFormContext()

  const { fields, append, remove } = useFieldArray<
    DefaultFormValues,
    'languages',
    'id'
  >({
    name: 'languages',
  })
  return (
    <>
      <Typography variant="body2">
        Keelte valdamine (A1, A2; B1, B2; C1, C2)
      </Typography>
      <Typography variant="subtitle2" mb={'10px'}>
        Välja arvatud emakeel
      </Typography>
      {fields.map((item: ILanguage, index: number) => {
        return (
          <React.Fragment key={item.id}>
            <DashedDivider />
            <Grid container spacing={2} mb={'28px'}>
              <Grid item xs={5}>
                <OnlyTextField
                  capitalize
                  name={`languages.${index}.language` as const}
                  control={control}
                  label="Keel"
                  helperText="Sisestage keel"
                />
              </Grid>
              <Grid item xs={5}>
                <OnlyTextField
                  capitalize
                  name={`languages.${index}.level` as const}
                  control={control}
                  label="Tase"
                  helperText="Sisestage tase"
                />
              </Grid>
              <Grid item xs={2} display={'flex'} alignItems={'center'}>
                {index > 0 ? (
                  <SmallButton onClick={() => remove(index)} label="X" />
                ) : (
                  <SmallButton
                    onClick={() => append(languagesDefaultValue)}
                    label="Lisa"
                  />
                )}
              </Grid>
            </Grid>
          </React.Fragment>
        )
      })}
    </>
  )
}

export const Languages = React.memo(LanguageSection)
