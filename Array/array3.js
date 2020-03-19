// Given an array consisting from the arrays of numbers (like a two-dimensional array).
// Find sum of each row and print them as an array.

function arrSum(arr) {
    return arr.map(function(currentValue) {
        return currentValue.reduce(function(calc, current) {
            return calc + current;
        });

    });
}

console.log(arrSum([[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]]))
