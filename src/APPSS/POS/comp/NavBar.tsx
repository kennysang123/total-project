import React, { useContext, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Stack } from "@mui/material";
import { AppContext } from "../Context/AppContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
let timer: any;
export default function SearchAppBar() {
  const { setSearchValue, searchValue } = useContext(AppContext);
  const [searchValue2, setSearchValue2] = useState<any>("");

  console.log({ searchValue });

  const handleSearchId = (e: any) => {
    let v = e.target.value;
    v = v.trim();
    setSearchValue2(v);
    console.log({ v });
    if (v !== "") {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log("tick gi");
        setSearchValue(v);
        clearTimeout(timer);
      }, 1000);
    } else {
      clearTimeout(timer);
      setSearchValue("");
      setSearchValue2("");
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, padding: "5px" }}
          >
            {/* <MenuIcon /> */}
            {/* <Stack direction={"column"}>
              <Typography variant="h5">Mai Mối</Typography>
              <Typography variant="body2">maimoi.vngate.top</Typography>
            </Stack> */}
            <img
              src="https://i.ibb.co/Tv1tG0d/logo-maimoi.png"
              alt="logo-maimoi"
              height={"38px"}
            ></img>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            |
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchValue2}
              onChange={(e) => handleSearchId(e)}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
