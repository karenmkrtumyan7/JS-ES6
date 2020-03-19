// Given an array. Create the array which elements are products between two
// neighbours.

function multiplicateNearArrElem(arr) {
    var result = [];
    arr.reduce((calc,currentValue) => { 
    result.push(calc * currentValue);
    return currentValue;
    })
    return result;
}
console.log(multiplicateNearArrElem([3, 7, 12, 5, 20, 0]));
