import React from "react";
import {  Routes, Route } from "react-router-dom";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import Landing from "./pages/Landing";
import Sidebar from "./components/major components/Sidebar";
import {theme} from "./components/theme/theme"

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container sx={{ bgcolor: "red" }} >
        <Grid item sx={{ display: { xs: "none", sm: "flex" }, bgcolor:"blue" }} sm={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={10} xs={12} sx={{bgcolor: 'secondary.main', color: 'white'}}>
          <Routes>
            <Route exact path="/" element={<Landing />} />


          </Routes>
        </Grid>
      </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
