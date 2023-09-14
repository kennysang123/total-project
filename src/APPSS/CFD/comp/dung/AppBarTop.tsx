import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

import {
  Box,
  Stack,
  Paper,
  Toolbar,
  IconButton,
  Typography,
  Button,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { titleCss, Bold } from "../../Context/CSS";

export default function AppBarTop() {
  const { setOpenDrawerMenu, setDrawerDangNhap } = useContext(AppContext);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setOpenDrawerMenu(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ChiliBee App
            </Typography>
            <Button color="inherit" onClick={() => setDrawerDangNhap(true)}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
