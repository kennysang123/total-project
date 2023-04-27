import React, { useEffect, useState, useContext } from "react";
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
import { AppContext } from "../../Context/AppContext";

const Magnetic = () => {
  const {
    loadData,
    openDrawerLevel,
    setOpenDrawerLevel,
    openDrawerDetailsProduct,
    setOpenDrawerDetailsProduct,
    searchValue,
    setSearchValue,
  } = useContext(AppContext);
  useEffect(() => {
    setSearchValue("Magnetic");

    return () => {};
  }, []);
  function isNotRealValue(obj: any) {
    /* return obj && obj !== "null" && obj !== "undefined"; */
    return !Object.keys(obj).length;
  }

  function photoParseAvatar(photoStr: any) {
    let photo = JSON.parse(photoStr);
    return photo[0];
  }

  const check = isNotRealValue(loadData);
  console.log({ check });
  const sizePhoto = 120;
  return (
    <Box /* ref={ref} */>
      <CssBaseline />
      <List>
        {isNotRealValue(loadData) === false &&
          loadData.map((value: any, index: number) => (
            <Stack key={index + 1}>
              <ListItem
                alignItems="flex-start"
                button
                onClick={() => setOpenDrawerDetailsProduct(value)}
              >
                <ListItemAvatar sx={{ marginRight: "10px" }} className="List">
                  <div
                    className="List__Avatar"
                    style={{
                      backgroundImage: `url(${photoParseAvatar(value.photo)})`,
                    }}
                  ></div>
                  {/* <Avatar
                    alt="Avatar"
                    src={photoParseAvatar(value.photo)}
                    sx={{ width: sizePhoto, height: sizePhoto }}
                    variant="square"
                  /> */}
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        sx={{ fontWeight: "bold", display: "inline" }}
                        component="div"
                        variant="subtitle1"
                        color="text.primary"
                      >
                        {value.namex}
                      </Typography>
                    </>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{
                          display: "-webkit-box",
                          overflow: "hidden",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 4,
                        }}
                      >{` — ${value.aboutme}`}</Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </Stack>
          ))}
      </List>
    </Box>
  );
};

export default Magnetic;
