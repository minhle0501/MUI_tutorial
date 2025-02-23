
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@mui/material';
import { useState } from 'react';
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
import MuRadioButton from "./components/MuRadioButton";
import MuiSelect from "./components/MuiSelect";
import MuiTextField from "./components/MuiTextField";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";

function App() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BrowserRouter>
      <div>
        <h1>Thư viện Material-UI</h1>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose} component={Link} to="/mui-link">MuiLink</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-nav-bar">MuiNavBar</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-image-list">MuiImageList</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-accordion">MuiAccordion</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-card">MuiCard</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-layout">MuiLayout</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-autocomplete">MuiAutocomplete</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-rating">MuiRating</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-switch">MuiSwitch</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-check-box">MuiCheckBox</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mu-radio-button">MuRadioButton</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-select">MuiSelect</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-text-field">MuiTextField</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-button">MuiButton</MenuItem>
          <MenuItem onClick={handleClose} component={Link} to="/mui-typography">MuiTypography</MenuItem>
        </Menu>
        <Routes>
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
          <Route path="/mu-radio-button" element={<MuRadioButton />} />
          <Route path="/mui-select" element={<MuiSelect />} />
          <Route path="/mui-text-field" element={<MuiTextField />} />
          <Route path="/mui-button" element={<MuiButton />} />
          <Route path="/mui-typography" element={<MuiTypography />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
