import React, { useState } from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { HomeOutlined } from "@mui/icons-material";


export default function BottomNav() {
    const [value, setValue] = useState(0);

  return (
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
        sx={{ bgcolor: "primary.main" }}
      >
        <BottomNavigationAction
          label="Music"
          icon={<HomeOutlined />}
          sx={{ "&.Mui-selected": { color: "action.active" } }}
        />
        <BottomNavigationAction
          label="Library"
          icon={<LibraryMusicIcon />}
          sx={{ "&.Mui-selected": { color: "action.active" } }}
        />
        <BottomNavigationAction
          label="Favorites"
          icon={<FavoriteIcon />}
          sx={{ "&.Mui-selected": { color: "action.active" } }}
        />
      </BottomNavigation>
    </Paper>
  );
}
