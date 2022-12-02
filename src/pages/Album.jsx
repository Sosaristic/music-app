import { Grid, Typography } from '@mui/material'
import React from 'react'

export default function AlbumPage() {
  return (
    <Grid container minHeight={"100vh"}>
      <Grid xs={12} item sx={{paddingTop: {xs: 7, sm: 0}}}>
        <Typography>this is an Album page</Typography>
      </Grid>
    </Grid>
  )
}
