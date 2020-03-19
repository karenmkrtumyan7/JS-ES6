// Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting
// order is violated.
function findSortingViolatedIndex(arr, i = 0) {
   
    if (arr[i] <= arr[i+1] && i < arr.length) {
        
        return findSortingViolatedIndex(arr,i+1); 

        } 
    var res;
    return res = (arr[i] >= arr[i+1] && i < arr.length) ? i + 1 : -1;
    }

console.log( findSortingViolatedIndex([2, 12, 15, 48, 64]));

