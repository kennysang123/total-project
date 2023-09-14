import React, { useState, useEffect } from "react";
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

export default function TodoList() {
  const [checked, setChecked] = useState<any>([1, 3, 5]);
  const [workList, setWorkList] = useState<any>([]);

  const congViecVip = [
    {
      id: 1,
      trangThai: true,
      noiDungViec: "Việc cần làm 1",
    },
    {
      id: 2,
      trangThai: true,
      noiDungViec: "Việc cần làm 2",
    },
    {
      id: 3,
      trangThai: true,
      noiDungViec: "Việc cần làm 3",
    },
    {
      id: 4,
      trangThai: false,
      noiDungViec: "Việc cần làm 4",
    },
    {
      id: 5,
      trangThai: false,
      noiDungViec: "Việc cần làm 5",
    },
    {
      id: 6,
      trangThai: false,
      noiDungViec: "Việc cần làm 6",
    },
  ];
  useEffect(() => {
    setWorkList(congViecVip);
    return () => {};
  }, []);
  const handleClickCheckbox = (idCongViec: any, indexCongViec: any) => {
    /* cap nhat mang*/
    /* cap nhat so luong */

    console.log(111, idCongViec, 222, indexCongViec);
    const congViecCell = workList[indexCongViec]["id"];
    console.log(congViecCell);
  };
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <Stack ml={1} mt={1} mr={1}>
          <div>Danh sách công việc cần làm:</div>
          <div>Ngày: 20/11/2023</div>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            {workList.length > 0 &&
              workList.map((value: any, index: any) => {
                const labelId = `checkbox-list-label-${index}`;
                const idCongViec = value.id;
                const indexCongViec = index;

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
                      onClick={() =>
                        handleClickCheckbox(idCongViec, indexCongViec)
                      }
                      dense
                    >
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={value.trangThai === true}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        id={labelId}
                        primary={`${value.noiDungViec}`}
                      />
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
