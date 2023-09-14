import React, { useContext } from "react";
import { Box, Tooltip } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../Context/AppContext";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const { setOpenDrawerMenu, setOpenDrawerProduct } = useContext(AppContext);

  return (
    <Box sx={{ width: "100vw", position: "fixed", bottom: "0px" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Tooltip title="Feature is under development, please try again later">
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        </Tooltip>
        <Tooltip title="Feature is under development, please try again later">
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        </Tooltip>
        <BottomNavigationAction
          label="MENU"
          icon={<MenuIcon />}
          onClick={() => setOpenDrawerMenu(true)}
        />
      </BottomNavigation>
    </Box>
  );
}
