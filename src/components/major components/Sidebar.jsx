import React from 'react'
import { Link } from 'react-router-dom';
import { Avatar, Grid, Typography } from '@mui/material'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Box } from '@mui/system';


export default function Sidebar() {
  return (
    <Grid container minHeight={"100vh"} sx={{bgcolor: 'primary.main', color: "white"}} direction="column">
     <Box mt={2} sx={{display: "flex", color: "action.active", alignItems: "center"}}>
      <Avatar sx={{bgcolor: "action.active"}}><MusicNoteIcon/></Avatar>
      <Typography variant='h5' sx={{marginLeft: 2,}}>Music 360</Typography>
     </Box>

     <Link to={"terms&condition"} style={{textDecoration: "none", color: "#ffffd9"}}>Terms and Condition</Link>

    </Grid>
  )
}
