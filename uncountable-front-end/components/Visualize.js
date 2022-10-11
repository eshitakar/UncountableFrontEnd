/* This component renders the view on the Visualize tab of the interface. 
 * Specifically, it sets up the radio buttons for input/output and a scatterplot.
 */

import * as React from 'react';

/* Basic Material UI imports*/
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

/* Radio button imports*/
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

/*Graph imports*/
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/* Data parser import*/
import { parseGraphData } from '../utils/DataParser';

export default function Visualize(props) {
  // set up variables to track the radio button values
  const [in_value, setInValue] = React.useState('');
  const handleInChange = (event) => {
    setInValue(event.target.value);
  };
  const [out_value, setOutValue] = React.useState('');
  const handleOutChange = (event) => {
    setOutValue(event.target.value);
  };

  // grab a list of possible inputs and outputs to experiment
  var radio_ins = props.cat_in;
  var radio_outs = props.cat_out;

  // parse the data to be able to pass to the graph component
  var graph_data = parseGraphData(props.data)
  
  return (
    <Box>
        <Grid container spacing={2}>
          <Grid item xs={2} sx={{bgcolor: "background.paper"}}>
            <FormControl>
              <FormLabel 
              sx={{color: 'secondary.dark', fontWeight: "bold"}}
              >
                Inputs
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={in_value}
                onChange={handleInChange}
              >
                {/*iterate through possible inputs to generate radio button for each*/}
                {radio_ins.map(opt => {
                  return(
                    <FormControlLabel value={opt} control={<Radio color="secondary"/>} label={opt} />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={2} sx={{bgcolor: "background.paper"}}>
            <FormControl>
              <FormLabel 
              id="demo-controlled-radio-buttons-group"
              sx={{color: 'secondary.dark', fontWeight: "bold"}}
              >
                Outputs
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={out_value}
                onChange={handleOutChange}
              >
                {/*iterate through possible outputs to generate radio button for each*/}
                {radio_outs.map(opt => {
                  return(
                    <FormControlLabel value={opt} control={<Radio color="secondary"/>} label={opt} />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={8} sx={{bgcolor: "background.paper"}}>
            {/*Generate scatterplot using the radio button values and parsed graph data*/}
            <ResponsiveContainer width="95%" height={400}>
              <ScatterChart 
                margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
              >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" dataKey={in_value} name={in_value} range={[0, 10000]}/>
                  <YAxis type="number" dataKey={out_value} name={out_value} range={[0, 10000]}/>
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Legend />
                  <Scatter name={in_value} data={graph_data} fill="#ab47bc" />
              </ScatterChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
    </Box>
  );
}