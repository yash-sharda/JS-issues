// ISSUE: Convert string to uppercase
function toUpperCase(str) {
    if (typeof str !== 'string') return ''; // handle non-string input
    return str.toUpperCase();
}

module.exports = { toUpperCase };

