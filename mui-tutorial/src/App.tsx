import { Routes, Route, useNavigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  Autocomplete,
  TextField,
  Typography,
  Box,
} from "@mui/material";

import MuiMasonry from "./components/MuiMasonry";
import MuiTimeLine from "./components/MuiTimeLine";
import MuiTabs from "./components/MuiTabs";
import MuiPicker from "./components/MuiPicker";
import MuiLoadingButton from "./components/MuiLoadingButton";
import MuiSkeleton from "./components/MuiSkeleton";
import MuiProgress from "./components/MuiProgress";
import MuiDiaLog from "./components/MuiDiaLog";
import MuiSnackBar from "./components/MuiSnackBar";
import MuiAlert from "./components/MuiAlert";
import MuiTable from "./components/MuiTable";
import MuiTooltip from "./components/MuiTooltip";
import MuiChip from "./components/MuiChip";
import MuiList from "./components/MuiList";
import MuiBadge from "./components/MuiBadge";
import MuiAvatar from "./components/MuiAvatar";
import MuiBottomNavigation from "./components/MuiBottomNavigation";
import MuiSpeedDial from "./components/MuiSpeedDial";
import MuiBreadcrumbs from "./components/MuiBreadcrumbs";
import MuiLink from "./components/MuiLink";
import MuiNavBar from "./components/MuiNavBar";
import MuiImageList from "./components/MuiImageList";
import MuiAccordion from "./components/MuiAccordion";
import MuiCard from "./components/MuiCard";
import MuiLayout from "./components/MuiLayout";
import MuiAutocomplete from "./components/MuiAutocomplete";
import MuiRating from "./components/MuiRating";
import MuiSwitch from "./components/MuiSwitch";
import MuiCheckBox from "./components/MuiCheckBox";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiSelect from "./components/MuiSelect";
import MuiTextField from "./components/MuiTextField";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";

const options = [
  {label:"MuiMasonry",path:"/mui-masonry"},
  {label:"MuiTimeLine",path:"/mui-time-line"},
  { label: "MuiTabs", path: "/mui-tabs" },
  { label: "MuiPicker", path: "/mui-picker" },
  { label: "MuiLoadingButton", path: "/mui-loading-button" },
  { label: "MuiSkeleton", path: "/mui-skeleton" },
  { label: "MuiProgress", path: "/mui-progress" },
  { label: "MuiDiaLog", path: "/mui-dia-log" },
  { label: "MuiSnackBar", path: "/mui-snack-bar" },
  { label: "MuiAlert", path: "/mui-alert" },
  { label: "MuiTable", path: "/mui-table" },
  { label: "MuiTooltip", path: "/mui-tooltip" },
  { label: "MuiChip", path: "/mui-chip" },
  { label: "MuiList", path: "/mui-list" },
  { label: "MuiBadge", path: "/mui-badge" },
  { label: "MuiAvatar", path: "/mui-avatar" },
  { label: "MuiBottomNavigation", path: "/mui-bottom-navigation" },
  { label: "MuiSpeedDial", path: "/mui-speed-dial" },
  { label: "MuiBreadcrumbs", path: "/mui-breadcrumbs" },
  { label: "MuiLink", path: "/mui-link" },
  { label: "MuiNavBar", path: "/mui-nav-bar" },
  { label: "MuiImageList", path: "/mui-image-list" },
  { label: "MuiAccordion", path: "/mui-accordion" },
  { label: "MuiCard", path: "/mui-card" },
  { label: "MuiLayout", path: "/mui-layout" },
  { label: "MuiAutocomplete", path: "/mui-autocomplete" },
  { label: "MuiRating", path: "/mui-rating" },
  { label: "MuiSwitch", path: "/mui-switch" },
  { label: "MuiCheckBox", path: "/mui-check-box" },
  { label: "MuiRadioButton", path: "/mui-radio-button" },
  { label: "MuiSelect", path: "/mui-select" },
  { label: "MuiTextField", path: "/mui-text-field" },
  { label: "MuiButton", path: "/mui-button" },
  { label: "MuiTypography", path: "/mui-typography" },
];

function App() {
  const navigate = useNavigate();
  return (
    <Box component={"div"}>
      <Typography variant="h2" component="h1">
        Thư viện Material-UI
      </Typography>
      <Autocomplete
        id="combo-box-demo"
        options={options}
        getOptionLabel={(option) => option.label}
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

      <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Routes>
            <Route path="/mui-masonry" element={<MuiMasonry />} />
            <Route path="/mui-time-line" element={<MuiTimeLine />} />
            <Route path="/mui-tabs" element={<MuiTabs />} />
            <Route path="/mui-picker" element={<MuiPicker />} />
            <Route path="/mui-loading-button" element={<MuiLoadingButton />} />
            <Route path="/mui-skeleton" element={<MuiSkeleton />} />
            <Route path="/mui-progress" element={<MuiProgress />} />
            <Route path="/mui-dia-log" element={<MuiDiaLog />} />
            <Route path="/mui-snack-bar" element={<MuiSnackBar />} />
            <Route path="/mui-alert" element={<MuiAlert />} />
            <Route path="/mui-table" element={<MuiTable />} />
            <Route path="/mui-tooltip" element={<MuiTooltip />} />
            <Route path="/mui-chip" element={<MuiChip />} />
            <Route path="/mui-list" element={<MuiList />} />
            <Route path="/mui-badge" element={<MuiBadge />} />
            <Route path="/mui-avatar" element={<MuiAvatar />} />
            <Route
              path="/mui-bottom-navigation"
              element={<MuiBottomNavigation />}
            />
            <Route path="/mui-speed-dial" element={<MuiSpeedDial />} />
            <Route path="/mui-breadcrumbs" element={<MuiBreadcrumbs />} />
            <Route path="/mui-link" element={<MuiLink />} />
            <Route path="/mui-nav-bar" element={<MuiNavBar />} />
            <Route path="/mui-image-list" element={<MuiImageList />} />
            <Route path="/mui-accordion" element={<MuiAccordion />} />
            <Route path="/mui-card" element={<MuiCard />} />
            <Route path="/mui-layout" element={<MuiLayout />} />
            <Route path="/mui-autocomplete" element={<MuiAutocomplete />} />
            <Route path="/mui-rating" element={<MuiRating />} />
            <Route path="/mui-switch" element={<MuiSwitch />} />
            <Route path="/mui-check-box" element={<MuiCheckBox />} />
            <Route path="/mui-radio-button" element={<MuiRadioButton />} />
            <Route path="/mui-select" element={<MuiSelect />} />
            <Route path="/mui-text-field" element={<MuiTextField />} />
            <Route path="/mui-button" element={<MuiButton />} />
            <Route path="/mui-typography" element={<MuiTypography />} />
          </Routes>
      </LocalizationProvider>
    </Box>
  );
}

export default App;
