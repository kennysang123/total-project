import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  FormHelperText,
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

export default function DrawerMenuGioiThieu() {
  console.log("Gioi thieu");
  const { openDrawerMenuGioiThieu, setOpenDrawerMenuGioiThieu } =
    useContext(AppContext);
  /* tabs */
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  /* noi dung */
  const Nd1 = () => {
    return (
      <Stack>
        <Typography variant="h6">Giới thiệu chung</Typography>
        <Typography>
          Ứng dụng mai mối, giúp kết hôn ngoài đời thật. Không phải ứng dụng hẹn
          hò, yêu đương.
        </Typography>
        <Typography mt={2}>
          Thích hợp cho cha mẹ, ông bà đặt niềm tin để con cháu mình mau chống
          kết hôn.
        </Typography>
        <Typography variant="h6" mt={2}>
          Vì sao tôi nên tham gia?
        </Typography>
        <Typography>
          Khi bạn tham gia, đồng nghĩa với những người khác đang có ý muốn kết
          hôn sẽ biết đến bạn. Tạo cơ hội để mọi người biết nhau, dựa trên những
          tiêu chí mà người tham gia đặt ra, sẽ nhanh chóng tìm được người phù
          hợp, từ đó sẽ tiến đến hôn nhân nhanh chóng.
        </Typography>
        <Typography variant="h6" mt={2}>
          Ứng dụng có thu phí không?
        </Typography>
        <Typography>
          Ứng dụng miễn phí hoàn toàn cho mọi người có mong muốn kết hôn tham
          gia. Chỉ thu phí 1 lần duy nhất khi bạn đã kết hôn thành công.
        </Typography>
        <Typography variant="h6" mt={2}>
          Tôi nên làm gì để gia tăng khả năng kết hôn của tôi hoặc bạn bè của
          tôi?
        </Typography>
        <Typography>
          Bạn hãy giới thiệu ứng dụng này cho mọi người cùng biết. Khi nhiều
          người tham gia thì có nghĩa khả năng bạn tìm được người phù hợp sẽ cao
          hơn. Hãy chụp màn hình những chỉ dẫn này và chia sẽ cho mọi người cùng
          biết đến.
        </Typography>
      </Stack>
    );
  };
  const NdThamGia = () => {
    return (
      <Stack>
        <Typography variant="h6">Hướng dẫn tham gia:</Typography>
        <Typography>
          Để tham gia trở thành thành viên bạn vui lòng nhắn tin đến số zalo tại
          mục <b>ĐĂNG KÝ</b>. Tôi sẽ tư vấn cho bạn lộ trình, hình thức hoạt
          động và xác nhận thông tin đăng ký.
        </Typography>
        <Typography variant="h6" mt={2}>
          Thông tin cá nhân có được bảo mật không?
        </Typography>
        <Typography>
          Mọi thông tin cá nhân của bạn đều được cam kết bảo mật bằng phương
          pháp: Sau khi xác minh xong thì tài liệu liên quan đến việc xác minh
          của bạn sẽ được nén lại thành file nén có tên{" "}
          <b>profile-[idUser].rar</b> với một <b>mật khẩu</b> 32 kí tự và được
          lưu trên máy chủ của chúng tôi, các máy tính mạnh nhất mất hàng triệu
          năm mới phá được mật khẩu. Đảm bảo rằng bất kì hacker nào nếu có được
          file nén hồ sơ của bạn cũng không thể giải nén để xem được thông tin.
        </Typography>
        <Typography mt={2}>
          Thông tin cá nhân của bạn được sử dụng để chống lừa đảo và điều tra
          nếu xảy ra lừa đảo.
        </Typography>
      </Stack>
    );
  };
  const NdXoaHoSo = () => {
    return (
      <Stack>
        <Typography variant="h6">
          Tôi có quyền yêu cầu xóa hồ sơ của tôi không?
        </Typography>
        <Typography>
          Bạn hoàn toàn có quyền yêu cầu xóa hồ sơ của bạn. Bạn toàn quyền quyết
          định với hồ sơ của bạn.
        </Typography>
      </Stack>
    );
  };

  const NdNhomFB = () => {
    return (
      <>
        <FormHelperText error>
          Nhóm FaceBook đang tạm khóa. Nhóm sẽ mở khi thành viên vượt mốc 300
          thành viên.
        </FormHelperText>
      </>
    );
  };
  const NdTrangFB = () => {
    return (
      <Box textAlign={"center"}>
        <Stack mt={2}>
          <a
            href="https://www.facebook.com/profile.php?id=100090164061146"
            target={"_blank"}
            rel="noreferrer"
          >
            <Button
              variant="outlined"
              startIcon={<OpenInNewIcon />}
              size="large"
            >
              Mở trang FaceBook
            </Button>
          </a>
        </Stack>
      </Box>
    );
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerMenuGioiThieu}
        onClose={() => setOpenDrawerMenuGioiThieu(false)}
      >
        <Box
          p={1}
          width="100vw"
          textAlign={"center"}
          role="presentation"
          className="container"
        >
          <Stack>
            <Typography variant="h6" component={"div"}>
              Giới thiệu
            </Typography>
          </Stack>
        </Box>
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
            <Tab label="Tổng quát" />
            <Tab label="Tham gia" />
            <Tab label="Xóa hồ sơ" />
            <Tab label="Trang FaceBook" />
            <Tab label="Nhóm FaceBook" />
          </Tabs>
        </Box>
        <Box
          p={2}
          width="100vw"
          textAlign={"left"}
          role="presentation"
          sx={{
            backgroundColor: "white",
            height: "80vh",
            overflowY: "scroll",
          }}
        >
          {value === 0 && <Nd1 />}
          {value === 1 && <NdThamGia />}
          {value === 2 && <NdXoaHoSo />}
          {value === 3 && <NdTrangFB />}
          {value === 4 && <NdNhomFB />}
        </Box>
        <Box
          p={2}
          width="100vw"
          textAlign={"left"}
          role="presentation"
          sx={{ backgroundColor: "white" }}
        >
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
              onClick={() => setOpenDrawerMenuGioiThieu(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
