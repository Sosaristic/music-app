import React from "react";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";

import profileImage from "../images/image-product-1-thumbnail.jpg";

export default function ProfileCard() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        
        width: "100%",
      }}
    >
      <Avatar src={profileImage} />
      <Typography ml={1} variant="subtitle2">Sunday Omena</Typography>
      <Tooltip title="Logout" sx={{marginLeft: "auto"}}>
        <IconButton>
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
