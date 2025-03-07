import { Box } from "@mui/material";
import MuiRoutes from "../router/MuiRoutes";
import MuiAutocompleteSelector from "../components/mui_components/MuiAutocompleteSelector";
function MuiPages() {
  return (
    <>
    <Box >
      <MuiAutocompleteSelector />
   
        <MuiRoutes />
    </Box>
    </>
  );
}

export default MuiPages;