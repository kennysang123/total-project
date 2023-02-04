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

export default function DrawerFilter(props: any) {
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
        open={thisProps.isShowDrawerFilter}
        onClose={() => thisProps.setIsShowDrawerFilter(false)}
      >
        <Box p={2} width="250px" textAlign={"center"} role="presentation">
          <Typography variant="h6" component={"div"}>
            Lọc nhanh
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
              onClick={() => thisProps.setIsShowDrawerFilter(false)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
