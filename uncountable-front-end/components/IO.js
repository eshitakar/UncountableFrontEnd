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

export default function IO(props) {
    var ins = props.data["inputs"];
    var polymers = [];
    var carbon_black = [];
    var silica = [];
    var plasti = [];
    var anti = ins["Antioxidant"];
    var color = ins["Coloring Pigment"];
    var co_agent = [];
    var curing_agent = [];
    var oven = ins["Oven Temperature"];
    var outs = props.data["outputs"];
    Object.keys(ins).forEach((key) => {
        if(key.startsWith('Polymer') && ins[key] > 0.0) {
            polymers.push([key, ins[key]]);
        } else if (key.startsWith('Carbon Black') && ins[key] > 0.0) {
            carbon_black.push([key, ins[key]]);
        } else if (key.startsWith('Silica') && ins[key] > 0.0) {
            silica.push([key, ins[key]]);
        } else if (key.startsWith('Plasticizer') && ins[key] > 0.0) {
            plasti.push([key, ins[key]]);
        } else if (key.startsWith('Co-Agent') && ins[key] > 0.0) {
            co_agent.push([key, ins[key]]);
        } else if (key.startsWith('Curing Agent') && ins[key] > 0.0) {
            curing_agent.push([key, ins[key]]);
        } 
    });

    return(
        <Box sx={{width: '100%' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Inputs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                {(polymers.length > 0)  ?
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Polymers</TableCell>
                                <TableCell align="right">Amount</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {polymers.map((row) => {
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
                : console.log("No polymers")
                }
                {(carbon_black.length > 0) ? 
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Carbon Black</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {carbon_black.map((row) => {
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
                : console.log("No Carbon Black")
                }
                {(silica.length > 0) ? 
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Silica</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {silica.map((row) => {
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
                : console.log("No Silica")}
                {(plasti.length > 0) ? 
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Plasticizer</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {plasti.map((row) => {
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
                : console.log("No plasticizer")}
                {(co_agent.length > 0) ? 
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Co-Agent</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {co_agent.map((row) => {
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
                : console.log("No co-agent")}
                {(curing_agent.length > 0) ? 
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Curing Agent</TableCell>
                            <TableCell align="right">Amount</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {curing_agent.map((row) => {
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
                : console.log("No curing agent")}
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Other</TableCell>
                                <TableCell align="right">Amount</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(anti > 0.0) ? 
                            <TableRow
                            key={"Antioxidant"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {"Antioxidant"}
                            </TableCell>
                            <TableCell align="right">{anti}</TableCell>
                            </TableRow>
                            : console.log("No anti")
                            }
                            {(anti > 0.0) ? 
                            <TableRow
                            key={"Coloring Pigment"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {"Coloring Pigment"}
                            </TableCell>
                            <TableCell align="right">{color}</TableCell>
                            </TableRow>
                            : console.log("No color")
                            }
                            <TableRow
                            key={"Oven Temperature"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {"Oven Temperature"}
                            </TableCell>
                            <TableCell align="right">{oven}</TableCell>
                            </TableRow>                            
                        </TableBody>
                    </Table>
                </TableContainer>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Outputs</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Measurements</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody> 
                            <TableRow
                            key={"Viscosity"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {"Viscosity"}
                                </TableCell>
                                <TableCell align="right">{outs["Viscosity"]}</TableCell>
                            </TableRow>
                            <TableRow
                            key={"Cure Time"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {"Cure Time"}
                                </TableCell>
                                <TableCell align="right">{outs["Cure Time"]}</TableCell>
                            </TableRow>
                            <TableRow
                            key={"Elongation"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {"Elongation"}
                                </TableCell>
                                <TableCell align="right">{outs["Elongation"]}</TableCell>
                            </TableRow>
                            <TableRow
                            key={"Tensile Strength"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {"Tensile Strength"}
                                </TableCell>
                                <TableCell align="right">{outs["Tensile Strength"]}</TableCell>
                            </TableRow>
                            <TableRow
                            key={"Compression Set"}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {"Compression Set"}
                                </TableCell>
                                <TableCell align="right">{outs["Compression Set"]}</TableCell>
                            </TableRow>        
                        </TableBody>
                    </Table>
                </TableContainer>
                </AccordionDetails>
            </Accordion>
        </Box>

    );
}