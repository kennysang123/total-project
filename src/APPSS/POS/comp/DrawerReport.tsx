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

export default function DrawerReport() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  console.log("report");
  const { isOpenDrawerReport, setIsOpenDrawerReport } = useContext(AppContext);
  return (
    <>
      <Drawer
        anchor="right"
        open={isOpenDrawerReport}
        onClose={() => setIsOpenDrawerReport(false)}
      >
        <Box p={2} width="100vw" textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Tố cáo
          </Typography>
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
              onClick={() => setIsOpenDrawerReport(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
