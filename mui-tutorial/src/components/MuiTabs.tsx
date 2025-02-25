import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
const MuiTabs = () => {
    const [value,seValue] = useState('1');
    const handleChage = (_event: React.SyntheticEvent, newValue: string) =>{
        seValue(newValue)}
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", width:'300px' }}>
          <TabList aria-label=" tabs example" onChange={handleChage} textColor="secondary" indicatorColor="secondary" variant="scrollable" scrollButtons="auto">
            <Tab label="Tab 1" value="1" icon={<FavoriteIcon />} iconPosition="start"/>
            <Tab label="Tab 2" value="2" disabled/>
            <Tab label="Tab 3" value="3" />
            <Tab label="Tab 4" value="4" />
            <Tab label="Tab 5" value="5" />
            <Tab label="Tab 6" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">Panel 1</TabPanel> 
        <TabPanel value="2">Panel 2</TabPanel>
        <TabPanel value="3">Panel 3</TabPanel>
      </TabContext>
    </Box>
  );
};

export default MuiTabs;
