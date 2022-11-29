import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { useMenu } from "../../context/MenuContext";
const CLIENT_ID = "b39c9c2f4fa346a69e4cdbcafefd5185";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

export default function Login() {
    const  {updateToken} = useMenu()
    
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]      
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      updateToken(true)
    }
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        style={{
          position: "relative",
          textDecoration: "none",
          backgroundColor: "#00ffff",
          padding: "1rem",
          color: "#0d0d0d",
          fontSize: "large"
        }}
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Connect to spoify
      </a>
    </Box>
  );
}
