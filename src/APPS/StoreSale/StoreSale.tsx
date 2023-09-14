import React from "react";
import SearchAppBar from "./comp/SearchAppBar";
/* appp  */
import SimpleBottomNavigation from "./comp/SimpleBottomNavigation";
import MainContent from "./comp/MainContent";
import DrawerMenu from "./comp/DrawerMenu";
import DrawerProduct from "./comp/DrawerProduct";
import { AppProvider } from "./Context/AppContext";
import MainContent2 from "./comp/MainContent2";
import DrawerProduct2 from "./comp/DrawerProduct2";
import DrawerMuaHang from "./comp/DrawerMuaHang";
import DebugKing from "./comp/DebugKing";

export default function StoreSale() {
  return (
    <>
      <AppProvider>
        <DrawerMenu />
        <DrawerProduct2 />
        <DrawerMuaHang />
        <SearchAppBar />
        <MainContent2 />
        <SimpleBottomNavigation />
      </AppProvider>
    </>
  );
}
