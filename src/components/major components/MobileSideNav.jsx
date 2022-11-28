import React from "react";

import LoginSignUp from "../Reusable components/LoginSignUp";

import { Link } from "react-router-dom";
import { Box, Divider } from "@mui/material";

import NavList from "../Reusable components/NavList";

export default function MobileSideNav() {
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
        <LoginSignUp />
      </Box>
      <Divider
        sx={{ bgcolor: "text.secondary", marginTop: 2, marginBlockEnd: 2 }}
      />

      <NavList />

      <Link
        to={"terms&condition"}
        style={{ textDecoration: "none", color: "#ffffd9" }}
      >
        Terms and Condition
      </Link>
    </Box>
  );
}
