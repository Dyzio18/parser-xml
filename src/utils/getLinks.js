
const getLinks = (obj) => {
   return  obj.elements[0].elements[0].elements[1].elements[0].elements;
}

const getContent = (obj) => {
    return  obj.elements[0].elements[0].elements[1].elements[1].elements[0].cdata;
}

export {getLinks, getContent};
