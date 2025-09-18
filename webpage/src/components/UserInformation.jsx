import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import About from './About';
import Skills from './Skills';

export default function UserInformation({ mode }) {
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
            <About mode={mode} />
        </TabPanel>
        <TabPanel value="2">
            <Skills mode={mode} />
        </TabPanel>
      </TabContext>
    </Box>
  );
}