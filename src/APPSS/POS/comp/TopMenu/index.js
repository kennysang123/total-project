import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import classNames from "classnames/bind";
import styles from "./s.module.scss";
const cx = classNames.bind(styles);

export default function TopMenu() {
  function BasicButtons() {
    return (
      <Stack spacing={2} direction="row">
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="contained">Contained</Button>
      </Stack>
    );
  }
  return (
    <>
      <p>topmenu</p>
      <BasicButtons />
    </>
  );
}
