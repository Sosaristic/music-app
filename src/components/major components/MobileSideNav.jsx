import React from "react";
import { useLocation } from "react-router-dom";

import { Box, Divider } from "@mui/material";
import NavList from "../Reusable components/SideBarLinks";
import AlbumIcon from "@mui/icons-material/Album";
import HomeIcon from "@mui/icons-material/Home";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DiscFullIcon from "@mui/icons-material/DiscFull";
import WhatshotIcon from "@mui/icons-material/Whatshot";

import ProfileCard from "../Reusable components/ProfileCard";

export default function MobileSideNav() {
  const { pathname } = useLocation();

  const activeLink = (path) => {
    if (path === pathname) {
      return "active";
    }
  };
  return (
    <Box
      sx={{
        width: 250,
        minHeight: "100%",
        display: "flex",
        flexDirection: "column",
        bgcolor: "secondary.main",
        padding: "3rem 1rem",
      }}
    >
      <Box>
        <ProfileCard />
      </Box>
      <Divider
        sx={{ bgcolor: "text.secondary", marginTop: 2, marginBlockEnd: 2 }}
      />

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
    </Box>
  );
}
