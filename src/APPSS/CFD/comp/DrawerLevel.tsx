import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  FormHelperText,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AppContext } from "../Context/AppContext";
/* import tabs */
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { GlobalFunction } from "../../APICALL/GlobalFunction";
import RotaryPaddle from "./level/RotaryPaddle";
import Vibration from "./level/Vibration";
import Capacitive from "./level/Capacitive";
import Conductive from "./level/Conductive";
import Magnetic from "./level/Magnetic";
import Electromechanical from "./level/Electromechanical";
import NonContactRadar from "./level/NonContactRadar";
import ContactRadar from "./level/ContactRadar";
import Ultrasonic from "./level/Ultrasonic";

export default function DrawerLevel() {
  console.log("Render DrawerLevel");
  const {
    loadData,
    openDrawerLevel,
    setOpenDrawerLevel,
    openDrawerDetailsProduct,
    setOpenDrawerDetailsProduct,
    searchValue,
    setSearchValue,
  } = useContext(AppContext);
  /* tabs */
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  /* noi dung */

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerLevel}
        onClose={() => setOpenDrawerLevel(false)}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Box textAlign={"center"} className="Header" sx={{ flex: "none" }}>
          <Stack mt={1}>
            <Typography
              variant="h6"
              component={"div"}
              className="Header__Title"
            >
              LEVEL
            </Typography>
          </Stack>
          <Box sx={{ width: "100vw", bgcolor: "background.paper" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              sx={{ width: "100vw" }}
            >
              <Tab label="Rotary Paddle" />
              <Tab label="Vibration" />
              <Tab label="Capactive" />
              <Tab label="Conductive" />
              <Tab label="Magnetic Level Gauge" />
              <Tab label="Electromechanical" />
              <Tab label="Non-Contact Radar Sensor" />
              <Tab label="Guided Radar Sensor" />
              <Tab label="Ultrasonic" />
              <Tab label="Submersible Probes" />
            </Tabs>
          </Box>
        </Box>

        <Box
          className="Body"
          sx={{
            backgroundColor: "white",
            overflowY: "scroll",
            flex: "1 1 auto",
          }}
          textAlign={"left"}
          role="presentation"
        >
          {value === 0 && <RotaryPaddle />}
          {value === 1 && <Vibration />}
          {value === 2 && <Capacitive />}
          {value === 3 && <Conductive />}
          {value === 4 && <Magnetic />}
          {value === 5 && <Electromechanical />}
          {value === 6 && <NonContactRadar />}
          {value === 7 && <ContactRadar />}
          {value === 8 && <Ultrasonic />}
        </Box>
        <Box
          className="Footer"
          sx={{ flex: "none" }}
          width="100vw"
          textAlign={"left"}
          role="presentation"
        >
          <Stack>
            <Button
              sx={{ borderRadius: "0px" }}
              variant="contained"
              startIcon={<ArrowBackIosNewIcon />}
              size="large"
              fullWidth
              onClick={() => setOpenDrawerLevel(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
