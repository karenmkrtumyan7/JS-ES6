function getArraySubsets(arr, n, resArr = [], k = 0, subArr = [], lengthCheking = 0) {
    for (let i = k; i < arr.length - n + lengthCheking + 1; i++) {
        subArr.push(arr[i]);

        if (lengthCheking < n - 1) {
            getArraySubsets(arr, n, resArr, i + 1, subArr,lengthCheking + 1);
        }

        if (subArr.length === n) {
            resArr.push([...subArr]); //if not use ... referance problems will be
        }

        subArr.pop();

        if (i === arr.length - n + k) {
            return resArr;
        }

    }
}
console.log(getArraySubsets([5, 9, 23, 0, -2, -1], 4))
