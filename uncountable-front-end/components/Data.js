import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import IO from './IO';



export default function Data(props) {
    const [parsed_data, setParsedData] = React.useState(props.data);
    // const [in_value, setInValue] = React.useState('');

    // const handleInChange = (event) => {
    //     setInValue(event.target.value);
    // };
    // const [out_value, setOutValue] = React.useState('');

    // const handleOutChange = (event) => {
    //     setOutValue(event.target.value);
    // };
    // var radio_ins = props.cat_in;
    // var radio_outs = props.cat_out;
    return(
    <Box sx={{ height: 400, width: '100%' }}>
        {parsed_data.map((e) => {
            return(
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        Experiment {e[0]}:
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}> Conducted {e[1]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <IO data={e[2]}/>
                </AccordionDetails>
            </Accordion>
            );
        })}
    </Box>
    );
}