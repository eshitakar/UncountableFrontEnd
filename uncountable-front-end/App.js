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
import data from './data/dataset.json';

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
  var sorted1 = Object.keys(data).sort((a, b) => parseInt(a.split("_")[2]) - parseInt(b.split("_")[2]));
  var sorted2 = sorted1.sort((a, b) => parseInt(a.split("_")[0]) - parseInt(b.split("_")[0]));
  var parsed_data = []
  sorted2.forEach((key) => {
    var exp_num = key.split("_")[2];
    var un_date = key.split("_")[0];
    var empty = "";
    var date = empty.concat(un_date.substring(4, 6), "/", un_date.substring(6), "/", un_date.substring(0, 4));
    parsed_data.push([exp_num, date, data[key]]);
  }) 
  var first = parsed_data[0]
  var input_cats = Object.keys(first[2]["inputs"])
  var output_cats = Object.keys(first[2]["outputs"])

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
          <Data cat_in={input_cats} cat_out={output_cats} data={parsed_data}/>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Visualize cat_in={input_cats} cat_out={output_cats} data={parsed_data}/>
      </TabPanel>
    </Box>
  );
}
