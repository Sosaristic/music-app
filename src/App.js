import React from "react";
import {  Outlet } from "react-router-dom";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";

import Sidebar from "./components/major components/Sidebar";
import {theme} from "./components/theme/theme"

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container sx={{ bgcolor: "red" }} >
        <Grid item sx={{ display: { xs: "none", sm: "flex" }, bgcolor:"blue" }} sm={3} lg={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={9} xs={12} lg={10} sx={{bgcolor: 'secondary.main', color: 'white'}}>
        <Outlet />
        </Grid>
      </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
