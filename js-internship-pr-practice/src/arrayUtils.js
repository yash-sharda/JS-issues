// ISSUE: Return sum of array elements
function sumArray(arr) {
    if (!Array.isArray(arr)) return 0; 
    return arr.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { sumArray };

