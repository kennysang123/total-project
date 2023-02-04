import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export default function MuiSelect() {
  const [country, setCountry] = useState("");
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ country });
  console.log({ countries });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width={"250px"}>
      <TextField
        label="Select country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">AUstralia</MenuItem>
      </TextField>
      <TextField
        label="Select countries"
        select
        value={countries}
        onChange={handleChange2}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="secondary"
        helperText="Please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">AUstralia</MenuItem>
      </TextField>
    </Box>
  );
}
