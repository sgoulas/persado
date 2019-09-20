/**
 * @param dataArray of type {Array}
 * Gets the result of a array which is the result of a serializeArray() function call on a form
 * @returns it as a valid JSON
 */

const objectifySerializedArray = dataArray => {
    let json = {};
    for (let i = 0; i < dataArray.length; i++) {
        json[dataArray[i]["name"]] = dataArray[i]["value"];
    }
    return json;
};

/** paize kai na min to xreiazomai, an kanw .html() to \u03c3\u03c0\u03b7\u03bb\u03b9\u03ac\u03c2 kapoy vgainei kanonika "σπηλιάς". Προσοχή στις συγκρίσεις. */
const encode_utf8 = s => {
    return unescape(encodeURIComponent(s));
};
