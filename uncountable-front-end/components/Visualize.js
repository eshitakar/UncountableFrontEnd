import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { parseGraphData } from '../utils/DataParser';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Grid from '@mui/material/Grid';

export default function Visualize(props) {
  const [in_value, setInValue] = React.useState('');

  const handleInChange = (event) => {
    setInValue(event.target.value);
  };
  const [out_value, setOutValue] = React.useState('');

  const handleOutChange = (event) => {
    setOutValue(event.target.value);
  };
  //var ins = parseInputData(props.data);
  //var outs = parseOutputData(props.data);
  var radio_ins = props.cat_in;
  var radio_outs = props.cat_out;
  var graph_data = parseGraphData(props.data)
  return (
    <Box>
        <Grid container spacing={2}>
        <Grid item xs={2}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Inputs</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={in_value}
            onChange={handleInChange}
          >
            {radio_ins.map(opt => {
              return(
                <FormControlLabel value={opt} control={<Radio />} label={opt} />
              );
            })}
          </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item xs={2}>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Outputs</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={out_value}
            onChange={handleOutChange}
          >
            {radio_outs.map(opt => {
              return(
                <FormControlLabel value={opt} control={<Radio />} label={opt} />
              );
            })}
          </RadioGroup>
        </FormControl>
        </Grid>
        <Grid item xs={6}>
        <ScatterChart width={730} height={250}
          margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey={in_value} name={in_value} range={[0, 10000]}/>
          <YAxis type="number" dataKey={out_value} name={out_value} range={[0, 10000]}/>
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name={in_value} data={graph_data} fill="#8884d8" />
        </ScatterChart>
        </Grid>
        </Grid>
    </Box>
    
  );
}