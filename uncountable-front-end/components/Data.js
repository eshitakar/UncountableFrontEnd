import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import IO from './IO';



export default function Data(props) {
    const [parsed_data, setParsedData] = React.useState(props.data);
    return(
    <Grid container sx={{ height: '100%', width: '100%'}}>
        <Grid item xs={12}>
        {parsed_data.map((e) => {
            return(
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ width: '33%', flexShrink: 0, fontWeight: "bold"}}>
                        Experiment {e[0]}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }} justify="flex-end"> Conducted {e[1]}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <IO data={e[2]}/>
                </AccordionDetails>
            </Accordion>
            );
        })}
        </Grid>
    </Grid>
    );
}