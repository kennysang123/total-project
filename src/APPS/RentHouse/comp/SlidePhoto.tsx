import React, { useContext, useState, useEffect } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Avatar
} from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "../Context/AppContext";

export default function SlidePhoto() {
  const [value, setValue] = React.useState(0);
  const { setOpenDrawerMenu, setOpenDrawerProduct } = useContext(AppContext);
  const [currentCount, setCount] = useState<number>(0);
  const [photoGet, setPhotoGet] = useState<any>("");

  const photo = [
    "https://wallpaperswide.com/download/house_island_2-wallpaper-1024x768.jpg",
    "https://wallpaperswide.com/download/sunset_312-wallpaper-1024x768.jpg"
  ];
  const timer = () => {
    if (currentCount <= 1) {
      setCount((prev) => prev + 1);
      setPhotoGet(photo[currentCount]);
    } else {
      setCount(0);
      setPhotoGet(photo[0]);
    }

    console.log(currentCount);
    console.log(photoGet);
  };

  /* useEffect(() => {
    const id = setInterval(timer, 3000);

    return () => clearInterval(id);
  }, [currentCount]); */
  return (
    <Box>
      <Stack
        style={{
          marginTop: "20vh",
          backgroundImage: `url(${photoGet})`,
          height: "40vh",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <p>slide photo</p>
      </Stack>
    </Box>
  );
}
