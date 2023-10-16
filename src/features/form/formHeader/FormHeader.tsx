import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

export const FormHeader = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography textAlign={'right'} fontSize={'13px'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          imperdiet varius nibh a consectetur.
        </Typography>
      </Grid>
    </Grid>
  )
}
