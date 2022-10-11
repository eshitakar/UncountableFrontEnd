/* This component renders the view on the Data tab of the interface. 
 * Specifically, it sets up the upper level accordians for each experiment
 */

import React, { useState } from 'react';

/*Basic Material UI imports*/
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

/*Accordion imports*/
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/*Component imports*/
import IO from './IO';

export default function Data(props) {
    //grabbing data passed to component from props
    const parsed_data = props.data;
    return(
        <Grid container sx={{ height: '100%', width: '100%'}}>
            <Grid item xs={12}>
            {/*Iterate through parsed_data to render each experiment as an accordion*/}
            {parsed_data.map((e) => {
                // error checking on date string
                var date_str = "Conducted "
                if (e[1] == "Invalid date") {
                    date_str = ""
                } else{
                    date_str = date_str.concat(e[1])
                }
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
                            <Typography sx={{ color: 'text.secondary' }} justify="flex-end"> {date_str}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {/*Component to render data as a table*/}
                            <IO data={e[2]}/>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
            </Grid>
        </Grid>
    );
}