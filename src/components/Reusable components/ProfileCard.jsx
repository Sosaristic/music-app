import React from "react";
import { useMenu } from "../../context/MenuContext";
import { Box } from "@mui/system";
import { Avatar, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login"

import profileImage from "../images/Anderson.png";
// const CLIENT_ID = "b39c9c2f4fa346a69e4cdbcafefd5185";
// const REDIRECT_URI = "http://localhost:3000";
// const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
// const RESPONSE_TYPE = "token";

export default function ProfileCard({ handleSideBar }) {
  const { token, updateToken } = useMenu();
  const logout = (login) => {
    if(!login){
      updateToken(false);
      window.localStorage.removeItem("token");
      handleSideBar();
    }
    if(login){
      updateToken(true)
      handleSideBar();
    }
   
  };
  if (!token) {
    return (
      <Box ml={4}>
        <Button
        endIcon={<LoginIcon />}
          // href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "action.active",
            color: "primary.main",
            margin: "0 auto",
            "&:active": {backgroundColor: "actione.active", color: "primary.main"}
          }}
          onClick={()=>logout(true)}
        >
          Login
        </Button>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "space-between", sm: "space-around" },

          width: "100%",
        }}
      >
        <Avatar src={profileImage} />
        <Typography variant="subtitle2">Anderson</Typography>
        <IconButton sx={{ color: "red" }} onClick={()=>logout(false)}>
          <LogoutIcon />
        </IconButton>
      </Box>
    );
  }
}
