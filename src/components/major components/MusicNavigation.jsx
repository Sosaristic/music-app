import React from "react";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

export default function MusicNavigation() {
  const Card = ({ title, icon }) => {
    return (
      <Box mr={3}>
        <Avatar sx={{ bgcolor: "action.active", color: "primary.main" }}>
          <LibraryMusicIcon />
        </Avatar>
        <Typography>{title}</Typography>
      </Box>
    );
  };
  return (
    <Box
      mt={2}
      sx={{
        display: { xs: "flex", sm: "none" },
        overflowX: "scroll",
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      <Card title={"Charts"} />
      <Card title={"Artists"} />
      <Card title={"Playlists"} />
      <Card title={"Genres"} />
      <Card title={"Trending"} />
      <Card title={"New"} />
      <Card title={"Gospel"} />
      <Card title={"Podcasts"} />
    </Box>
  );
}
