import React from "react";
import { Box, Stack, Paper, Grid, styled } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Filter() {
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <div>Filter</div>

      <Box sx={{ minWidth: 120 }}>
        <Stack ml={1} mt={1} mr={1}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Nhân viên</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Nhân viên"
              onChange={handleChange}
            >
              <MenuItem value={10}>Nguyễn Thị A - NV001</MenuItem>
              <MenuItem value={20}>Nguyễn Thị B - NV002</MenuItem>
              <MenuItem value={20}>Nguyễn Thị C - NV003</MenuItem>
              <MenuItem value={20}>Nguyễn Thị D - NV004</MenuItem>
              <MenuItem value={20}>Nguyễn Thị E - NV005</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </>
  );
}
