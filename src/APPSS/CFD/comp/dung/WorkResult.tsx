import React from "react";
import { Box, Stack, Paper } from "@mui/material";
import { titleCss, Bold, cssTenNhanSu } from "../../Context/CSS";

export default function WorkResult() {
  return (
    <>
      <Box>
        <Stack ml={1} mt={1} mr={1}>
          <div>Tên nhân sự:</div>
          <div>
            <span style={cssTenNhanSu}>NGUYỄN THÚY LIỄU - NV001</span>
          </div>
          {/* <div style={titleCss}>Doanh số trong tháng:</div>
          <div>
            1. Doanh số cá nhân: <span style={Bold}>81.000.000 VND</span>
          </div>
          <div>
            2. Doanh số toàn công ty: <span style={Bold}>800.000.000 VND</span>
          </div> */}
        </Stack>
        {/* <Stack ml={1} mt={1} mr={1}>
          <div style={titleCss}>Hiệu suất công việc:</div>
          <div>
            1. % Công việc hoàn thành: <span style={Bold}>94%</span>
          </div>
          <div>
            2. Số ngày nghỉ trong tháng: <span style={Bold}>2 ngày</span>
          </div>
        </Stack> */}
      </Box>
    </>
  );
}
