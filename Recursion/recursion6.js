//Given an array. Write a recursive function that removes the
//first element and returns the given array. (without using
//arr.unshift(),assign second element to first, third element to
//second...)

function removeFirstElem(arr, i = arr.length - 2, result) {
    if (!Array.isArray(arr)) {
       return 'write array';
    }

    if (arr.length === 1 || arr.length === 0){
        return [];
    }
    if(i > 0) {
        removeFirstElem(arr, i - 1);
    }
    arr[i] = arr[i + 1];
    if (i === arr. length - 2) {
        arr.length = arr.length - 1;
    }
    return arr;


}
console.log(removeFirstElem([6, 78, 'n', 0, 1]))
