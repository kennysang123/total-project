import React, { useState, useContext } from "react";
import {
  Box,
  Stack,
  Typography,
  Chip,
  Divider,
  ListItem,
  ListItemButton,
  List,
  Grid,
  Paper,
  styled,
} from "@mui/material";

/* War3Input */
import {
  formatVND,
  textLen,
  price,
  logo,
  chatLeft,
  ratio169,
  cssLogo2,
} from "../css/style";
import "../css/scss.css";
import { AppContext } from "../Context/AppContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MainContent() {
  const { setOpenDrawerProduct, setIdProduct, apartments, soSanPham } =
    useContext(AppContext);

  return (
    <>
      <div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xxl:grid-cols-6 gap-x-2 gap-y-3 "
        style={{
          margin: "100px 0 100px 0",
        }}
      >
        {apartments.map((value: any, index: any) => (
          <Stack
            className="rounded-lg shadow-xl"
            sx={{
              ...ratio169,
              backgroundImage: `url(https://homeviet.top/Store/vaynu/${value.productCode}/1.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => {
              setIdProduct(value.productCode);
              setOpenDrawerProduct(true);
            }}
            key={index}
          >
            <Chip
              label={value.productCode + " [xem thêm ảnh]"}
              sx={{
                color: "white",
                fontSize: "1rem",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />
            <Chip
              label={
                value.productDescription === "0"
                  ? "---"
                  : value.productDescription
              }
              sx={{
                color: "white",
                fontSize: "1rem",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />
            <Chip
              label={
                value.productPrice === "0"
                  ? `Giá: nhắn tin`
                  : `Giá: ${formatVND(Number(value.productPrice) * 1.4)}`
              }
              sx={{
                color: "white",
                fontSize: "1rem",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />
          </Stack>
        ))}
      </div>
      {/* <Box sx={{ bgcolor: "background.paper", margin: "auto" }}></Box> */}
    </>
  );
}
