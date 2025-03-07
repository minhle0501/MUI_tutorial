import React from "react";
import { Routes, Route } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Home from "../pages/Home";
import News from "../pages/News";
import Contact from "../pages/Contact";
import MuiAutocompleteSelector from "../pages/MuiAutocompleteSelector"; // MuiPage
import ReactVideo from "../pages/ReactVideo";
import MuiRoutes from "../router/MuiRoutes"; // Nếu có định tuyến phụ

const MainRouter: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        {/* Định tuyến cho Library */}
        <Route path="/library/mui" element={<MuiAutocompleteSelector />} />
        <Route path="/library/video" element={<ReactVideo />} />
        {/* Route phụ nếu cần */}
        <Route path="/routes/*" element={<MuiRoutes />} />
      </Routes>
    </LocalizationProvider>
  );
};

export default MainRouter;

