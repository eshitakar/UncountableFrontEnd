export function parseInputData(data) {
    var ins = data["inputs"];
    var polymers = [];
    var carbon_black = [];
    var silica = [];
    var plasti = [];
    var co_agent = [];
    var curing_agent = [];
    var parsed_inputs = [];
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
    parsed_inputs = [
        ["Polymer", polymers],
        ["Carbon Black", carbon_black],
        ["Silica", silica],
        ["Plasticizer", plasti],
        ["Co-Agent", co_agent],
        ["Curing_Agent", curing_agent],
        ["Antioxidant", [ins["Antioxidant"]]],
        ["Coloring Pigment", [ins["Coloring Pigment"]]],
        ["Oven Temperature", [ins["Oven Temperature"]]]
    ];

    return parsed_inputs;
}

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