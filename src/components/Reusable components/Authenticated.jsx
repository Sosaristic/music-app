import React from "react";
import { useMenu } from "../../context/MenuContext";
import { Box } from "@mui/system";
import Login from "./Login";

export default function Authenticated({ children }) {
  const { token } = useMenu();
  const savedToken = window.localStorage.getItem("token")

  if (!token && !savedToken) {
    return <Login />;
  }
  return <Box>{children}</Box>;
}
