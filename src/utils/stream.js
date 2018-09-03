const getInput = () => {
    return document.getElementById('input').value;
}

const setOutput = (value) => {
    document.getElementById('output').value = value
}

export {getInput, setOutput};