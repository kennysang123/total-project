import React, { useEffect, useState, useContext } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Slider,
  FormHelperText,
} from "@mui/material";
import { styled, lighten, darken } from "@mui/system";

import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AppContext } from "../Context/AppContext";

type cityType = {
  cityCode: string;
  name: string;
};

const cityToFind2 = [
  { cityCode: "hcm", name: "HCM" },
  { cityCode: "bd", name: "Binh Duong" },
  { cityCode: "dn", name: "Dong Nai" },
];

const cityToFind = [
  "Khu vực",
  "Bà Rịa Vũng Tàu",
  "Bình Dương",
  "Cần Thơ",
  "Hà Nội",
  "Khánh Hoà",
  "Long An",
  "Nam Định",
  "Hồ Chí Minh",
  "Đà Nẵng",
  "Đồng Nai",
  "An Giang",
  "Bình phước",
  "Bình Thuận",
  "Bình Định",
  "Bạc Liêu",
  "Bắc Cạn",
  "Bắc Giang",
  "Bắc Ninh",
  "Bến Tre",
  "Cà Mau",
  "Cao Bằng",
  "Gia Lai",
  "Hà Giang",
  "Hà Nam",
  "Hà Tĩnh",
  "Hòa Bình",
  "Hải Dương",
  "Hải Phòng",
  "Hậu Giang",
  "Huế",
  "Hưng Yên",
  "Kiên Giang",
  "Kon Tum",
  "Lâm Đồng",
  "Lào Cai",
  "Lai Châu",
  "Lạng Sơn",
  "Nghệ An",
  "Ninh Bình",
  "Ninh Thuận",
  "Phú Thọ",
  "Phú Yên",
  "Quảng Bình",
  "Quảng Nam",
  "Quảng Ngãi",
  "Quảng Ninh",
  "Quảng Trị",
  "Sóc Trăng",
  "Sơn La",
  "Tây Ninh",
  "Thái Bình",
  "Thái Nguyên",
  "Thanh Hoá",
  "Tiền Giang",
  "Trà Vinh",
  "Tuyên Quang",
  "Vĩnh Long",
  "Vĩnh Phúc",
  "Yên Bái",
  "Đắc Lắc",
  "Đắc Nông",
  "Đồng Tháp",
  "Điện Biên",
];

function valuetext(value: number) {
  return `${value}°C`;
}

export default function DrawerFilter() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [distFind, setDistFind] = useState<string | null>(null);
  const [cityFind, setCityFind] = useState<string | null>(null);
  const [value, setValue] = useState<number[]>([18, 45]);

  const handleChange2 = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const { isOpenDrawerFilter, setIsOpenDrawerFilter, setSearchValue } =
    useContext(AppContext);

  console.log({ cityFind });
  /* select */
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };
  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  /* map tinh/thanh pho */
  const mapTinhThanhPho = cityToFind.map((v, i) => (
    <MenuItem value={i} key={i}>
      {v}
    </MenuItem>
  ));
  console.log(gender);
  console.log(city);
  return (
    <>
      <Drawer
        anchor="right"
        open={isOpenDrawerFilter}
        onClose={() => setIsOpenDrawerFilter(false)}
      >
        <Box p={2} width="250px" textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Lọc nhanh
          </Typography>
          {/* <Stack mt={2}>
            <TextField
              label="Search"
              variant="outlined"
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Stack> */}

          <Stack mt={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Nơi ở hiện tại
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={city}
                label="Nơi ở hiện tại"
                onChange={handleChange}
              >
                <MenuItem value={""}>Xóa</MenuItem>
                {mapTinhThanhPho}
              </Select>
            </FormControl>
          </Stack>
          <Stack mt={2}>
            <FormControl fullWidth>
              <InputLabel id="gender">Giới tính</InputLabel>
              <Select
                labelId="gender"
                id="gender-select"
                value={gender}
                label="Giới tính"
                onChange={handleChangeGender}
              >
                <MenuItem value={""}>Xóa</MenuItem>
                <MenuItem value={"male"}>Nam</MenuItem>
                <MenuItem value={"female"}>Nữ</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack mt={2} sx={{ width: "95%" }}>
            <Stack>
              <Typography>
                <b>Tuổi:</b> {value[0]} đến {value[1]}
              </Typography>
            </Stack>
            <Slider
              getAriaLabel={() => "Age range"}
              value={value}
              onChange={handleChange2}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />
          </Stack>
          <Stack mt={2}>
            <Button variant="outlined" size="medium" disabled>
              Lọc
            </Button>
            <FormHelperText error>
              Chức năng lọc thành viên đang bị khóa. Chức năng lọc sẽ mở khi số
              lượng thành viên vượt mốc 300 thành viên.
            </FormHelperText>
          </Stack>

          <Stack
            direction="row"
            sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
          >
            <Button
              sx={{ borderRadius: "0px" }}
              variant="contained"
              startIcon={<ArrowBackIosNewIcon />}
              size="large"
              fullWidth
              onClick={() => setIsOpenDrawerFilter(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
