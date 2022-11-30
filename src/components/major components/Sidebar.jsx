import React from "react";
import { useLocation } from "react-router-dom";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Box } from "@mui/system";
import NavList from "../Reusable components/SideBarLinks";
import AlbumIcon from "@mui/icons-material/Album";
import HomeIcon from "@mui/icons-material/Home";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DiscFullIcon from "@mui/icons-material/DiscFull";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ProfileCard from "../Reusable components/ProfileCard";

export default function Sidebar() {
  const { pathname } = useLocation();

  const activeLink = (path) => {
    if (path === pathname) {
      return "active";
    }
  };

  return (
    <Grid
      container
      minHeight={"100vh"}
      sx={{
        bgcolor: "primary.main",
        color: "#868686",
        position: "relative",
        width: "100%",
      }}
      direction="column"
    >
      <Box
      pl={1}
        mt={2}
        sx={{
          display: "flex",
          color: "action.active",
          alignItems: "center",
          width: "100%",
          columnGap: 1,
          flexWrap: "nowrap",
        }}
      >
        <Avatar sx={{ bgcolor: "action.active", color: "primary.main" }}>
          <MusicNoteIcon />
        </Avatar>
        <Typography variant="subtitle1" sx={{ color: "white", fontFamily: `'Satisfy', cursive`, }}>
          Music 360
        </Typography>
      </Box>
      <Divider
        sx={{
          bgcolor: "text.secondary",
          marginTop: 1,
          width: "80%",
          position: "relative",
          left: "50%",
          transform: "translate(-50%, 0)"
        }}
      />
      <Box
        mt={3}
        
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <ProfileCard />
      </Box>
      <Typography mt={4} pl={3} variant="subtitle" sx={{ color: "white" }}>
        Music
      </Typography>

      <NavList
        icon={<HomeIcon />}
        linkName="Home"
        active={activeLink("/")}
        url="/"
      />
      <NavList
        icon={<AlbumIcon />}
        linkName="Albums"
        active={activeLink("/albums")}
        url="albums"
      />
      <NavList
        icon={<EmojiPeopleIcon />}
        linkName="Artists"
        active={activeLink("/artists")}
        url="artists"
      />
      <NavList
        icon={<WhatshotIcon />}
        linkName="Playlists"
        active={activeLink("/playlists")}
        url="playlists"
      />
      <NavList
        icon={<DiscFullIcon />}
        linkName="Tracks"
        active={activeLink("/tracks")}
        url="tracks"
      />

      <Typography mt={4} pl={3} variant="subtitle" sx={{ color: "white" }}>
        My Library
      </Typography>
      <NavList
        icon={<AlbumIcon />}
        linkName="Recently Played"
        active={activeLink("/my-library/recently-played")}
        url="my-library/recently-played"
      />
      <NavList
        icon={<AlbumIcon />}
        linkName="Albums"
        active={activeLink("/my-library/albums")}
        url="my-library/albums"
      />
      <NavList
        icon={<AlbumIcon />}
        linkName="Playlists"
        active={activeLink("/my-library/playlists")}
        url="my-library/playlists"
      />
    </Grid>
  );
}
