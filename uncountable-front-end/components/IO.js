import React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { parseInputData, parseOutputData } from '../utils/DataParser';

export default function IO(props) {
    var parsed_inputs = parseInputData(props.data);
    var parsed_outputs = parseOutputData(props.data);
    return(
        <Box sx={{width: '100%' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{color: 'secondary.dark'}}>Inputs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {parsed_inputs.map(input => {
                    var elems = input[1]

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
                                {elems.map((row) => {
                                    return(
                                        <TableRow
                                    key={row[0]}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                    <TableCell component="th" scope="row">
                                        {row[0]}
                                    </TableCell>
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
                            {parsed_outputs.map(output => {
                                return(
                                    <TableRow
                                    key={output[0]}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {output[0]}
                                        </TableCell>
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