import React, { ChangeEvent, useState } from "react";
import { Rating, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function MuiRating() {
  const [value, setValue] = useState<number | null>(3);
  console.log({ value });
  const handleChange = (_event: ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          precision={0.5}
          size="large"
        />
      </Stack>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          readOnly
        />
      </Stack>
      <Stack spacing={2}>
        <Rating
          value={value}
          onChange={handleChange}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          highlightSelectedOnly
        />
      </Stack>
    </Stack>
  );
}
