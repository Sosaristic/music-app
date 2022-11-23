import React from "react";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";

import BarChartIcon from '@mui/icons-material/BarChart'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import DiscFullIcon from '@mui/icons-material/DiscFull';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AlbumIcon from '@mui/icons-material/Album';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import ChurchIcon from '@mui/icons-material/Church';


export default function MusicNavigation() {
  const Card = ({ title, icon }) => {
    return (
      <Box mr={3.5} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Avatar sx={{ bgcolor: "action.active", color: "primary.main" }}>
          {icon}
        </Avatar>
        <Typography>{title}</Typography>
      </Box>
    )
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
      <Card title={"Charts"} icon= {<BarChartIcon/>}/>
      <Card title={"Artists"} icon={<EmojiPeopleIcon/>}/>
      <Card title={"Playlists"}  icon={<MusicNoteIcon/>}/>
      <Card title={"Genres"} icon={<DiscFullIcon/>}/>
      <Card title={"Trending"} icon={<WhatshotIcon/>}/>
      <Card title={"New"} icon={<AlbumIcon/>}/>
      <Card title={"Gospel"} icon={<ChurchIcon/>}/>
      <Card title={"Podcasts"} icon={<WifiTetheringIcon/>}/>
    </Box>
  );
}
