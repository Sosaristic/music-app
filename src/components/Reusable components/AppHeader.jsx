import React from "react";
import { Box } from "@mui/system";
import { AppBar, Toolbar, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AppTitle from "./AppTitle";
import { useSideBar } from "../../context/Sidebar";

export default function AppHeader() {
  
  const {updateSideBar} = useSideBar()
  return (
    <Box>
      <AppBar position="fixed" sx={{ display: { sm: "none" } }} p={2}>
        <Toolbar>
          <AppTitle />
          <IconButton
            sx={{ color: "text.primary", marginLeft: "auto" }}
            size={"large"}
            onClick={updateSideBar}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
