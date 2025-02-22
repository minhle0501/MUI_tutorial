import { Box, TextField, MenuItem, Stack } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState('');
  console.log(country);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value as string);
  };

  const [countries, setCountries] = useState<string[]>([]);
  const handleChangeMultiple = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value)
  };
  return (
    <Stack>
     <Box width="250px">
      <TextField
        select
        label="Select Conutry"
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
      </TextField>
    </Box>
    <Box width="250px">
      <TextField
        select
        label="Select Conutry"
        value={countries}
        onChange={handleChangeMultiple}
        fullWidth
        SelectProps={{
            multiple: true
        }}
      >
        <MenuItem value="India">India</MenuItem>
        <MenuItem value="USA">USA</MenuItem>
        <MenuItem value="UK">UK</MenuItem>
      </TextField>
    </Box>
    </Stack>    
  );
};

export default MuiSelect;
