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
import DrawerLevel from "./DrawerLevel";

export default function DrawerMenu() {
  console.log("Render DrawerMenu");
  const {
    openDrawerMenu,
    setOpenDrawerMenu,
    setOpenDrawerMenuGioiThieu,
    setOpenDrawerDangKy,
    setOpenDrawerXoaHoSo,
    setOpenDrawerLevel,
  } = useContext(AppContext);
  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerMenu}
        onClose={() => setOpenDrawerMenu(false)}
      >
        <Box
          textAlign={"center"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            height: "100vh",
          }}
        >
          {/* header---------- */}
          <Box textAlign={"center"} className="Header" sx={{ flex: "none" }}>
            <Stack mt={1} mb={1}>
              <Typography
                variant="h6"
                component={"div"}
                className="Header__Title"
              >
                Menu
              </Typography>
            </Stack>
          </Box>
          {/* body------------- */}
          <Box
            className="Body"
            sx={{
              backgroundColor: "white",
              overflowY: "scroll",
              flex: "1 1 auto",
              padding: "0px 10px",
            }}
            textAlign={"left"}
          >
            <Stack mt={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => setOpenDrawerLevel(true)}
                disabled
              >
                Flow
              </Button>
            </Stack>
            <Stack mt={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => setOpenDrawerLevel(true)}
              >
                Level
              </Button>
            </Stack>
            <Stack mt={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => setOpenDrawerXoaHoSo(true)}
                disabled
              >
                Pressure
              </Button>
            </Stack>
            <Stack mt={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => setOpenDrawerXoaHoSo(true)}
                disabled
              >
                Temperature
              </Button>
            </Stack>
            <Stack mt={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => setOpenDrawerXoaHoSo(true)}
                disabled
              >
                Proximity Sensors
              </Button>
            </Stack>
            <Stack mt={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => setOpenDrawerXoaHoSo(true)}
                disabled
              >
                Industrial valves
              </Button>
            </Stack>
            <Stack mt={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => setOpenDrawerXoaHoSo(true)}
                disabled
              >
                Signal conditioning
              </Button>
            </Stack>
            <Stack mt={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => setOpenDrawerXoaHoSo(true)}
                disabled
              >
                Controller {"&"} display
              </Button>
            </Stack>
          </Box>
          {/* Footer------------ */}
          <Box className="Footer" sx={{ flex: "none" }}>
            <Stack>
              <Button
                sx={{ borderRadius: "0px" }}
                variant="contained"
                startIcon={<ArrowBackIosNewIcon />}
                size="large"
                fullWidth
                onClick={() => setOpenDrawerMenu(false)}
              >
                Back
              </Button>
            </Stack>
          </Box>
        </Box>
      </Drawer>
      <DrawerLevel />
    </>
  );
}
