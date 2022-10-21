/* This file contains userful data parser functions that operate on json data
 * to return arrays and other iterables that are useful in components throughout
 * this web-app
 */

/** validData checks some data x to check if it is a valid positive int or other datatype
 * 
 * @param {*} x 
 * @returns boolean (True if x is a valid positive int or other data type, false otherwise)
 */
function validData(x) {
    return typeof x == 'number' && (!isNaN(x) && x > 0.0)
}


/** parseInputData converts json experiment data into a list of tuples, where
 * each tuple contains a category of input and a list input name and > ZERO
 * amounts added to each experiment
 * 
 * @param data(JSON iterable)
 * @returns: parsed_input(tuple array)
 * 
 */
export function parseInputData(data) {
    if(!data.hasOwnProperty("inputs")) {
        return []
    }
    var ins = data["inputs"];
    // instatiate empty arrays to hold specific inputs
    var polymers = [];
    var carbon_black = [];
    var silica = [];
    var plasti = [];
    var co_agent = [];
    var curing_agent = [];
    var parsed_inputs = [];
    var other = [];

    // iterate through the input keys and add to correct array if > zero
    Object.keys(ins).forEach((key) => {
        if(key.startsWith('Polymer') && validData(ins[key])) {
            polymers.push([key, ins[key]]);
        } else if (key.startsWith('Carbon Black') && validData(ins[key])) {
            carbon_black.push([key, ins[key]]);
        } else if (key.startsWith('Silica Filler') && validData(ins[key])) {
            silica.push([key, ins[key]]);
        } else if (key.startsWith('Plasticizer') && validData(ins[key])) {
            plasti.push([key, ins[key]]);
        } else if (key.startsWith('Co-Agent') && validData(ins[key])) {
            co_agent.push([key, ins[key]]);
        } else if (key.startsWith('Curing Agent') && validData(ins[key])) {
            curing_agent.push([key, ins[key]]);
        } else if(validData(ins[key])) {
            other.push([key, ins[key]])
        }
    });

    // combine arrays under categories and return
    parsed_inputs = [
        ["Polymer", polymers],
        ["Carbon Black", carbon_black],
        ["Silica Filler", silica],
        ["Plasticizer", plasti],
        ["Co-Agent", co_agent],
        ["Curing Agent", curing_agent],
        ["Other", other],
    ];

    return parsed_inputs;
}

/** parseOutput converts json experiment data into a list of tuples, where
 * each tuple contains a category of output amount observed for each experiment
 * 
 * @param data(JSON iterable)
 * @returns parsed_outputs(tuple array)
 * 
 */
export function parseOutputData(data) {
    if(!data.hasOwnProperty("outputs")) {
        return [];
    }
    var outs = data["outputs"];
    var parsed_outputs = [
        ["Viscosity", outs["Viscosity"]],
        ["Cure Time", outs["Cure Time"]],
        ["Elongation", outs["Elongation"]],
        ["Tensile Strength", outs["Tensile Strength"]],
        ["Compression Set", outs["Compression Set"]]
    ];
    return parsed_outputs;
}



/** parseGraphData converts json experiment data into a single json
 * object so that it can be ingested by the Recharts library plots
 *
 * @param data(JSON iterable)
 * @returns jsonArr(JSON iterable)
 * 
 */
export function parseGraphData(data) {
    var jsonArr = [];
    for(var i = 0; i < data.length; i++){
        // make sure we are returning numbers!
        if(data[i][2].hasOwnProperty("inputs") && data[i][2].hasOwnProperty("outputs")){
            
        
        const obj1 = Object.fromEntries(Object.entries(data[i][2]["inputs"]).filter((k, e) => typeof e == 'number' && !isNaN(e)));
        const obj2 = Object.fromEntries(Object.entries(data[i][2]["outputs"]).filter((k, e) => typeof e == 'number' && !isNaN(e)));
        
        jsonArr.push({
            ...obj1,
            ...obj2
        })
    }
    }
    return jsonArr;
}

/** parseTupleData converts json experiment data into a list of tuples, where
 * each tuple contains the experiment number, date the experiment was conducted
 * and a json iterable with the inputs/outputs of each experiment. Note that the 
 * output is sorted by experiment number and date conducted.
 * 
 * @param data(JSON iterable)
 * @returns parsed_data(tuple array)
 * 
 */
export function parseTupleData(data) {
    // sort by experiment number
    var sorted1 = Object.keys(data).sort((a, b) => parseInt(a.split("_")[2]) - parseInt(b.split("_")[2]));
    // sort by date conducted
    var sorted2 = sorted1.sort((a, b) => parseInt(a.split("_")[0]) - parseInt(b.split("_")[0]));
    
    // iterate through each key and format properly to add to array
    var parsed_data = []
    sorted2.forEach((key) => {
        var splitted = key.split("_");
        // make sure we can parse the experiment correctly -- if not, ignore
        if (splitted.length == 3) {
            var exp_num = key.split("_")[2];
            var un_date = key.split("_")[0];
            var date = "";
            // error checking for date string
            if(un_date.length == 8) {
                date = date.concat(un_date.substring(4, 6), "/", un_date.substring(6), "/", un_date.substring(0, 4));
            } else {
                date = "Invalid date"
            }
            // check to see if our experiment number is well defined
            if(isNaN(Number.parseInt(exp_num))){
                exp_num = "##";
            }
            parsed_data.push([exp_num, date, data[key]]);
        }
        
    })
    return parsed_data;
}

export function findInputs(data) {
    data.forEach((e, d, i) => {
        if(i.hasOwnProperty("inputs") > 0) {
            return Object.keys(i["inputs"])
        }

    })
}

export function findOutputs(data) {
    data.forEach((e, d, i) => {
        if(i.hasOwnProperty("outputs") > 0) {
            return Object.keys(i["outputs"])
        }
    })
}