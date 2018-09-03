import parseContent from './parseContent';


require('normalize.css/normalize.css');
require('./styles/index.scss');



document.addEventListener("DOMContentLoaded", () => {

    const run = document.getElementById('run');
    run.onclick = () => {
        console.log("Run Forrest! Run!");
        parseContent();
    }
});
