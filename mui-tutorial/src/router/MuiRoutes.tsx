import { Routes, Route } from "react-router-dom";
import MuiTransition from "../components/mui_components/MuiTransition";
import MuiStepper from "../components/mui_components/MuiStepper";
import MuiBackDrop from "../components/mui_components/MuiBackDrop";
import MuiPagination from "../components/mui_components/MuiPagination";
import MuiTranferList from "../components/mui_components/MuiTranferList";
import MuiSlider from "../components/mui_components/MuiSlider";
import MuiResponsiveness from "../components/mui_components/MuiResponsiveness";
import MuiMasonry from "../components/mui_components/MuiMasonry";
import MuiTimeLine from "../components/mui_components/MuiTimeLine";
import MuiTabs from "../components/mui_components/MuiTabs";
import MuiPicker from "../components/mui_components/MuiPicker";
import MuiLoadingButton from "../components/mui_components/MuiLoadingButton";
import MuiSkeleton from "../components/mui_components/MuiSkeleton";
import MuiProgress from "../components/mui_components/MuiProgress";
import MuiDiaLog from "../components/mui_components/MuiDiaLog";
import MuiSnackBar from "../components/mui_components/MuiSnackBar";
import MuiAlert from "../components/mui_components/MuiAlert";
import MuiTable from "../components/mui_components/MuiTable";
import MuiTooltip from "../components/mui_components/MuiTooltip";
import MuiChip from "../components/mui_components/MuiChip";
import MuiList from "../components/mui_components/MuiList";
import MuiBadge from "../components/mui_components/MuiBadge";
import MuiAvatar from "../components/mui_components/MuiAvatar";
import MuiBottomNavigation from "../components/mui_components/MuiBottomNavigation";
import MuiSpeedDial from "../components/mui_components/MuiSpeedDial";
import MuiBreadcrumbs from "../components/mui_components/MuiBreadcrumbs";
import MuiLink from "../components/mui_components/MuiLink";
import MuiNavBar from "../components/mui_components/MuiNavBar";
import MuiImageList from "../components/mui_components/MuiImageList";
import MuiAccordion from "../components/mui_components/MuiAccordion";
import MuiCard from "../components/mui_components/MuiCard";
import MuiLayout from "../components/mui_components/MuiLayout";
import MuiAutocomplete from "../components/mui_components/MuiAutocomplete";
import MuiRating from "../components/mui_components/MuiRating";
import MuiSwitch from "../components/mui_components/MuiSwitch";
import MuiCheckBox from "../components/mui_components/MuiCheckBox";
import MuiRadioButton from "../components/mui_components/MuiRadioButton";
import MuiSelect from "../components/mui_components/MuiSelect";
import MuiTextField from "../components/mui_components/MuiTextField";
import MuiButton from "../components/mui_components/MuiButton";
import MuiTypography from "../components/mui_components/MuiTypography";

const MuiRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="mui-transition" element={<MuiTransition />} />
      <Route path="mui-stepper" element={<MuiStepper />} />
      <Route path="mui-back-drop" element={<MuiBackDrop />} />
      <Route path="mui-pagination" element={<MuiPagination />} />
      <Route path="mui-tranfer-list" element={<MuiTranferList />} />
      <Route path="mui-slider" element={<MuiSlider />} />
      <Route path="mui-responsiveness" element={<MuiResponsiveness />} />
      <Route path="mui-masonry" element={<MuiMasonry />} />
      <Route path="mui-time-line" element={<MuiTimeLine />} />
      <Route path="mui-tabs" element={<MuiTabs />} />
      <Route path="mui-picker" element={<MuiPicker />} />
      <Route path="mui-loading-button" element={<MuiLoadingButton />} />
      <Route path="mui-skeleton" element={<MuiSkeleton />} />
      <Route path="mui-progress" element={<MuiProgress />} />
      <Route path="mui-dia-log" element={<MuiDiaLog />} />
      <Route path="mui-snack-bar" element={<MuiSnackBar />} />
      <Route path="mui-alert" element={<MuiAlert />} />
      <Route path="mui-table" element={<MuiTable />} />
      <Route path="mui-tooltip" element={<MuiTooltip />} />
      <Route path="mui-chip" element={<MuiChip />} />
      <Route path="mui-list" element={<MuiList />} />
      <Route path="mui-badge" element={<MuiBadge />} />
      <Route path="mui-avatar" element={<MuiAvatar />} />
      <Route path="mui-bottom-navigation" element={<MuiBottomNavigation />} />
      <Route path="mui-speed-dial" element={<MuiSpeedDial />} />
      <Route path="mui-breadcrumbs" element={<MuiBreadcrumbs />} />
      <Route path="mui-link" element={<MuiLink />} />
      <Route path="mui-nav-bar" element={<MuiNavBar />} />
      <Route path="mui-image-list" element={<MuiImageList />} />
      <Route path="mui-accordion" element={<MuiAccordion />} />
      <Route path="mui-card" element={<MuiCard />} />
      <Route path="mui-layout" element={<MuiLayout />} />
      <Route path="mui-autocomplete" element={<MuiAutocomplete />} />
      <Route path="mui-rating" element={<MuiRating />} />
      <Route path="mui-switch" element={<MuiSwitch />} />
      <Route path="mui-check-box" element={<MuiCheckBox />} />
      <Route path="mui-radio-button" element={<MuiRadioButton />} />
      <Route path="mui-select" element={<MuiSelect />} />
      <Route path="mui-text-field" element={<MuiTextField />} />
      <Route path="mui-button" element={<MuiButton />} />
      <Route path="mui-typography" element={<MuiTypography />} />
    </Routes>
  );
};

export default MuiRoutes;
