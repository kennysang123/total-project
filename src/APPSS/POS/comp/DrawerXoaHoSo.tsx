import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { AppContext } from "../Context/AppContext";

export default function DrawerXoaHoSo() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  console.log("report");
  const { openDrawerXoaHoSo, setOpenDrawerXoaHoSo } = useContext(AppContext);
  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerXoaHoSo}
        onClose={() => setOpenDrawerXoaHoSo(false)}
      >
        <Box p={2} width="100vw" textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Xóa hồ sơ
          </Typography>
          <Stack mt={2}>
            <Typography mb={2}>
              Để xóa hồ sơ, bạn hãy nhắn tin mã id của bạn đến zalo để yêu cầu
              xóa hồ sơ
            </Typography>
            <a href="https://zalo.me/0907852416" target={"_blank"}>
              <Button
                variant="outlined"
                startIcon={<OpenInNewIcon />}
                size="large"
              >
                Mở Zalo: 090 785 2416
              </Button>
            </a>
          </Stack>
          <Stack
            direction="row"
            sx={{ position: "absolute", bottom: 1, left: 0, right: 0 }}
          >
            <Button
              sx={{ borderRadius: "0px" }}
              variant="contained"
              startIcon={<ArrowBackIosNewIcon />}
              size="large"
              fullWidth
              onClick={() => setOpenDrawerXoaHoSo(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
