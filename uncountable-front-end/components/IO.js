/* This component renders a component on the Data tab of the interface. 
 * Specifically, it sets up the lower level input/output accordians and
 * tables for each experiment
 */

import React from 'react';

/*Basic Material UI imports*/
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/*Accordion imports*/
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/*Table imports*/
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


/*Data parser function imports*/
import { parseInputData, parseOutputData } from '../utils/DataParser';

export default function IO(props) {
    // grabbing non-zero inputs and outputs from props.data
    var parsed_inputs = parseInputData(props.data);
    var parsed_outputs = parseOutputData(props.data);
    // stylistically, I chose to use accordions to hide input/output to prevent the user from being overwhelmed
    // the choice to use tables for rendering data came from tables being an easy-on-the-eyes way to view data
    return(
        <Box sx={{width: '100%' }}>
            {/*creating accordion view for inputs*/}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{color: 'secondary.dark'}}>Inputs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {/*iterate through inputs to render a table per input category*/}
                    {parsed_inputs.map(input => {
                        var elems = input[1]
                        //only render category input rows if they were added to experiment
                        if (elems.length > 0) {
                            return(
                                <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                    <TableRow sx={{bgcolor: "secondary.light"}}>
                                        <TableCell sx={{fontWeight: 'bold'}}>{input[0]}</TableCell>
                                        <TableCell sx={{fontWeight: 'bold'}} align="right">Amount</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {/* for each specific input, render a row with amount data*/}
                                    {elems.map((row) => {
                                        return(
                                            <TableRow
                                                key={row[0]}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">{row[0]}</TableCell>
                                                <TableCell align="right">{row[1]}</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            );
                        }
                    })}
                </AccordionDetails>
            </Accordion>
            {/*creating accordion view for outputs*/}
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{color: 'secondary.dark'}}>Outputs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{bgcolor: 'secondary.light'}}>
                                    <TableCell sx={{fontWeight: "bold"}}>Measurements</TableCell>
                                    <TableCell sx={{fontWeight: 'bold'}} align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody> 
                                {/*iterate through outputs to render a table per output category*/}
                                {parsed_outputs.map(output => {
                                    return(
                                        <TableRow
                                            key={output[0]}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{output[0]}</TableCell>
                                            <TableCell align="right">{output[1]}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}