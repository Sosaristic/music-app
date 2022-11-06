import React, { useState } from "react";
import {
  AppBar,
  Grid,
  Box,
  Avatar,
  Typography,
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
export default function Landing() {
  const [open, setOpen] = useState(false);
  return (
    <Grid container pl={1.5} pr={1} minHeight={"100vh"} sx={{ color: "white" }}>
      <Grid item xs={12}>
        <AppBar sx={{ display: { sm: "none" } }} p={2}>
          <Toolbar>
            <Avatar
              sx={{
                bgcolor: "action.active",
                color: "primary.main",
                fontWeight: "bold",
              }}
            >
              A
            </Avatar>
            <Typography
              ml={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "text.primary",
              }}
            >
              Allmusic
            </Typography>
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

            height: "2rem",
            backgroundColor: "neutral.main",
            position: "relative",

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
      <BottomNav />
      </Grid>
    </Grid>
  );
}
