// Returns the sum of all elements in the array
function sumArray(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array");
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

module.exports = { sumArray };
