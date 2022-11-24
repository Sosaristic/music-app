import React from "react";
import LoginSignUp from "../Reusable components/LoginSignUp";
import AppTitle from "../Reusable components/AppTitle";

import { Grid } from "@mui/material";

import { Box } from "@mui/system";
import NavList from "../Reusable components/NavList";

export default function Sidebar() {
  return (
    <Grid
      pr={2}
      pl={2}
      container
      minHeight={"100vh"}
      sx={{ bgcolor: "primary.main", color: "white" }}
      direction="column"
    >
      <Box mt={2}>
        <AppTitle />
      </Box>

      <Box mt={4}>
        <NavList />
      </Box>
      <Box
        mt={2}
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: "6rem",
        }}
      >
        <LoginSignUp />
      </Box>
      {/* <Box mt={2} sx={{display: 'flex', alignItems: 'center', position: "absolute", bottom: "6rem"}}>
        <Avatar>
          <AccountCircle />
        </Avatar>
        <Typography ml={2} > Log in/Sign up</Typography>
      </Box> */}
    </Grid>
  );
}
