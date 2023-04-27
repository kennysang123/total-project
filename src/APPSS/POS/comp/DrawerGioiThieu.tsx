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
import { AppContext } from "../Context/AppContext";

export default function DrawerGioiThieu() {
  console.log("Gioi thieu");
  const { openDrawerGioiThieu, setOpenDrawerGioiThieu } =
    useContext(AppContext);
  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerGioiThieu}
        onClose={() => setOpenDrawerGioiThieu(false)}
      >
        <Box p={2} width="100vw" textAlign={"center"} role="presentation">
          <Stack>
            <Typography variant="h6" component={"div"}>
              Giới thiệu
            </Typography>
          </Stack>
          <Stack mt={2}>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              reiciendis natus rerum, animi aliquid soluta accusantium quas
              explicabo deserunt iure nemo a ex ab vero laudantium qui adipisci
              autem sit.
            </Typography>
          </Stack>
          <Stack mt={2}>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              reiciendis natus rerum, animi aliquid soluta accusantium quas
              explicabo deserunt iure nemo a ex ab vero laudantium qui adipisci
              autem sit.
            </Typography>
          </Stack>
          <Stack mt={2}>
            <Typography>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              reiciendis natus rerum, animi aliquid soluta accusantium quas
              explicabo deserunt iure nemo a ex ab vero laudantium qui adipisci
              autem sit.
            </Typography>
          </Stack>

          {/* <Stack mt={2}>
            <Typography>
              Một ứng dụng mai mối chính chủ, giúp mọi người có thể nhanh chóng
              kết hôn và giảm thời gian, công sức tìm kiếm người phù hợp. Chi
              phí cho mỗi cặp mai mối thành công là 4tr (được tính sau khi kết
              hôn thành công)
            </Typography>
          </Stack>
          <Stack mt={2}>
            <Typography>
              Để hiểu rõ hơn vui lòng truy cập <b>mm.vngate.top</b> và xem phần
              hướng dẫn
            </Typography>
          </Stack>
          <Stack mt={2}>
            <Typography>
              Mọi người tham gia đều phải xác thực danh tính bằng hình chụp thẻ{" "}
              <b>CĂNG CƯỚC CÔNG DÂN</b> nên sẽ loại bỏ được những người có dụng
              ý xấu.
            </Typography>
          </Stack>
          <Stack mt={2}>
            <Typography>
              Ứng dụng bảo vệ tối đa quyền lợi cho chị em phụ nữ.
            </Typography>
          </Stack>
 */}
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
              onClick={() => setOpenDrawerGioiThieu(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
