import React from "react";
import { Box, Grid, Avatar, Typography, Button, Stack } from "@mui/material";
import { cssGiuaNgang } from "../../Context/CSS";

export default function Welcome() {
  return (
    <>
      <Box>
        <Stack ml={1} mt={8} mr={1}>
          <Typography variant="h6" component="div" style={cssGiuaNgang}>
            ChiliBee App
          </Typography>
          <Typography variant="body1" component="div" style={cssGiuaNgang}>
            App quản lý công việc cho thuê hiệu quả. Để sử dụng các tính năng,
            vui lòng đăng nhập.
          </Typography>
        </Stack>
        <Button
          color="primary"
          style={cssGiuaNgang} /* onClick={() => setDrawerDangNhap(true)} */
        >
          Login
        </Button>
      </Box>
    </>
  );
}
