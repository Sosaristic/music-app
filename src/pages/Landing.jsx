import React, { useState } from "react";

import AppTitle from "../components/Reusable components/AppTitle"

import {
  AppBar,
  Grid,
  Box,
  
  
  Toolbar,
  IconButton,
  TextField,
  Drawer,
  
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";


import Carousel from "../components/major components/Carousel";
import MobileSideNav from "../components/major components/MobileSideNav";
import MusicNavigation from "../components/major components/MusicNavigation";
import BottomNav from "../components/major components/BottomNavigation";
import MusicPlayer from "../components/major components/MusicPlayer";
export default function Landing() {
  const [open, setOpen] = useState(false);

 

  
  return (
    <Grid container minHeight={"100vh"} sx={{ color: "white" }}>
      <Grid item xs={12}>
        <AppBar position="fixed" sx={{ display: { sm: "none" } }} p={2}>
          <Toolbar>
           <AppTitle />
            <IconButton
              sx={{ color: "text.primary", marginLeft: "auto" }}
              size={"large"}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          mt={8}
          p={1}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "95%",
            height: "2rem",
            backgroundColor: "neutral.main",
            position: "relative",
            left: "50%",
            transform: "translate(-50%, 0)",
            borderRadius: "10px",
          }}
        >
          <SearchOutlinedIcon sx={{ color: "text.secondary" }} />
          <TextField
            id="input-with-sx"
            placeholder="search"
            variant="standard"
            type={"search"}
            sx={{
              paddingLeft: "1rem",
              width: "80%",
            }}
          />
        </Box>
        <Carousel />
        <Drawer open={open} onClose={() => setOpen(false)}>
          <MobileSideNav />
        </Drawer>
        <MusicNavigation />
        <MusicPlayer />
      <BottomNav />
      </Grid>
    </Grid>
  );
}
