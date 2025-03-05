import { Stack, Rating } from "@mui/material";
import { useState } from "react";

const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  console.log({value})
  const handelChange = (_event: React.SyntheticEvent, newValue: number|null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handelChange} precision={0.5} highlightSelectedOnly/>
    </Stack>
  );
};

export default MuiRating;
