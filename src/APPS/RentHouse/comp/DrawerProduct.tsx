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
                Apartment: {idProduct}
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
                //https://house.homeviet.top/chdv/H0002/photos/1.jpg
                backgroundImage: `url(https://house.homeviet.top/chdv/${idProduct}/photos/1.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                ...ratio169,
              }}
            >
              <Chip
                label="See more pictures at house.homeviet.top"
                sx={cssLogo2}
              />
            </Stack>
            <Stack mt={1}>
              <Typography
                style={{ marginLeft: "5px" }}
                color="text.secondary"
                component="div"
                variant="body2"
              >
                <b>Price:</b>{" "}
                {productInfo.length > 0 &&
                  formatVND(productInfo[0].productPrice)}
                /Month
              </Typography>
              <Typography
                style={{ marginLeft: "5px" }}
                color="text.secondary"
                component="div"
                variant="body2"
              >
                <b>Type:</b>{" "}
                {productInfo.length > 0 && productInfo[0].productStyle} (
                {productInfo.length > 0 && productInfo[0].productBed}Bed -{" "}
                {productInfo.length > 0 && productInfo[0].productBad}WC)
              </Typography>
              <Typography
                style={{ marginLeft: "5px" }}
                color="text.secondary"
                component="div"
                variant="body2"
              >
                <b>Code:</b>{" "}
                {productInfo.length > 0 && productInfo[0].productID}
              </Typography>
              <Typography
                style={{ marginLeft: "5px" }}
                color="text.secondary"
                component="div"
                variant="body2"
              >
                <b>Location:</b>{" "}
                {productInfo.length > 0 && productInfo[0].productLocation}
              </Typography>

              <Typography
                style={{ marginLeft: "5px" }}
                color="text.secondary"
                component="div"
                variant="body2"
              >
                <b>Desription:</b>{" "}
                {productInfo.length > 0 && productInfo[0].productDesription}
              </Typography>
              <Typography
                style={{ marginLeft: "5px" }}
                color="text.secondary"
                component="div"
                variant="body2"
              >
                <b>Available:</b>{" "}
                {productInfo.length > 0 && productInfo[0].productAvailable}
              </Typography>

              <Typography
                style={{ marginLeft: "5px" }}
                color="text.secondary"
                component="div"
                variant="body2"
              >
                <b>Update:</b>{" "}
                {productInfo.length > 0 && productInfo[0].productUpdate}
              </Typography>
              <Typography
                style={{ marginLeft: "5px" }}
                color="text.secondary"
                component="div"
                variant="body2"
              >
                <b>Contact:</b> with the informant
              </Typography>
            </Stack>
            {/* hinh phu */}
            {productPhotos.map((value, index) => (
              <Stack
                sx={{
                  marginTop: "10px",
                  backgroundImage: `url(https://house.homeviet.top/chdv/${idProduct}/photos/${value})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  ...ratio169,
                }}
                key={index}
              ></Stack>
            ))}
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
