// 14. Write a JavaScript function to get all possible subsets of length 3 of the given array. 
// Assume that all elements in the array are unique.

function isElementsInArrAreUnique(arr) {
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        for (let j = 0; j < arrLength; j++) {
            if (i === j)
                continue;
            else if (arr[i] === arr[j])
                return false;
        }
    }
    return true;
}

function isArrLengthLargeThree(arr) {
    if (arrLength >= 3) {
        return true;
    }
    return false;
}

function checkingNotUndefined(arr, i) {
    if (arr[i] === undefined) {
        return false;
    }
    return true;
}
function getAllPossibleSubsetsOfLengthThree(arr) {
    arrLength = arr.length;
    let res = [];
    let mainArr = [];

    if (isElementsInArrAreUnique(arr)) {
        if (isArrLengthLargeThree(arr)) {
            for (let i = 0; i <= 3; i++) {
                for (let j = i + 1; j <= i + 4; j++) {
                    if (checkingNotUndefined(arr, j)) {
                        for (let z = j + 1; z <= j + 4; z++) {
                            if (checkingNotUndefined(arr, z)) {
                                res.push(arr[i]);
                                res.push(arr[j]);
                                res.push(arr[z]);
                                mainArr.push(res);
                                res = [];
                            }
                        }
                    }
                }
            }
        } else {
            return arr;
        }
        return mainArr;
    } else {
        return ' elements are not unique'
    }
}
console.log(getAllPossibleSubsetsOfLengthThree([5, 9, 23, 0, -2, -1]));

