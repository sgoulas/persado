/**
 * Get the result of a serializeArray() function call on a form
 * and return it as a valid JSON
 */
const objectifySerializedArray = dataArray => {
    let json = {};
    for (let i = 0; i < dataArray.length; i++) {
        json[dataArray[i]["name"]] = dataArray[i]["value"];
    }
    return json;
};
