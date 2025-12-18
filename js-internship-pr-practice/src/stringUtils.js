// Converts string to uppercase
function toUpperCase(str) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }
    return str.toUpperCase();
}

// NEW FEATURE 1: Convert string to lowercase
function toLowerCase(str) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }
    return str.toLowerCase();
}



module.exports = {
    toUpperCase,
    toLowerCase
};
