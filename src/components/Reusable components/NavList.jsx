import React from 'react'
import {
   
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ListItemButton,
  } from "@mui/material";
  import { Box } from '@mui/system';

  import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import DiscFullIcon from '@mui/icons-material/DiscFull';
import AlbumIcon from '@mui/icons-material/Album';

export default function NavList() {

    return (
      <Box
        mr={3.5}
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><AlbumIcon/></ListItemIcon>
              <ListItemText primary="Albums"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><EmojiPeopleIcon/></ListItemIcon>
              <ListItemText primary="Artits"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><DiscFullIcon/></ListItemIcon>
              <ListItemText primary="Playlists"/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  };

