import React from 'react'
import {Box} from "@mui/system"
import {useNavigate} from "react-router-dom"
import {Typography, Button} from "@mui/material"
export default function PageNotFound() {
    const navigate = useNavigate()
    const navigateHome = ()=>{
        navigate("/")
    }
  return (
    <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <Typography>...oops invalid page</Typography>
        <Button onClick={navigateHome}>return home</Button>
    </Box>
  )
}
