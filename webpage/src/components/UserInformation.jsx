import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import About from './About';

export default function UserInformation() {
  const [value, setValue] = React.useState('1');

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="About" value="1" />
            <Tab label="Skills" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <About />
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}