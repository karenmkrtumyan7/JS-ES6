//Given an array of integers. All numbers are unique. Find the count of missing numbers
//between minimum and maximum elements to make integers sequence.

function getMissedNumsLength(arr) {
    arr.sort((a,b) => a - b);
    return arr[arr.length - 1] - arr[0] + 1 - arr.length;    
}
console.log(getMissedNumsLength([1,2,9]);

