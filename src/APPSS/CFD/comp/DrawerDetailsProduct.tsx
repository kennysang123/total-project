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

export default function DrawerDetailsProduct() {
  console.log("Render DrawerDetailsProduct");
  const { openDrawerDetailsProduct, setOpenDrawerDetailsProduct } =
    useContext(AppContext);
  console.log({ openDrawerDetailsProduct });
  const [loadData, setLoadData] = useState<any>({});
  const [content, setContent] = useState<any>([]);
  /* tabs */
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  /* noi dung */

  useEffect(() => {
    if (openDrawerDetailsProduct.length !== 0) {
      let photoStr = openDrawerDetailsProduct.photo;
      photoStr = JSON.parse(photoStr);
      console.log({ photoStr });
      setContent(photoStr);
    }
    return () => {};
  }, [openDrawerDetailsProduct]);

  const Photo = () => {
    return (
      <Box>
        <Stack ml={1} mt={1}>
          <Typography variant="h6">Description:</Typography>
        </Stack>
        <Stack ml={1} mt={1}>
          <Typography variant="body1">
            {openDrawerDetailsProduct.aboutme}
          </Typography>
        </Stack>
        <Stack ml={1} mt={1}>
          <Typography variant="h6">Photos:</Typography>
        </Stack>
        <Stack>
          {true &&
            content.map((value: any, index: any) => (
              <img src={value} alt="hinh" key={index}></img>
            ))}
        </Stack>
        <Stack ml={1} mt={1}>
          <Typography variant="h6">Videos:</Typography>
        </Stack>
        <Stack className="Youtube__Video">
          <iframe
            src="https://www.youtube.com/embed/tn3zSk8w8z8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </Stack>
      </Box>
    );
  };
  const Details = () => {
    return (
      <Stack
        sx={{
          backgroundColor: "white",
          height: "100%",
        }}
      >
        <iframe
          src={openDrawerDetailsProduct.pdf}
          width="100%"
          height="100%"
          allow="autoplay"
          title="pdf"
        ></iframe>
      </Stack>
    );
  };
  const Code = () => {
    return (
      <Stack
        sx={{
          backgroundColor: "white",
          border: "1px solid var(--bs-gray-400)",
          height: "100%",
        }}
      >
        <Stack sx={{ margin: "30px auto" }}>
          <a
            href="https://www.uwtgroup.com/en/rotonivo-rn-3001.html"
            target={"_blank"}
            rel="noreferrer"
          >
            <Button variant="outlined" size="large">
              Open Url
            </Button>
          </a>
        </Stack>
      </Stack>
    );
  };

  return (
    <>
      <Drawer
        sx={{ display: "flex", flexDirection: "column" }}
        anchor="right"
        open={openDrawerDetailsProduct.length !== 0}
        onClose={() => setOpenDrawerDetailsProduct([])}
      >
        <Box className="Header" textAlign={"center"} sx={{ flex: "none" }}>
          <Stack mt={1}>
            <Typography
              variant="h6"
              component={"div"}
              className="Header__Title"
            >
              {openDrawerDetailsProduct.namex}
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
              <Tab label="Photos" />
              <Tab label="Details" />
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
          width="100vw"
          textAlign={"left"}
        >
          {value === 0 && <Photo />}
          {value === 1 && <Details />}
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
              onClick={() => setOpenDrawerDetailsProduct([])}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
