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
import { ratio169, ratio43, formatVND, cssLogo2 } from "../css/style";

export default function DrawerProduct() {
  const [productPhotos, setProductPhotos] = useState(["1.jpg"]);
  const [winDow, setWinDow] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const [productInfo, setProductInfo] = useState<any>([
    { productDescription: 0 },
  ]);
  const { openDrawerProduct, setOpenDrawerProduct, idProduct } =
    useContext(AppContext);

  /* const w = window.innerWidth;
  const h = window.innerHeight;
  console.log(w, h); */

  /* console.log(
    111,
    productInfo[0].productDescription.length,
    productInfo[0].productDescription
  ); */

  async function loadPhotos() {
    const url = `https://homeviet.top/api/storesale/outMain.php?sub=getPhotos/${idProduct}`;
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        //json.list.shift();
        //console.log(json.list);
        setProductPhotos(json.list);
      })
      .catch((err) => {
        /* return { "errorDev:": err }; */
        console.log({ "errorDev:": err });
      });
  }

  async function loadProductInfo() {
    const url = `https://homeviet.top/api/storesale/outMain.php?sub=getProduct/${idProduct}`;
    await fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => {
        //console.log(json);
        setProductInfo(json);
      })
      .catch((err) => {
        /* return { "errorDev:": err }; */
        console.log({ "errorDev:": err });
      });
  }

  useEffect(() => {
    //loadHouse();
    loadPhotos();
    loadProductInfo();
  }, [idProduct]);

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerProduct}
        onClose={() => setOpenDrawerProduct(false)}
        sx={{ height: winDow.h, width: winDow.w }}
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
            <div
              className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-x-2 gap-y-3"
              style={{
                margin: "10px 0 100px 0",
              }}
            >
              <Stack
                sx={{
                  backgroundImage: `url(https://homeviet.top/Store/vaynu/${idProduct}/1.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  cursor: "pointer",
                  userSelect: "none",
                  ...ratio43,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    color: "wheat",
                    left: "0px",
                    background: "#0000009c",
                    padding: "10px",
                    borderRadius: "5px",
                  }}
                >
                  {productInfo[0].productDescription.length > 1
                    ? productInfo[0].productDescription
                    : "---"}
                </div>
              </Stack>
              {productPhotos.map(
                (value, index) =>
                  value != "t.jpg" && (
                    <Stack
                      sx={{
                        backgroundImage: `url(https://homeviet.top/Store/vaynu/${idProduct}/${value})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        cursor: "pointer",
                        userSelect: "none",
                        ...ratio43,
                      }}
                      key={index}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "30px",
                          color: "wheat",
                          right: "20px",
                          background: "#0000009c",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        Hình: {index + 1}
                      </div>
                    </Stack>
                  )
              )}
            </div>
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
