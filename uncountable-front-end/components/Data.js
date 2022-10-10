import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import IO from './IO';



export default function Data(props) {
    const [parsed_data, setParsedData] = React.useState(props.data);
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