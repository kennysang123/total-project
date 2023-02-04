import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./s.module.scss";
import TopMenu from "./comp/TopMenu";
import FullWidthTabs from "./comp/FixedTabs/index.tsx";
import { MuiTypography } from "./comp/Mui/MuiTypography.tsx";
import MuiButton from "./comp/Mui/MuiButton.tsx";
import MuiTextField from "./comp/Mui/MuiTextField.tsx";
import MuiSelect from "./comp/Mui/MuiSelect.tsx";
import MuiRadioButton from "./comp/Mui/MuiRadioButton.tsx";
import MuiCheckbox from "./comp/Mui/MuiCheckbox.tsx";
import MuiSwitch from "./comp/Mui/MuiSwitch.tsx";
import MuiRating from "./comp/Mui/MuiRating.tsx";
import MuiAutoComplete from "./comp/Mui/MuiAutoComplete.tsx";
import MuiLayout from "./comp/Mui/MuiLayout.tsx";
import NavBar from "./comp/NavBar.tsx";
import BotNavigation from "./comp/BotNavigation.tsx";
import DrawerRight from "./comp/DrawerRight.tsx";
import DrawerFilter from "./comp/DrawerFilter.tsx";
import DrawerReport from "./comp/DrawerReport.tsx";
import { AppProvider } from "./Context/AppContext.tsx";
const cx = classNames.bind(styles);

const menuInit = {
  isOpen: false,
};
export default function POS() {
  const [menuRight, setMenuRight] = useState(menuInit);
  const [isShowMenuRight, setIsShowMenuRight] = useState(false);
  const [isShowDrawerFilter, setIsShowDrawerFilter] = useState(false);
  const [isShowDrawerReport, setIsShowDrawerReport] = useState(false);
  console.log("main render");
  return (
    <>
      <NavBar />

      <AppProvider>
        <BotNavigation />
        <DrawerReport />
      </AppProvider>
      {/* <DrawerFilter
        props={{
          isShowDrawerFilter: isShowDrawerFilter,
          setIsShowDrawerFilter: setIsShowDrawerFilter,
        }}
      />
      <DrawerRight
        props={{
          isShowMenuRight: isShowMenuRight,
          setIsShowMenuRight: setIsShowMenuRight,
        }}
      /> */}
    </>
  );
  /* return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <TopMenu />
        <FullWidthTabs />
        <MuiTypography />
        <MuiButton />
        <MuiTextField />
        <MuiSelect />
        <MuiRadioButton />
        <MuiCheckbox />
        <MuiSwitch />
        <MuiRating />
        <MuiAutoComplete />
        <MuiLayout />
        <div style={{ height: "50vh" }}></div>
      </div>
    </>
  ); */
}
