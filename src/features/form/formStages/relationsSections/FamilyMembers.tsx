import {
  useFormContext as hookFormContext,
  useFieldArray,
} from 'react-hook-form'
import React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'
import { SmallButton } from 'src/components/buttons/SmallButton'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import { MaskField, MaskTypes } from 'src/components/fields/MaskField'

export interface IFamilyMember {
  firstName: string
  lastName: string
  typeOfRelation: string
  personalId: number | null
  id?: string
  address: {
    city: string
    street: string
    houseNr: number | null
    appartmentNr: number | null
  }
}

export enum Parents {
  MOTHER = 'Ema',
  FATHER = 'Isa',
}

export const familyMember: IFamilyMember = {
  firstName: '',
  lastName: '',
  typeOfRelation: '',
  personalId: null,
  address: {
    city: '',
    street: '',
    houseNr: null,
    appartmentNr: null,
  },
}

type DefaultFormValues = {
  familyMembers: Array<IFamilyMember>
}

const FamilyMembersSection = () => {
  const { control } = hookFormContext()

  const { fields, append, remove } = useFieldArray<
    DefaultFormValues,
    'familyMembers',
    'id'
  >({
    name: 'familyMembers',
  })

  return (
    <>
      <Typography variant="body2">Sugulased ja hõimlased</Typography>
      <Typography variant="subtitle2" mb={'10px'}>
        Vanemad (ka kasuvanemad), lapsed (ka kasulapsed), vennad, õed, abikaasa
        või abieluga sarnanevas suhtes olev elukaaslane, endine abikaasa.
      </Typography>
      <SmallButton onClick={() => append(familyMember)} label="Lisa" />
      <Box overflow={'auto'} height={'100%'}>
        {fields.map((item: IFamilyMember, index: number) => {
          const disabledTypeOfRelation =
            item.typeOfRelation === Parents.FATHER ||
            item.typeOfRelation === Parents.MOTHER
          return (
            <React.Fragment key={item.id}>
              <Divider sx={{ mt: '16px', mb: '16px', borderStyle: 'dashed' }} />
              <Box
                width="100%"
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <Typography variant="body2" fontSize={'14px'} margin={0}>
                  Isikuandmed
                </Typography>
                {index > 1 && (
                  <SmallButton onClick={() => remove(index)} label="X" />
                )}
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <OnlyTextField
                    capitalize
                    name={`familyMembers.${index}.firstName` as const}
                    control={control}
                    label="Eesnimi"
                    helperText="Sisestage eesnimi"
                  />
                </Grid>
                <Grid item xs={3}>
                  <OnlyTextField
                    capitalize
                    name={`familyMembers.${index}.lastName` as const}
                    control={control}
                    label="Perekonnanimi"
                    helperText="Sisestage perekonnanimi"
                  />
                </Grid>
                <Grid item xs={2}>
                  <OnlyTextField
                    name={`familyMembers.${index}.typeOfRelation` as const}
                    control={control}
                    label="Seotus"
                    helperText="Sisestage seotus"
                    disabled={disabledTypeOfRelation}
                  />
                </Grid>
                <Grid item xs={4}>
                  <MaskField
                    name={`familyMembers.${index}.personalId` as const}
                    control={control}
                    label="Isikukood"
                    helperText="Sisestage isikukood"
                    type={MaskTypes.ID}
                  />
                </Grid>
              </Grid>
              <Typography variant="body2" fontSize={'14px'} mt={'16px'}>
                Elukoht
              </Typography>
              <Grid container spacing={2} mb={'28px'}>
                <Grid item xs={3}>
                  <OnlyTextField
                    capitalize
                    name={`familyMembers.${index}.address.city` as const}
                    control={control}
                    label="Linn/Vald"
                    helperText="Sisestage linn või vald"
                  />
                </Grid>
                <Grid item xs={3}>
                  <OnlyTextField
                    capitalize
                    name={`familyMembers.${index}.address.street` as const}
                    control={control}
                    label="Tänav"
                    helperText="Sisestage tänav"
                  />
                </Grid>
                <Grid item xs={3}>
                  <OnlyTextField
                    allownumbers
                    capitalize
                    name={`familyMembers.${index}.address.houseNr` as const}
                    control={control}
                    label="Maja number"
                    helperText="Sisestage maja number"
                  />
                </Grid>
                <Grid item xs={3}>
                  <MaskField
                    name={
                      `familyMembers.${index}.address.appartmentNr` as const
                    }
                    control={control}
                    label="Korteri number"
                    helperText="Sisestage korteri number"
                    type={MaskTypes.NUMBER}
                    required={false}
                  />
                </Grid>
              </Grid>
            </React.Fragment>
          )
        })}
      </Box>
    </>
  )
}

export const FamilyMembers = React.memo(FamilyMembersSection)
