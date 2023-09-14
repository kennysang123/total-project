import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  Avatar,
  Chip,
} from "@mui/material";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TuneIcon from "@mui/icons-material/Tune";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import { AppContext } from "../Context/AppContext";
import { ratio169, formatVND, cssLogo2 } from "../css/style";

export default function DrawerProduct() {
  const [productPhotos, setProductPhotos] = useState(["1.jpg"]);
  const [productInfo, setProductInfo] = useState<any>([]);
  const { openDrawerProduct, setOpenDrawerProduct, idProduct } =
    useContext(AppContext);

  async function loadHouse() {
    const url = `https://homeviet.top/api/AparmentsAPI/outMain.php?sub=getPhotos/${idProduct}`;
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        json.list.shift();
        setProductPhotos(json.list);
      })
      .catch((err) => {
        /* return { "errorDev:": err }; */
        console.log({ "errorDev:": err });
      });
  }

  async function loadProductInfo() {
    const url = `https://homeviet.top/api/AparmentsAPI/outMain.php?sub=getHouse/${idProduct}`;
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        setProductInfo(json);
      })
      .catch((err) => {
        /* return { "errorDev:": err }; */
        console.log({ "errorDev:": err });
      });
  }

  useEffect(() => {
    loadHouse();
    loadProductInfo();
  }, [idProduct]);

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerProduct}
        onClose={() => setOpenDrawerProduct(false)}
      >
        <Box
          textAlign={"center"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100vw",
            height: "100vh",
          }}
        >
          {/* header---------- */}
          <Box textAlign={"center"} className="Header" sx={{ flex: "none" }}>
            <Stack mt={1} mb={1} sx={{ position: "relative" }}>
              <Typography
                variant="h6"
                component={"div"}
                className="Header__Title"
              >
                MẪU: {idProduct}
              </Typography>
              <Typography
                component={"div"}
                sx={{ position: "absolute", right: "15px", top: "-4px" }}
              >
                <IconButton
                  aria-label="delete"
                  size="medium"
                  onClick={() => setOpenDrawerProduct(false)}
                >
                  <CloseSharpIcon />
                </IconButton>
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
            {/* hinh chinh */}
            <Stack
              sx={{
                marginTop: "5vh",
              }}
            >
              <img
                src={`https://webapp.homeviet.top/hinh/big/${idProduct}.jpg`}
                alt="Full photo"
                style={{ width: "100%", margin: "auto", maxWidth: "1200px" }}
              ></img>
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
                onClick={() => setOpenDrawerProduct(false)}
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
