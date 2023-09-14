import React, { useState } from "react";
import { Box, Stack, Paper, Grid, styled } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import {
  cpnGetDateNow,
  cpnGetRandomNum,
} from "../../../../FunctionTotal/FunctionTotal";

export default function DailyTodo() {
  /* mang cong viec, mang check cong viec, so luong hoan thanh, so luong tong */
  const [checked, setChecked] = useState<any>([1, 3, 5]);
  const congViec = [
    "Việc cần làm 1",
    "Việc cần làm 2",
    "Việc cần làm 3",
    "Việc cần làm 4",
    "Việc cần làm 5",
    "Việc cần làm 6",
  ];

  const var1 = JSON.stringify(congViec);
  const [payLoad, setPayLoad] = useState<any>({
    cacCongViecHoanThanh: var1,
    cacCongViec: var1,
    soHoanThanh: 0,
    soChuaHoanThanh: 0,
    tongSoCongViec: 0,
  });

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    const numWorkComplete = newChecked.length;
    const numWork = congViec.length;
    const numWorkNotComplete = numWork - numWorkComplete;
    const out = JSON.stringify(newChecked);
    payLoad.tongSoCongViec = numWork;
    payLoad.soChuaHoanThanh = numWorkNotComplete;
    payLoad.soHoanThanh = numWorkComplete;

    console.log(
      out,
      numWorkComplete,
      numWorkNotComplete,
      numWork,
      cpnGetDateNow(),
      cpnGetRandomNum()
    );
  };

  /* const payLoad = {
    cacCongViecHoanThanh: var1,
    cacCongViec: var1,
    soHoanThanh: 0,
    soChuaHoanThanh: 0,
    tongSoCongViec: 0,
  }; */
  console.log(var1, payLoad);

  const congViecVip = [
    {
      id: 1,
      trangThai: 1,
      noiDungViec: "Việc cần làm 1",
    },
    {
      id: 2,
      trangThai: 1,
      noiDungViec: "Việc cần làm 2",
    },
    {
      id: 3,
      trangThai: 1,
      noiDungViec: "Việc cần làm 3",
    },
    {
      id: 4,
      trangThai: 0,
      noiDungViec: "Việc cần làm 4",
    },
    {
      id: 5,
      trangThai: 0,
      noiDungViec: "Việc cần làm 5",
    },
    {
      id: 6,
      trangThai: 0,
      noiDungViec: "Việc cần làm 6",
    },
  ];

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <Stack ml={1} mt={1} mr={1}>
          <div>Danh sách công việc cần làm:</div>
          <div>Ngày: 20/11/2023</div>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {congViec.map((value, index) => {
              const labelId = `checkbox-list-label-${index}`;

              return (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <CommentIcon />
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(index)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(index) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`${congViec[index]}`} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Stack>
      </Box>
    </>
  );
}
