/* This file renders the entire web-app, passing relevant data down
 * down to components as needed.
 */

import * as React from 'react';

/*Basic Material UI imports*/
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

/*Side tab functionality imports*/
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

/*Icon imports*/
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

/*data parser, data, and component imports*/
import {parseTupleData} from './utils/DataParser';
import data from './data/dataset.json';
import Data from './components/Data';
import Visualize from './components/Visualize';

/*Tab panel*/
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

/*Initializing proptypes for tab panel*/
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

/*Main web-app export*/
export default function App() {
  //initializing state variable to use with tabs
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //Instantiating data variables to pass to components
  var parsed_data = parseTupleData(data);
  var first = parsed_data[0]
  var input_cats = Object.keys(first[2]["inputs"])
  var output_cats = Object.keys(first[2]["outputs"])

  return (
    <Grid container>
      {/*Using Grid to flexibly size components*/}
      <Grid item xs={2}>
        {/*Side tab bar*/}
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider',  bgcolor: 'background.paper'}}
        >
          <Tab icon={<TableViewOutlinedIcon/>} iconPosition="start" label="Data" {...a11yProps(0)} />
          <Tab icon={<InsertChartOutlinedIcon/>} iconPosition="start" label="Visualize" {...a11yProps(1)} />
        </Tabs>
      </Grid>
        <Grid item xs={10} sx={{bgcolor: 'secondary.light'}}>
          {/*tab interface definitions*/}
          <TabPanel value={value} index={0}>
            {/*Data renderer*/}
            <Data cat_in={input_cats} cat_out={output_cats} data={parsed_data}/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            {/*Graph renderer*/}
            <Visualize cat_in={input_cats} cat_out={output_cats} data={parsed_data}/>
          </TabPanel>
        </Grid>
    </Grid>
  );
}
