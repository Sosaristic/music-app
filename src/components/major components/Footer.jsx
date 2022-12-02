import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  const LinkStyles = {
    display: "flex",
    flexDirection: "column",
    rowGap: 1,
    color: "#868686",
    "& a": {textDecoration: "none", color: "#868686"}
  }
  return (
    <Grid container  pb={15}>
<Grid xs={6} sm={4} item sx={LinkStyles} p={4}>
  <Typography sx={{color: "white"}}> Music360</Typography>
 <Typography variant='body2'>Music360 is a music streaming app, to listen to various kind of music to pacify your soul</Typography>
</Grid>
<Grid xs={6} sm={4} item p={4} sx={LinkStyles}>
  <Typography sx={{color: "white"}}>Company</Typography>
  <Typography>About</Typography>
  <Typography>Privacy Policy</Typography>
  <Typography>Terms of services</Typography>
  <Typography>Cookie Policy</Typography>


</Grid>
<Grid xs={12} sm={4} item p={4} sx={LinkStyles}> 
<Typography>Follow us</Typography>
<Box sx={{display: "flex", alignItems: "center", columnGap: 2}}>
  <FacebookRoundedIcon />
<TwitterIcon />
<InstagramIcon />
</Box>

</Grid>
    </Grid>
  )
}
