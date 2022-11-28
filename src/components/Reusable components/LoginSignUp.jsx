import React from "react";
import { Link } from "react-router-dom";
import { Box, Avatar, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export default function LoginSignUp() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar >
        <AccountCircle />
      </Avatar>
      <Typography
        ml={2}
        sx={{ "& a": { color: "white", textDecoration: "none", "&:hover": {textDecoration: "underline"}} }}
      >
        
        <Link>Log in</Link> / <Link>Log in</Link>
      </Typography>
    </Box>
  );
}
