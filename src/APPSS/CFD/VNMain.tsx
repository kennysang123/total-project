import { Box, Stack, Grid } from "@mui/material";
import React, { useState, useContext } from "react";
import BotNavBar from "./comp/BotNavBar";
import DrawerDetailsProduct from "./comp/DrawerDetailsProduct";
import DrawerLevel from "./comp/DrawerLevel";
import DrawerMenu from "./comp/DrawerMenu";
import "./style.scss";

import { AppContext } from "./Context/AppContext";
import DrawerGioiThieu from "./comp/DrawerGioiThieu";
import Filter from "./comp/dung/Filter";
import DailyTodo from "./comp/dung/DailyTodo";
import DrawerDailyTodo from "./comp/dung/DrawerDailyTodo";
import WorkResult from "./comp/dung/WorkResult";
import ChartNV from "./comp/dung/ChartNV";
import PieChart from "./comp/dung/PieChart";
import ChartDoanhSoThangNV from "./comp/dung/ChartDoanhSoThangNV";
import ChartDoanhSoNgayNV from "./comp/dung/ChartDoanhSoNgayNV";
import ChartTienDoNgay from "./comp/dung/ChartTienDoNgay";
import ChartTienDoThang from "./comp/dung/ChartTienDoThang";
import ChartNgayLam from "./comp/dung/ChartNgayLam";
import DrawerDangNhap from "./comp/dung/DrawerDangNhap";
import DrawerDeXuat from "./comp/dung/DrawerDeXuat";
import AppBarTop from "./comp/dung/AppBarTop";
import Welcome from "./comp/dung/Welcome";
import CharViecThang from "./comp/dung/CharViecThang";
import ChartChamCong from "./comp/dung/ChartChamCong";
/* import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles); */

const VNMain = () => {
  const { openDrawerMenu, setOpenDrawerMenu } = useContext(AppContext);
  const lock = false;
  return (
    <>
      <div style={{ height: "5vh", width: "100%" }}></div>
      {lock && <Welcome />}
      <DrawerGioiThieu />
      <AppBarTop />
      <BotNavBar />
      <DrawerMenu />
      <DrawerDetailsProduct />
      <DrawerDangNhap />
      <DrawerDeXuat />
      <DrawerDailyTodo />

      {!lock && <WorkResult />}
      {!lock && <ChartDoanhSoNgayNV />}
      {!lock && <ChartDoanhSoThangNV />}
      {!lock && <CharViecThang />}
      {!lock && <ChartChamCong />}
      {/* {!lock && (
        <Box>
          <Stack ml={1} mt={1} mr={1}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <ChartTienDoNgay />
              </Grid>
              <Grid item xs={6}>
                <ChartTienDoThang />
              </Grid>
              <Grid item xs={6}>
                <ChartNgayLam />
              </Grid>
            </Grid>
          </Stack>
        </Box>
      )} */}

      <div style={{ height: "15vh", width: "100%" }}></div>

      {/* <DrawerMenu />
        <DrawerLevel />
        <DrawerDetailsProduct /> */}
    </>
  );
};

export default VNMain;
