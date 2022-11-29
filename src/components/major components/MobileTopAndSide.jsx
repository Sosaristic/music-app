import React, { useState} from "react";
import { Box } from "@mui/system";
import AppHeader from "../Reusable components/AppHeader";
import { Drawer } from "@mui/material";
import MobileSideNav from "./MobileSideNav";
import { useSideBar } from "../../context/Sidebar";


export default function MobileTopAndSide() {
const {sideBar, updateSideBar} = useSideBar()
  const [open, setOpen] = useState(false);
  
  const handleMenuOpen = ()=>{
    setOpen(!open)
  }

  return (
    <Box>
      <AppHeader handleMenuOpen={handleMenuOpen}/>
      <Drawer open={sideBar} onClose={()=>updateSideBar()}>
        <MobileSideNav />
      </Drawer>
    </Box>
  );
}
