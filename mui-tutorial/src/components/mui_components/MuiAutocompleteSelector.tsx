import { Autocomplete, TextField, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import muiOptions, { MuiOption } from "../../data/MuiOptions";

const MuiAutocompleteSelector = () => {
  const navigate = useNavigate();
  return (
    <Box component={"div"}>
      <Typography variant="h2" component="h1">
        Thư viện Material-UI
      </Typography>
      <Autocomplete
        id="combo-box-demo"
        options={muiOptions}
        getOptionLabel={(option: MuiOption) => option.label}
        style={{ width: 300, marginBottom: 20 }}
        renderInput={(params) => (
          <TextField {...params} label="Mui components" variant="outlined" />
        )}
        onChange={(_event, value) => {
          if (value) {
            navigate(value.path);
          }
        }}
      />
    </Box>
  );
};

export default MuiAutocompleteSelector;
