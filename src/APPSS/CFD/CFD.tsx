import { Box } from "@mui/material";
import React, { useState } from "react";
import BotNavBar from "./comp/BotNavBar";
import DrawerDetailsProduct from "./comp/DrawerDetailsProduct";
import DrawerLevel from "./comp/DrawerLevel";
import DrawerMenu from "./comp/DrawerMenu";
import { AppProvider } from "./Context/AppContext";
import VNMain from "./VNMain";

const CFD = () => {
  return (
    <>
      <AppProvider>
        <VNMain />
      </AppProvider>
    </>
  );
};

export default CFD;
