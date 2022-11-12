import React from "react";

import { Link } from "react-router-dom";
import { Box, Avatar, Typography, Divider, List, ListItem, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function MobileSideNav() {
  return (
    <Box
      sx={{
        width: 250,
        minHeight: "100%",
        display: "flex",
        flexDirection: 'column',
        bgcolor: "secondary.main",
        padding: "3rem 1rem",
      }}
    >
      <Box sx={{display: 'flex', alignItems: 'center'}}>
        <Avatar>
          <AccountCircle />
        </Avatar>
        <Typography ml={2} > Log in/Sign up</Typography>
      </Box>
      <Divider sx={{bgcolor: 'text.secondary', marginTop: 2, marginBlockEnd: 2}}/>
      <List>
      {["Treanding songs", "New Songs", "PlayLists", "Artists"].map((item, index)=>{
        return <ListItem key={index} disablePadding sx={{marginTop: 2}}><ListItemText primary={item} /></ListItem>
      })}
      </List>
     <Link to={"terms&condition"} style={{textDecoration: "none", color: "#ffffd9"}}>Terms and Condition</Link>
    </Box>
  );
}
