import React from "react";
import { Box } from "@mui/system";
import { AppBar, Toolbar, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import AppTitle from "./AppTitle";
import { useMenu } from "../../context/MenuContext";

export default function AppHeader({ handleMenuOpen }) {
  const {menuOpen, update} = useMenu()
  return (
    <Box>
      <AppBar position="fixed" sx={{ display: { sm: "none" } }} p={2}>
        <Toolbar>
          <AppTitle />
          <IconButton
            sx={{ color: "text.primary", marginLeft: "auto" }}
            size={"large"}
            onClick={() => update()}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
