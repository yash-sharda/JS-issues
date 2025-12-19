// ISSUE: Convert string to uppercase
function toUpperCase(str) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string");
    }

    return str.toUpperCase();
}

module.exports = { toUpperCase };
