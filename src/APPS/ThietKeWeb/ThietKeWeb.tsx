import React from "react";
import SearchAppBar from "./comp/SearchAppBar";
/* appp  */
import SimpleBottomNavigation from "./comp/SimpleBottomNavigation";
import MainContent from "./comp/MainContent";
import DrawerMenu from "./comp/DrawerMenu";
import DrawerProduct from "./comp/DrawerProduct";
import { AppProvider } from "./Context/AppContext";

export default function ThietKeWeb() {
  return (
    <>
      <AppProvider>
        <DrawerMenu />
        <DrawerProduct />
        <SearchAppBar />
        <MainContent />
        <SimpleBottomNavigation />
      </AppProvider>
    </>
  );
}
