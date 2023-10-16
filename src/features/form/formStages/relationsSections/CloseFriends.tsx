import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { DashedDivider } from '../../../../components/DashedDivider'
import {
  useFieldArray,
  useFormContext as hookFormContext,
} from 'react-hook-form'
import { OnlyTextField } from 'src/components/fields/OnlyTextField'
import { FormDateField } from 'src/components/fields/FormDateField/FormDateField'
import { MaskField, MaskTypes } from 'src/components/fields/MaskField'

export interface ICloseFriend {
  firstName: string
  lastName: string
  from: string
  id?: string
  address: {
    city: string
    street: string
    houseNr: number | null
    appartmentNr: number | null
  }
}

export const closeFriend: ICloseFriend = {
  firstName: '',
  lastName: '',
  from: '',
  address: {
    city: '',
    street: '',
    houseNr: null,
    appartmentNr: null,
  },
}

type DefaultFormValues = {
  closeFriends: Array<ICloseFriend>
}

const CloseFriendsSection = () => {
  const { fields } = useFieldArray<DefaultFormValues, 'closeFriends', 'id'>({
    name: 'closeFriends',
  })

  const { control } = hookFormContext()

  return (
    <>
      <Typography variant="body2">Lähemad tuttavad </Typography>
      <Typography variant="subtitle2" mb={'10px'}>
        Märkige kaks isikut, kes Teid lähemalt tunnevad ja oskavad Teid
        iseloomustada ning kellega olete viimase kolme aasta jooksul suhelnud.
        Palun ärge märkige abikaasat, abieluga sarnanevas suhtes olevat
        elukaaslast, sugulasi ega töökaaslasi.
      </Typography>
      {fields.map((item: ICloseFriend, index: number) => (
        <React.Fragment key={item.id}>
          <DashedDivider />
          <Typography variant="body2" fontSize={'14px'} margin={0}>
            Isikuandmed
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <OnlyTextField
                capitalize
                name={`closeFriends.${index}.firstName` as const}
                control={control}
                label="Eesnimi"
                helperText="Sisestage eesnimi"
              />
            </Grid>
            <Grid item xs={4}>
              <OnlyTextField
                capitalize
                name={`closeFriends.${index}.lastName` as const}
                control={control}
                label="Perekonnanimi"
                helperText="Sisestage perekonnanimi"
              />
            </Grid>
            <Grid item xs={4}>
              <FormDateField
                control={control}
                name={`closeFriends.${index}.from` as const}
                label="Mis aastast tunnete"
                helperText="Sisestage kuupäev"
              />
            </Grid>
          </Grid>
          <Typography variant="body2" fontSize={'14px'} marginTop={'16px'}>
            Aadress
          </Typography>
          <Grid container spacing={2} mb={'28px'}>
            <Grid item xs={3}>
              <OnlyTextField
                capitalize
                name={`closeFriends.${index}.address.city` as const}
                control={control}
                label="Linn"
                helperText="Sisestage linn"
              />
            </Grid>
            <Grid item xs={3}>
              <OnlyTextField
                name={`closeFriends.${index}.address.street` as const}
                control={control}
                label="Tänav"
                helperText="Sisestage tänav"
              />
            </Grid>
            <Grid item xs={3}>
              <MaskField
                name={`closeFriends.${index}.address.houseNr` as const}
                control={control}
                label="Maja number"
                helperText="Sisestage maja number"
                type={MaskTypes.NUMBER}
              />
            </Grid>
            <Grid item xs={3}>
              <MaskField
                name={`closeFriends.${index}.address.appartmentNr` as const}
                control={control}
                required={false}
                label="Korteri number"
                helperText="Sisestage korteri number"
                type={MaskTypes.NUMBER}
              />
            </Grid>
          </Grid>
        </React.Fragment>
      ))}
      <Typography variant="body2" fontSize={'14px'} mb={'10px'}>
        Ülaltoodud lähituttavate andmete edastamiseks käesolevas isikuankeedis
        olen küsinud neilt nõusoleku ning selgitanud, et nendega võidakse võtta
        ühendust, et selgitada välja minu politseiteenistusse võtmise
        sobilikkuse üle otsustamisega seotud asjaolusid.
      </Typography>
    </>
  )
}

export const CloseFriends = React.memo(CloseFriendsSection)
