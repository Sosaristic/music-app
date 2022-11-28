import React from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";

import Sidebar from "./components/major components/Sidebar";
import { theme } from "./components/theme/theme";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <>
      <MenuProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Grid container>
            <Grid
              item
              sx={{ display: { xs: "none", sm: "flex" } }}
              sm={3}
              lg={2}
            >
              <Sidebar />
            </Grid>
            <Grid
              item
              sm={9}
              xs={12}
              lg={10}
              sx={{ bgcolor: "secondary.main", color: "white" }}
            >
              <Outlet />
            </Grid>
          </Grid>
        </ThemeProvider>
      </MenuProvider>
    </>
  );
}

export default App;
