import React from "react";
import { Avatar, Typography, Box } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";


export default function AppTitle() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ bgcolor: "action.active", color: "primary.main", }}>
        <MusicNoteIcon />
      </Avatar>
      <Typography
      ml={2}
        variant="h5"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "text.primary",
          fontFamily: `'Satisfy', cursive`,
          
        }}
      >
        Music 360
      </Typography>
    </Box>
  );
}
