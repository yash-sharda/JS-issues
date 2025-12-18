// ISSUE: Convert string to uppercase
function toUpperCase(str) {
     if (typeof str !== "string") {
        return str;
    }
    return str.toUpperCase();
}

module.exports = { toUpperCase };
