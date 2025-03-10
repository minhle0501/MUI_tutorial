import { Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Home from "../pages/Home";
import News from "../pages/News";
import Contact from "../pages/Contact";
import MuiPages from "../pages/MuiPages";
import ReactVideo from "../pages/ReactVideo";
import MuiRoutes from "./MuiRoutes"; // Import MuiRoutes
import AxiosPage from "../pages/AxiosPage";


function MainRoutes() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/mui-pages" element={<MuiPages />} />
      <Route path="/react-video" element={<ReactVideo />} />
      <Route path="/axios-page" element={<AxiosPage />} />
      
      {/* Gọi MuiRoutes vào đây */}
      <Route path="/*" element={<MuiRoutes />} />
    </Routes>
  </LocalizationProvider>
   
  );
}

export default MainRoutes;
