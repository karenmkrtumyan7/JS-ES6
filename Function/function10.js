// 10. Write a function which receives an array and a
// number as arguments and returns a new array from the elements of the given array which are larger than the given number.

function compareNum(arr, num) {
    arrLength = arr.length;
    let res = [];
  
    for (let i = 0; i < arrLength; i++) {
      if (num < arr[i]) {
        res.push(arr[i]);
      }
    } if (res.length === 0) {
      return 'Such values do not exist';
    }
    return res;
}
  
console.log(compareNum([10, 25, 16, -5, 30, 15, 24] , 16));