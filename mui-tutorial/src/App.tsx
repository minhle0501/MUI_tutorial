import { Box } from "@mui/material";
/* import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import MuiRoutes from "./router/MuiRoutes";
import MuiAutocompleteSelector from "./components/mui_components/MuiAutocompleteSelector"; */
import ReactVideo from "./pages/ReactVideo";

function App() {
  return (
    <>
      <Box>
        {/* <MuiAutocompleteSelector /> */}
        <ReactVideo/>
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MuiRoutes />
        </LocalizationProvider> */}
      </Box>
    </>
  );
};

export default App;
