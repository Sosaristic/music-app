import React from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline,  Grid, ThemeProvider } from "@mui/material";

import Sidebar from "./components/major components/Sidebar";
import { theme } from "./components/theme/theme";
import BottomNav from "./components/major components/BottomNavigation";
import MusicPlayer from "./components/major components/MusicPlayer";
import MusicPlayerDesktop from "./components/major components/MusicPlayerDesktop"

import { SideBarProvider } from "./context/Sidebar";
import MobileTopAndSide from "./components/major components/MobileTopAndSide";
import Footer from "./components/major components/Footer";

function App() {
  
  return (
    <>
      
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/*larger screen display side bar */}
          <Grid container >
            <Grid
              item
              sx={{ display: { xs: "none", sm: "flex" }, position: "relative" }}
              sm={3}
              lg={2}
          
            >
              <Sidebar />
            </Grid>
                      {/*major route */}

            <Grid
              item
              sm={9}
              xs={12}
              lg={10}
              sx={{ backgroundColor: "secondary.main", color: "white" }}
            >
              <SideBarProvider>
              <MobileTopAndSide />
              </SideBarProvider>
              <Outlet />
              <MusicPlayer />
              <Footer />
              
              <BottomNav />
              
            </Grid>
            <MusicPlayerDesktop />
          </Grid>
        </ThemeProvider>
      
    </>
  );
}

export default App;
