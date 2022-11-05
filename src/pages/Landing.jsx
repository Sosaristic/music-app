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
  Paper,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"
import FavoriteIcon from "@mui/icons-material/Favorite"

import Carousel from "../components/major components/Carousel";
import MobileSideNav from "../components/major components/MobileSideNav";
import { HomeOutlined } from "@mui/icons-material";
export default function Landing() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
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
        <Paper
          sx={{
            display: { sm: "none" },
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "primary.main",
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{bgcolor: "primary.main"}}
          >
            <BottomNavigationAction label="Music" icon={<HomeOutlined />} sx={{'&.Mui-selected': {color: "action.active"}}}/>
            <BottomNavigationAction label="Library" icon={<LibraryMusicIcon />} sx={{'&.Mui-selected': {color: "action.active"}}}/>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} sx={{'&.Mui-selected': {color: "action.active"}}}/>
          </BottomNavigation>
        </Paper>
      </Grid>
    </Grid>
  );
}
