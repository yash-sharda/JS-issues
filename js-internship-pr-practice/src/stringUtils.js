// ISSUE: Convert string to uppercase
function toUpperCase(str) {
    if (typeof str !== "string") return "";

    return str.toUpperCase();
}

module.exports = { toUpperCase };