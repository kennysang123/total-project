import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

export default function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          color="secondary"
          variant="outlined"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        <TextField
          label="Password"
          color="secondary"
          type={"password"}
          variant="outlined"
          helperText="Do not share your password with anyone"
        />
        <TextField label="Read only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}
