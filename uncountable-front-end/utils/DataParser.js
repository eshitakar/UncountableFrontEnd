/* This file contains userful data parser functions that operate on json data
 * to return arrays and other iterables that are useful in components throughout
 * this web-app
 */


/** parseInputData converts json experiment data into a list of tuples, where
 * each tuple contains a category of input and a list input name and > ZERO
 * amounts added to each experiment
 * 
 * @param {*} data(JSON iterable)
 * @returns: parsed_input(tuple array)
 * 
 */
export function parseInputData(data) {
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
        if(key.startsWith('Polymer') && ins[key] > 0.0) {
            polymers.push([key, ins[key]]);
        } else if (key.startsWith('Carbon Black') && ins[key] > 0.0) {
            carbon_black.push([key, ins[key]]);
        } else if (key.startsWith('Silica Filler') && ins[key] > 0.0) {
            silica.push([key, ins[key]]);
        } else if (key.startsWith('Plasticizer') && ins[key] > 0.0) {
            plasti.push([key, ins[key]]);
        } else if (key.startsWith('Co-Agent') && ins[key] > 0.0) {
            co_agent.push([key, ins[key]]);
        } else if (key.startsWith('Curing Agent') && ins[key] > 0.0) {
            curing_agent.push([key, ins[key]]);
        } else if(ins[key] > 0.0) {
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
        const obj1 = data[i][2]["inputs"];
        const obj2 = data[i][2]["outputs"];
        
        jsonArr.push({
            ...obj1,
            ...obj2
        })
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
        var exp_num = key.split("_")[2];
        var un_date = key.split("_")[0];
        var empty = "";
        var date = empty.concat(un_date.substring(4, 6), "/", un_date.substring(6), "/", un_date.substring(0, 4));
        parsed_data.push([exp_num, date, data[key]]);
    })
    return parsed_data;
}