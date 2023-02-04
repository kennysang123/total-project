import React, { useEffect, useState } from "react";
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
import TuneIcon from "@mui/icons-material/Tune";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MenuIcon from "@mui/icons-material/Menu";

export default function DrawerRight(props: any) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const thisProps = props.props;
  /* useEffect(() => {
    setIsDrawerOpen(true);
    return () => {};
  }, []); */
  return (
    <>
      <Drawer
        anchor="right"
        open={thisProps.isShowMenuRight}
        onClose={() => thisProps.setIsShowMenuRight(false)}
      >
        <Box p={2} width="250px" textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Right Panel
          </Typography>
          <Stack
            direction="row"
            sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
          >
            <Button
              variant="text"
              startIcon={<ArrowBackIosNewIcon />}
              size="large"
              fullWidth
              onClick={() => thisProps.setIsShowMenuRight(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
