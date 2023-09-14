import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Box,
  Typography,
  IconButton,
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

export default function DrawerProduct2() {
  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [urlPhoto, setUrlPhoto] = useState("");
  const [productCodePrev, setProductCodePrev] = useState("");
  const [productPhotos, setProductPhotos] = useState(["1.jpg"]);

  const [winDow, setWinDow] = useState({
    w: window.innerWidth,
    h: window.innerHeight,
  });
  const [productInfo, setProductInfo] = useState<any>([
    { productDescription: 0 },
  ]);
  const {
    openDrawerProduct,
    setOpenDrawerProduct,
    idProduct,
    setOpenDrawerMuaHang,
    admin,
  } = useContext(AppContext);

  //console.log("productPhotos", idProduct, productPhotos);

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
        //console.log("product list photos", url, json.list);
        idProduct != "" && setProductPhotos(json.list);
        if (productCodePrev != idProduct) {
          setProductCodePrev(idProduct);
        }
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
    loadPhotos();
    loadProductInfo();
    return () => {};
  }, [idProduct]);

  const ShowPhoto = () => {
    return (
      <>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          className={cx("backdrop")}
          open={openBackdrop}
          onClick={handleClose}
        >
          <img src={urlPhoto} alt="Italian Trulli"></img>
        </Backdrop>
      </>
    );
  };

  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleOpen = () => {
    setOpenBackdrop(true);
  };
  const handleCLoseDrawer = () => {
    //setProductPhotos(["1.jpg"]);
    setOpenDrawerProduct(false);
  };

  //let urlAdmin3 = "https://caonguyen.homeviet.top/";
  let urlAdmin3 = window.location.href;
  let urlAdmin4 = urlAdmin3
    .replace("https://", "")
    .replace("http://", "")
    .replace("/", "");

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerProduct}
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
          <ShowPhoto />
          <Box textAlign={"center"} className="Header" sx={{ flex: "none" }}>
            <Stack mt={1} mb={1} sx={{ position: "relative" }}>
              <Typography
                variant="h6"
                component={"div"}
                className={cx("headerTitle")}
              >
                Mã số: {idProduct}
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
                  backgroundColor: "#001a87",
                }}
                className={cx("photoOne")}
              >
                <div className={cx("tableInfo")}>
                  <div className={cx("info")}>Thông tin sản phẩm:</div>
                  <div className={cx("infoBody")}>
                    {productCodePrev === idProduct &&
                      (productInfo[0].productDescription.length > 1
                        ? productInfo[0].productDescription
                        : "#")}
                    <Button
                      variant="outlined"
                      size="large"
                      fullWidth
                      onClick={() => setOpenDrawerMuaHang(true)}
                    >
                      Mua hàng
                    </Button>
                  </div>
                </div>
              </Stack>
              {productCodePrev === idProduct &&
                productPhotos.map(
                  (value, index) =>
                    value != "t.jpg" && (
                      <div
                        className={cx("photo2", "flex flex-col")}
                        key={index}
                        onClick={() => {
                          const urlp = `https://homeviet.top/Store/vaynu/${idProduct}/${value}`;
                          setUrlPhoto(urlp);
                          handleOpen();
                        }}
                      >
                        <div className={cx("photo2Body")}>
                          <Stack
                            sx={{
                              backgroundImage: `url(https://homeviet.top/Store/vaynu/${idProduct}/${value})`,
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              cursor: "pointer",
                              userSelect: "none",
                              ...ratio43,
                            }}
                          >
                            <div className={cx("photo")}>Hình: {index + 1}</div>
                            <div className={cx("copyright")}>
                              <p>{urlAdmin4}</p>
                              <p>
                                {admin[0].adName} - Call/Zalo {admin[0].adPhone}
                              </p>
                            </div>
                          </Stack>
                        </div>
                        <div className={cx("photo2Footer")}></div>
                      </div>
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
