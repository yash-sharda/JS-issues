// Returns the product of two numbers
function multiply(a, b) {
    return a * b;
}

module.exports = { multiply };

// NEW FEATURE 1: Returns the factorial of a number
function factorial(n) {
    if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {   
        throw new TypeError("Input must be a non-negative integer");
    }
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }


    return result;
}
module.exports.factorial = factorial;