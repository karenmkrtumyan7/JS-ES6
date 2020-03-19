// Given an array of numbers. Create an array containing only elements once.

function contactElementsOnce(arr) {
    return arr.reduce(function(initialValue, currentValue) {
        if (!initialValue.includes(currentValue)) {
            return [...initialValue, currentValue];
        } else {
            return initialValue;
        }
    }, [])
}

console.log(contactElementsOnce([1, 2, 3, 3, 2, 5]));
