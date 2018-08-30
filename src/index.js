import xmlParser from './parse_xml';


require('normalize.css/normalize.css');
require('./styles/index.scss');



document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const run = document.getElementById('run');


    run.onclick = () => {
        console.log("Run Forrest! Run!");
        xmlParser(input, output);
    }
});
