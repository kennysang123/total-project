import { Box } from "@mui/material";
import React, { useState, useContext } from "react";
import BotNavBar from "./comp/BotNavBar";
import DrawerDetailsProduct from "./comp/DrawerDetailsProduct";
import DrawerLevel from "./comp/DrawerLevel";
import DrawerMenu from "./comp/DrawerMenu";
import "./style.scss";
import logo from "./assets/images/logo.png";
import { AppContext } from "./Context/AppContext";

const VNMain = () => {
  const { openDrawerMenu, setOpenDrawerMenu } = useContext(AppContext);
  return (
    <>
      <Box className="Main__Logo">
        <img src={logo} alt="logo vntech"></img>
      </Box>
      <BotNavBar />
      <DrawerMenu />
      <DrawerDetailsProduct />
      {/* <DrawerMenu />
        <DrawerLevel />
        <DrawerDetailsProduct /> */}
    </>
  );
};

export default VNMain;
