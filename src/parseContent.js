var convert = require('xml-js');
import {getLinks, getContent} from './utils/getLinks';
import {getInput,setOutput} from "./utils/stream";

const parseContent = () => {
    const input = getInput();
    let jsonObj = convert.xml2js(input);

    const links = getLinks(jsonObj);
    let content = getContent(jsonObj);
    let output = replaceLinks(content, links);
    setOutput(output);
};


const replaceLinks = (content, links) => {

    let result = '' + content;

    links.map(elem => {
        let linkTag = elem.attributes.name;
        let linkSrc = linkTag;
        if (elem.elements[0].elements && elem.elements[0].elements[0]) {
            linkSrc = elem.elements[0].elements[0].cdata;
        } else if (elem.attributes.internal === "true") {
            let anchorLink = false;
            if (elem.elements[1].elements) {
                anchorLink = elem.elements[1].elements[0].cdata;
            }
            linkSrc = anchorLink ? "#" + anchorLink : '#';
        }
        let reg = new RegExp("%\\(" + linkTag + "\\)", "g");
        result = result.replace(reg, linkSrc);
    })
    return result;
}

export default parseContent;
