import React from "react";


import {
 
  Grid,
  Box,
 
  TextField,
 
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import Carousel from "../components/major components/Carousel";
import MusicNavigation from "../components/major components/MusicNavigation";

import Authenticated from "../components/Reusable components/Authenticated";

export default function Landing() {
  

  return (
    <Grid container minHeight={"100vh"} sx={{ color: "white" }}>
      <Grid item xs={12}>
       
        <Authenticated>
          <Box
            mt={{xs: 8, sm: 1}}
            p={1}
            sx={{
              display: "flex",
              alignItems: "center",
              width: "95%",
              height: "2rem",
              backgroundColor: "neutral.main",
              position: "relative",
              left: "50%",
              transform: "translate(-50%, 0)",
              borderRadius: "10px",
            }}
          >
            
            <SearchOutlinedIcon sx={{ color: "text.secondary" }} />
            <TextField
              id="input-with-sx"
              placeholder="search"
              variant="standard"
              type={"search"}
              sx={{
                paddingLeft: "1rem",
                width: "80%",
              }}
            />
          </Box>
          <Carousel />
         
          <MusicNavigation />
          
        </Authenticated>
        
      </Grid>
    </Grid>
  );
}
