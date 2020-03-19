//Given an array of numbers. Write a recursive function to find its minimal positive element. (if such
//element does not exist, return -1)․

function getMin(arr, i = 0, res = +Infinity) {
    if (arr[i] < res && arr[i] >= 0) {
        res = arr[i];
    }
    
    if (arr[i] !== undefined) {
       return getMin(arr, i + 1, res);
    }
    return res >= 0 && res !== Infinity ? res : -1;
}
console.log(getMin([-5, -9, -111, -1000, -7]))
