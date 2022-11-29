import React from 'react'
import {useNavigate} from "react-router-dom"
import {
   
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
  } from "@mui/material";
  import { Box } from '@mui/system';

 

export default function NavList({icon, linkName, url, active, handleSideBar}) {
    const navigate = useNavigate()
   
const navigateTo = ()=>{
navigate(url)


}


    return (
      <Box
        
        sx={{ display: "flex",  alignItems: "center", color: "#868686", width: "100%" }}
      >
        <List sx={{width: "100%", }}>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>{
              navigateTo()
              handleSideBar()
            }}>
              <ListItemIcon sx={{color: `${active? "action.active" : "#868686"}`}}>{icon}</ListItemIcon>
              <ListItemText primary={linkName} sx={{color: `${active? "action.active" : "#868686"}`}}/>
            </ListItemButton>
          </ListItem>
        
        </List>
      </Box>
    );
  };
