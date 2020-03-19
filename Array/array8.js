//Write a JavaScript function to get all possible subsets of length 3 of the given
//array. Assume that all elements in the array are unique.

function getAllPossibleSubsets(arr) {    
    if(arr.length <= 3) return arr;

    const res = [];

    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let a = j + 1; a < arr.length; a++) {
                res.push([arr[i], arr[j], arr[a]]);
            }
        }
    }
    return res;
}

console.log(getAllPossibleSubsets([5, 9, 23, 0, -2, -1,]));
