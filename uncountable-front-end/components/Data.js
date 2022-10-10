import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import data from './dataset.json';
import IO from './IO';

//const [data,setData]=useState([]);

// const getData=()=>{
//     fetch('./dataset.json'
//         ,{
//             headers : { 
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }
//     ).then(function(response){
//         console.log(response)
//         return response.json();
//     }).then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//     });
// }
// useEffect(()=>{getData()},[])
export default function Data() {
    var sorted1 = Object.keys(data).sort((a, b) => parseInt(a.split("_")[2]) - parseInt(b.split("_")[2]));
    var sorted2 = sorted1.sort((a, b) => parseInt(a.split("_")[0]) - parseInt(b.split("_")[0]));
    var parsed_data = []
    sorted2.forEach((key) => {
        var exp_num = key.split("_")[2];
        var un_date = key.split("_")[0];
        var empty = "";
        var date = empty.concat(un_date.substring(4, 6), "/", un_date.substring(6), "/", un_date.substring(0, 4));
        console.log(date)
        parsed_data.push([exp_num, date, data[key]]);
    }) 
    return(
    <Box sx={{ height: 400, width: '100%' }}>
        <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Test</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
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