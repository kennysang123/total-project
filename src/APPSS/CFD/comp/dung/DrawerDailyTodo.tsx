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
import { AppContext } from "../../Context/AppContext";
/* import tabs */
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import DailyTodo from "./DailyTodo";
import TodoList from "./TodoList";

export default function DrawerDailyTodo() {
  const { isDrawerDailyTodo, setDrawerDailyTodo } = useContext(AppContext);
  return (
    <>
      <Drawer
        sx={{ display: "flex", flexDirection: "column" }}
        anchor="right"
        open={isDrawerDailyTodo === true}
        onClose={() => setDrawerDailyTodo(false)}
      >
        <Box className="Header" textAlign={"center"} sx={{ flex: "none" }}>
          <Stack mt={1}>
            <Typography
              variant="h6"
              component={"div"}
              className="Header__Title"
            >
              VIỆC TRONG NGÀY
            </Typography>
          </Stack>
        </Box>

        <Box
          className="Body"
          sx={{
            backgroundColor: "white",
            overflowY: "scroll",
            flex: "1 1 auto",
          }}
          width="100vw"
          textAlign={"left"}
        >
          <Stack ml={1} mt={1} mr={1}>
            <TodoList />
          </Stack>
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
              onClick={() => setDrawerDailyTodo(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
