function binarySearch(arr, searched) {
    const half = Math.ceil(arr.length / 2);

    if(arr[half - 1]  === searched) {
        return half - 1;
    } else if(arr[half - 1] < searched) {
        return half + binarySearch(arr.slice(half), searched);   
    } else if(arr[half - 1] > searched) {
        return binarySearch(arr.slice(0, half), searched);   
    } 
}

console.log(binarySearch([1, 2, 3, 24, 65], 24))
