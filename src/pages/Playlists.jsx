import React from "react";

import { Grid, Typography } from "@mui/material";

export default function Playlists() {
  return (
    <Grid container minHeight={"100vh"}>
      <Grid xs={12} item sx={{paddingTop: {xs: 7, sm: 0}}}>
        <Typography>this is a playlists page</Typography>
      </Grid>
    </Grid>
  );
}
