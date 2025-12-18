// ISSUE: Return sum of array elements
//code fixed
function sumArray(arr) {
   if (!Array.isArray(arr)) return 0;

    return arr.reduce((sum, val) => sum + val, 0);
}

module.exports = { sumArray };
