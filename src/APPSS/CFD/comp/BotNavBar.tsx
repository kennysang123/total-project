import React, { useContext } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CampaignIcon from "@mui/icons-material/Campaign";
import { AppContext } from "../Context/AppContext";
import { Divider, Typography, Stack, Button } from "@mui/material";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VerifiedIcon from "@mui/icons-material/Verified";
import { globalCSS } from "../../POS/comp/GlobalStyle";
import DrawerMenu from "./DrawerMenu";

/* function refreshMessages(): MessageExample[] {
  const getRandomInt = (max: number) =>
    Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)]
  );
} */
export default function BotNavBar() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const {
    setOpenDrawerGioiThieu,
    setIsOpenDrawerFilter,
    setOpenDrawerMenu,
    searchValue,
    setSearchValue,
    setOpenDrawerMenuGioiThieu,
  } = useContext(AppContext);

  const sizePhoto = 70;
  return (
    <>
      <Box sx={{ pb: 3 }} ref={ref}>
        <CssBaseline />

        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          elevation={3}
          color="primary"
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Hướng dẫn"
              icon={<CampaignIcon />}
              onClick={() => setOpenDrawerGioiThieu(true)}
            />

            <BottomNavigationAction
              label="Thông báo"
              icon={<CampaignIcon />}
              onClick={() => setOpenDrawerGioiThieu(true)}
            />

            <BottomNavigationAction
              label="Menu"
              icon={<MenuIcon />}
              onClick={() => setOpenDrawerMenu(true)}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}
