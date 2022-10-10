import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Data from './components/Data';
import Visualize from './components/Visualize';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab icon={<TableViewOutlinedIcon/>} iconPosition="start" label="Data" {...a11yProps(0)} />
        <Tab icon={<InsertChartOutlinedIcon/>} iconPosition="start" label="Visualize" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Box sx={{ width: '100%' }}>
          <Data/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Visualize/>
      </TabPanel>
    </Box>
  );
}
