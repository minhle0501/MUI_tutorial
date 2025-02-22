import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormHelperText
} from "@mui/material";
import { useState } from "react";

const MuRadioButton = () => {
    const [value, setValue] = useState('0-2');
    console.log({value});
    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)}
  return (
    <Box>
      <FormControl>
        <FormLabel className="job-experience">Years of Experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="ob-experience-group-label"
          value={value}
          onChange={HandleChange} 
        >
          <FormControlLabel control={<Radio />} value="0-2" label="0-2" />
          <FormControlLabel control={<Radio />} value="3-5" label="3-5" />
          <FormControlLabel control={<Radio />} value="6-12" label="6-12" />
        </RadioGroup>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </Box>
  );
};

export default MuRadioButton;
