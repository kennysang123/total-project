import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TuneIcon from "@mui/icons-material/Tune";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import { AppContext } from "../Context/AppContext";

export default function DrawerMenu() {
  const {
    isOpenDrawerMenu,
    setIsOpenDrawerMenu,
    setOpenDrawerMenuGioiThieu,
    setOpenDrawerDangKy,
    setOpenDrawerXoaHoSo,
  } = useContext(AppContext);
  return (
    <>
      <Drawer
        anchor="right"
        open={isOpenDrawerMenu}
        onClose={() => setIsOpenDrawerMenu(false)}
      >
        <Box p={2} width="250px" textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Menu
          </Typography>
          <Stack mt={2}>
            <Button
              variant="outlined"
              startIcon={<MenuBookIcon />}
              size="large"
              fullWidth
              onClick={() => setOpenDrawerMenuGioiThieu(true)}
            >
              Giới thiệu
            </Button>
          </Stack>
          <Stack mt={2}>
            <Button
              variant="outlined"
              startIcon={<BorderColorIcon />}
              size="large"
              fullWidth
              onClick={() => setOpenDrawerDangKy(true)}
            >
              Đăng ký
            </Button>
          </Stack>
          <Stack mt={2}>
            <Button
              variant="outlined"
              startIcon={<BorderColorIcon />}
              size="large"
              fullWidth
              onClick={() => setOpenDrawerXoaHoSo(true)}
            >
              Xóa hồ sơ
            </Button>
          </Stack>

          <Stack
            direction="row"
            sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
          >
            <Button
              sx={{ borderRadius: "0px" }}
              variant="contained"
              startIcon={<ArrowBackIosNewIcon />}
              size="large"
              fullWidth
              onClick={() => setIsOpenDrawerMenu(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
