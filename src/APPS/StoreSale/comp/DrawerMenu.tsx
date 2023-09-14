import React, { useContext } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { AppContext } from "../Context/AppContext";

export default function DrawerMenu() {
  const { openDrawerMenu, setOpenDrawerMenu, setSearchText, admin } =
    useContext(AppContext);

  const adCategor2 = [
    { keySearch: "vaynu", label: "váy nữ" },
    { keySearch: "dolotnu", label: "đồ lót nữ" },
    { keySearch: "vesinhnu", label: "vệ sinh nữ" },
    { keySearch: "dodathat", label: "đồ da thật" },
    { keySearch: "giaythethao", label: "giày thể thao" },
    { keySearch: "giaydanam", label: "giày da nam" },
    { keySearch: "thuocgiatruyen", label: "thuốc gia truyền" },
  ];

  const MenuItem = (props: any) => {
    //console.log(props.props);
    return (
      <>
        <Stack mt={1}>
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={() => {
              setSearchText(props.props.keySearch);
              setOpenDrawerMenu(false);
            }}
          >
            {props.props.label}
          </Button>
        </Stack>
      </>
    );
  };
  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawerMenu}
        onClose={() => setOpenDrawerMenu(false)}
      >
        <Box
          textAlign={"center"}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "250px",
            height: "100vh",
          }}
        >
          {/* header---------- */}
          <Box textAlign={"center"} className="Header" sx={{ flex: "none" }}>
            <Stack mt={1} mb={1}>
              <Typography
                variant="h6"
                component={"div"}
                className="Header__Title"
              >
                MENU
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
            {typeof admin[0].adCategory === "string" &&
              JSON.parse(admin[0].adCategory).map((v: any, i: any) => (
                <MenuItem props={v} key={i} />
              ))}
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
                onClick={() => setOpenDrawerMenu(false)}
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
