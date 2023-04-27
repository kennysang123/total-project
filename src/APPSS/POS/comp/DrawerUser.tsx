import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  ButtonGroup,
  Stack,
  FormHelperText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AppContext } from "../Context/AppContext";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { globalCSS } from "./GlobalStyle";

export default function DrawerUser() {
  console.log("report");
  const { openUserWithID, setOpenUserWithID } = useContext(AppContext);

  const textGen = () => {
    let text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Laboriosam, distinctio reiciendis! Necessitatibus, repudiandae
    dolores! Quas hic nihil, eligendi facere sed consequuntur commodi
    neque nobis! Rerum beatae aspernatur repellendus architecto quis.`;
    for (let index = 0; index < 2; index++) {
      text = text + text;
    }
    return text;
  };
  return (
    <>
      <Drawer anchor="right" open={openUserWithID}>
        <Stack
          width="100vw"
          sx={{
            display: "flex",
            height: "100%",
          }}
        >
          <Stack
            sx={{
              flexShrink: 0,
              height: "50px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component={"div"}>
              Thông tin
            </Typography>
          </Stack>
          <Stack
            p={2}
            direction="column"
            sx={{
              backgroundColor: "white",
              overflowY: "auto",
              flexGrow: 1,
              height: "100%",
            }}
          >
            <Typography component={"div"}>
              <Typography
                component={"div"}
                sx={{
                  position: "relative",
                  backgroundColor: "gray",
                  backgroundImage: "url(https://i.pravatar.cc/600)",
                  backgroundPosition: "50%",
                  backgroundSize: "cover",
                  height: "550px",
                  borderRadius: "15px",
                }}
              >
                <Typography
                  component={"div"}
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    color: "white",
                    zIndex: 5,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    color={globalCSS.colorCode}
                    sx={{
                      borderTop: "1px solid",
                      fontSize: "12px",
                    }}
                  >
                    mm.vngate.top
                  </Typography>
                </Typography>
                <Typography
                  component={"div"}
                  sx={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                  }}
                >
                  <FavoriteIcon
                    sx={{
                      fontSize: 40,
                      color: globalCSS.colorFavorite,
                      backgroundColor: "white",
                      borderRadius: "12px",
                      "&:hover": {
                        color: globalCSS.colorVerified,
                        cursor: "pointer",
                      },
                    }}
                  />
                </Typography>
                <Typography
                  component={"div"}
                  sx={{
                    position: "absolute",
                    bottom: "0px",
                    color: "white",
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
                    borderRadius: "15px",
                    width: "100%",
                    paddingLeft: "15px",
                    paddingTop: "100px",
                    paddingBottom: "15px",
                  }}
                >
                  <>
                    <Typography
                      sx={{ fontWeight: "bold", display: "inline" }}
                      component="div"
                      variant="h6"
                    >
                      Nguyễn Thị Nhật Thanh{" "}
                    </Typography>
                    <VerifiedIcon sx={{ color: globalCSS.colorVerified }} />
                    <Typography variant="body2">
                      <Typography component="span" fontSize={"small"}>
                        {"Giới tính:"}
                      </Typography>
                      <FemaleIcon sx={{ color: globalCSS.colorGenderGirl }} />
                      {/* <MaleIcon sx={{ color: globalCSS.colorGenderBoy }} /> */}
                      {"— Tuổi: 35 — "}
                      <Typography
                        component="span"
                        color={globalCSS.colorCode}
                        fontSize={"small"}
                      >
                        M99999
                      </Typography>
                    </Typography>
                    <Typography variant="body2">
                      Quận Bình Thạnh, TP.HCM
                    </Typography>
                  </>
                </Typography>
              </Typography>
            </Typography>
            {/* <img src="https://i.pravatar.cc/600"></img> */}
            {/* <Typography>{openUserWithID}</Typography> */}
            <Typography variant="h6" mt={2}>
              Giới thiệu bản thân
            </Typography>
            <Typography>{textGen()}</Typography>
            <Typography variant="h6" mt={2}>
              Tìm người
            </Typography>
            <Typography>{textGen()}</Typography>
            <Typography variant="h6" mt={2}>
              Liên hệ
            </Typography>
            <Stack mb={3}>
              <ButtonGroup
                variant="text"
                aria-label="text button group"
                size="small"
                disabled
              >
                <Button>Telegram</Button>
                <Button>Line</Button>
              </ButtonGroup>
              <FormHelperText error>
                Chỉ có thành viên mới có thể liên lạc với nhau.
              </FormHelperText>
            </Stack>
          </Stack>

          <Stack
            sx={{
              height: "50px",
              flexShrink: 0,
              justifyContent: "end",
            }}
          >
            <Button
              sx={{ borderRadius: "0px" }}
              variant="contained"
              startIcon={<ArrowBackIosNewIcon />}
              size="large"
              fullWidth
              onClick={() => setOpenUserWithID(null)}
            >
              Back
            </Button>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}
