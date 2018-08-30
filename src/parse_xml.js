
var convert = require('xml-js');

const xmlParser = (input, output) => {
    const inVal = input.value;   
    let res = xml2json(inVal);

    output.value = res;
};



const xml2json = (text) => {

    var result = convert.xml2js(text);
    console.log(result);

    return result;
}


export default xmlParser;