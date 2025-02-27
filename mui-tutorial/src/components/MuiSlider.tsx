import { Slider, Box, Stack } from "@mui/material";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import { useState } from "react";

const marks = [
  { value: 0, label: "0°C" },
  { value: 20, label: "20°C" },
  { value: 37, label: "37°C" },
  { value: 100, label: "100°C" },
];
const MuiSlider = () => {
  const [value, setValue] = useState<number>(50);
  const [value1, setValue1] = useState<number>(50);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  const handleChange1 = (_event: Event, newValue: number | number[]) => {
    setValue1(newValue as number);
  };

  return (
    <Box sx={{ width: 300, margin: "auto", mt: 2 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <VolumeDown />
        <Slider
          defaultValue={50}
          aria-label="volume"
          aria-labelledby="non-linear-slider"
          value={value}
          onChange={handleChange}
        />
        <VolumeUp />
      </Stack>
      <Slider
        aria-label="Custom marks"
        value={value1}
        onChange={handleChange1}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        min={0}
        max={100}
      />
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
    </Box>
  );
};

export default MuiSlider;
