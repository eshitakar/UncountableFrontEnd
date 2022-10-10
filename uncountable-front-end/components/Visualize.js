import * as React from 'react';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { parseInputData, parseOutputData } from '../utils/DataParser';

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

  return (
    <Box sx={{width: '100%' }}>
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
    </Box>
    
  );
}