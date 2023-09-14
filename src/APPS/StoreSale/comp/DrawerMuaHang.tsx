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
import Backdrop from "@mui/material/Backdrop";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AppContext } from "../Context/AppContext";
import { ratio169, ratio43, formatVND, cssLogo2 } from "../css/style";
/* csss module */
import classNames from "classnames/bind";
import styles from "./DrawerProduct2.module.scss";
const cx = classNames.bind(styles);
/* end css module */

export default function DrawerMuaHang() {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [urlPhoto, setUrlPhoto] = useState("");
  const [productPhotos, setProductPhotos] = useState(["1.jpg"]);
  //console.log(productPhotos);
  const [winDow, setWinDow] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const [productInfo, setProductInfo] = useState<any>([
    { productDescription: 0 },
  ]);
  const { openDrawerMuaHang, setOpenDrawerMuaHang, idProduct, admin } =
    useContext(AppContext);

  /* const w = window.innerWidth;
  const h = window.innerHeight;
  console.log(w, h); */

  /* console.log(
    111,
    productInfo[0].productDescription.length,
    productInfo[0].productDescription
  ); */

  const handleCLoseDrawer = () => {
    setOpenDrawerMuaHang(false);
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerMuaHang}
        onClose={() => handleCLoseDrawer()}
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
          <Box textAlign={"center"} className="Header" sx={{ flex: "none" }}>
            <Stack mt={1} mb={1} sx={{ position: "relative" }}>
              <Typography
                variant="h6"
                component={"div"}
                className={cx("headerTitle")}
              >
                MUA HÀNG
              </Typography>
              <Typography
                component={"div"}
                sx={{ position: "absolute", right: "15px", top: "-4px" }}
              >
                <IconButton
                  aria-label="delete"
                  size="medium"
                  onClick={() => handleCLoseDrawer()}
                >
                  <CloseSharpIcon />
                </IconButton>
              </Typography>
            </Stack>
          </Box>

          <Box
            className="Body"
            sx={{
              backgroundColor: "white",
              overflowY: "scroll",
              flex: "1 1 auto",
              padding: "0px 10px",
            }}
          >
            <p>
              Nhắn <b>Mã Số</b> sản phẩm bạn muốn mua cho mình nhé. Thanks ạ ^^
            </p>
            <div
              className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-x-2 gap-y-3"
              style={{
                margin: "10px 0 100px 0",
              }}
            >
              <div>
                <p>Nhắn tin qua zalo:</p>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={() =>
                    window.open(`https://zalo.me/${admin[0].adPhone}`)
                  }
                >
                  Zalo: {admin[0].adName} - {admin[0].adPhone}
                </Button>
              </div>
              <div>
                <p>Gọi trực tiếp:</p>
                <Button
                  variant="outlined"
                  size="large"
                  fullWidth
                  onClick={() => {
                    let phoneNum = admin[0].adPhone;
                    phoneNum = phoneNum.substring(1);
                    window.open(`tel:+84${phoneNum}`);
                  }}
                >
                  Gọi: {admin[0].adName} - {admin[0].adPhone}
                </Button>
              </div>
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
                onClick={() => handleCLoseDrawer()}
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
