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
  const { openDrawerMenu, setOpenDrawerMenu } = useContext(AppContext);
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
                MENU
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
            <Stack mt={1}></Stack>
            <Stack mt={1}>
              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => window.open("https://zalo.me/0907852416")}
              >
                Liên hệ: Nguyen WEB - APP - Automation Zalo 090 785 2416
              </Button>
            </Stack>
          </Box>
          {/* Footer------------ */}
          <Box className="Footer" sx={{ flex: "none" }}>
            <Stack>
              <Button
                sx={{ borderRadius: "0px", color: "rgba(0, 0, 0, 0.6)" }}
                variant="text"
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
    </>
  );
}
