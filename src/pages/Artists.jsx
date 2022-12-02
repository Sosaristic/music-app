import React from 'react'


import { Grid, Typography } from '@mui/material'


export default function Artists() {
  return (
    <Grid container minHeight={"100vh"}>
      <Grid xs={12} item sx={{paddingTop: {xs: 7, sm: 0}}}>
        <Typography>this is an Artists page</Typography>
      </Grid>
    </Grid>
  )
}
